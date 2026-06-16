/* ══════════════════════════════════════════════════════════════════
   GRECO ROMANO RPG — rulebook.js
   Extrai o conteúdo semântico de cada página e compila um documento
   formatado como livro de RPG para impressão / PDF.
══════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════
   ESTRUTURA EM CAPÍTULOS
══════════════════════════════════ */
const BOOK_STRUCTURE = [
  {
    chapter: 'Fundamentos do Sistema', roman: 'I',
    sections: [
      { title: 'A Base do Sistema',           src: () => typeof BASE             !== 'undefined' ? BASE             : null },
      { title: 'Mecânica do Jogo',            src: () => typeof MECANIC          !== 'undefined' ? MECANIC          : null },
      { title: 'Atributos do Personagem',     src: () => typeof ATTRIBUTES       !== 'undefined' ? ATTRIBUTES       : null },
    ]
  },
  {
    chapter: 'O Personagem', roman: 'II',
    sections: [
      { title: 'Criação de Personagem',       src: () => typeof CHARACTER_CREATE !== 'undefined' ? CHARACTER_CREATE : null },
      { title: 'Vida e Resistência',          src: () => typeof LIFE             !== 'undefined' ? LIFE             : null },
      { title: 'Defesa',                      src: () => typeof DEFENSE          !== 'undefined' ? DEFENSE          : null },
      { title: 'Armaduras',                   src: () => typeof ARMORS           !== 'undefined' ? ARMORS           : null },
      { title: 'Talentos',                    src: () => typeof TALENTS          !== 'undefined' ? TALENTS          : null },
      { title: 'Testes de Resistência',       src: () => typeof TESTS            !== 'undefined' ? TESTS            : null },
      { title: 'Perícias e Especialidades',   src: () => typeof EXPERTISE        !== 'undefined' ? EXPERTISE        : null },
      { title: 'Habilidades',                 src: () => typeof SKILLS           !== 'undefined' ? SKILLS           : null },
    ]
  },
  {
    chapter: 'Combate', roman: 'III',
    sections: [
      { title: 'Regras de Ataque',            src: () => typeof ATTACK           !== 'undefined' ? ATTACK           : null },
      { title: 'Turnos e Ações',              src: () => typeof TURNS            !== 'undefined' ? TURNS            : null },
      { title: 'Mecânica de Combate',         src: () => typeof COMBAT           !== 'undefined' ? COMBAT           : null },
      { title: 'Batalha',                     src: () => typeof BATTLE           !== 'undefined' ? BATTLE           : null },
      { title: 'Condições de Status',         src: () => typeof CONDITIONS       !== 'undefined' ? CONDITIONS       : null },
    ]
  },
  {
    chapter: 'Cosmo e Técnicas', roman: 'IV',
    sections: [
      { title: 'O Cosmo',                     src: () => typeof COSMO            !== 'undefined' ? COSMO            : null },
      { title: 'Cosmo D20',                   src: () => typeof COSMO_D20        !== 'undefined' ? COSMO_D20        : null },
      { title: 'Técnicas Especiais',          src: () => typeof TECHNIQUES       !== 'undefined' ? TECHNIQUES       : null },
    ]
  },
  {
    chapter: 'Economia e Artefatos', roman: 'V',
    sections: [
      { title: 'O Mercado',                   src: () => typeof MARKET           !== 'undefined' ? MARKET           : null },
      { title: 'Artefatos e Itens Mágicos',   src: () => typeof ARTIFACTS        !== 'undefined' ? ARTIFACTS        : null },
    ]
  },
  {
    chapter: 'O Mundo', roman: 'VI',
    sections: [
      { title: 'Continente Greco',            src: () => typeof CONTINENTE_GRECO        !== 'undefined' ? CONTINENTE_GRECO        : null },
      { title: 'Continente Romano',           src: () => typeof CONTINENTE_ROMANO       !== 'undefined' ? CONTINENTE_ROMANO       : null },
      { title: 'Zona Oculta',                 src: () => typeof ZONA_OCULTA             !== 'undefined' ? ZONA_OCULTA             : null },
      { title: 'Refúgio do Mal',              src: () => typeof REFUGIO_DO_MAL          !== 'undefined' ? REFUGIO_DO_MAL          : null },
      { title: 'Tartaruga Invertida',         src: () => typeof TARTARUGA_INVERTIDA     !== 'undefined' ? TARTARUGA_INVERTIDA     : null },
      { title: 'Fenda do Biquini',            src: () => typeof FENDA_BIQUINI           !== 'undefined' ? FENDA_BIQUINI           : null },
      { title: 'Ilha do Sol Vermelho',        src: () => typeof ILHA_DO_SOL_VERMELHO    !== 'undefined' ? ILHA_DO_SOL_VERMELHO    : null },
      { title: 'Velho Oeste',                 src: () => typeof VELHO_OESTE             !== 'undefined' ? VELHO_OESTE             : null },
      { title: 'Boca do Papacru',             src: () => typeof BOCA_DO_PAPACRU         !== 'undefined' ? BOCA_DO_PAPACRU         : null },
      { title: 'KU',                          src: () => typeof KU                      !== 'undefined' ? KU                      : null },
    ]
  },
  {
    chapter: 'Referência e Tabelas', roman: 'VII',
    sections: [
      { title: 'Resumo das Regras',           src: () => typeof RESUME           !== 'undefined' ? RESUME           : null },
      { title: 'Exemplo de Jogo',             src: () => typeof EXAMPLE          !== 'undefined' ? EXAMPLE          : null },
      { title: 'Tabelas de Referência',       src: 'database' },
    ]
  }
];

