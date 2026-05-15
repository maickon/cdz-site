/* ══════════════════════════════════════════════════════════════════
   GRECO ROMANO RPG — pwa.js
   Gerencia instalação do PWA com suporte a Android, iOS e desktop.
   
   Inclua este script no index.html ANTES do fechamento do </body>.
══════════════════════════════════════════════════════════════════ */

const PWA = (() => {

  /* ── Detecção de plataforma ── */
  const ua        = navigator.userAgent;
  const isIOS     = /iphone|ipad|ipod/i.test(ua);
  const isMac     = /macintosh/i.test(ua) && navigator.maxTouchPoints > 0; // iPad com desktop mode
  const isAndroid = /android/i.test(ua);
  const isSafari  = /safari/i.test(ua) && !/chrome/i.test(ua) && !/chromium/i.test(ua);
  const isInStandaloneMode =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true; // iOS standalone

  /* ── Estado ── */
  let deferredPrompt = null; // evento beforeinstallprompt (Android/Desktop)
  let btnInstall     = null;

  /* ══════════════════════════════════════
     SERVICE WORKER
  ══════════════════════════════════════ */
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('[PWA] Service Worker registrado:', reg.scope);

        // Verifica se há update disponível
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateBanner();
            }
          });
        });
      })
      .catch(err => console.warn('[PWA] SW falhou:', err));
  }

  /* ══════════════════════════════════════
     BOTÃO DE INSTALAÇÃO
  ══════════════════════════════════════ */
  function injectUI() {
    // Injeta botão flutuante e modal iOS no DOM
    const html = `
      <!-- Botão flutuante de instalação -->
      <button id="pwa-install-btn" class="pwa-install-btn" aria-label="Instalar aplicativo" style="display:none;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <span>Instalar App</span>
      </button>

      <!-- Modal com instruções iOS -->
      <div id="pwa-ios-modal" class="pwa-modal-overlay" style="display:none;" role="dialog" aria-modal="true" aria-label="Instruções de instalação">
        <div class="pwa-modal">
          <button class="pwa-modal-close" id="pwa-modal-close" aria-label="Fechar">✕</button>
          <div class="pwa-modal-icon">⊕</div>
          <h2 class="pwa-modal-title">Instalar Greco Romano RPG</h2>
          <p class="pwa-modal-subtitle">Adicione à sua tela de início para acesso rápido e uso offline</p>
          <div class="pwa-modal-steps">
            <div class="pwa-step">
              <span class="pwa-step-num">1</span>
              <span class="pwa-step-text">
                Toque no botão de compartilhar
                <svg class="pwa-step-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
                na barra do Safari
              </span>
            </div>
            <div class="pwa-step">
              <span class="pwa-step-num">2</span>
              <span class="pwa-step-text">Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong></span>
            </div>
            <div class="pwa-step">
              <span class="pwa-step-num">3</span>
              <span class="pwa-step-text">Toque em <strong>"Adicionar"</strong> no canto superior direito</span>
            </div>
          </div>
          <p class="pwa-modal-note">
            O app será salvo no seu dispositivo e funcionará <strong>offline</strong>.
          </p>
          <button class="pwa-modal-dismiss" id="pwa-modal-dismiss">Entendi</button>
        </div>
      </div>

      <!-- Banner de atualização disponível -->
      <div id="pwa-update-banner" class="pwa-update-banner" style="display:none;">
        <span>Nova versão disponível</span>
        <button id="pwa-update-btn">Atualizar</button>
        <button id="pwa-update-dismiss">✕</button>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    btnInstall = document.getElementById('pwa-install-btn');

    // Eventos do modal iOS
    document.getElementById('pwa-modal-close').addEventListener('click', closeIOSModal);
    document.getElementById('pwa-modal-dismiss').addEventListener('click', closeIOSModal);
    document.getElementById('pwa-ios-modal').addEventListener('click', function(e) {
      if (e.target === this) closeIOSModal();
    });

    // Evento do botão de instalação
    btnInstall.addEventListener('click', handleInstallClick);
  }

  /* ── Lógica de exibição do botão ── */
  function checkAndShowInstallButton() {
    // Já instalado como PWA — não mostra nada
    if (isInStandaloneMode) return;

    // iOS/Safari: mostra botão que abre modal com instruções
    if ((isIOS || isMac) && isSafari) {
      // Só mostra se nunca dispensou
      if (!localStorage.getItem('pwa-ios-dismissed')) {
        showInstallButton('ios');
      }
      return;
    }

    // Android/Desktop: aguarda evento beforeinstallprompt
    // (o evento é capturado no listener abaixo)
  }

  function showInstallButton(mode) {
    if (!btnInstall) return;
    btnInstall.dataset.mode = mode;
    btnInstall.style.display = 'flex';
    // Animação de entrada com pequeno delay
    setTimeout(() => btnInstall.classList.add('pwa-install-btn--visible'), 100);
  }

  function hideInstallButton() {
    if (!btnInstall) return;
    btnInstall.classList.remove('pwa-install-btn--visible');
    setTimeout(() => { btnInstall.style.display = 'none'; }, 300);
  }

  /* ── Clique no botão ── */
  async function handleInstallClick() {
    const mode = btnInstall.dataset.mode;

    if (mode === 'ios') {
      openIOSModal();
      return;
    }

    // Android/Desktop: usa prompt nativo
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;

    if (outcome === 'accepted') {
      hideInstallButton();
    }
  }

  /* ── Modal iOS ── */
  function openIOSModal() {
    const modal = document.getElementById('pwa-ios-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('pwa-modal-overlay--visible'), 10);
  }

  function closeIOSModal() {
    const modal = document.getElementById('pwa-ios-modal');
    modal.classList.remove('pwa-modal-overlay--visible');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
    // Guarda que o usuário já viu/dispensou
    localStorage.setItem('pwa-ios-dismissed', '1');
    hideInstallButton();
  }

  /* ── Banner de update ── */
  function showUpdateBanner() {
    const banner = document.getElementById('pwa-update-banner');
    if (!banner) return;
    banner.style.display = 'flex';
    setTimeout(() => banner.classList.add('pwa-update-banner--visible'), 10);

    document.getElementById('pwa-update-btn').addEventListener('click', () => {
      window.location.reload();
    });
    document.getElementById('pwa-update-dismiss').addEventListener('click', () => {
      banner.classList.remove('pwa-update-banner--visible');
      setTimeout(() => { banner.style.display = 'none'; }, 300);
    });
  }

  /* ══════════════════════════════════════
     LISTENERS GLOBAIS
  ══════════════════════════════════════ */

  // Android/Desktop: captura o prompt antes que o browser mostre o próprio
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton('native');
  });

  // Quando o app é instalado via prompt nativo
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    hideInstallButton();
    console.log('[PWA] App instalado com sucesso');
  });

  /* ══════════════════════════════════════
     INIT
  ══════════════════════════════════════ */
  function init() {
    registerSW();
    injectUI();
    checkAndShowInstallButton();
  }

  // Aguarda DOM pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { showInstallButton, hideInstallButton };

})();