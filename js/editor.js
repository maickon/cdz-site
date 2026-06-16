/* ══════════════════════════════════════════════════════════════════
   GRECO ROMANO RPG — editor.js
   Modo de edição WYSIWYG para páginas HTML (apenas localhost).
   Ativado por: EDITOR_MODE = true em js/script.js
══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';
  if (typeof EDITOR_MODE === 'undefined' || !EDITOR_MODE) return;

  /* Páginas não editáveis: interativas ou geradas por JS */
  const NO_EDIT = new Set(['criaturas', 'tabelas']);

  let currentPage = null;
  let isEditing   = false;

  /* ══════════════════════════════════
     HOOK — chamado por script.js após cada navegação
  ══════════════════════════════════ */
  window.editorOnPageRender = function (page) {
    cleanup();
    currentPage = page;
    if (page.type === 'database' || NO_EDIT.has(page.id)) return;
    injectToggleBtn();
  };

  /* ══════════════════════════════════
     BOTÃO FLUTUANTE
  ══════════════════════════════════ */
  function injectToggleBtn() {
    const btn = document.createElement('button');
    btn.id        = 'ed-toggle';
    btn.className = 'ed-toggle';
    btn.title     = 'Editar página';
    btn.textContent = '✎';
    btn.addEventListener('click', toggle);
    document.body.appendChild(btn);
  }

  function toggle() { isEditing ? exitEdit() : enterEdit(); }

  /* ══════════════════════════════════
     ENTRAR NO MODO EDIÇÃO
  ══════════════════════════════════ */
  function enterEdit() {
    isEditing = true;

    /* Renderiza o HTML limpo da página (sem widgets de busca injetados) */
    const main = document.getElementById('main-content');
    main.innerHTML = `<div id="ed-content" class="page-view active" contenteditable="true">${currentPage.content}</div>`;

    document.body.classList.add('ed-toolbar-open');
    showToolbar();

    const btn = document.getElementById('ed-toggle');
    if (btn) { btn.textContent = '✕'; btn.classList.add('ed-toggle--on'); btn.title = 'Sair do editor'; }
  }

  /* ══════════════════════════════════
     SAIR DO MODO EDIÇÃO
  ══════════════════════════════════ */
  function exitEdit() {
    isEditing = false;
    document.body.classList.remove('ed-toolbar-open');
    document.getElementById('ed-toolbar')?.remove();
    document.getElementById('ed-modal')?.remove();

    /* Re-renderiza a página normalmente (com busca, etc.) */
    if (currentPage) navigateTo(currentPage.id, true);

    const btn = document.getElementById('ed-toggle');
    if (btn) { btn.textContent = '✎'; btn.classList.remove('ed-toggle--on'); btn.title = 'Editar página'; }
  }

  function cleanup() {
    isEditing = false;
    document.body.classList.remove('ed-toolbar-open');
    document.getElementById('ed-toggle')?.remove();
    document.getElementById('ed-toolbar')?.remove();
    document.getElementById('ed-modal')?.remove();
  }

  /* ══════════════════════════════════
     TOOLBAR
  ══════════════════════════════════ */
  function showToolbar() {
    const name    = getConstName(currentPage);
    const toolbar = document.createElement('div');
    toolbar.id    = 'ed-toolbar';
    toolbar.className = 'ed-toolbar';
    toolbar.innerHTML = `
      <div class="ed-toolbar-inner">
        <span class="ed-label">✎ <strong>${name}</strong></span>
        <span class="ed-sep"></span>
        <button class="ed-btn ed-hist" data-cmd="undo"   title="Desfazer (Ctrl+Z)">↩</button>
        <button class="ed-btn ed-hist" data-cmd="redo"   title="Refazer (Ctrl+Y)">↪</button>
        <span class="ed-sep"></span>
        <button class="ed-btn"         data-cmd="bold"   title="Negrito (Ctrl+B)"><b>B</b></button>
        <button class="ed-btn"         data-cmd="italic" title="Itálico (Ctrl+I)"><i>I</i></button>
        <span class="ed-sep"></span>
        <button class="ed-btn ed-ins"  data-ins="h2"     title="Inserir título H2">H2</button>
        <button class="ed-btn ed-ins"  data-ins="h3"     title="Inserir subtítulo H3">H3</button>
        <button class="ed-btn ed-ins"  data-ins="p"      title="Inserir parágrafo">P</button>
        <button class="ed-btn ed-ins"  data-ins="ul"     title="Inserir lista">≡ Lista</button>
        <button class="ed-btn ed-ins"  data-ins="card"   title="Inserir card cosmos">⬚ Card</button>
        <button class="ed-btn ed-ins"  data-ins="rule"   title="Inserir divisor dourado">── Divisor</button>
        <button class="ed-btn ed-ins"  data-ins="img"    title="Inserir imagem">⊡ Imagem</button>
        <span class="ed-sep"></span>
        <button class="ed-btn ed-export" id="ed-export-btn">⬇ Exportar HTML</button>
      </div>`;
    document.body.appendChild(toolbar);

    toolbar.querySelectorAll('[data-cmd]').forEach(btn =>
      btn.addEventListener('mousedown', e => {
        e.preventDefault();
        document.execCommand(btn.dataset.cmd, false, null);
      })
    );

    toolbar.querySelectorAll('[data-ins]').forEach(btn =>
      btn.addEventListener('mousedown', e => {
        e.preventDefault();
        insertBlock(btn.dataset.ins);
      })
    );

    document.getElementById('ed-export-btn').addEventListener('click', exportHTML);
  }

  /* ══════════════════════════════════
     BLOCOS PRÉ-ESTILIZADOS
  ══════════════════════════════════ */
  const BLOCKS = {
    h2:   () => `<h2 style="font-family:'Cinzel',serif;color:var(--gold-light);font-size:1.2rem;margin:1.5rem 0 0.75rem;padding-bottom:0.4rem;border-bottom:1px solid rgba(214,182,90,0.3);">Novo Título</h2>`,
    h3:   () => `<h3 style="font-family:'Cinzel',serif;color:var(--gold);font-size:1rem;margin:1.25rem 0 0.5rem;">Subtítulo</h3>`,
    p:    () => `<p style="color:var(--silver);line-height:1.7;margin-bottom:0.75rem;">Novo parágrafo. Clique para editar.</p>`,
    ul:   () => `<ul style="color:var(--silver);padding-left:1.5rem;margin-bottom:0.75rem;"><li>Item 1</li><li>Item 2</li></ul>`,
    card: () => `<div class="cosmos-card p-6 mb-6"><p style="color:var(--silver);line-height:1.7;">Conteúdo do card.</p></div>`,
    rule: () => `<div class="gold-rule my-6"></div>`,
    img:  () => {
      const src = prompt('Caminho da imagem (relativo à raiz, ex: img/athenas.jpg):');
      if (!src) return null;
      const alt = prompt('Texto alternativo:') || '';
      return `<img src="${src}" alt="${alt}" style="max-width:100%;border-radius:6px;margin:1rem 0;display:block;">`;
    }
  };

  function insertBlock(type) {
    const html = BLOCKS[type]?.();
    if (!html) return;
    document.getElementById('ed-content')?.focus();
    /* insertHTML registra a operação no histórico nativo do browser (Ctrl+Z/Ctrl+Y) */
    document.execCommand('insertHTML', false, html);
  }

  /* ══════════════════════════════════
     EXPORTAÇÃO
  ══════════════════════════════════ */
  function exportHTML() {
    const content = document.getElementById('ed-content');
    if (!content) return;
    const name  = getConstName(currentPage);
    const inner = content.innerHTML.trim();
    const code  = 'const ' + name + ' = `\n' + inner + '\n`;';
    showModal(name, code);
  }

  function showModal(name, code) {
    document.getElementById('ed-modal')?.remove();
    const modal = document.createElement('div');
    modal.id        = 'ed-modal';
    modal.className = 'ed-modal';
    modal.innerHTML = `
      <div class="ed-dialog">
        <div class="ed-dialog-head">
          <span>Exportar → <code>pages/${name}.js</code></span>
          <button class="ed-dialog-close" id="ed-close">✕</button>
        </div>
        <p class="ed-dialog-hint">Copie e cole substituindo todo o conteúdo de <code>pages/${name}.js</code></p>
        <div class="ed-dialog-bar">
          <button class="ed-copy-btn" id="ed-copy">⎘ Copiar tudo</button>
        </div>
        <textarea class="ed-code" id="ed-code" readonly spellcheck="false">${escHtml(code)}</textarea>
      </div>`;
    document.body.appendChild(modal);

    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.getElementById('ed-close').addEventListener('click', () => modal.remove());
    document.getElementById('ed-copy').addEventListener('click', () => {
      const ta  = document.getElementById('ed-code');
      const btn = document.getElementById('ed-copy');
      navigator.clipboard?.writeText(ta.value).then(() => {
        btn.textContent = '✓ Copiado!';
        setTimeout(() => { if (btn) btn.textContent = '⎘ Copiar tudo'; }, 2000);
      }).catch(() => { ta.select(); document.execCommand('copy'); });
    });

    setTimeout(() => document.getElementById('ed-code')?.select(), 80);
  }

  /* ══════════════════════════════════
     UTILITÁRIOS
  ══════════════════════════════════ */

  /* Lê o nome da constante diretamente do getter source — ex: "MECANIC", "HOME" */
  function getConstName(page) {
    try {
      const desc = Object.getOwnPropertyDescriptor(page, 'content');
      if (desc?.get) {
        const m = desc.get.toString().match(/return\s+([A-Z_][A-Z0-9_]*)/);
        if (m) return m[1];
      }
    } catch (_) {}
    return page.id.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

})();
