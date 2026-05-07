const LIFE = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Pontos de Vida e Dano</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que São Pontos de Vida?
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Os <strong style="color:var(--gold-light);">Pontos de Vida (PV)</strong> representam a capacidade física, resistência, fôlego e integridade do personagem durante uma batalha.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No Greco Romano RPG, receber dano não significa necessariamente que o cavaleiro foi perfurado ou mutilado imediatamente. Muitas vezes o dano representa:
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:1rem;">
      <li>cansaço extremo;</li>
      <li>impactos internos;</li>
      <li>ossos trincando;</li>
      <li>perda gradual de resistência;</li>
      <li>gasto excessivo de energia física e espiritual.</li>
    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Quanto menos PV um personagem possui, mais próximo ele está de desmaiar ou morrer.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Como o Dano Funciona
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Sempre que um personagem é atingido por um ataque, técnica ou efeito nocivo, ele sofre uma quantidade de dano.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
      <p style="font-size:1rem; color:var(--silver);">
        <strong style="color:var(--gold-light);">
          Dano Final = Dano Rolado - (Divisão do dano toal entre o cavaleiro e sua armadura) + Reduções de Dano (RD) da armadura
        </strong>
      </p>
    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Todo dano recebido, o cavaleiro sempre divide ele ente ele e sua <strong style="color:var(--gold-light);">armadura</strong>. O dano que a armadura sofrer é reduzido da RD (<strong style="color:var(--gold-light);">Redução de Dano</strong>) da armadura.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Cada armadura possui sua própria <strong style="color:var(--gold-light);">RD</strong>, que reduz diretamente parte do dano recebido.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Prático
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Se um Cavaleiro de Bronze recebe um golpe de <strong>18 de dano</strong> e sua armadura possui <strong>RD 5</strong>, ele sofrerá apenas:
      </p>

      <p style="font-size:1rem; margin-top:0.5rem;">
        Metade do dano no cavaleiro e metade do dano total na armadura do cavaleiro. Logo, 9 de dano (metade de 18) será causado na vida do cavaleiro e a outra metade será causado na armadura. Como a armadura possui RD (Redução de Dano) 5. A armadura sofrerá 3 de dano (8 - 5 de RD = 3).
      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Técnicas cósmicas extremamente poderosas podem ignorar parte da defesa física dependendo de seus efeitos.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Estados do Personagem
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Conforme perde PV, o personagem começa a se aproximar de condições críticas.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Vivo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Enquanto possuir PV acima de 0, o personagem continua consciente e capaz de agir normalmente.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Inconsciente
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Quando os PV chegam a 0, o personagem cai inconsciente e não consegue agir.
      </p>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Morte
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Se o dano continuar além do limite suportável do corpo, o personagem poderá morrer definitivamente.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      As Armaduras Também Possuem Vida
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Diferente de muitos RPGs tradicionais, no Greco Romano RPG as armaduras possuem seus próprios <strong style="color:var(--gold-light);">Pontos de Vida estruturais</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Isso acontece porque armaduras sagradas são feitas de materiais vivos como:
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:1rem;">
      <li>oricalco;</li>
      <li>gamânio;</li>
      <li>pó das estrelas.</li>
    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Assim como um cavaleiro pode ser ferido, uma armadura também pode:
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
      <li>rachar;</li>
      <li>quebrar;</li>
      <li>perder partes;</li>
      <li>ser destruída.</li>
    </ul>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Relação Entre PV do Cavaleiro e da Armadura
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Durante combate, o personagem e sua armadura funcionam quase como dois organismos conectados.
    </p>

    <div style="overflow-x:auto; margin-bottom:1rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>
          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">Elemento</th>
            <th style="padding:0.5rem;">Função</th>
          </tr>
        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">PV do Cavaleiro</td>
            <td style="padding:0.5rem;">Representa a resistência física e vital do personagem.</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;">PV da Armadura</td>
            <td style="padding:0.5rem;">Representa a integridade estrutural da armadura sagrada.</td>
          </tr>

        </tbody>

      </table>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Mesmo que o cavaleiro sobreviva, uma armadura destruída pode deixar o personagem extremamente vulnerável.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Cosmo e Resistência em Combate
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No universo Greco Romano, o Cosmo também representa força de vontade.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Muitos cavaleiros continuam lutando mesmo após sofrer danos absurdos porque estão queimando seu Cosmo ao extremo.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
        Exemplo Narrativo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um cavaleiro de Bronze está quase sem PV, com sua armadura rachada e coberta de sangue. 
        Mesmo assim, ele eleva seu Cosmo ao máximo e continua lutando para proteger Athena.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:0.75rem;">
        Isso representa perfeitamente a ideia central do Greco Romano RPG:
        <strong style="color:var(--gold-light);">
          o Cosmo permite ultrapassar os próprios limites.
        </strong>
      </p>

    </div>

  </div>

</div>
`;