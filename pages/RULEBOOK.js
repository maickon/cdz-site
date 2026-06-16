const RULEBOOK = `
<div class="max-w-2xl mx-auto px-4 py-10">

  <!-- Cabeçalho -->
  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Livro de Regras</h1>
    <div class="gold-rule mb-6"></div>
    <p style="font-family:'Crimson Pro',serif; color:var(--silver); line-height:1.8; font-size:1.05rem;">
      Tenha todas as regras do Greco Romano RPG em um único documento impresso.
      O Livro de Regras reúne cada mecânica, tabela e descrição do sistema em um PDF formatado
      como um verdadeiro grimório — com capa, sumário clicável, capítulos organizados e tipografia
      pensada para leitura longa.
    </p>
  </div>

  <!-- O que está incluído -->
  <div class="cosmos-card p-6 mb-5 pulse-glow">
    <div class="corner-ornament corner-tl"></div>
    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; margin-bottom:1.1rem; letter-spacing:0.1em; text-transform:uppercase;">O que está no livro</h2>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.9rem 2rem;">
      <div>
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. I — Fundamentos</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">A Base do Sistema · Mecânica do Jogo · Atributos do Personagem</p>
      </div>
      <div>
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. II — O Personagem</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">Criação · Vida · Defesa · Armaduras · Talentos · Perícias · Habilidades</p>
      </div>
      <div>
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. III — Combate</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">Ataque · Turnos e Ações · Mecânica de Combate · Batalha · Condições de Status</p>
      </div>
      <div>
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. IV — Cosmo e Técnicas</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">O Cosmo · Cosmo D20 · Técnicas Especiais</p>
      </div>
      <div>
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. V — Economia e Artefatos</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">O Mercado · Artefatos e Itens Mágicos</p>
      </div>
      <div>
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. VI — O Mundo</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">Todas as 10 regiões — continentes, ilhas e territórios do mundo do jogo</p>
      </div>
      <div style="grid-column: 1 / -1;">
        <p style="color:var(--gold); font-size:0.68rem; letter-spacing:0.14em; font-family:'Cinzel',serif; margin-bottom:0.4rem; text-transform:uppercase;">Cap. VII — Referência e Tabelas</p>
        <p style="color:var(--silver); font-size:0.86rem; line-height:1.75;">Resumo rápido das regras · Exemplo de jogo narrado · Todas as tabelas do banco de dados para consulta rápida durante a sessão</p>
      </div>
    </div>
  </div>

  <!-- Como usar o PDF -->
  <div class="cosmos-card p-5 mb-5">
    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:0.9rem; margin-bottom:0.8rem; letter-spacing:0.1em; text-transform:uppercase;">Como usar o PDF</h2>
    <ul style="color:var(--silver); line-height:2.1; font-size:0.88rem; padding-left:1.2rem; list-style:none;">
      <li style="margin-bottom:0.3rem;">
        <span style="color:var(--gold); margin-right:0.5rem;">✦</span>
        O <strong>sumário é clicável</strong> — cada capítulo e seção é um link que leva direto à página correspondente no PDF.
      </li>
      <li style="margin-bottom:0.3rem;">
        <span style="color:var(--gold); margin-right:0.5rem;">✦</span>
        Ideal para <strong>imprimir ou ter aberto no tablet</strong> durante as sessões de jogo.
      </li>
      <li style="margin-bottom:0.3rem;">
        <span style="color:var(--gold); margin-right:0.5rem;">✦</span>
        O documento é gerado com o conteúdo mais recente deste grimório — sempre atualizado.
      </li>
    </ul>
  </div>

  <!-- Configurações de impressão -->
  <div class="cosmos-card p-5 mb-8">
    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:0.9rem; margin-bottom:0.7rem; letter-spacing:0.1em; text-transform:uppercase;">Configurações recomendadas</h2>
    <ul style="color:var(--silver); line-height:2; font-size:0.88rem; padding-left:1.2rem;">
      <li>Impressora: <strong>Salvar como PDF</strong></li>
      <li>Formato: <strong>A4 · Retrato</strong> · Margens: Padrão</li>
      <li>Ativar <strong>"Gráficos de fundo"</strong> nas opções avançadas para preservar a capa e os cabeçalhos coloridos</li>
    </ul>
  </div>

  <!-- Botão -->
  <div class="text-center">
    <button id="rulebook-btn" class="pb-generate-btn" onclick="generateRulebook()">
      📖 GERAR LIVRO DE REGRAS
    </button>
    <p style="color:var(--silver-dim); font-size:0.74rem; margin-top:0.8rem; line-height:1.7;">
      O diálogo de impressão abrirá automaticamente.<br>
      Escolha <strong style="color:var(--silver);">Salvar como PDF</strong> para gerar o arquivo.
    </p>
  </div>

</div>
`;
