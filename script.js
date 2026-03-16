/* ══════════════════════════════════════════════════════════════════
   GRECO ROMANO RPG — script.js
   
   MODELO DE NAVEGAÇÃO:
   Toda a estrutura de menus vive em PAGE_GROUPS abaixo.
   Cada entrada tem: group (null = item solto), id, label, icon, type, content.
   
   Páginas com group: null aparecem soltas no topo do menu (sem submenu).
   Páginas com group: 'Nome' aparecem dentro do dropdown/acordeão daquele grupo.
   
   BUSCA INTELIGENTE:
   Insira <div class="page-search"></div> em qualquer página para ativar
   um campo de busca com índice automático e navegação por títulos.
   Pode haver múltiplos em uma mesma página — cada um é independente.
══════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════
   FONTE DA VERDADE — páginas e grupos
   
   group: null      → item solto no topo (sem submenu)
   group: 'Nome'    → aparece dentro do dropdown/acordeão
   groupIcon: '⚙'  → ícone do botão do grupo no menu
══════════════════════════════════════ */
const PAGE_GROUPS = [
  /* ── Itens soltos ── */
  {
    group: null,
    id: 'home',
    label: 'Home',
    icon: '⊞',
    type: 'html',
    get content() { return HOME; }
  },

  /* ── Grupo: Personagem ── */
  {
    group: 'Personagem', groupIcon: '♟',
    id: 'personagem', label: 'Criação', icon: '♟',
    type: 'html',
    get content() { return CHARACTER_CREATE; }
  },
  {
    group: 'Personagem', groupIcon: '♟',
    id: 'armaduras', label: 'Armaduras', icon: '✦',
    type: 'html',
    get content() { return ARMORS; }
  },
  {
    group: 'Personagem', groupIcon: '♟',
    id: 'talentos', label: 'Talentos', icon: '✩',
    type: 'html',
    get content() { return TALENTS; }
  },
  {
    group: 'Personagem', groupIcon: '♟',
    id: 'pericias', label: 'Perícias', icon: '✩',
    type: 'html',
    get content() { return SKILLS; }
  },

  /* ── Grupo: Sistema ── */
  {
    group: 'Sistema', groupIcon: '⚙',
    id: 'combate', label: 'Combate', icon: '⚔',
    type: 'html',
    get content() { return COMBAT; }
  },
  {
    group: 'Sistema', groupIcon: '⚙',
    id: 'cosmo', label: 'Cosmo', icon: '✺',
    type: 'html',
    get content() { return COSMO; }
  },
  {
    group: 'Sistema', groupIcon: '⚙',
    id: 'tecnicas', label: 'Técnicas', icon: '✵',
    type: 'html',
    get content() { return TECHNIQUES; }
  },

  /* ── Grupo: Mundo ── */
  {
    group: 'Mundo', groupIcon: '⊕',
    id: 'mercado', label: 'Mercado', icon: '⚒',
    type: 'html',
    get content() { return MARKET; }
  },
  {
    group: 'Mundo', groupIcon: '⊕',
    id: 'artifacts', label: 'Artefatos', icon: '⚒',
    type: 'html',
    get content() { return ARTIFACTS; }
  },
  {
    group: 'Mundo', groupIcon: '⊕',
    id: 'tabelas', label: 'Tabelas', icon: '⊞',
    type: 'database'
  },

  /* ── Grupo: Guias ── */
  {
    group: 'Guias', groupIcon: '⚜',
    id: 'resumo', label: 'Resumo', icon: '⚜',
    type: 'html',
    get content() { return RESUME; }
  }
];

/* ── Helpers de lookup sobre PAGE_GROUPS ── */
function getPage(id) {
  return PAGE_GROUPS.find(p => p.id === id) || null;
}

function getGroups() {
  // Lista de grupos únicos, em ordem de aparição
  const seen = new Set();
  const groups = [];
  PAGE_GROUPS.forEach(p => {
    if (p.group && !seen.has(p.group)) {
      seen.add(p.group);
      groups.push({ label: p.group, icon: p.groupIcon });
    }
  });
  return groups;
}

function getPagesInGroup(groupLabel) {
  return PAGE_GROUPS.filter(p => p.group === groupLabel);
}

