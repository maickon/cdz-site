/* ══════════════════════════════════════════════════════════════════
   GRECO ROMANO RPG — sw.js (Service Worker)
   Estratégia: Cache First para assets, Network First para HTML.
   Recursos externos (CDN/Fonts) também são cacheados para offline.
══════════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'greco-romano-v11';
const CACHE_ASSETS  = CACHE_VERSION + '-assets';
const CACHE_PAGES   = CACHE_VERSION + '-pages';

/* Hosts externos que devem ser interceptados e cacheados */
const CACHED_HOSTS = new Set([
  'cdnjs.cloudflare.com',
  'cdn.tailwindcss.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
]);

/* Arquivos essenciais — falha aqui aborta o install */
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/submenu-search.css',
  '/css/pwa.css',
  '/css/editor.css',
  '/css/print.css',
  '/js/script.js',
  '/js/editor.js',
  '/js/rulebook.js',
  '/js/pwa.js',
  '/database.js',
  '/manifest.json',
  '/img/icon-192.png',
  '/img/icon-512.png',
];

/* Páginas JS — cacheados individualmente, falha tolerada */
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
  '/pages/KU.js',
  '/pages/RULEBOOK.js',
];

/* Opcionais — melhor esforço, silencia erros */
const OPTIONAL_ASSETS = [
  '/css/SUMMON_GENERATOR.css',
  '/js/SUBTYPES.js',
  '/js/TYPE_MAP.js',
  '/js/SUMMON_GENERATOR.js',
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
  '/img/continente-romano.jpg',
  '/img/continente-greco.jpg',
  '/img/ilha-do-sol-vermelho.jpg',
];

/* CDN externos — pré-cacheados com mode:no-cors (resposta opaca) */
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
  'https://cdn.tailwindcss.com',
];


/* ══════════════════════════════════════
   INSTALL — pré-cacheia tudo
══════════════════════════════════════ */
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_ASSETS);

      /* Core: falha aborta install */
      await cache.addAll(CORE_ASSETS);

      /* Páginas JS: tolerante a falhas individuais */
      await Promise.allSettled(
        PAGE_SCRIPTS.map(url =>
          cache.add(url).catch(err => console.warn('[SW] Falhou:', url, err))
        )
      );

      /* Opcionais: totalmente silencioso */
      await Promise.allSettled(
        OPTIONAL_ASSETS.map(url => cache.add(url).catch(() => {}))
      );

      /* CDN externos: mode no-cors (resposta opaca) — funciona offline */
      await Promise.allSettled(
        EXTERNAL_ASSETS.map(url =>
          fetch(new Request(url, { mode: 'no-cors' }))
            .then(res => { if (res) cache.put(url, res); })
            .catch(err => console.warn('[SW] CDN externo falhou:', url, err))
        )
      );

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
      await self.clients.claim();
    })()
  );
});


/* ══════════════════════════════════════
   FETCH — estratégia por tipo de recurso
══════════════════════════════════════ */
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  /* Navegação (HTML): Network First → fallback offline */
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstHTML(request));
    return;
  }

  /* Assets do próprio domínio: Cache First */
  if (url.origin === location.origin) {
    event.respondWith(cacheFirstAsset(request));
    return;
  }

  /* CDN externos conhecidos: Cache First (com cache on-demand) */
  if (CACHED_HOSTS.has(url.hostname)) {
    event.respondWith(cacheFirstExternal(request));
    return;
  }

  /* Outros domínios: passa para a rede sem interceptar */
});


/* ── Network First (HTML/navegação) ── */
async function networkFirstHTML(request) {
  const cache = await caches.open(CACHE_PAGES);
  try {
    const res = await fetch(request);
    if (res.ok) cache.put(request, res.clone());
    return res;
  } catch {
    return (
      (await cache.match(request)) ||
      (await caches.match('/index.html')) ||
      (await caches.match('/')) ||
      offlineFallback()
    );
  }
}

/* ── Cache First (assets locais) ── */
async function cacheFirstAsset(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const res = await fetch(request);
    if (res.ok) {
      const cache = await caches.open(CACHE_ASSETS);
      cache.put(request, res.clone());
    }
    return res;
  } catch {
    return offlineFallback(request);
  }
}

/* ── Cache First (CDN externos, resposta pode ser opaca) ── */
async function cacheFirstExternal(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    /* no-cors para scripts/fontes sem CORS explícito */
    const res = await fetch(new Request(request.url, { mode: 'no-cors' }));
    if (res) {
      const cache = await caches.open(CACHE_ASSETS);
      cache.put(request.url, res.clone());
    }
    return res || new Response('', { status: 408 });
  } catch {
    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

/* ── Fallback genérico ── */
function offlineFallback(request) {
  if (request?.destination === 'image') {
    return new Response(
      `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#0b1230"/>
        <text x="50" y="55" text-anchor="middle" fill="#a3873a" font-size="12" font-family="serif">⊕</text>
      </svg>`,
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
  return new Response('', { status: 408, statusText: 'Offline' });
}
