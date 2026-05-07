const MECANIC = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Fundamentos do Sistema</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Sistema d20</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Núcleo do Sistema
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O sistema Greco Romano utiliza como base o famoso sistema <strong style="color:var(--gold-light);">d20</strong>. 
      Isso significa que praticamente todas as ações importantes do jogo são resolvidas rolando um dado de 20 lados.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Sempre que existir risco, dificuldade ou chance de falha, o Mestre normalmente pedirá uma rolagem.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      A Rolagem Base
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      A base do sistema funciona assim:
    </p>

    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:1rem; text-align:center; margin-bottom:1rem;">

      <p style="font-size:1.3rem; color:var(--gold-light); font-family:'Cinzel',serif;">
        1d20 + modificadores
      </p>

    </div>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.75rem;">
        <strong style="color:var(--gold-light);">1d20:</strong>
        representa o fator imprevisível da situação.
      </li>

      <li>
        <strong style="color:var(--gold-light);">Modificadores:</strong>
        representam o treinamento, atributos, poderes, armaduras e experiência do personagem.
      </li>

    </ul>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Prático
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro tenta saltar sobre uma ponte destruída no Santuário.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        O Mestre pede um teste de Atletismo.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        O jogador rola <strong style="color:var(--gold-light);">1d20</strong> e soma seu bônus físico.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        Quanto maior o resultado final, maiores as chances de sucesso.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Classe de Dificuldade (CD)
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Toda ação possui uma dificuldade definida pelo Mestre ou pela própria regra.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Essa dificuldade é chamada de <strong style="color:var(--gold-light);">CD (Classe de Dificuldade)</strong>.
    </p>

    <div style="overflow-x:auto; margin-top:1.5rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>
          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">CD</th>
            <th style="padding:0.5rem;">Dificuldade</th>
          </tr>
        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">5</td>
            <td style="padding:0.5rem;">Muito fácil</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">10</td>
            <td style="padding:0.5rem;">Fácil</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">15</td>
            <td style="padding:0.5rem;">Médio</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">20</td>
            <td style="padding:0.5rem;">Difícil</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;">25+</td>
            <td style="padding:0.5rem;">Extremamente difícil</td>
          </tr>

        </tbody>

      </table>

    </div>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Prático
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro tenta despertar uma armadura através da Comunhão Cósmica.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        A regra informa que a CD é 25.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        Se o resultado final do teste for 25 ou maior, ele consegue despertar o poder da armadura.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Tipos de Testes
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
      O sistema utiliza diferentes tipos de testes dependendo da situação.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Ataque
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Usado para acertar golpes físicos ou técnicas ofensivas.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        O atacante rola 1d20 e tenta superar a Defesa do alvo.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Perícia
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Usado para ações técnicas ou especializadas.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Escalar paredes, investigar ruínas, perceber emboscadas ou controlar o Cosmo são exemplos comuns.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Resistência
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Usado para resistir a efeitos negativos.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Técnicas mentais, venenos, ilusões, congelamento e ataques cósmicos normalmente exigem testes de resistência.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Falha Crítica e Sucesso Crítico
    </h2>

    <div style="margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.4rem;">
        Resultado 1
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Quando o dado cai naturalmente em <strong style="color:var(--gold-light);">1</strong>, ocorre uma falha crítica.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        O personagem falha de forma grave, mesmo sendo poderoso.
      </p>

    </div>

    <div>

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.4rem;">
        Resultado 20
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Quando o dado cai naturalmente em <strong style="color:var(--gold-light);">20</strong>, ocorre um sucesso crítico.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        O personagem executa sua ação de forma extraordinária.
      </p>

    </div>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Prático
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro utiliza uma técnica contra um espectro.
      </p>

      <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">

        <li style="margin-bottom:0.5rem;">
          Se tirar <strong style="color:var(--gold-light);">1</strong>, a técnica pode errar completamente ou sair do controle.
        </li>

        <li>
          Se tirar <strong style="color:var(--gold-light);">20</strong>, o golpe pode causar efeitos épicos, dano ampliado ou ignorar parte da defesa inimiga.
        </li>

      </ul>

    </div>

  </div>

  <div class="cosmos-card p-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O d20 no Mundo Greco Romano
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O sistema d20 está presente em praticamente todas as mecânicas importantes do jogo.
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.75rem;">
        Uso de técnicas cósmicas.
      </li>

      <li style="margin-bottom:0.75rem;">
        Testes de Comunhão Cósmica.
      </li>

      <li style="margin-bottom:0.75rem;">
        Resistências contra ilusões, medo ou controle mental.
      </li>

      <li style="margin-bottom:0.75rem;">
        Ataques corpo-a-corpo.
      </li>

      <li>
        Perícias físicas, sociais e mentais.
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
      Quanto mais poderoso, experiente e treinado for o cavaleiro, maiores serão seus modificadores e maiores suas chances de sucesso.
    </p>

  </div>

</div>

`;