function getUngroupedPages() {
  return PAGE_GROUPS.filter(p => p.group === null);
}

/* ══════════════════════════════════════
   HELPERS DE RENDERIZAÇÃO
══════════════════════════════════════ */
function formatKey(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function formatValue(val) {
  if (val === null || val === undefined)
    return '<span style="color:var(--silver-dim);font-style:italic;">—</span>';
  if (typeof val === 'object' && !Array.isArray(val)) return JSON.stringify(val);
  return String(val);
}

function renderFormulaBlock(entry) {
  if (!entry.formula) return '';
  let formulaStr = '';
  if (Array.isArray(entry.formula)) {
    formulaStr = entry.formula
      .map(f => `Ranks ${f.range}: <code style="font-family:monospace;color:var(--gold-light);background:rgba(200,168,75,0.1);padding:1px 5px;border-radius:2px;">${f.expression}</code>`)
      .join('<br/>');
  } else {
    formulaStr = `<code style="font-family:monospace;color:var(--gold-light);background:rgba(200,168,75,0.1);padding:2px 8px;border-radius:2px;">${entry.formula}</code>`;
  }
  return `<div style="margin-top:0.75rem;padding:0.6rem 0.9rem;border:1px solid rgba(200,168,75,0.2);border-radius:3px;background:rgba(200,168,75,0.04);font-size:0.88rem;line-height:1.8;color:var(--silver-dim);">
    <span style="font-family:'Cinzel',serif;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gold-dim);display:block;margin-bottom:0.25rem;">Fórmula</span>
    ${formulaStr}
  </div>`;
}

function renderTable(entry) {
  if (!entry.data || !Array.isArray(entry.data) || entry.data.length === 0)
    return '<p style="color:var(--silver-dim);font-style:italic;">Sem dados disponíveis.</p>';

  const allKeys = [];
  entry.data.forEach(row => {
    Object.keys(row).forEach(k => { if (!allKeys.includes(k)) allKeys.push(k); });
  });

  const headers = allKeys.map(k => `<th>${formatKey(k)}</th>`).join('');
  const rows = entry.data.map(row => {
    const cells = allKeys.map(k => `<td>${formatValue(row[k])}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  return `
    <div class="rpg-table-wrapper">
      <table class="rpg-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderDatabaseEntry(entry, index) {
  return `
    <div class="db-entry cosmos-card mb-6 overflow-hidden" id="db-entry-${index}"
         data-search="${(entry.table + ' ' + (entry.description || '') + ' ' + (entry.full_description || '')).toLowerCase()}">
      <div style="padding:1.25rem 1.25rem 0.75rem;">
        <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
        <h2 style="font-family:'Cinzel Decorative',serif;color:var(--gold);font-size:1rem;letter-spacing:0.04em;line-height:1.3;margin-bottom:0.6rem;padding-right:1rem;">
          ${entry.table}
        </h2>
        <div class="gold-rule mb-3"></div>
        ${entry.description ? `<p style="font-style:italic;color:var(--silver-dim);font-size:0.95rem;line-height:1.6;margin-bottom:0.5rem;">${entry.description}</p>` : ''}
        ${entry.full_description ? `<p style="color:var(--silver);font-size:0.95rem;line-height:1.7;margin-bottom:0.5rem;">${entry.full_description}</p>` : ''}
        ${renderFormulaBlock(entry)}
      </div>
      <div style="padding:0 0 0.5rem;">
        <div style="padding:0.5rem 1.25rem;margin-bottom:0.5rem;background:rgba(200,168,75,0.04);border-top:1px solid rgba(200,168,75,0.1);">
          <span style="font-family:'Cinzel',serif;font-size:0.6rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold-dim);">Dados da Tabela</span>
        </div>
        ${renderTable(entry)}
      </div>
    </div>`;
}

/* ══════════════════════════════════════
   PAGE RENDERERS
══════════════════════════════════════ */
function renderDatabasePage() {
  const selectOptions = `<option value="">— Todas as Tabelas —</option>` +
    database.map((e, i) => `<option value="${i}">${e.table}</option>`).join('');

  const allEntries = database.map((e, i) => renderDatabaseEntry(e, i)).join('');

  return `
    <div class="px-3 py-6 max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <div class="section-subtitle text-xs mb-3">Base de Dados</div>
        <h1 class="section-title text-2xl md:text-3xl mb-4">Tabelas de Referência</h1>
        <div class="gold-rule mb-2"></div>
        <p style="font-family:'Crimson Pro',serif;font-size:0.9rem;color:var(--silver-dim);">
          ${database.length} tabelas disponíveis para consulta
        </p>
      </div>

      <div class="page-search"></div>

      <div class="cosmos-card p-4 mb-6 sticky top-16 z-30">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div class="flex-1">
            <div style="font-family:'Cinzel',serif;font-size:0.6rem;letter-spacing:0.15em;color:var(--gold-dim);margin-bottom:0.3rem;text-transform:uppercase;">Buscar</div>
            <input type="text" id="db-search" class="rpg-input" placeholder="Pesquisar em todas as tabelas..." />
          </div>
          <div class="sm:w-64">
            <div style="font-family:'Cinzel',serif;font-size:0.6rem;letter-spacing:0.15em;color:var(--gold-dim);margin-bottom:0.3rem;text-transform:uppercase;">Tabela</div>
            <select id="db-select" class="rpg-input rpg-select">${selectOptions}</select>
          </div>
        </div>
        <div id="db-results-info" style="font-family:'Cinzel',serif;font-size:0.65rem;letter-spacing:0.1em;color:var(--silver-dim);margin-top:0.6rem;text-align:right;"></div>
      </div>

      <div id="db-entries">${allEntries}</div>
      <div id="db-empty" style="display:none;text-align:center;padding:3rem 1rem;">
        <div style="font-size:2rem;margin-bottom:1rem;opacity:0.4;">⊕</div>
        <p style="font-family:'Cinzel',serif;color:var(--silver-dim);font-size:0.85rem;letter-spacing:0.1em;">Nenhuma tabela encontrada</p>
      </div>
    </div>`;
}

function renderHtmlPage(page) {
  return `<div>${page.content}</div>`;
}

/* ══════════════════════════════════════
   SPA ROUTER
══════════════════════════════════════ */
let currentPageId = null;

function navigateTo(pageId, skipAnim = false) {
  const page = getPage(pageId) || PAGE_GROUPS[0];
  if (currentPageId === page.id && !skipAnim) return;
  currentPageId = page.id;

  updateNavActive(page);
  closeNav();

  const html = page.type === 'database' ? renderDatabasePage() : renderHtmlPage(page);
  const $main = $('#main-content');

  if (skipAnim) {
    $main.html(`<div class="page-view active">${html}</div>`);
    afterPageRender(page);
  } else {
    $main.animate({ opacity: 0 }, 200, function() {
      $main.html(`<div class="page-view active">${html}</div>`);
      $main.animate({ opacity: 1 }, 300);
      afterPageRender(page);
    });
  }

  window.location.hash = page.id;
}

function updateNavActive(page) {
  $('.nav-item, .desktop-nav-item, .desktop-submenu-item').removeClass('active');

  // Mobile: marca o item de nav
  $(`.nav-item[data-page="${page.id}"]`).addClass('active');

  // Desktop: marca item do submenu
  $(`.desktop-submenu-item[data-page="${page.id}"]`).addClass('active');

  if (page.group) {
    // Marca o botão do grupo pai no desktop
    $(`.desktop-nav-item[data-group="${page.group}"]`).addClass('active');
    // Abre o acordeão correto no mobile
    const groupIdx = getGroups().findIndex(g => g.label === page.group);
    if (groupIdx >= 0) {
      $(`#nav-sub-${groupIdx}`).addClass('open');
      $(`.nav-group-toggle[data-group-idx="${groupIdx}"]`).addClass('open');
    }
  } else {
    // Página solta: marca o próprio item no desktop
    $(`.desktop-nav-item[data-page="${page.id}"]`).addClass('active');
  }
}

function afterPageRender(page) {
  if (page.type === 'database') bindDatabaseControls();
  initPageSearch();
}

/* ══════════════════════════════════════
   DATABASE CONTROLS
══════════════════════════════════════ */
function bindDatabaseControls() {
  const $entries = $('#db-entries .db-entry');

  function filterEntries() {
    const searchVal = $('#db-search').val().toLowerCase().trim();
    const selectVal = $('#db-select').val();
    let visible = 0;

    $entries.each(function(i) {
      const $el          = $(this);
      const matchesSelect = selectVal === '' || String(i) === selectVal;
      const matchesSearch = searchVal === '' || ($el.data('search') || '').includes(searchVal);

      if (matchesSelect && matchesSearch) { $el.show(); visible++; }
      else $el.hide();
    });

    $('#db-empty').toggle(visible === 0);
    $('#db-results-info').text(
      searchVal || selectVal ? `${visible} de ${database.length} tabelas exibidas` : ''
    );
  }

  let searchTimeout;
  $('#db-search').on('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterEntries, 200);
  });

  $('#db-select').on('change', function() {
    filterEntries();
    const val = $(this).val();
    if (val !== '') {
      const $target = $(`#db-entry-${val}`);
      if ($target.length) $('html,body').animate({ scrollTop: $target.offset().top - 130 }, 400);
    }
  });
}

/* ══════════════════════════════════════
   SMART PAGE SEARCH
   Ativa para cada elemento com class="page-search" na página.
   Cada instância é independente — pode usar em múltiplos lugares.
══════════════════════════════════════ */
function initPageSearch() {
  $('.page-search').each(function() {
    initPageSearchInstance($(this));
  });
}

function initPageSearchInstance($container) {
  if ($container.data('psr-init')) return; // já inicializado
  $container.data('psr-init', true);

  $container.html(`
    <div class="psr-wrapper">
      <svg class="psr-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.4"/>
        <path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
      <input type="text" class="psr-input" autocomplete="off" spellcheck="false"
        placeholder="Buscar nesta página… ou navegue pelo índice" />
      <span class="psr-kbd">/ para buscar</span>
    </div>
    <div class="psr-dropdown"></div>
  `);

  const index    = buildPageIndex();
  const $input   = $container.find('.psr-input');
  const $drop    = $container.find('.psr-dropdown');
  let focusedIdx = -1;
  let allItems   = [];

  $input.on('focus', function() { renderDropdown(''); $drop.addClass('open'); });

  $(document).off('keydown.psr').on('keydown.psr', function(e) {
    if (e.key === '/' && document.activeElement !== $input[0]) { e.preventDefault(); $input[0].focus(); }
    if (e.key === 'Escape') { closeDropdown(); $input.blur(); }
  });

  let searchTimer;
  $input.on('input', function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => renderDropdown($(this).val().trim()), 120);
  });

  $input.on('keydown', function(e) {
    if (!$drop.hasClass('open')) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); focusedIdx = Math.min(focusedIdx + 1, allItems.length - 1); updateFocus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); focusedIdx = Math.max(focusedIdx - 1, 0); updateFocus(); }
    else if (e.key === 'Enter') { e.preventDefault(); if (allItems[focusedIdx]) selectItem(allItems[focusedIdx]); }
  });

  $(document).on('click.psr', function(e) {
    if (!$(e.target).closest('.page-search').length) closeDropdown();
  });

  function buildPageIndex() {
    const items = [];
    $('#main-content').find('h2, h3, [data-search-title]').each(function() {
      if ($(this).closest('.page-search').length) return;
      const tag  = this.tagName ? this.tagName.toLowerCase() : 'custom';
      const text = $(this).data('search-title') || $(this).text().trim();
      const sub  = $(this).data('search-sub') || '';
      if (!text) return;
      if (!this.id) this.id = 'psr-' + Math.random().toString(36).substr(2, 6);
      items.push({ id: this.id, text, sub, tag, el: this });
    });
    return items;
  }

  function renderDropdown(query) {
    focusedIdx = -1; allItems = [];
    let html = '';
    const q  = query.toLowerCase();

    if (!q) {
      const h2s = index.filter(i => i.tag === 'h2');
      const h3s = index.filter(i => i.tag !== 'h2');
      if (h2s.length) {
        html += `<div class="psr-section-label">Seções principais</div>`;
        h2s.forEach(item => { allItems.push(item); html += itemHtml(item, '', 'h2'); });
      }
      if (h3s.length) {
        html += `<div class="psr-section-label">Subtópicos</div>`;
        h3s.forEach(item => { allItems.push(item); html += itemHtml(item, '', 'h3'); });
      }
      if (!index.length) html = `<div class="psr-no-results">Nenhum índice encontrado nesta página</div>`;
    } else {
      const matched     = index.filter(i => i.text.toLowerCase().includes(q) || (i.sub && i.sub.toLowerCase().includes(q)));
      const textMatches = searchPageText(q);

      if (matched.length) {
        html += `<div class="psr-section-label">Seções encontradas</div>`;
        matched.forEach(item => { allItems.push(item); html += itemHtml(item, query, item.tag === 'h2' ? 'h2' : 'h3'); });
      }
      if (textMatches.length) {
        html += `<div class="psr-section-label">Conteúdo — ${textMatches.length} resultado(s)</div>`;
        textMatches.slice(0, 6).forEach(item => { allItems.push(item); html += itemHtml(item, query, 'text'); });
      }
      if (!matched.length && !textMatches.length) {
        html = `<div class="psr-no-results">Nenhum resultado para "<strong style="color:var(--gold-light)">${query}</strong>"</div>`;
      }
    }

    $drop.html(html);
    $drop.find('.psr-item').on('click', function() { selectItem(allItems[parseInt($(this).data('idx'), 10)]); });
  }

  function searchPageText(query) {
    const results = [], q = query.toLowerCase(), seen = new Set();
    $('#main-content').find('p, td, li').each(function() {
      if ($(this).closest('.page-search').length) return;
      const text = $(this).text();
      if (!text.toLowerCase().includes(q)) return;
      const $heading   = $(this).prevAll('h2, h3').first();
      const sectionKey = $heading.length ? $heading.text().trim() : 'Conteúdo';
      if (seen.has(sectionKey)) return;
      seen.add(sectionKey);
      const pos = text.toLowerCase().indexOf(q);
      const ctx = '…' + text.substring(Math.max(0, pos - 30), pos + 50) + '…';
      if (!this.id) this.id = 'psr-' + Math.random().toString(36).substr(2, 6);
      results.push({ id: this.id, text: sectionKey, sub: ctx.trim(), tag: 'text', el: this });
    });
    return results;
  }

  function itemHtml(item, query, type) {
    const idx      = allItems.length - 1;
    const icon     = type === 'h2' ? '◈' : type === 'h3' ? '◇' : '·';
    const iconCls  = type === 'h2' ? 'h2' : '';
    const tagBadge = type === 'h2' ? `<span class="psr-item-tag">Seção</span>`
                   : type === 'text' ? `<span class="psr-item-tag">Texto</span>` : '';
    const dText = highlight(item.text, query);
    const dSub  = item.sub
      ? `<span class="psr-item-sub">${highlight(item.sub.substring(0, 70), query)}${item.sub.length > 70 ? '…' : ''}</span>`
      : '';
    return `<div class="psr-item" data-idx="${idx}">
      <span class="psr-item-icon ${iconCls}">${icon}</span>
      <span class="psr-item-text">${dText}${dSub}</span>
      ${tagBadge}
    </div>`;
  }

  function highlight(str, query) {
    if (!query) return str;
    return str.replace(new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<em>$1</em>');
  }

  function updateFocus() {
    const $items = $drop.find('.psr-item').removeClass('focused');
    if (focusedIdx < 0) return;
    const $f = $items.eq(focusedIdx).addClass('focused');
    const el = $drop[0];
    const t  = $f[0].offsetTop, b = t + $f[0].offsetHeight;
    if (b > el.scrollTop + el.clientHeight) el.scrollTop = b - el.clientHeight;
    else if (t < el.scrollTop) el.scrollTop = t;
  }

  function selectItem(item) {
    closeDropdown(); $input.val('');
    const $t = $(item.el);
    if (!$t.length) return;
    $('html,body').animate({ scrollTop: $t.offset().top - 100 }, 400, function() {
      $t.addClass('psr-highlight-target');
      setTimeout(() => $t.removeClass('psr-highlight-target'), 2000);
    });
  }

  function closeDropdown() { $drop.removeClass('open'); focusedIdx = -1; }
}

