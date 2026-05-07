const ATTACK = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Fundamentos do Combate</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Sistema de Ataque</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que é um Ataque
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O sistema de ataque representa a capacidade de um personagem acertar golpes em combate.
      Toda vez que um cavaleiro tenta atingir um inimigo usando socos, chutes, armas, técnicas ou poderes cósmicos,
      o jogo utiliza uma rolagem de ataque para determinar se o golpe conseguiu ultrapassar a defesa do alvo.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No Greco Romano RPG, os combates são extremamente rápidos e violentos.
      Guerreiros podem atravessar colunas de mármore, destruir templos antigos e trocar dezenas de golpes em poucos segundos.
      Mesmo assim, todas essas ações seguem uma estrutura simples baseada no sistema d20.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1rem; color:var(--silver); margin-bottom:0.5rem;">
        Fórmula básica do ataque:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        1d20 + bônus de ataque
      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O resultado final deve ser igual ou maior que a 
      <strong style="color:var(--gold-light);">Classe de Armadura (CA)</strong>
      do inimigo.
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Se superar a CA → o golpe acerta
      </li>

      <li>
        Se ficar abaixo da CA → o golpe erra
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Dentro do Mundo Greco Romano
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um Cavaleiro de Bronze avança contra um Marina de Poseidon durante uma batalha nas ruínas de um templo atlante.
        O cavaleiro desfere um soco revestido de Cosmo tentando atravessar a guarda do inimigo.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        O jogador rola:
      </p>

      <p style="font-size:1rem; color:var(--gold-light); font-weight:bold;">
        1d20 + bônus de ataque
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Se o resultado final superar a CA do Marina, o golpe atravessa sua defesa.
        Caso contrário, o inimigo bloqueia, esquiva ou simplesmente reage rápido o suficiente para evitar o ataque.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que Forma o Bônus de Ataque
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O bônus de ataque representa toda a capacidade ofensiva do personagem.
      Esse valor não é apenas força física.
      Ele representa treinamento, velocidade, experiência de combate, domínio do Cosmo e eficiência marcial.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O bônus total normalmente é formado por:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Bônus Base de Ataque (BBA)
      </li>

      <li style="margin-bottom:0.5rem;">
        Modificador de FOR ou DES
      </li>

      <li style="margin-bottom:0.5rem;">
        Bônus fornecido pela armadura
      </li>

      <li style="margin-bottom:0.5rem;">
        Técnicas especiais
      </li>

      <li style="margin-bottom:0.5rem;">
        Talentos
      </li>

      <li>
        Efeitos mágicos ou cósmicos
      </li>

    </ul>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1rem;">

      <p style="font-size:1rem; color:var(--silver); margin-bottom:0.5rem;">
        Exemplo:
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro possui:
      </p>

      <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li>BBA +6</li>
        <li>FOR +4</li>
        <li>Bônus da armadura +2</li>

      </ul>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:1rem;">
        Resultado:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        1d20 +12
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Bônus Base de Ataque (BBA)
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O 
      <strong style="color:var(--gold-light);">Bônus Base de Ataque</strong>
      é um dos valores mais importantes do combate.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Ele representa o treinamento militar e a experiência real do personagem em batalha.
      Quanto maior o BBA, mais eficiente o personagem se torna em combate.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O BBA é encontrado diretamente na tabela da classe Cavaleiro.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Conforme o cavaleiro sobe de nível:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Sua precisão aumenta
      </li>

      <li style="margin-bottom:0.5rem;">
        Seus ataques ficam mais rápidos
      </li>

      <li style="margin-bottom:0.5rem;">
        Ele aprende a pressionar inimigos experientes
      </li>

      <li>
        Ganha ataques múltiplos
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Narrativo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um jovem Cavaleiro de Bronze ainda luta de forma simples e direta.
        Já um Cavaleiro de Ouro possui velocidade, reflexos e experiência suficientes
        para atacar múltiplas vezes antes mesmo do inimigo reagir.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Ataques Múltiplos
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Conforme o BBA aumenta, o personagem passa a conseguir realizar múltiplos ataques durante a mesma ação completa.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Esses ataques aparecem escritos em sequência na tabela da classe.
    </p>

    <div style="overflow-x:auto; margin-bottom:1rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

            <th style="padding:0.75rem; text-align:left;">
              Sequência
            </th>

            <th style="padding:0.75rem; text-align:left;">
              Ataques
            </th>

          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              +6/+1
            </td>

            <td style="padding:0.75rem;">
              2 ataques
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              +12/+7/+2
            </td>

            <td style="padding:0.75rem;">
              3 ataques
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              +18/+13/+8/+3
            </td>

            <td style="padding:0.75rem;">
              4 ataques
            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Cada número representa um ataque separado.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O primeiro ataque sempre usa o maior bônus.
      Os ataques seguintes recebem penalidades progressivas porque manter velocidade e precisão em sequência é mais difícil.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem;">

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Exemplo:
      </p>

      <p style="font-size:1rem; line-height:1.8; color:var(--silver);">
        Um cavaleiro com:
      </p>

      <p style="font-size:1rem; color:var(--gold-light); font-weight:bold;">
        +12/+7/+2
      </p>

      <p style="font-size:1rem; line-height:1.8; color:var(--silver);">
        realiza:
      </p>

      <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li>1º ataque → 1d20 +12</li>
        <li>2º ataque → 1d20 +7</li>
        <li>3º ataque → 1d20 +2</li>

      </ul>

    </div>

  </div>
    <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Ataques Extras das Armaduras
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Algumas armaduras possuem propriedades sobrenaturais capazes de aumentar drasticamente a velocidade ofensiva do cavaleiro.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Isso representa servomotores mágicos, amplificação de reflexos, impulsos cósmicos automáticos e movimentos além dos limites humanos.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Diferente dos ataques múltiplos vindos do BBA, esses ataques extras são fornecidos diretamente pela armadura.
    </p>

    <div style="overflow-x:auto; margin-bottom:1rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

            <th style="padding:0.75rem; text-align:left;">
              Armadura
            </th>

            <th style="padding:0.75rem; text-align:left;">
              Ataques Extras
            </th>

          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Bronze
            </td>

            <td style="padding:0.75rem;">
              0
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Prata
            </td>

            <td style="padding:0.75rem;">
              +1 ataque
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Ouro
            </td>

            <td style="padding:0.75rem;">
              +2 ataques
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              Kamui
            </td>

            <td style="padding:0.75rem;">
              +3 ataques
            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Esses ataques normalmente utilizam o maior bônus de ataque do personagem.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Bônus de Cosmo no Dano
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O Cosmo representa a energia interior do personagem.
      Quando canalizado em combate, ele amplifica o impacto físico dos golpes.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O bônus de dano do Cosmo equivale a:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        Metade do Cosmo atual
      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Esse bônus entra apenas no primeiro ataque da rodada.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Os ataques seguintes não recebem esse bônus.
      Isso existe para evitar explosões exageradas de dano em personagens extremamente rápidos.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro possui:
      </p>

      <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li>Cosmo atual: 20</li>
        <li>Bônus de Cosmo: +10</li>

      </ul>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        O primeiro golpe da rodada recebe +10 no dano.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Técnicas Corpo-a-Corpo
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Algumas técnicas especiais são classificadas como técnicas corpo-a-corpo.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Isso significa que o personagem utiliza simultaneamente:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Força física
      </li>

      <li style="margin-bottom:0.5rem;">
        Impacto corporal
      </li>

      <li style="margin-bottom:0.5rem;">
        Energia cósmica
      </li>

      <li>
        Poder especial da técnica
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Nesses casos, o dano físico entra junto ao dano da técnica.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem;">

      <p style="font-size:1rem; line-height:1.8; color:var(--silver);">
        O dano total pode incluir:
      </p>

      <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li>Dano da técnica</li>
        <li>FOR</li>
        <li>Bônus da armadura</li>
        <li>Bônus de Cosmo</li>

      </ul>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Deslocamento e Ações Extras
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No Greco Romano RPG, velocidade extrema possui impacto direto no combate.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Personagens muito mais rápidos conseguem agir mais vezes dentro da mesma rodada.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Para cada:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        50 metros de diferença de deslocamento
      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O personagem mais rápido recebe:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        +1 ação extra
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um Cavaleiro de Ouro possui deslocamento 200m.
        Seu inimigo possui deslocamento 100m.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Diferença total:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        100 metros
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Resultado:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        +2 ações extras
      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
      Essas ações extras podem ser usadas para:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li>Atacar</li>
      <li>Usar técnicas</li>
      <li>Se mover</li>
      <li>Defender</li>

    </ul>

  </div>

    <div class="cosmos-card p-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Críticos e Falhas Críticas
    </h2>

    <div style="border-left:3px solid #ef4444; padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:#ef4444; font-size:1rem; margin-bottom:0.5rem;">
        Falha Crítica
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Quando o jogador tira 
        <strong style="color:#ef4444;">1 natural</strong>
        no d20, o ataque falha automaticamente.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Porém, no Greco Romano RPG, existe uma regra adicional para representar erros graves em combate.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Após tirar 1 natural, o personagem deve realizar um segundo teste usando a habilidade principal relacionada à ação.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        O Mestre define a Classe de Dificuldade (CD) dependendo da situação.
      </p>

      <div style="background:rgba(255,255,255,0.03); border-left:3px solid #ef4444; padding:1rem; margin-bottom:1rem;">

        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.5rem;">
          Exemplo:
        </p>

        <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
          Um cavaleiro realiza um golpe físico usando FOR.
        </p>

        <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
          Ele tira:
        </p>

        <p style="font-size:1.1rem; color:#ef4444; font-weight:bold;">
          1 natural
        </p>

        <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
          O Mestre então pede:
        </p>

        <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
          Teste de FOR CD 15
        </p>

      </div>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Se o personagem passar no teste, ele apenas erra o golpe normalmente.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Porém, se falhar nesse segundo teste, algo ruim acontece além do erro do ataque.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        O Mestre possui liberdade narrativa para definir as consequências da falha crítica.
      </p>

      <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li style="margin-bottom:0.5rem;">
          Perder o equilíbrio
        </li>

        <li style="margin-bottom:0.5rem;">
          Ficar vulnerável
        </li>

        <li style="margin-bottom:0.5rem;">
          Cair no chão
        </li>

        <li style="margin-bottom:0.5rem;">
          Ser empurrado
        </li>

        <li style="margin-bottom:0.5rem;">
          Danificar a própria arma
        </li>

        <li>
          Abrir completamente a guarda
        </li>

      </ul>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:1rem;">
        Essa regra também pode ser aplicada em:
      </p>

      <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li style="margin-bottom:0.5rem;">
          Testes de perícia
        </li>

        <li style="margin-bottom:0.5rem;">
          Técnicas especiais
        </li>

        <li style="margin-bottom:0.5rem;">
          Testes físicos
        </li>

        <li>
          Ações arriscadas em geral
        </li>

      </ul>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:1rem;">
        Isso torna o sistema mais cinematográfico e imprevisível, representando situações onde até grandes guerreiros podem cometer erros fatais.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Acerto Crítico
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Quando o jogador tira 
        <strong style="color:var(--gold-light);">20 natural</strong>
        no d20, ocorre uma ameaça crítica.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Isso significa que o golpe foi executado de forma praticamente perfeita.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        O personagem então realiza uma segunda rolagem para confirmar o crítico.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Se essa segunda rolagem acertar a CA do alvo, o crítico é confirmado.
      </p>

    </div>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1.5rem;">

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:0.75rem;">
        Exemplo:
      </p>

      <p style="font-size:1rem; line-height:1.8; color:var(--silver);">
        Um cavaleiro ataca e tira:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        20 natural
      </p>

      <p style="font-size:1rem; line-height:1.8; color:var(--silver);">
        Ele então faz a rolagem de confirmação:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        1d20 + bônus de ataque
      </p>

      <p style="font-size:1rem; line-height:1.8; color:var(--silver);">
        Se acertar novamente a CA do alvo:
      </p>

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        O dano dos dados é dobrado
      </p>

    </div>

    <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
      Regra do 20 / 20 / 20
    </h3>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Existe uma regra lendária dentro do Greco Romano RPG conhecida como:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1.5rem;">

      <p style="font-size:1.1rem; color:var(--gold-light); font-weight:bold;">
        Regra do 20 / 20 / 20
      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Essa regra representa ataques absolutamente perfeitos, executados em um nível quase divino.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O processo funciona da seguinte forma:
    </p>

    <div style="overflow-x:auto; margin-bottom:1.5rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

            <th style="padding:0.75rem; text-align:left;">
              Rolagem
            </th>

            <th style="padding:0.75rem; text-align:left;">
              Resultado
            </th>

          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Primeiro 20
            </td>

            <td style="padding:0.75rem;">
              Ameaça crítica
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Segundo 20
            </td>

            <td style="padding:0.75rem;">
              Crítico absoluto confirmado
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              Terceiro 20
            </td>

            <td style="padding:0.75rem;">
              Morte instantânea
            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O primeiro 20 representa um golpe extremamente preciso.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O segundo 20 mostra que o ataque atravessou completamente as defesas do alvo sem possibilidade de reação.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O terceiro 20 representa um golpe perfeito além dos limites humanos.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Quando isso acontece, o alvo morre instantaneamente independentemente da quantidade restante de Pontos de Vida.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Narrativo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Durante uma batalha nas Doze Casas, um Cavaleiro de Ouro concentra todo o seu Cosmo em um único golpe.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        O ataque atravessa completamente a guarda do inimigo, rompe sua armadura e destrói instantaneamente seus órgãos vitais antes mesmo que o alvo perceba o que aconteceu.
      </p>

    </div>

  </div>
</div>

`;