/* ══════════════════════════════════
   UTILITÁRIOS DE IDENTIFICAÇÃO
   IDs únicos por capítulo e seção
   usados como âncoras no sumário.
   As âncoras href="#id" são preservadas
   pelo Chrome ao salvar como PDF.
══════════════════════════════════ */
function slugify(s) {
  return s
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
function chId(ch)  { return 'pb-ch-'  + ch.roman.toLowerCase(); }
function secId(sec){ return 'pb-sec-' + slugify(sec.title); }

/* ══════════════════════════════════
   EXTRAÇÃO DE CONTEÚDO SEMÂNTICO
══════════════════════════════════ */
const BLOCK_TAGS = new Set(['h2','h3','h4','h5','h6','p','table','ul','ol','blockquote','dl','pre']);

function extractContent(htmlString) {
  if (!htmlString) return '';

  const tmp = document.createElement('div');
  tmp.innerHTML = htmlString;

  tmp.querySelectorAll(
    '.page-search, .corner-ornament, .section-subtitle, .gold-rule'
  ).forEach(el => el.remove());

  tmp.querySelectorAll('*').forEach(el => {
    el.removeAttribute('style');
    el.removeAttribute('class');
    [...el.attributes]
      .filter(a => a.name.startsWith('data-') || a.name.startsWith('on'))
      .forEach(a => el.removeAttribute(a.name));
  });

  const out = document.createElement('div');

  (function collect(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.tagName.toLowerCase();
    if (tag === 'h1') return;
    if (BLOCK_TAGS.has(tag)) {
      if (node.textContent.trim().length > 0 || tag === 'table')
        out.appendChild(node.cloneNode(true));
      return;
    }
    [...node.childNodes].forEach(collect);
  })(tmp);

  /* Rebaixa headings: h2→h3, h3→h4, h4→h5 */
  out.querySelectorAll('h2, h3, h4').forEach(h => {
    const lv = parseInt(h.tagName[1], 10);
    if (lv < 6) {
      const nh = document.createElement('h' + (lv + 1));
      nh.innerHTML = h.innerHTML;
      h.replaceWith(nh);
    }
  });

  return out.innerHTML;
}

/* ══════════════════════════════════
   CONSTRUÇÃO DO DOCUMENTO
══════════════════════════════════ */
function buildCover(version) {
  return `
    <div class="pb-cover">
      <div class="pb-cover-inner">
        <p class="pb-cover-eyebrow">Grimório dos Cavaleiros</p>
        <h1 class="pb-cover-title">Greco Romano<br>RPG</h1>
        <div class="pb-cover-ornament"><span>✦</span></div>
        <p class="pb-cover-subtitle">Livro de Regras Completo</p>
        <p class="pb-cover-version">${version}</p>
      </div>
    </div>`;
}

function buildTOC() {
  const items = BOOK_STRUCTURE.map(ch => {
    const secs = ch.sections
      .filter(s => s.src === 'database' || s.src() !== null)
      .map(s => `<li><a href="#${secId(s)}">${s.title}</a></li>`)
      .join('');
    return `
      <li class="pb-toc-ch">
        <a href="#${chId(ch)}" class="pb-toc-ch-link">
          <span class="pb-toc-roman">Capítulo ${ch.roman}</span>
          <span class="pb-toc-name">${ch.chapter}</span>
        </a>
        <ul>${secs}</ul>
      </li>`;
  }).join('');

  return `
    <div class="pb-toc">
      <h2>Sumário</h2>
      <p class="pb-toc-note">Clique nos títulos para navegar diretamente ao capítulo ou seção no PDF.</p>
      <ol>${items}</ol>
    </div>`;
}

function buildChapter(ch) {
  return `
    <div class="pb-ch-opener" id="${chId(ch)}">
      <div class="pb-ch-label">Capítulo ${ch.roman}</div>
      <h1 class="pb-ch-title">${ch.chapter}</h1>
      <div class="pb-ch-rule"></div>
    </div>`;
}

function buildSection(sec) {
  const raw = sec.src === 'database'
    ? (typeof renderDatabasePage === 'function' ? renderDatabasePage() : '')
    : sec.src();
  const body = extractContent(raw);
  if (!body.trim()) return '';
  return `
    <div class="pb-section" id="${secId(sec)}">
      <h2 class="pb-sec-title">${sec.title}</h2>
      <div class="pb-sec-body">${body}</div>
    </div>`;
}

/* ══════════════════════════════════
   ENTRY POINT
══════════════════════════════════ */
function generateRulebook() {
  document.getElementById('print-book')?.remove();

  const version = typeof APP_VERSION !== 'undefined' ? APP_VERSION : '';
  let html = buildCover(version) + buildTOC();
  BOOK_STRUCTURE.forEach(ch => {
    html += buildChapter(ch);
    ch.sections.forEach(sec => { html += buildSection(sec); });
  });

  const book = document.createElement('div');
  book.id = 'print-book';
  book.innerHTML = html;
  document.body.appendChild(book);

  const btn = document.getElementById('rulebook-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Compilando…'; }

  requestAnimationFrame(() => requestAnimationFrame(() => {
    window.print();
    window.addEventListener('afterprint', () => {
      book.remove();
      if (btn) { btn.disabled = false; btn.textContent = '📖 GERAR LIVRO DE REGRAS'; }
    }, { once: true });
  }));
}
