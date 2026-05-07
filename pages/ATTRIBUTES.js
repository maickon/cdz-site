const ATTRIBUTES = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Fundamentos do Sistema</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Atributos do Personagem</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que São Atributos
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Os atributos representam as capacidades naturais do personagem.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Todo cavaleiro, marina, espectro ou guerreiro possui seis atributos principais que definem seu potencial físico, mental e espiritual dentro do sistema.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Quase todas as regras do jogo utilizam atributos como base para cálculos, testes, ataques, defesa, técnicas e Cosmo.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Os 6 Atributos
    </h2>

    <div style="overflow-x:auto;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">Atributo</th>
            <th style="padding:0.5rem;">Função</th>
          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;"><strong>FOR</strong></td>
            <td style="padding:0.5rem;">Força física e poder corporal.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;"><strong>DES</strong></td>
            <td style="padding:0.5rem;">Velocidade, reflexos e agilidade.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;"><strong>CON</strong></td>
            <td style="padding:0.5rem;">Resistência física e vitalidade.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;"><strong>INT</strong></td>
            <td style="padding:0.5rem;">Conhecimento, lógica e estratégia.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;"><strong>SAB</strong></td>
            <td style="padding:0.5rem;">Controle mental, percepção e Cosmo.</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;"><strong>CAR</strong></td>
            <td style="padding:0.5rem;">Presença, liderança e força espiritual.</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Modificador de Atributo
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Os atributos não são usados diretamente na maioria das rolagens.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Em vez disso, o sistema utiliza o <strong style="color:var(--gold-light);">modificador</strong> do atributo.
    </p>

    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:1rem; text-align:center; margin-bottom:1rem;">

      <p style="font-size:1.2rem; color:var(--gold-light); font-family:'Cinzel',serif;">
        (Atributo - 10) ÷ 2
      </p>

    </div>

    <div style="overflow-x:auto;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">Atributo</th>
            <th style="padding:0.5rem;">Modificador</th>
          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">8</td>
            <td style="padding:0.5rem;">-1</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">10</td>
            <td style="padding:0.5rem;">0</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">12</td>
            <td style="padding:0.5rem;">+1</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">14</td>
            <td style="padding:0.5rem;">+2</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">16</td>
            <td style="padding:0.5rem;">+3</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;">18</td>
            <td style="padding:0.5rem;">+4</td>
          </tr>

        </tbody>

      </table>

    </div>

    <div style="margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        O Cosmo e os Atributos
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:0.75rem;">
        No Greco Romano RPG, o <strong style="color:var(--gold-light);">Cosmo</strong> representa a energia espiritual do cavaleiro. 
        Ele é utilizado para ativar técnicas, golpes especiais, explosões de energia e habilidades sobrenaturais.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:0.75rem;">
        A reserva total de Cosmo normalmente é calculada através da seguinte fórmula:
      </p>

      <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
        <p style="font-size:1rem; color:var(--silver);">
          <strong style="color:var(--gold-light);">
            Cosmo Total = Soma dos modificadores dos atributos + bônus de classe + bônus adicionais
          </strong>
        </p>
      </div>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:0.75rem;">
        Isso significa que personagens com atributos mais equilibrados tendem a possuir uma energia cósmica naturalmente maior.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:0.75rem;">
        Exemplo:
      </p>

      <div style="background:rgba(255,255,255,0.03); padding:1rem; margin-bottom:1rem;">

        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.5rem;">
          Um cavaleiro possui:
        </p>

        <ul style="color:var(--silver); line-height:1.7; padding-left:1.25rem;">
          <li>FOR 16 → +3</li>
          <li>DES 14 → +2</li>
          <li>CON 12 → +1</li>
          <li>INT 10 → +0</li>
          <li>SAB 18 → +4</li>
          <li>CAR 14 → +2</li>
        </ul>

        <p style="font-size:1rem; color:var(--silver); margin-top:0.75rem;">
          Soma dos modificadores = <strong style="color:var(--gold-light);">12</strong>
        </p>

        <p style="font-size:1rem; color:var(--silver);">
          Se a classe fornecer +8 de Cosmo base:
        </p>

        <p style="font-size:1rem; color:var(--gold-light);">
          Cosmo Total = 12 + 8 = 20
        </p>

      </div>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Na prática, isso representa o quanto o cavaleiro consegue expandir sua energia espiritual durante combate. 
        Quanto maior o Cosmo, mais técnicas ele poderá utilizar antes de entrar em exaustão.
      </p>

    </div>
    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Prático
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro possui FOR 18.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        Seu modificador de Força será <strong style="color:var(--gold-light);">+4</strong>.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        Esse valor será usado em ataques físicos, dano corporal e testes de esforço.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Impacto dos Atributos
    </h2>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        FOR — Força
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Define o poder físico do personagem.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">
        <li>Bônus em dano corporal.</li>
        <li>Testes de empurrão, agarrão e destruição.</li>
        <li>Influência em ataques físicos.</li>
      </ul>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Cavaleiros focados em combate bruto normalmente possuem FOR elevada.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        DES — Destreza
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Define velocidade, reflexos e precisão.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">
        <li>Bônus na Defesa.</li>
        <li>Bônus de Iniciativa.</li>
        <li>Acrobacias e esquivas.</li>
      </ul>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Cavaleiros extremamente rápidos dependem muito de DES.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        CON — Constituição
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Representa resistência física e capacidade de suportar dano.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">
        <li>Aumenta Pontos de Vida.</li>
        <li>Melhora resistência física.</li>
        <li>Ajuda contra venenos e fadiga.</li>
      </ul>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Cavaleiros extremamente resistentes normalmente possuem CON elevada.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        INT — Inteligência
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Representa conhecimento, raciocínio e estratégia.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">
        <li>Ajuda em perícias mentais.</li>
        <li>Conhecimento de técnicas e história.</li>
        <li>Planejamento tático.</li>
      </ul>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        SAB — Sabedoria
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Representa percepção, espiritualidade e controle do Cosmo.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">
        <li>Controle de energia cósmica.</li>
        <li>Percepção espiritual.</li>
        <li>Resistência mental.</li>
      </ul>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Muitos testes relacionados ao Cosmo usam SAB.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        CAR — Carisma
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Representa presença, liderança e intensidade espiritual.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-top:0.75rem; list-style-type:square;">
        <li>Influência social.</li>
        <li>Intimidação.</li>
        <li>Poder da presença cósmica.</li>
      </ul>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:0.75rem;">
        Alguns personagens dominam inimigos apenas pela pressão do Cosmo.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Atributos e Cosmo
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No sistema Greco Romano, o Cosmo está diretamente ligado aos atributos mentais e espirituais do personagem.
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.75rem;">
        <strong style="color:var(--gold-light);">SAB:</strong>
        controle espiritual e percepção cósmica.
      </li>

      <li style="margin-bottom:0.75rem;">
        <strong style="color:var(--gold-light);">CAR:</strong>
        intensidade e presença do Cosmo.
      </li>

      <li>
        <strong style="color:var(--gold-light);">INT:</strong>
        domínio técnico e estratégico das técnicas.
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
      Muitas técnicas, habilidades especiais e testes de Comunhão Cósmica dependem desses atributos.
    </p>

  </div>

  <div class="cosmos-card p-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Atributos nos Testes do Sistema
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Sempre que um personagem realiza uma ação, o sistema normalmente utiliza um atributo relacionado.
    </p>

    <div style="overflow-x:auto;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">Situação</th>
            <th style="padding:0.5rem;">Atributo</th>
          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Destruir uma parede</td>
            <td style="padding:0.5rem;">FOR</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Esquivar de uma técnica</td>
            <td style="padding:0.5rem;">DES</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Resistir à dor</td>
            <td style="padding:0.5rem;">CON</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Analisar uma técnica</td>
            <td style="padding:0.5rem;">INT</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Sentir um Cosmo oculto</td>
            <td style="padding:0.5rem;">SAB</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;">Intimidar inimigos</td>
            <td style="padding:0.5rem;">CAR</td>
          </tr>

        </tbody>

      </table>

    </div>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Prático
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro tenta resistir a uma ilusão criada por um espectro.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        O Mestre pede um teste ligado à SAB.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        Quanto maior a Sabedoria do personagem, maiores suas chances de perceber que a ilusão não é real.
      </p>

    </div>

  </div>

</div>

`;