/* ══════════════════════════════════════
   NAV BUILDER
   Constrói menus inteiramente a partir de PAGE_GROUPS.
══════════════════════════════════════ */
function buildNav() {
  const groups    = getGroups();
  const ungrouped = getUngroupedPages();

  /* ── SIDE NAV (mobile) ── */
  let sideHtml = '';

  ungrouped.forEach(p => {
    sideHtml += `<div class="nav-item" data-page="${p.id}">
      <span class="nav-icon">${p.icon || ''}</span><span>${p.label}</span>
    </div>`;
  });

  groups.forEach((group, gi) => {
    sideHtml += `
      <div class="nav-group-toggle" data-group-idx="${gi}">
        <div class="nav-group-label">${group.icon || ''} ${group.label}</div>
        <div class="nav-group-caret"></div>
      </div>
      <div class="nav-sub-items" id="nav-sub-${gi}">`;

    getPagesInGroup(group.label).forEach(p => {
      sideHtml += `<div class="nav-item sub" data-page="${p.id}">
        <span class="nav-icon">${p.icon || ''}</span><span>${p.label}</span>
      </div>`;
    });

    sideHtml += `</div>`;
  });

  $('#side-nav-items').html(sideHtml);

  $(document).on('click', '.nav-group-toggle', function() {
    const idx    = $(this).data('group-idx');
    const $sub   = $(`#nav-sub-${idx}`);
    const isOpen = $sub.hasClass('open');
    $('.nav-sub-items').removeClass('open');
    $('.nav-group-toggle').removeClass('open');
    if (!isOpen) { $sub.addClass('open'); $(this).addClass('open'); }
  });

  /* ── DESKTOP NAV ── */
  let desktopHtml = '';

  ungrouped.forEach(p => {
    desktopHtml += `<div class="desktop-nav-item" data-page="${p.id}">${p.label}</div>`;
  });

  groups.forEach(group => {
    const subItems = getPagesInGroup(group.label).map(p => `
      <div class="desktop-submenu-item" data-page="${p.id}">
        <span class="sub-icon">${p.icon || ''}</span>${p.label}
      </div>`).join('');

    desktopHtml += `
      <div class="desktop-nav-group">
        <div class="desktop-nav-item has-sub" data-group="${group.label}">${group.label}</div>
        <div class="desktop-submenu">${subItems}</div>
      </div>`;
  });

  $('#desktop-nav').html(desktopHtml);

  /* ── Click handlers ── */
  $(document).on('click', '.nav-item[data-page], .desktop-nav-item[data-page]:not(.has-sub), .desktop-submenu-item[data-page]', function(e) {
    e.stopPropagation();
    navigateTo($(this).data('page'));
  });

  $(document).on('click', '.site-logo', function() {
    navigateTo(PAGE_GROUPS[0].id);
  });
}

