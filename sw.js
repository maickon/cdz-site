/* ══════════════════════════════════════════════════════════════════
   GRECO ROMANO RPG — sw.js (Service Worker)
   Cache robusto: falha em um arquivo não derruba o resto.
   Estratégia: Cache First para assets, Network First para HTML.
══════════════════════════════════════════════════════════════════ */

const CACHE_VERSION  = 'greco-romano-v8';
const CACHE_ASSETS   = CACHE_VERSION + '-assets';  // arquivos estáticos (long-lived)
const CACHE_PAGES    = CACHE_VERSION + '-pages';   // HTML/navegação

/* Arquivos essenciais — falha aqui aborta o install */
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/submenu-search.css',
  '/css/pwa.css',
  '/js/script.js',
  '/js/pwa.js',
  '/database.js',
  '/manifest.json',
  '/img/icon-192.png',
  '/img/icon-512.png'
];

/* Arquivos de páginas JS — cacheados individualmente, falha tolerada */
const PAGE_SCRIPTS = [
  '/pages/HOME.js',
  '/pages/ARMORS.js',
  '/pages/CHARACTER_CREATE.js',
  '/pages/COMBAT.js',
  '/pages/COSMO.js',
  '/pages/COSMO_D20.js',
  '/pages/MARKET.js',
  '/pages/ARTIFACTS.js',
  '/pages/RESUME.js',
  '/pages/SKILLS.js',
  '/pages/TALENTS.js',
  '/pages/TECHNIQUES.js',
  '/pages/BASE.js',
  '/pages/MECANIC.js',
  '/pages/ATTRIBUTES.js',
  '/pages/LIFE.js',
  '/pages/DEFENSE.js',
  '/pages/ATTACK.js',
  '/pages/TESTS.js',
  '/pages/EXPERTISE.js',
  '/pages/TURNS.js',
  '/pages/BATTLE.js',
  '/pages/CONDITIONS.js',
  '/pages/EXAMPLE.js',
  '/pages/SUMMON_GENERATOR.js',
  '/pages/REFUGIO_DO_MAL.js',
  '/pages/ZONA_OCULTA.js',
  '/pages/TARTARUGA_INVERTIDA.js',
  '/pages/FENDA_BIQUINI.js',
  '/pages/CONTINENTE_GRECO.js',
  '/pages/CONTINENTE_ROMANO.js',
  '/pages/ILHA_DO_SOL_VERMELHO.js',
  '/pages/VELHO_OESTE.js',
  '/pages/BOCA_DO_PAPACRU.js',
  '/pages/KU.js'
];

/* Arquivos opcionais — falha tolerada */
const OPTIONAL_ASSETS = [
  '/css/SUMMON_GENERATOR.css',
  '/img/icon.jpg',
  '/img/athenas.jpg',
  '/img/esparta.jpg',
  '/img/bg.jpeg',
  '/img/m1.jpg',
  '/img/m2.jpg',
  '/img/refugiodomal.jpg',
  '/img/zona-oculta.jpg',
  '/img/tartaruga-invertida.jpg',
  '/img/fenda-do-biquini.jpg',
  '/img/ilha-do-sol-vermelho.jpg',
  '/img/continente-romano.jpg',
  '/img/continente-greco.jpg'
];

/* ══════════════════════════════════════
   INSTALL — pré-cacheia tudo
══════════════════════════════════════ */
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_ASSETS);

      // Core: qualquer falha aborta o install
      await cache.addAll(CORE_ASSETS);

      // Páginas JS: cada uma individualmente, tolera falha
      await Promise.allSettled(
        PAGE_SCRIPTS.map(url =>
          cache.add(url).catch(err => console.warn('[SW] Falhou ao cachear:', url, err))
        )
      );

      // Opcionais: melhor esforço
      await Promise.allSettled(
        OPTIONAL_ASSETS.map(url =>
          cache.add(url).catch(() => {}) // silencioso
        )
      );

      // Força ativação imediata sem esperar tabs fecharem
      self.skipWaiting();
    })()
  );
});

/* ══════════════════════════════════════
   ACTIVATE — limpa caches antigos
══════════════════════════════════════ */
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(key => key !== CACHE_ASSETS && key !== CACHE_PAGES)
          .map(key => {
            console.log('[SW] Removendo cache antigo:', key);
            return caches.delete(key);
          })
      );
      // Assume controle de todas as tabs abertas imediatamente
      await self.clients.claim();
    })()
  );
});

/* ══════════════════════════════════════
   FETCH — estratégia por tipo de recurso
══════════════════════════════════════ */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora requisições que não são do próprio domínio
  if (url.origin !== location.origin) return;

  // Ignora requisições não-GET
  if (request.method !== 'GET') return;

  // Navagação (HTML): Network First → fallback para cache → fallback offline
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstHTML(request));
    return;
  }

  // Assets (JS, CSS, imagens, fontes): Cache First → fallback para rede
  event.respondWith(cacheFirstAsset(request));
});

/* ── Network First (para HTML/navegação) ── */
async function networkFirstHTML(request) {
  const cache = await caches.open(CACHE_PAGES);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone()); // atualiza cache
    }
    return networkResponse;
  } catch {
    // Offline: tenta cache
    const cached = await cache.match(request)
      || await caches.match('/index.html'); // SPA fallback
    return cached || offlineFallback();
  }
}

/* ── Cache First (para assets estáticos) ── */
async function cacheFirstAsset(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_ASSETS);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return offlineFallback(request);
  }
}

/* ── Resposta de fallback quando offline e sem cache ── */
function offlineFallback(request) {
  // Para imagens: retorna SVG placeholder
  if (request && request.destination === 'image') {
    return new Response(
      `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#0b1230"/>
        <text x="50" y="55" text-anchor="middle" fill="#a3873a" font-size="12" font-family="serif">⊕</text>
      </svg>`,
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
  // Para o resto: sem resposta (o browser trata)
  return new Response('', { status: 408, statusText: 'Offline' });
}