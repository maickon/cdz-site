const TECHNIQUES = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Evolução de Técnicas</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="page-search mb-4"></div>
  
    <div class="cosmos-card p-6 mb-6">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>

      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Gerador de Técnicas e Poderes
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        As <strong style="color:var(--gold-light);">Técnicas Cósmicas</strong> representam a manifestação máxima do Cosmo de um cavaleiro. São golpes, defesas e habilidades capazes de canalizar energia espiritual além dos limites mortais.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Cada técnica reflete o estilo de combate do cavaleiro, sua constelação guardiã e sua conexão com as forças divinas do universo. Técnicas podem assumir diversas formas: explosões de energia, manipulação elemental, ataques físicos amplificados pelo Cosmo ou habilidades sobrenaturais capazes de alterar a própria realidade.
      </p>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        RANK das Técnicas
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Toda técnica possui um <strong style="color:var(--gold-light);">RANK</strong>, que representa seu nível de poder. O RANK determina o limite de força, alcance e complexidade que uma técnica pode alcançar.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Os RANKS variam de <strong style="color:var(--gold-light);">1 a 9</strong>. Técnicas de níveis baixos representam habilidades iniciais de manipulação de Cosmo, enquanto RANKs elevados representam poderes capazes de distorcer o espaço, desafiar deuses e alterar o destino.
      </p>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Correspondência entre Rank e Armaduras
      </h2>

      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">
          <thead>
            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
              <th style="padding:0.5rem;">Armadura</th>
              <th style="padding:0.5rem;">Ranks</th>
              <th style="padding:0.5rem;">Descrição de Poder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.5rem;">Aspirante</td>
              <td style="padding:0.5rem;">0</td>
              <td style="padding:0.5rem;">Golpes incompletos e instáveis. O Cosmo está apenas despertando e as técnicas ainda são fracas ou não letais.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">Bronze</td>
              <td style="padding:0.5rem;">1 a 3</td>
              <td style="padding:0.5rem;">Poder suficiente para derrotar guerreiros treinados. Técnicas já possuem impacto real, mas ainda não atingem o verdadeiro domínio cósmico.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">Prata</td>
              <td style="padding:0.5rem;">4 a 5</td>
              <td style="padding:0.5rem;">Técnicas extremamente destrutivas, capazes de manipular energia cósmica refinada e devastar grandes grupos de inimigos.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">Ouro</td>
              <td style="padding:0.5rem;">6 a 7</td>
              <td style="padding:0.5rem;">Golpes comparáveis ao poder das Doze Casas. Podem distorcer espaço, tempo ou atingir diretamente a essência espiritual do inimigo.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">Kamui</td>
              <td style="padding:0.5rem;">8</td>
              <td style="padding:0.5rem;">Poder quase divino. Técnicas desse nível podem romper dimensões, negar a morte ou aprisionar entidades espirituais.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">Titã</td>
              <td style="padding:0.5rem;">9</td>
              <td style="padding:0.5rem;">Poder reservado a entidades próximas aos deuses. Técnicas podem alterar destinos, rasgar constelações ou destruir realidades frágeis.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Como Funciona o Rank
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        O <strong style="color:var(--gold-light);">RANK</strong> define o limite de poder de uma técnica. Quanto maior o RANK, maior será o potencial de dano, alcance, duração ou complexidade de seus efeitos.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Durante a criação de uma técnica, o jogador pode definir qualquer conceito de poder, desde que suas características estejam previstas no gerador de técnicas do sistema. O RANK apenas determina o limite máximo que esses efeitos podem atingir.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Exemplo de Criação
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Um jogador deseja criar uma técnica semelhante ao famoso golpe <strong style="color:var(--gold-light);">Meteoro de Pégasos</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Para isso, ele define as características principais da técnica — como <strong>dano</strong> e <strong>alcance</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Cada característica após a primeira conta como uma <strong style="color:var(--gold-light);">característica adicional</strong>. 
        Porém o custo de XP para essas características adicionais será sempre <strong style="color:var(--gold-light);">metade do valor</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Vamos ao exemplo do <strong>Meteoro de Pégasos</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Assumimos que esta técnica possui duas características: <strong>dano</strong> e <strong>alcance</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Vamos definir <strong style="color:var(--gold-light);">dano</strong> como sendo a <strong style="color:var(--gold-light);">característica principal</strong>. 
        Sendo assim, o custo de XP será equivalente a:
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        <strong style="color:var(--gold-light);">RANK² × 500</strong>
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Assumindo que essa técnica seja de <strong>RANK 2</strong>, temos:
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        4 × 500 = <strong>2000 XP</strong>
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        A outra característica da técnica, que é o <strong>alcance</strong>, também conta como uma característica no cálculo de XP. 
        Porém, como ela é uma <strong style="color:var(--gold-light);">característica secundária</strong>, seu custo será sempre metade.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Portanto, o custo final do <strong>Meteoro de Pégasos</strong> no <strong>RANK 2</strong> será:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:0.75rem;">
        <li>2000 XP pela característica de <strong>dano</strong></li>
        <li>1000 XP pela característica de <strong>alcance</strong> (metade do custo)</li>
      </ul>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Se a técnica tivesse outras características adicionais, cada nova característica (ou efeito) também aumentaria o custo total de XP.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Em seguida, o jogador consulta a <strong style="color:var(--gold-light);" class="desktop-nav-item" data-page="tabelas">tabela geral</strong> do gerador para verificar quais valores essas características podem alcançar de acordo com o RANK disponível para seu personagem.
      </p>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Características das Técnicas
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Cada técnica é formada por uma ou mais <strong style="color:var(--gold-light);">características</strong> (ou efeitos). 
        Essas características definem como o poder funciona dentro do combate.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Entre as características mais comuns estão:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:0.75rem;">
        <li>Dano direto</li>
        <li>Alcance da técnica</li>
        <li>Duração de efeitos</li>
        <li>Área de impacto</li>
        <li>Efeitos especiais (controle, debuff, defesa etc.)</li>
      </ul>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Toda técnica possui uma <strong style="color:var(--gold-light);">característica principal</strong>. 
        Todas as demais características que ela possuir são consideradas 
        <strong style="color:var(--gold-light);">características secundárias</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        O custo de XP de uma característica principal é sempre:
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        <strong style="color:var(--gold-light);">RANK² × 500</strong>
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Caso seja uma característica secundária, o custo cai pela metade:
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        <strong style="color:var(--gold-light);">(RANK² × 500) / 2</strong>
      </p>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Habilitar um Rank
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Para utilizar técnicas de um determinado <strong style="color:var(--gold-light);">RANK</strong>, o cavaleiro precisa primeiro 
        <strong style="color:var(--gold-light);">habilitar esse nível</strong>. Isso é feito pagando um custo de 
        <strong style="color:var(--gold-light);">experiência (XP)</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        O custo de XP para habilitar um RANK depende do nível do próprio RANK, conforme a tabela abaixo:
      </p>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px; margin-bottom:0.75rem;">
        <table style="width:100%; border-collapse:collapse; font-size:1rem; color:var(--silver);">
          <thead>
            <tr>
              <th style="text-align:left; padding:0.4rem 0; color:var(--gold-light);">RANK</th>
              <th style="text-align:left; padding:0.4rem 0; color:var(--gold-light);">CUSTO XP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.35rem 0;">2–3</td>
              <td style="padding:0.35rem 0;">rank × 125 (500xp RANK 2) - (750xp RANK 3)</td>
            </tr>
            <tr>
              <td style="padding:0.35rem 0;">4–6</td>
              <td style="padding:0.35rem 0;">rank × 250 (1000xp RANK 4) - (1500xp RANK 6)</td>
            </tr>
            <tr>
              <td style="padding:0.35rem 0;">7–9</td>
              <td style="padding:0.35rem 0;">rank × 500 (3500xp RANK 7) - (4500xp RANK 9)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Uma vez habilitado, o cavaleiro pode criar quantas técnicas quiser dentro daquele RANK, desde que respeite os limites estabelecidos pelo sistema.
      </p>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Requisito de Nível
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Cada RANK possui um <strong style="color:var(--gold-light);">requisito mínimo de nível</strong>. Isso representa o amadurecimento do Cosmo do cavaleiro e sua capacidade de controlar técnicas mais poderosas.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Caso o personagem atinja o nível necessário, ele poderá habilitar o novo RANK pagando o custo de XP correspondente. Após isso, poderá desenvolver técnicas dentro desse novo limite de poder.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Evoluindo Técnicas
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Para evoluir uma técnica já existente para um <strong style="color:var(--gold-light);">RANK superior</strong>, o cavaleiro deve gastar o 
        <strong style="color:var(--gold-light);">XP do RANK</strong> que ele deseja alcançar.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Supondo que ele saia do <strong>RANK 1</strong> para evoluir uma técnica para o <strong>RANK 2</strong>, ele simplesmente calcula o custo do 
        <strong>RANK 2</strong>, que é <strong>(RANK² × 500)</strong>, e gasta este XP para alcançar o novo RANK.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Lembre-se que este custo é cobrado da <strong style="color:var(--gold-light);">característica principal</strong> da técnica. 
        Para cada <strong style="color:var(--gold-light);">característica secundária</strong>, é cobrado apenas 
        <strong style="color:var(--gold-light);">metade deste valor</strong>.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Fórmula de Custo por RANK</h2>
      <div style="text-align:center; padding:1.25rem; background:rgba(255,215,0,0.05); border:1px solid var(--gold-light); border-radius:4px; color:var(--gold-light); font-size:1.1rem; font-family:'Cinzel',serif; letter-spacing:0.05em; margin-top:1rem;">
        XP do RANK = (RANK)² × 500
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Exemplo de Evolução
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.25rem;">
        <strong style="color:var(--gold-light);">Técnica:</strong> Pirâmide de Fogo
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.25rem;">
        <strong style="color:var(--gold-light);">RANK Atual:</strong> 2
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">RANK Desejado:</strong> 9
      </p>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px; margin-bottom:1rem;">
        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.5rem;">
          <strong style="color:var(--gold-light);">Custo de XP para o RANK 9</strong>
        </p>
        <p style="font-size:1rem; color:var(--silver);">
          RANK 9 → 9² × 500 = <strong>40.500 XP</strong>
        </p>
      </div>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Logo o personagem vai gastar <strong style="color:var(--gold-light);">40.500 XP</strong> para evoluir a técnica dele.
        Supondo que a técnica tenha três características como <strong>dano</strong>, <strong>alcance</strong> e 
        <strong>dano direto</strong>.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:circle;">
        <li style="margin-bottom:0.25rem;">
          <strong>Dano (característica principal)</strong> → 40.500 XP
        </li>
        <li style="margin-bottom:0.25rem;">
          <strong>Alcance (característica secundária)</strong> → 20.250 XP
        </li>
        <li>
          <strong>Dano direto (característica secundária)</strong> → 20.250 XP
        </li>
      </ul>

      <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">
        <p style="font-size:1.05rem; color:var(--silver);">
          <strong>Custo Final da Evolução:</strong>
          <strong style="color:var(--gold-light); font-size:1.1rem;">81.000 XP</strong>
        </p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Contexto Narrativo</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        O gasto de XP representa treinamento intenso, disciplina espiritual e amadurecimento do Cosmo. O cavaleiro pode ter treinado em templos, enfrentado batalhas decisivas ou recebido ensinamentos de seu mestre.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        A evolução é parte integral da narrativa do personagem dentro do mundo greco-romano.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Custo de Cosmo das Técnicas
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Toda técnica possui um <strong style="color:var(--gold-light);">efeito principal</strong>, definido no momento de sua criação. 
        Efeitos secundários podem ser adicionados para ampliar dano, alcance ou outras utilidades.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Cada efeito adicional é tratado como uma <strong style="color:var(--gold-light);">técnica independente</strong> para o cálculo de Cosmo.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Porém, cada efeito adicional custará apenas o <strong style="color:var(--gold-light);">valor do RANK</strong>, 
        enquanto o efeito principal possui custo equivalente ao <strong style="color:var(--gold-light);">dobro do RANK</strong>.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Exemplo Prático
      </h2>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.5rem;">
          <strong style="color:var(--gold-light);">Técnica:</strong> Pirâmide de Fogo
        </li>
        <li style="margin-bottom:0.5rem;">
          <strong style="color:var(--gold-light);">Efeito Principal:</strong> 10d6 de dano direto (RANK 5)
        </li>
        <li>
          <strong style="color:var(--gold-light);">Efeito Secundário:</strong> 6 de dano contínuo por 2 rodadas (RANK 2)
        </li>
      </ul>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px;">
        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.25rem;">
          <strong style="color:var(--gold-light);">RANK 5</strong> → 10 pontos de Cosmo 
          <span style="opacity:0.85;">(custo igual ao dobro do RANK)</span>
        </p>

        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">RANK 2</strong> → 2 pontos de Cosmo 
          <span style="opacity:0.85;">(custo de cosmo é igual ao valor do RANK)</span>
        </p>

        <div style="height:1px; background:rgba(255,215,0,0.2); margin-bottom:0.75rem;"></div>

        <p style="font-size:1.05rem; color:var(--silver);">
          Total: <strong style="color:var(--gold-light);">12 pontos de Cosmo</strong>
        </p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Regras para Efeitos Secundários</h2>
      <ol style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; padding-left:1.5rem; list-style-type:decimal;">
        <li style="margin-bottom:0.25rem;">Atender ao RANK mínimo do cavaleiro</li>
        <li style="margin-bottom:0.25rem;">Gastar o XP correspondente ao RANK do efeito</li>
        <li style="margin-bottom:0.25rem;">Ser aprovado pelo mestre</li>
      </ol>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Os efeitos devem manter coerência com a constelação, o estilo de luta e a história do personagem.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Execução em Diferentes RANKs</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Dominar uma técnica em RANK elevado permite ao cavaleiro utilizá-la em níveis inferiores voluntariamente para:
      </p>
      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.25rem;">Economizar Cosmo</li>
        <li style="margin-bottom:0.25rem;">Evitar mortes desnecessárias</li>
        <li style="margin-bottom:0.25rem;">Treinar controle espiritual</li>
        <li>Participar de duelos de honra</li>
      </ul>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Regra Importante</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        O RANK utilizado deve ser declarado <strong style="color:var(--gold-light);">antes</strong> da rolagem dos dados. Isso define dano, alcance, gasto de Cosmo e efeitos ativos.
      </p>
    </div>

    <div class="cosmos-card p-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Resumo Geral</h2>
      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.25rem;">Todas as técnicas começam no <strong style="color:var(--gold-light);">RANK 1</strong></li>
        <li style="margin-bottom:0.25rem;">RANKs habilitados não exigem novo gasto de XP</li>
        <li style="margin-bottom:0.25rem;">XP só é gasto ao buscar um RANK superior</li>
        <li>Efeitos secundários seguem a mesma regra de criação</li>
      </ul>
    </div>

</div>
`;