/* ══════════════════════════════════════
   NAV UTILS
══════════════════════════════════════ */
function openNav() {
  $('#side-nav').addClass('open');
  $('#nav-overlay').addClass('visible');
  $('#menu-toggle').addClass('open');
}

function closeNav() {
  $('#side-nav').removeClass('open');
  $('#nav-overlay').removeClass('visible');
  $('#menu-toggle').removeClass('open');
}

/* ══════════════════════════════════════
   STARFIELD
══════════════════════════════════════ */
function buildStarfield() {
  const $sf = $('#starfield');
  for (let i = 0; i < 120; i++) {
    const size = Math.random() * 2 + 0.5;
    const dur  = (Math.random() * 4 + 2).toFixed(1);
    const op   = (Math.random() * 0.5 + 0.2).toFixed(2);
    $('<div class="star">').css({
      width: size + 'px', height: size + 'px',
      left: (Math.random() * 100) + '%',
      top:  (Math.random() * 100) + '%',
      '--dur': dur + 's', '--op': op,
      animationDelay: (Math.random() * 5).toFixed(1) + 's'
    }).appendTo($sf);
  }
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
$(function() {
  buildStarfield();
  buildNav();

  $('#menu-toggle').on('click', function() {
    if ($('#side-nav').hasClass('open')) closeNav(); else openNav();
  });

  $('#nav-overlay').on('click', closeNav);

  const hash    = window.location.hash.replace('#', '');
  const startId = getPage(hash) ? hash : PAGE_GROUPS[0].id;
  navigateTo(startId, true);
});