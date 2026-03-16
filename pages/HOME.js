const HOME = `
<style>
/* ═══════════════════════════════════════
   HOME — estilos locais
═══════════════════════════════════════ */

/* ── Reveal on scroll ── */
.home-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.home-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.home-reveal-delay-1 { transition-delay: 0.1s; }
.home-reveal-delay-2 { transition-delay: 0.2s; }
.home-reveal-delay-3 { transition-delay: 0.3s; }
.home-reveal-delay-4 { transition-delay: 0.4s; }

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.home-hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  margin-top: -64px; /* compensa o header fixo */
}

.home-hero-bg {
  position: absolute;
  inset: 0;
  background: url("img/bg.jpeg") center / cover no-repeat;
  transform-origin: center;
  will-change: transform;
}

.home-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 50% 45%, rgba(200,168,75,0.12) 0%, transparent 70%),
    linear-gradient(180deg, rgba(6,11,24,0.3) 0%, rgba(6,11,24,0.55) 60%, rgba(6,11,24,0.95) 100%);
}

/* Partículas de cosmo */
.home-hero-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.cosmo-particle {
  position: absolute;
  border-radius: 50%;
  background: var(--gold);
  animation: cosmoFloat var(--dur, 8s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
  opacity: 0;
}
@keyframes cosmoFloat {
  0%   { opacity: 0; transform: translateY(0) scale(1); }
  15%  { opacity: var(--op, 0.6); }
  85%  { opacity: var(--op, 0.6); }
  100% { opacity: 0; transform: translateY(-120px) scale(0.4); }
}

/* Anel zodiacal decorativo */
.hero-ring-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.hero-ring {
  width: min(520px, 90vw);
  height: min(520px, 90vw);
  border: 1px solid rgba(200,168,75,0.08);
  border-radius: 50%;
  position: relative;
  animation: ringRotate 60s linear infinite;
}
.hero-ring::before {
  content: '';
  position: absolute;
  inset: 18px;
  border: 1px dashed rgba(200,168,75,0.05);
  border-radius: 50%;
}
.hero-ring-dot {
  position: absolute;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 8px var(--gold);
  top: 50%; left: 50%;
  transform-origin: 0 0;
}
@keyframes ringRotate { to { transform: rotate(360deg); } }

/* Conteúdo do hero */
.home-hero-content {
  position: relative;
  z-index: 5;
  max-width: 820px;
  padding: 0 24px;
}

.home-hero-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold-dim);
  margin-bottom: 1.25rem;
  opacity: 0;
  animation: heroFadeUp 0.8s ease 0.2s forwards;
}

.home-hero-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.2rem, 6vw, 4.2rem);
  letter-spacing: 0.06em;
  line-height: 1.1;
  color: var(--gold);
  margin-bottom: 0.5rem;
  text-shadow:
    0 0 40px rgba(200,168,75,0.5),
    0 0 80px rgba(200,168,75,0.2),
    0 3px 8px rgba(0,0,0,0.9);
  opacity: 0;
  animation: heroFadeUp 0.9s ease 0.4s forwards;
}

.home-hero-subtitle {
  font-family: 'Cinzel', serif;
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  letter-spacing: 0.28em;
  color: var(--silver-dim);
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0;
  animation: heroFadeUp 0.9s ease 0.55s forwards;
}

.home-hero-divider {
  width: 140px;
  height: 1px;
  margin: 0 auto 2rem;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 0;
  animation: heroFadeIn 1s ease 0.7s forwards;
}

.home-hero-text {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.9;
  color: var(--silver);
  text-shadow: 0 2px 6px rgba(0,0,0,0.8);
  max-width: 680px;
  margin: 0 auto 2.5rem;
  opacity: 0;
  animation: heroFadeUp 0.9s ease 0.85s forwards;
}

.home-hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.75rem;
  border: 1px solid rgba(200,168,75,0.45);
  border-radius: 2px;
  color: var(--gold-light);
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(200,168,75,0.06);
  transition: all 0.3s;
  opacity: 0;
  animation: heroFadeUp 0.9s ease 1.05s forwards;
}
.home-hero-cta:hover {
  background: rgba(200,168,75,0.14);
  border-color: rgba(200,168,75,0.7);
  box-shadow: 0 0 20px rgba(200,168,75,0.15);
  color: var(--gold);
}
.home-hero-cta svg { transition: transform 0.3s; }
.home-hero-cta:hover svg { transform: translateY(3px); }

/* Scroll indicator */
.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  opacity: 0;
  animation: heroFadeIn 1s ease 1.5s forwards;
}
.hero-scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, var(--gold-dim), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(1.1); }
}
.hero-scroll-label {
  font-family: 'Cinzel', serif;
  font-size: 0.5rem;
  letter-spacing: 0.3em;
  color: var(--gold-dim);
  text-transform: uppercase;
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes heroFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ══════════════════════════════════════
   SEÇÕES GERAIS
══════════════════════════════════════ */
.home-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 24px;
}
.home-section + .home-section {
  padding-top: 0;
}

.home-section-header {
  text-align: center;
  margin-bottom: 3rem;
}
.home-section-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-dim);
  margin-bottom: 0.75rem;
}
.home-section-title {
  font-family: 'Cinzel Decorative', serif;
  color: var(--gold);
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(200,168,75,0.25);
}
.home-section-rule {
  width: 80px;
  height: 1px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
}

.home-body-text {
  font-family: 'Crimson Pro', serif;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--silver);
  text-align: justify;
  margin-bottom: 1rem;
}

/* ── Ornamento separador ── */
.home-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 60px auto;
  max-width: 400px;
}
.home-ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200,168,75,0.3));
}
.home-ornament-line:last-child {
  background: linear-gradient(90deg, rgba(200,168,75,0.3), transparent);
}
.home-ornament-symbol {
  color: var(--gold-dim);
  font-size: 1rem;
}

/* ══════════════════════════════════════
   CARDS DE PILARES (O QUE É O RPG)
══════════════════════════════════════ */
.home-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.home-pillar-card {
  background: var(--bg-card);
  border: 1px solid rgba(200,168,75,0.13);
  border-radius: 4px;
  padding: 1.75rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: default;
}
.home-pillar-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.home-pillar-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(200,168,75,0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.home-pillar-card:hover {
  border-color: rgba(200,168,75,0.32);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(200,168,75,0.06);
}
.home-pillar-card:hover::before,
.home-pillar-card:hover::after { opacity: 1; }

.pillar-icon {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 0 8px rgba(200,168,75,0.4));
}
.pillar-title {
  font-family: 'Cinzel', serif;
  color: var(--gold-light);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.65rem;
  text-transform: uppercase;
}
.pillar-text {
  font-family: 'Crimson Pro', serif;
  color: var(--silver-dim);
  font-size: 0.95rem;
  line-height: 1.75;
}

/* ══════════════════════════════════════
   BANNER COSMO (destaque central)
══════════════════════════════════════ */
.home-cosmo-banner {
  position: relative;
  margin: 0 0 0;
  padding: 60px 24px;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(18,28,58,0.6) 0%, rgba(11,18,48,0.9) 100%);
  border-top: 1px solid rgba(200,168,75,0.1);
  border-bottom: 1px solid rgba(200,168,75,0.1);
}
.home-cosmo-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,168,75,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.cosmo-banner-symbol {
  font-size: 3rem;
  color: var(--gold);
  text-shadow: 0 0 30px rgba(200,168,75,0.6);
  margin-bottom: 1rem;
  display: block;
  animation: cosmoPulse 4s ease-in-out infinite;
}
.cosmo-banner-quote {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-style: italic;
  color: var(--silver);
  line-height: 1.75;
  max-width: 700px;
  margin: 0 auto 1rem;
}
.cosmo-banner-attr {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--gold-dim);
  text-transform: uppercase;
}

/* ══════════════════════════════════════
   MECÂNICAS — lista com ícones
══════════════════════════════════════ */
.home-mechanics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem 2rem;
  margin-top: 2rem;
}
.home-mechanic {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.mechanic-icon {
  flex-shrink: 0;
  width: 36px; height: 36px;
  border: 1px solid rgba(200,168,75,0.25);
  border-radius: 3px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  color: var(--gold);
  background: rgba(200,168,75,0.05);
}
.mechanic-body {}
.mechanic-title {
  font-family: 'Cinzel', serif;
  color: var(--gold-light);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}
.mechanic-text {
  font-family: 'Crimson Pro', serif;
  color: var(--silver-dim);
  font-size: 0.92rem;
  line-height: 1.65;
}

/* ══════════════════════════════════════
   MAPA INTERATIVO
══════════════════════════════════════ */
.home-map-section {
  padding: 80px 0;
}

.home-map-header {
  text-align: center;
  padding: 0 24px;
  margin-bottom: 2rem;
}

.map-viewer-wrap {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.map-viewer {
  position: relative;
  width: 100%;
  background: rgba(6,11,24,0.8);
  border: 1px solid rgba(200,168,75,0.2);
  border-radius: 4px;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  touch-action: none;
  /* altura dinâmica via JS */
  height: 520px;
}
.map-viewer:active { cursor: grabbing; }

.map-viewer::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(200,168,75,0.08);
  border-radius: 4px;
  pointer-events: none;
  z-index: 5;
}

/* Ornamentos nas quinas */
.map-corner { position: absolute; width: 18px; height: 18px; z-index: 6; pointer-events: none; }
.map-corner-tl { top: 8px; left: 8px;  border-top: 1px solid rgba(200,168,75,0.5); border-left:  1px solid rgba(200,168,75,0.5); }
.map-corner-tr { top: 8px; right: 8px; border-top: 1px solid rgba(200,168,75,0.5); border-right: 1px solid rgba(200,168,75,0.5); }
.map-corner-bl { bottom: 8px; left: 8px;  border-bottom: 1px solid rgba(200,168,75,0.5); border-left:  1px solid rgba(200,168,75,0.5); }
.map-corner-br { bottom: 8px; right: 8px; border-bottom: 1px solid rgba(200,168,75,0.5); border-right: 1px solid rgba(200,168,75,0.5); }

.map-img-layer {
  position: absolute;
  top: 0; left: 0;
  transform-origin: 0 0;
  will-change: transform;
  transition: opacity 0.4s ease;
  pointer-events: none;
  /* tamanho definido por JS */
}
.map-img-layer img {
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  draggable: false;
  -webkit-user-drag: none;
}

/* Controles do mapa */
.map-controls {
  position: absolute;
  bottom: 14px;
  right: 14px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.map-ctrl-btn {
  width: 32px; height: 32px;
  background: rgba(6,11,24,0.9);
  border: 1px solid rgba(200,168,75,0.3);
  border-radius: 3px;
  color: var(--gold-light);
  font-size: 1.1rem;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
  font-family: monospace;
}
.map-ctrl-btn:hover {
  background: rgba(200,168,75,0.12);
  border-color: rgba(200,168,75,0.55);
}

/* Botão trocar versão */
.map-version-btn {
  position: absolute;
  bottom: 14px;
  left: 14px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  background: rgba(6,11,24,0.9);
  border: 1px solid rgba(200,168,75,0.3);
  border-radius: 3px;
  color: var(--gold-light);
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s;
}
.map-version-btn:hover {
  background: rgba(200,168,75,0.1);
  border-color: rgba(200,168,75,0.55);
}

/* Tooltip zoom */
.map-zoom-label {
  position: absolute;
  top: 12px;
  right: 14px;
  z-index: 10;
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  color: var(--gold-dim);
  background: rgba(6,11,24,0.7);
  border: 1px solid rgba(200,168,75,0.15);
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
}

/* Dica inicial */
.map-hint {
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--silver-dim);
  opacity: 0.6;
  padding: 0 24px;
}

/* ══════════════════════════════════════
   FOOTER DA HOME
══════════════════════════════════════ */
.home-footer-banner {
  text-align: center;
  padding: 70px 24px;
  position: relative;
}
.home-footer-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 10%; right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200,168,75,0.25), transparent);
}

@media (max-width: 600px) {
  .home-hero { height: 100svh; }
  .home-pillars { grid-template-columns: 1fr; }
  .home-mechanics { grid-template-columns: 1fr; }
}
</style>

<!-- ══════════════════════════════════════
     HERO
══════════════════════════════════════ -->
<section class="home-hero" id="home-hero">

  <!-- Parallax bg -->
  <div class="home-hero-bg" id="hero-bg"></div>
  <div class="home-hero-overlay"></div>

  <!-- Partículas -->
  <div class="home-hero-particles" id="hero-particles"></div>

  <!-- Anel zodiacal -->
  <div class="hero-ring-wrap">
    <div class="hero-ring" id="hero-ring"></div>
  </div>

  <!-- Conteúdo principal -->
  <div class="home-hero-content">
    <p class="home-hero-eyebrow">Sistema de RPG · Cavaleiros Greco-Romanos</p>
    <h1 class="home-hero-title">Greco Romano<br>RPG</h1>
    <p class="home-hero-subtitle">Grimório dos Cavaleiros · v5.0</p>
    <div class="home-hero-divider"></div>
    <p class="home-hero-text">
      Um universo onde o poder do Cosmo decide o destino das lendas.
      Armaduras sagradas, deuses antigos e cavaleiros de mundos
      improváveis se encontram num cenário medieval repleto de batalhas
      que desafiam os limites da realidade.
    </p>
    <button class="home-hero-cta" onclick="document.getElementById('home-about').scrollIntoView({behavior:'smooth'})">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      Explorar o Grimório
    </button>
  </div>

  <!-- Scroll indicator -->
  <div class="hero-scroll-indicator">
    <div class="hero-scroll-line"></div>
    <span class="hero-scroll-label">Rolar</span>
  </div>

</section>


<!-- ══════════════════════════════════════
     SOBRE O RPG
══════════════════════════════════════ -->
<section class="home-section" id="home-about">

  <div class="home-section-header home-reveal">
    <p class="home-section-eyebrow">Universo</p>
    <h2 class="home-section-title">Sobre o Sistema</h2>
    <div class="home-section-rule"></div>
  </div>

  <p class="home-body-text home-reveal home-reveal-delay-1">
    Greco Romano RPG é um sistema baseado no d20 que recria o universo dos Cavaleiros do Zodíaco
    num cenário medieval alternativo. Armaduras constelares, templos perdidos, deuses adormecidos
    e batalhas cósmicas fazem parte de um mundo que vai muito além do anime original — um playground
    para aventuras épicas, momentos absurdos e personagens inesquecíveis.
  </p>

  <p class="home-body-text home-reveal home-reveal-delay-2">
    O sistema preza pela liberdade criativa. Cavaleiros podem surgir de continentes esquecidos,
    civilizações submersas, cidades flutuantes ou simplesmente de uma aldeia perdida no meio
    do nada. O que define um Cavaleiro não é sua origem, mas a intensidade do Cosmo que pulsa
    em seu interior — e a determinação de fazer algo grande com isso.
  </p>

  <!-- Cards de pilares -->
  <div class="home-pillars">

    <div class="home-pillar-card home-reveal home-reveal-delay-1">
      <span class="pillar-icon">⚔</span>
      <p class="pillar-title">Combate Tático</p>
      <p class="pillar-text">Sistema baseado em d20 com iniciativa, ações especiais, defesas e condições de batalha que tornam cada encontro único e cinematográfico.</p>
    </div>

    <div class="home-pillar-card home-reveal home-reveal-delay-2">
      <span class="pillar-icon">✺</span>
      <p class="pillar-title">Cosmo &amp; Técnicas</p>
      <p class="pillar-text">Energia cósmica que alimenta técnicas de rank 1 a 9. Do Meteoro de Pégaso à destruição de constelações — você nomeia, o sistema balanceia.</p>
    </div>

    <div class="home-pillar-card home-reveal home-reveal-delay-3">
      <span class="pillar-icon">✦</span>
      <p class="pillar-title">Armaduras Sagradas</p>
      <p class="pillar-text">De Bronze a Kamui Divina. Cada armadura confere habilidades únicas, bônus de combate e uma identidade visual que define o cavaleiro para sempre.</p>
    </div>
  </div>

</section>


<!-- ══════════════════════════════════════
     BANNER COSMO
══════════════════════════════════════ -->
<div class="home-cosmo-banner home-reveal">
  <span class="cosmo-banner-symbol">⊕</span>
  <blockquote class="cosmo-banner-quote">
    "Exploda o universo dentro de você. O Cosmo não é apenas energia —
    é a chama da sua alma, capaz de derreter o próprio destino."
  </blockquote>
  <p class="cosmo-banner-attr">— Grimório dos Cavaleiros · Capítulo I</p>
</div>


<!-- ══════════════════════════════════════
     MECÂNICAS PRINCIPAIS
══════════════════════════════════════ -->
<section class="home-section">

  <div class="home-section-header home-reveal">
    <p class="home-section-eyebrow">Regras</p>
    <h2 class="home-section-title">Mecânicas do Sistema</h2>
    <div class="home-section-rule"></div>
  </div>

  <div class="home-mechanics">

    <div class="home-mechanic home-reveal home-reveal-delay-1">
      <div class="mechanic-icon">⚄</div>
      <div class="mechanic-body">
        <p class="mechanic-title">Resolução d20</p>
        <p class="mechanic-text">Toda ação relevante usa 1d20 + modificadores contra uma CD ou o resultado do adversário. Simples, rápido, imprevisível.</p>
      </div>
    </div>

    <div class="home-mechanic home-reveal home-reveal-delay-2">
      <div class="mechanic-icon">✺</div>
      <div class="mechanic-body">
        <p class="mechanic-title">Reserva de Cosmo</p>
        <p class="mechanic-text">Começa na metade em combate e cresce por turno. A metade do Cosmo atual soma ao primeiro ataque de cada rodada como bônus de dano.</p>
      </div>
    </div>

    <div class="home-mechanic home-reveal home-reveal-delay-3">
      <div class="mechanic-icon">✵</div>
      <div class="mechanic-body">
        <p class="mechanic-title">Técnicas por Rank</p>
        <p class="mechanic-text">9 níveis de poder, do Rank 0 (Discípulo) ao Rank 9 (Titã/Divindade). Cada técnica tem nome, efeito e custo de Cosmo definidos pelo jogador.</p>
      </div>
    </div>

    <div class="home-mechanic home-reveal home-reveal-delay-4">
      <div class="mechanic-icon">✦</div>
      <div class="mechanic-body">
        <p class="mechanic-title">Progressão de Armadura</p>
        <p class="mechanic-text">Bronze → Prata → Ouro → Kamui. Cada classe desbloqueia ranks maiores de técnica e bônus passivos crescentes.</p>
      </div>
    </div>

    <div class="home-mechanic home-reveal home-reveal-delay-1">
      <div class="mechanic-icon">⊞</div>
      <div class="mechanic-body">
        <p class="mechanic-title">Atributos</p>
        <p class="mechanic-text">FOR, DES, CON, INT, SAB e CAR. Os modificadores somam ao Cosmo máximo, à iniciativa e às diversas jogadas do sistema.</p>
      </div>
    </div>

    <div class="home-mechanic home-reveal home-reveal-delay-2">
      <div class="mechanic-icon">✩</div>
      <div class="mechanic-body">
        <p class="mechanic-title">Talentos &amp; Perícias</p>
        <p class="mechanic-text">Customize seu cavaleiro com talentos passivos e perícias ativas. Cada combinação gera um estilo de jogo completamente distinto.</p>
      </div>
    </div>

  </div>

</section>


<!-- ══════════════════════════════════════
     ORNAMENTO
══════════════════════════════════════ -->
<div class="home-ornament home-reveal">
  <div class="home-ornament-line"></div>
  <span class="home-ornament-symbol">✦ ⊕ ✦</span>
  <div class="home-ornament-line"></div>
</div>


<!-- ══════════════════════════════════════
     MAPA DO MUNDO
══════════════════════════════════════ -->
<section class="home-map-section" id="home-map">

  <div class="home-map-header home-reveal">
    <p class="home-section-eyebrow">Cartografia</p>
    <h2 class="home-section-title">Mapa do Mundo</h2>
    <div class="home-section-rule" style="margin-bottom:0.75rem;"></div>
    <p style="font-family:'Crimson Pro',serif;color:var(--silver-dim);font-size:0.95rem;margin-top:0.75rem;">
      Explore os territórios, continentes e regiões onde cavaleiros treinam,
      enfrentam deuses e despertam o poder do Cosmo.
    </p>
  </div>

  <!-- Viewer com zoom e pan -->
  <div class="map-viewer-wrap home-reveal">

    <div class="map-viewer" id="mapViewer">

      <!-- Ornamentos -->
      <div class="map-corner map-corner-tl"></div>
      <div class="map-corner map-corner-tr"></div>
      <div class="map-corner map-corner-bl"></div>
      <div class="map-corner map-corner-br"></div>

      <!-- Camada da imagem (pan/zoom aplicados aqui) -->
      <div class="map-img-layer" id="mapLayer">
        <img id="mapImg" src="img/m2.jpg" alt="Mapa do Mundo" draggable="false" />
      </div>

      <!-- Zoom label -->
      <div class="map-zoom-label" id="mapZoomLabel">100%</div>

      <!-- Controles de zoom -->
      <div class="map-controls">
        <button class="map-ctrl-btn" id="mapZoomIn"  title="Zoom in">+</button>
        <button class="map-ctrl-btn" id="mapZoomOut" title="Zoom out">−</button>
        <button class="map-ctrl-btn" id="mapReset"   title="Resetar">⊕</button>
      </div>

      <!-- Trocar versão -->
      <button class="map-version-btn" id="mapVersionBtn">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15"/></svg>
        Versão do Mapa
      </button>

    </div>

    <p class="map-hint">
      Scroll / pinça para zoom · Clique e arraste para navegar · Botão ⊕ para resetar
    </p>

  </div>

</section>


<!-- ══════════════════════════════════════
     FOOTER DA HOME
══════════════════════════════════════ -->
<div class="home-footer-banner home-reveal">
  <p style="font-family:'Cinzel Decorative',serif;color:var(--gold);font-size:1rem;letter-spacing:0.06em;margin-bottom:0.5rem;text-shadow:0 0 20px rgba(200,168,75,0.3);">
    Pronto para despertar seu Cosmo?
  </p>
  <p style="font-family:'Crimson Pro',serif;color:var(--silver-dim);font-size:0.95rem;margin-bottom:1.5rem;">
    Explore o grimório completo — armaduras, técnicas, combate e muito mais.
  </p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
    <button onclick="navigateTo('personagem')" style="padding:0.6rem 1.4rem;background:rgba(200,168,75,0.1);border:1px solid rgba(200,168,75,0.35);border-radius:2px;color:var(--gold-light);font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:0.1em;cursor:pointer;transition:all 0.25s;" onmouseover="this.style.background='rgba(200,168,75,0.18)'" onmouseout="this.style.background='rgba(200,168,75,0.1)'">
      Criar Personagem
    </button>
    <button onclick="navigateTo('cosmo')" style="padding:0.6rem 1.4rem;background:transparent;border:1px solid rgba(200,168,75,0.2);border-radius:2px;color:var(--silver-dim);font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:0.1em;cursor:pointer;transition:all 0.25s;" onmouseover="this.style.borderColor='rgba(200,168,75,0.4)';this.style.color='var(--silver)'" onmouseout="this.style.borderColor='rgba(200,168,75,0.2)';this.style.color='var(--silver-dim)'">
      O Cosmo
    </button>
    <button onclick="navigateTo('combate')" style="padding:0.6rem 1.4rem;background:transparent;border:1px solid rgba(200,168,75,0.2);border-radius:2px;color:var(--silver-dim);font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:0.1em;cursor:pointer;transition:all 0.25s;" onmouseover="this.style.borderColor='rgba(200,168,75,0.4)';this.style.color='var(--silver)'" onmouseout="this.style.borderColor='rgba(200,168,75,0.2)';this.style.color='var(--silver-dim)'">
      Regras de Combate
    </button>
  </div>
</div>


<!-- ══════════════════════════════════════
     SCRIPTS DA HOME
══════════════════════════════════════ -->
<script>
(function() {

  /* ── Partículas do Hero ── */
  function buildParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    for (let i = 0; i < 28; i++) {
      const p   = document.createElement('div');
      const size = Math.random() * 3 + 1;
      p.className = 'cosmo-particle';
      p.style.cssText = [
        'width:'  + size + 'px',
        'height:' + size + 'px',
        'left:'   + (Math.random() * 100) + '%',
        'top:'    + (20 + Math.random() * 70) + '%',
        '--dur:'  + (6 + Math.random() * 10) + 's',
        '--delay:'+ (Math.random() * 8)       + 's',
        '--op:'   + (Math.random() * 0.5 + 0.2)
      ].join(';');
      container.appendChild(p);
    }
  }

  /* ── Pontos no anel zodiacal ── */
  function buildRingDots() {
    const ring = document.getElementById('hero-ring');
    if (!ring) return;
    const r = ring.offsetWidth / 2;
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
      const dot   = document.createElement('div');
      dot.className = 'hero-ring-dot';
      dot.style.cssText =
        'left:' + (r + r * Math.cos(angle)) + 'px;' +
        'top:'  + (r + r * Math.sin(angle)) + 'px;' +
        'transform:translate(-50%,-50%)';
      ring.appendChild(dot);
    }
  }

  /* ── Parallax no hero ── */
  function initParallax() {
    const bg   = document.getElementById('hero-bg');
    const hero = document.getElementById('home-hero');
    if (!bg || !hero) return;
    const handler = () => {
      const scrolled = window.scrollY;
      const heroH    = hero.offsetHeight;
      if (scrolled < heroH) {
        bg.style.transform = 'translateY(' + (scrolled * 0.35) + 'px) scale(1.05)';
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
  }

  /* ── Reveal on scroll ── */
  function initReveal() {
    const els = document.querySelectorAll('.home-reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }

  /* ════════════════════════════════════
     MAPA — zoom + pan
  ════════════════════════════════════ */
  function initMap() {
    const viewer  = document.getElementById('mapViewer');
    const layer   = document.getElementById('mapLayer');
    const img     = document.getElementById('mapImg');
    const zoomLbl = document.getElementById('mapZoomLabel');
    if (!viewer || !layer || !img) return;

    const MIN_ZOOM = 0.5, MAX_ZOOM = 4, ZOOM_STEP = 0.25;
    let scale = 1, tx = 0, ty = 0;
    let isDragging = false, startX = 0, startY = 0, startTx = 0, startTy = 0;

    /* Ajusta altura do viewer baseado na imagem */
    img.addEventListener('load', function() {
      const ratio = img.naturalHeight / img.naturalWidth;
      viewer.style.height = Math.min(Math.round(viewer.offsetWidth * ratio), 560) + 'px';
      layer.style.width = viewer.offsetWidth + 'px';
      clamp();
      applyTransform();
    }, { once: true });
    // fallback se já carregou
    if (img.complete && img.naturalWidth) {
      const ratio = img.naturalHeight / img.naturalWidth;
      viewer.style.height = Math.min(Math.round(viewer.offsetWidth * ratio), 560) + 'px';
      layer.style.width = viewer.offsetWidth + 'px';
    }

    function applyTransform() {
      layer.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
      zoomLbl.textContent   = Math.round(scale * 100) + '%';
    }

    function clamp() {
      const vw = viewer.offsetWidth, vh = viewer.offsetHeight;
      const iw = vw * scale,         ih = vh * scale;
      // Não deixa ir além das bordas
      const minTx = Math.min(0, vw - iw);
      const minTy = Math.min(0, vh - ih);
      tx = Math.max(minTx, Math.min(0, tx));
      ty = Math.max(minTy, Math.min(0, ty));
    }

    function zoomTo(newScale, originX, originY) {
      const vw = viewer.offsetWidth, vh = viewer.offsetHeight;
      const ox  = originX !== undefined ? originX : vw / 2;
      const oy  = originY !== undefined ? originY : vh / 2;
      const ratio = newScale / scale;
      tx = ox - ratio * (ox - tx);
      ty = oy - ratio * (oy - ty);
      scale = newScale;
      clamp();
      applyTransform();
    }

    /* Botões */
    document.getElementById('mapZoomIn').addEventListener('click', () => {
      zoomTo(Math.min(MAX_ZOOM, scale + ZOOM_STEP));
    });
    document.getElementById('mapZoomOut').addEventListener('click', () => {
      zoomTo(Math.max(MIN_ZOOM, scale - ZOOM_STEP));
    });
    document.getElementById('mapReset').addEventListener('click', () => {
      scale = 1; tx = 0; ty = 0;
      applyTransform();
    });

    /* Wheel zoom */
    viewer.addEventListener('wheel', function(e) {
      e.preventDefault();
      const delta    = -Math.sign(e.deltaY) * ZOOM_STEP;
      const newScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, scale + delta));
      const rect     = viewer.getBoundingClientRect();
      zoomTo(newScale, e.clientX - rect.left, e.clientY - rect.top);
    }, { passive: false });

    /* Mouse drag */
    viewer.addEventListener('mousedown', function(e) {
      if (e.button !== 0) return;
      isDragging = true;
      startX = e.clientX; startY = e.clientY;
      startTx = tx;       startTy = ty;
      e.preventDefault();
    });
    window.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      tx = startTx + (e.clientX - startX);
      ty = startTy + (e.clientY - startY);
      clamp();
      applyTransform();
    });
    window.addEventListener('mouseup', () => { isDragging = false; });

    /* Touch: pan + pinch zoom */
    let lastTouchDist = null;
    let touchStartTx = 0, touchStartTy = 0;
    let touchStartX = 0, touchStartY = 0;

    viewer.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        touchStartX  = e.touches[0].clientX;
        touchStartY  = e.touches[0].clientY;
        touchStartTx = tx; touchStartTy = ty;
        lastTouchDist = null;
      } else if (e.touches.length === 2) {
        lastTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
      e.preventDefault();
    }, { passive: false });

    viewer.addEventListener('touchmove', function(e) {
      e.preventDefault();
      if (e.touches.length === 1 && lastTouchDist === null) {
        tx = touchStartTx + (e.touches[0].clientX - touchStartX);
        ty = touchStartTy + (e.touches[0].clientY - touchStartY);
        clamp();
        applyTransform();
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (lastTouchDist) {
          const ratio    = dist / lastTouchDist;
          const newScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, scale * ratio));
          const rect     = viewer.getBoundingClientRect();
          const cx = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
          const cy = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;
          zoomTo(newScale, cx, cy);
        }
        lastTouchDist = dist;
      }
    }, { passive: false });

    viewer.addEventListener('touchend', function(e) {
      if (e.touches.length < 2) lastTouchDist = null;
    });

    /* Trocar versão do mapa */
    let mapVersion = 2;
    document.getElementById('mapVersionBtn').addEventListener('click', function() {
      layer.style.opacity = '0';
      setTimeout(() => {
        mapVersion = mapVersion === 1 ? 2 : 1;
        img.src = 'img/m' + mapVersion + '.jpg';
        img.onload = () => { layer.style.opacity = '1'; };
        // fallback se cache
        if (img.complete) layer.style.opacity = '1';
      }, 300);
    });

    applyTransform();
  }

  /* ── INIT ── */
  buildParticles();
  buildRingDots();
  initParallax();
  initReveal();
  initMap();

})();
</script>
`;