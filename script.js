/* ══════════════════════════════════════
   DATABASE
══════════════════════════════════════ */
/* ══════════════════════════════════════
   PAGE DEFINITIONS
══════════════════════════════════════ */
const pages = [
  {
    id: 'tabelas',
    label: 'Tabelas',
    icon: '⊞',
    type: 'database'  // special: renders the database viewer
  },
  {
    id: 'armaduras',
    label: 'Armaduras',
    icon: '✦',
    type: 'html',
    content: ARMORS
  },
  {
    id: 'tecnicas',
    label: 'Técnicas',
    icon: '♅',
    type: 'html',
    content: TECHNIQUES
  },
  {
    id: 'personagem',
    label: 'Personagem',
    icon: '♟',
    type: 'html',
    content: CHARACTER_CREATE
  },
  {
    id: 'combate',
    label: 'Combate',
    icon: '⚔',
    type: 'html',
    content: COMBAT
  },
  {
    id: 'cosmo',
    label: 'Cosmo',
    icon: '✺',
    type: 'html',
    content: COSMO
  },
  {
    id: 'glossario',
    label: 'Glossário',
    icon: '⚜',
    type: 'html',
    content: GLOSSARY
  }
];

/* ══════════════════════════════════════
   HELPERS
══════════════════════════════════════ */
function formatKey(key) {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function formatValue(val) {
  if (val === null || val === undefined) return '<span style="color:var(--silver-dim);font-style:italic;">—</span>';
  if (typeof val === 'object' && !Array.isArray(val)) return JSON.stringify(val);
  return String(val);
}

function renderFormulaBlock(entry) {
  if (!entry.formula) return '';
  let formulaStr = '';
  if (Array.isArray(entry.formula)) {
    formulaStr = entry.formula.map(f => `Ranks ${f.range}: <code style="font-family:monospace;color:var(--gold-light);background:rgba(200,168,75,0.1);padding:1px 5px;border-radius:2px;">${f.expression}</code>`).join('<br/>');
  } else {
    formulaStr = `<code style="font-family:monospace;color:var(--gold-light);background:rgba(200,168,75,0.1);padding:2px 8px;border-radius:2px;">${entry.formula}</code>`;
  }
  return `<div style="margin-top:0.75rem; padding:0.6rem 0.9rem; border:1px solid rgba(200,168,75,0.2); border-radius:3px; background:rgba(200,168,75,0.04); font-size:0.88rem; line-height:1.8; color:var(--silver-dim);">
    <span style="font-family:'Cinzel',serif; font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold-dim); display:block; margin-bottom:0.25rem;">Fórmula</span>
    ${formulaStr}
  </div>`;
}

function renderTable(entry) {
  if (!entry.data || !Array.isArray(entry.data) || entry.data.length === 0) return '<p style="color:var(--silver-dim);font-style:italic;">Sem dados disponíveis.</p>';
  
  // Collect all unique keys
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
    </div>
  `;
}

function renderDatabaseEntry(entry, index) {
  const tableId = `db-entry-${index}`;
  return `
    <div class="db-entry cosmos-card mb-6 overflow-hidden" id="${tableId}" data-search="${(entry.table + ' ' + entry.description + ' ' + (entry.full_description||'')).toLowerCase()}">
      <div style="padding:1.25rem 1.25rem 0.75rem;">
        <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
        <h2 style="font-family:'Cinzel Decorative',serif; color:var(--gold); font-size:1rem; letter-spacing:0.04em; line-height:1.3; margin-bottom:0.6rem; padding-right:1rem;">${entry.table}</h2>
        <div class="gold-rule mb-3"></div>
        ${entry.description ? `<p style="font-style:italic; color:var(--silver-dim); font-size:0.95rem; line-height:1.6; margin-bottom:0.5rem;">${entry.description}</p>` : ''}
        ${entry.full_description ? `<p style="color:var(--silver); font-size:0.95rem; line-height:1.7; margin-bottom:0.5rem;">${entry.full_description}</p>` : ''}
        ${renderFormulaBlock(entry)}
      </div>
      <div style="padding:0 0 0.5rem;">
        <div style="padding:0.5rem 1.25rem; margin-bottom:0.5rem; background:rgba(200,168,75,0.04); border-top:1px solid rgba(200,168,75,0.1);">
          <span style="font-family:'Cinzel',serif; font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold-dim);">Dados da Tabela</span>
        </div>
        ${renderTable(entry)}
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════
   PAGE RENDERERS
══════════════════════════════════════ */
function renderDatabasePage() {
  // Unique table names for select
  const tableNames = database.map((e, i) => ({ name: e.table, index: i }));
  const selectOptions = `<option value="">— Todas as Tabelas —</option>` +
    tableNames.map((t, i) => `<option value="${t.index}">${t.name}</option>`).join('');

  const allEntries = database.map((e, i) => renderDatabaseEntry(e, i)).join('');

  return `
    <div class="px-3 py-6 max-w-4xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-8">
        <div class="section-subtitle text-xs mb-3">Base de Dados</div>
        <h1 class="section-title text-2xl md:text-3xl mb-4">Tabelas de Referência</h1>
        <div class="gold-rule mb-2"></div>
        <p style="font-family:'Crimson Pro',serif; font-size:0.9rem; color:var(--silver-dim);">
          ${database.length} tabelas disponíveis para consulta
        </p>
      </div>

      <!-- Controls -->
      <div class="cosmos-card p-4 mb-6 sticky top-16 z-30">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div class="flex-1">
            <div style="font-family:'Cinzel',serif; font-size:0.6rem; letter-spacing:0.15em; color:var(--gold-dim); margin-bottom:0.3rem; text-transform:uppercase;">Buscar</div>
            <input type="text" id="db-search" class="rpg-input" placeholder="Pesquisar em todas as tabelas..." />
          </div>
          <div class="sm:w-64">
            <div style="font-family:'Cinzel',serif; font-size:0.6rem; letter-spacing:0.15em; color:var(--gold-dim); margin-bottom:0.3rem; text-transform:uppercase;">Tabela</div>
            <select id="db-select" class="rpg-input rpg-select">${selectOptions}</select>
          </div>
        </div>
        <div id="db-results-info" style="font-family:'Cinzel',serif; font-size:0.65rem; letter-spacing:0.1em; color:var(--silver-dim); margin-top:0.6rem; text-align:right;"></div>
      </div>

      <!-- Entries -->
      <div id="db-entries">${allEntries}</div>
      <div id="db-empty" style="display:none; text-align:center; padding:3rem 1rem;">
        <div style="font-size:2rem; margin-bottom:1rem; opacity:0.4;">⊕</div>
        <p style="font-family:'Cinzel',serif; color:var(--silver-dim); font-size:0.85rem; letter-spacing:0.1em;">Nenhuma tabela encontrada</p>
      </div>
    </div>
  `;
}

function renderHtmlPage(page) {
  return `<div>${page.content}</div>`;
}

/* ══════════════════════════════════════
   SPA ROUTER
══════════════════════════════════════ */
let currentPage = null;

function navigateTo(pageId, skipAnim = false) {
  const page = pages.find(p => p.id === pageId) || pages[0];
  if (currentPage === page.id && !skipAnim) return;
  currentPage = page.id;

  // Update nav states
  $('.nav-item, .desktop-nav-item').removeClass('active');
  $(`.nav-item[data-page="${page.id}"], .desktop-nav-item[data-page="${page.id}"]`).addClass('active');

  // Close mobile nav
  closeNav();

  // Build content
  let html = '';
  if (page.type === 'database') {
    html = renderDatabasePage();
  } else {
    html = renderHtmlPage(page);
  }

  // Fade transition
  const $main = $('#main-content');
  if (skipAnim) {
    $main.html(`<div class="page-view active">${html}</div>`);
    if (page.type === 'database') bindDatabaseControls();
  } else {
    $main.css('opacity', 0);
    setTimeout(() => {
      $main.html(`<div class="page-view active">${html}</div>`);
      $main.animate({ opacity: 1 }, 300);
      if (page.type === 'database') bindDatabaseControls();
    }, 200);
    $main.animate({ opacity: 0 }, 200);
  }

  // Update URL hash
  window.location.hash = page.id;
}

function bindDatabaseControls() {
  const $entries = $('#db-entries .db-entry');
  
  function filterEntries() {
    const searchVal = $('#db-search').val().toLowerCase().trim();
    const selectVal = $('#db-select').val();
    let visible = 0;

    $entries.each(function(i) {
      const $el = $(this);
      const matchesSelect = selectVal === '' || String(i) === selectVal;
      const searchData = $el.data('search') || '';
      const matchesSearch = searchVal === '' || searchData.includes(searchVal);
      
      if (matchesSelect && matchesSearch) {
        $el.show();
        visible++;
      } else {
        $el.hide();
      }
    });

    $('#db-empty').toggle(visible === 0);
    $('#db-results-info').text(
      searchVal || selectVal
        ? `${visible} de ${database.length} tabelas exibidas`
        : ''
    );
  }

  let searchTimeout;
  $('#db-search').on('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterEntries, 200);
  });

  $('#db-select').on('change', function() {
    // Sync search clear if user picks specific table
    filterEntries();
    // Scroll to selected entry
    const val = $(this).val();
    if (val !== '') {
      const $target = $(`#db-entry-${val}`);
      if ($target.length) {
        $('html,body').animate({ scrollTop: $target.offset().top - 130 }, 400);
      }
    }
  });
}

/* ══════════════════════════════════════
   NAV BUILDER
══════════════════════════════════════ */
function buildNav() {
  // Side nav (mobile)
  const sideItems = pages.map(p => `
    <div class="nav-item" data-page="${p.id}">
      <span class="nav-icon">${p.icon}</span>
      <span>${p.label}</span>
    </div>
  `).join('');
  $('#side-nav-items').html(sideItems);

  // Desktop nav
  const desktopItems = pages.map(p => `
    <div class="desktop-nav-item" data-page="${p.id}">${p.icon} ${p.label}</div>
  `).join('');
  $('#desktop-nav').html(desktopItems);

  // Click handlers
  $(document).on('click', '.nav-item, .desktop-nav-item', function() {
    navigateTo($(this).data('page'));
  });
}

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
  const count = 120;
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2 + 0.5;
    const dur = (Math.random() * 4 + 2).toFixed(1);
    const op = (Math.random() * 0.5 + 0.2).toFixed(2);
    $('<div class="star">').css({
      width: size + 'px', height: size + 'px',
      left: (Math.random() * 100) + '%',
      top: (Math.random() * 100) + '%',
      '--dur': dur + 's',
      '--op': op,
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

  // Mobile menu toggle
  $('#menu-toggle').on('click', function() {
    if ($('#side-nav').hasClass('open')) closeNav();
    else openNav();
  });

  $('#nav-overlay').on('click', closeNav);

  // Route from hash or default
  const hash = window.location.hash.replace('#', '');
  const startPage = pages.find(p => p.id === hash) ? hash : pages[0].id;
  navigateTo(startPage, true);
});