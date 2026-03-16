const COSMO = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">O Cosmo</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
        Este é o coração do sistema Greco Romano. O Cosmo é o combustível, e as Técnicas são a forma como seu cavaleiro usa esse combustível para distorcer a realidade, quebrar montanhas ou simplesmente criar uma piada tão ruim que causa dano psíquico.
      </p>
    </div>

    <div class="page-search mb-4"></div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">O que é a Cosmo Energia?</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        A energia cósmica não é apenas um recurso, mas sim a própria essência que conecta os Cavaleiros às forças divinas e às constelações que permeiam o universo. É um microcosmo de energia que pulsa em cada célula, como uma chama ardente que pode ser despertada através do treinamento.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Ao longo de anos de treinamento rigoroso, os guerreiros aprendem a cultivar e amplificar seu cosmo, mergulhando nos recônditos de sua alma. É somente através da sincronização completa entre a mente, o corpo e a energia cósmica que eles podem desbloquear seu verdadeiro potencial.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        No ápice de sua jornada, os Cavaleiros conseguem explodir o universo dentro de si. Essa fusão de energias transcende a mortalidade, permitindo convocar técnicas destrutivas, manipular elementos naturais e transcender os próprios limites físicos.
      </p>

    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Calculando seu Cosmo Máximo</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        O total de Cosmo da reserva de um cavaleiro é definido pela seguinte fórmula:
      </p>
      <div style="text-align:center; padding:1.25rem; background:rgba(255,215,0,0.05); border:1px solid var(--gold-light); border-radius:4px; color:var(--gold-light); font-size:1rem; font-family:'Cinzel',serif; letter-spacing:0.05em; margin-top:1rem;">
        Cosmo Máximo = Bônus da Classe + Soma dos Modificadores (FOR + DES + CON + INT + SAB + CAR)
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Cosmo Durante e Após o Combate</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
        A cosmo energia de um cavaleiro sempre tende a estar com a sua reserva na <strong style="color:var(--gold-light);">metade do seu valor total</strong>. Quando um cavaleiro entra em combate, sua energia começa pela metade e tende a aumentar no decorrer dos turnos (de acordo com nível, armadura e talentos).
      </p>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bônus de Dano Passivo</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Em combate, a cosmo energia soma-se ao dano causado. Este bônus é igual à <strong style="color:var(--gold-light);">metade dos pontos de cosmo atuais</strong> na reserva do personagem. <em>(Exemplo: se o cosmo atual é 10, ele tem +5 de dano adicional)</em>. Este bônus aplica-se <strong>apenas ao primeiro ataque</strong> em caso de ataques múltiplos.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Usando Técnicas</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Executar uma técnica consome pontos de cosmo iguais ao seu custo. No entanto, para o cálculo do dano daquela técnica, a metade do valor de cosmo <strong>antes</strong> do gasto ainda conta como dano extra. O dano final será: <em>Dano da Técnica + Metade do Cosmo Ativo</em>. É necessário ter a reserva exigida para usar a técnica.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Após a Batalha</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Ao fim do combate, o cosmo se mantém onde está, mas começa a diminuir gradativamente à taxa de <strong style="color:var(--gold-light);">1 ponto por minuto</strong>, até se estabilizar na metade da quantidade máxima do cavaleiro.
        </p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Gerador de Técnicas e Ranks</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        As Técnicas Cósmicas representam a manifestação suprema do poder. Cada Técnica possui um <strong style="color:var(--gold-light);">Rank (de 1 a 9)</strong>, um grau de poder que determina sua força destrutiva e complexidade, desde manipulações básicas até golpes que desafiam deuses.
      </p>

      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; text-align: left; border-collapse: collapse; color: var(--silver); font-size: 0.9rem;">
          <thead>
            <tr style="border-bottom: 2px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.75rem 0.5rem; white-space: nowrap;">Armadura</th>
              <th style="padding: 0.75rem 0.5rem; white-space: nowrap;">Ranks</th>
              <th style="padding: 0.75rem 0.5rem;">Descrição de Poder</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.75rem 0.5rem; font-weight: bold;">Discípulo / Aspirante</td>
              <td style="padding: 0.75rem 0.5rem;">Rank 0</td>
              <td style="padding: 0.75rem 0.5rem; line-height: 1.5;">Golpes incompletos, Cosmo recém-desperto, técnicas não letais ou instáveis.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);">
              <td style="padding: 0.75rem 0.5rem; font-weight: bold; color: #cd7f32;">Bronze</td>
              <td style="padding: 0.75rem 0.5rem;">Rank 1, 2, 3</td>
              <td style="padding: 0.75rem 0.5rem; line-height: 1.5;">Poder capaz de derrubar guerreiros experientes, embora ainda longe do domínio absoluto.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.75rem 0.5rem; font-weight: bold; color: #c0c0c0;">Prata</td>
              <td style="padding: 0.75rem 0.5rem;">Rank 4, 5</td>
              <td style="padding: 0.75rem 0.5rem; line-height: 1.5;">Técnicas devastadoras que controlam energia cósmica refinada, capazes de aniquilar exércitos comuns.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);">
              <td style="padding: 0.75rem 0.5rem; font-weight: bold; color: #ffd700;">Ouro</td>
              <td style="padding: 0.75rem 0.5rem;">Rank 6, 7</td>
              <td style="padding: 0.75rem 0.5rem; line-height: 1.5;">Golpes dignos das Doze Casas, capazes de distorcer tempo, espaço ou esmagar a alma.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.75rem 0.5rem; font-weight: bold; color: #87ceeb;">Kamui (Divina)</td>
              <td style="padding: 0.75rem 0.5rem;">Rank 8</td>
              <td style="padding: 0.75rem 0.5rem; line-height: 1.5;">Poder espiritual próximo à perfeição — pode romper dimensões, negar morte ou selar divindades menores.</td>
            </tr>
            <tr style="background:rgba(255,255,255,0.02);">
              <td style="padding: 0.75rem 0.5rem; font-weight: bold; color: #ff4500;">Titã / Divindade</td>
              <td style="padding: 0.75rem 0.5rem;">Rank 9</td>
              <td style="padding: 0.75rem 0.5rem; line-height: 1.5;">Poder reservado a entidades limítrofes. Suas técnicas alteram destinos, rasgam constelações e destroem realidades.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Durante a criação, o jogador pode inventar a técnica que desejar (como o <em>Meteoro de Pégaso</em>), mas todas as características mecânicas (dano, alcance, etc.) devem ser consultadas na listagem geral do gerador para garantir o balanceamento do sistema.
      </p>
    </div>

</div>
`;
