const TESTS = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Fundamentos do Combate</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Testes de Resistência</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que São Testes de Resistência
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Durante uma batalha, nem todo perigo vem de ataques físicos.
      Técnicas especiais, poderes cósmicos, venenos, explosões de energia, ilusões,
      controle mental e efeitos sobrenaturais podem afetar diretamente o personagem.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Para resistir a esses efeitos, o sistema utiliza os 
      <strong style="color:var(--gold-light);">Testes de Resistência</strong>,
      também chamados de 
      <strong style="color:var(--gold-light);">Salvamentos</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Esses testes representam a capacidade do personagem sobreviver,
      reagir ou suportar situações extremas.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Como Funciona um Teste de Resistência
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Sempre que um personagem sofre um efeito perigoso, ele faz uma rolagem:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1rem; color:var(--silver);">

        <strong style="color:var(--gold-light);">
          1d20 + bônus de resistência
        </strong>

      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O resultado deve alcançar ou superar a 
      <strong style="color:var(--gold-light);">Classe de Dificuldade (CD)</strong>
      definida pela técnica, habilidade ou efeito.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um Espectro de Hades utiliza uma técnica capaz de paralisar o corpo do inimigo.
        A técnica possui CD 18.
        <br><br>

        O Cavaleiro de Bronze faz um teste de resistência.
        Se alcançar 18 ou mais, ele resiste ao efeito.
        Caso falhe, sofre a paralisação normalmente.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Os 3 Tipos de Resistência
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O sistema utiliza três tipos principais de resistência:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Fortitude (CON)
      </li>

      <li style="margin-bottom:0.5rem;">
        Reflexos (DES)
      </li>

      <li>
        Vontade (SAB)
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
      Cada uma protege o personagem contra tipos diferentes de ameaça.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Fortitude
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      A resistência de 
      <strong style="color:var(--gold-light);">Fortitude</strong>
      utiliza o modificador de 
      <strong style="color:var(--gold-light);">CONSTITUIÇÃO (CON)</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Ela representa:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Resistência física
      </li>

      <li style="margin-bottom:0.5rem;">
        Capacidade corporal
      </li>

      <li style="margin-bottom:0.5rem;">
        Resistência à dor
      </li>

      <li>
        Sobrevivência extrema
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem; margin-bottom:1rem;">
      Fortitude normalmente é usada contra:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Venenos
      </li>

      <li style="margin-bottom:0.5rem;">
        Sangramento
      </li>

      <li style="margin-bottom:0.5rem;">
        Técnicas destrutivas
      </li>

      <li style="margin-bottom:0.5rem;">
        Efeitos de morte
      </li>

      <li>
        Exaustão física
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo no Mundo Greco Romano
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um Cavaleiro recebe diretamente a explosão de uma técnica cósmica.
        Mesmo ferido, ele usa sua Fortitude para continuar de pé,
        suportando o impacto através da resistência do próprio corpo.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Reflexos
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      A resistência de 
      <strong style="color:var(--gold-light);">Reflexos</strong>
      utiliza o modificador de 
      <strong style="color:var(--gold-light);">DESTREZA (DES)</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Ela representa:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Velocidade de reação
      </li>

      <li style="margin-bottom:0.5rem;">
        Agilidade
      </li>

      <li style="margin-bottom:0.5rem;">
        Coordenação corporal
      </li>

      <li>
        Capacidade de esquiva
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem; margin-bottom:1rem;">
      Reflexos normalmente é usada contra:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Explosões
      </li>

      <li style="margin-bottom:0.5rem;">
        Rajadas de energia
      </li>

      <li style="margin-bottom:0.5rem;">
        Armadilhas
      </li>

      <li style="margin-bottom:0.5rem;">
        Técnicas rápidas
      </li>

      <li>
        Ataques em área
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo no Mundo Greco Romano
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um General Marina dispara centenas de lanças de água cósmica.
        O Cavaleiro tenta escapar usando sua velocidade e percepção,
        desviando antes que os ataques o acertem completamente.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Vontade
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      A resistência de 
      <strong style="color:var(--gold-light);">Vontade</strong>
      utiliza o modificador de 
      <strong style="color:var(--gold-light);">SABEDORIA (SAB)</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Ela representa:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Força mental
      </li>

      <li style="margin-bottom:0.5rem;">
        Controle emocional
      </li>

      <li style="margin-bottom:0.5rem;">
        Determinação
      </li>

      <li>
        Resistência espiritual
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem; margin-bottom:1rem;">
      Vontade normalmente é usada contra:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Controle mental
      </li>

      <li style="margin-bottom:0.5rem;">
        Ilusões
      </li>

      <li style="margin-bottom:0.5rem;">
        Medo sobrenatural
      </li>

      <li style="margin-bottom:0.5rem;">
        Técnicas espirituais
      </li>

      <li>
        Pressão cósmica
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo no Mundo Greco Romano
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um Juiz do Inferno tenta esmagar mentalmente um cavaleiro através de uma técnica ilusória.
        O personagem utiliza sua Vontade para manter a mente firme
        e impedir que o medo destrua sua consciência.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Resistindo Técnicas Especiais
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Grande parte das técnicas do Greco Romano RPG permite testes de resistência.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Dependendo da técnica, o personagem pode:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Reduzir o dano
      </li>

      <li style="margin-bottom:0.5rem;">
        Negar completamente o efeito
      </li>

      <li style="margin-bottom:0.5rem;">
        Resistir parcialmente
      </li>

      <li>
        Permanecer consciente
      </li>

    </ul>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1rem;">

      <p style="font-size:1rem; color:var(--silver);">

        Exemplo:
        <br><br>

        Uma técnica de fogo cósmico causa:
        <br><br>

        • Dano total se falhar no Reflexo
        <br>

        • Metade do dano se passar no teste

      </p>

    </div>

  </div>

    <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Resistências das Armaduras e Evolução do Cavaleiro
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No Greco Romano RPG, as armaduras fortalecem diretamente os 
      <strong style="color:var(--gold-light);">Testes de Resistência</strong>
      do cavaleiro.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Isso significa que armaduras mais poderosas ajudam o personagem a resistir melhor contra:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:1rem;">

      <li style="margin-bottom:0.5rem;">
        Técnicas cósmicas
      </li>

      <li style="margin-bottom:0.5rem;">
        Explosões de energia
      </li>

      <li style="margin-bottom:0.5rem;">
        Efeitos mentais
      </li>

      <li style="margin-bottom:0.5rem;">
        Pressão espiritual
      </li>

      <li>
        Técnicas divinas
      </li>

    </ul>

    <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
      Bônus das Armaduras nos Salvamentos
    </h3>

    <div style="overflow-x:auto; margin-bottom:1.5rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

            <th style="padding:0.75rem; text-align:left;">
              Armadura
            </th>

            <th style="padding:0.75rem; text-align:left;">
              Bônus nos Testes
            </th>

          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Bronze
            </td>

            <td style="padding:0.75rem;">
              +1
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Prata
            </td>

            <td style="padding:0.75rem;">
              +2
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Ouro
            </td>

            <td style="padding:0.75rem;">
              +3
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              Kamui
            </td>

            <td style="padding:0.75rem;">
              +4
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              Titan
            </td>

            <td style="padding:0.75rem;">
              +5
            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Esse bônus normalmente é aplicado em:
    </p>

    <ul style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:1rem;">

      <li style="margin-bottom:0.5rem;">
        Fortitude
      </li>

      <li style="margin-bottom:0.5rem;">
        Reflexos
      </li>

      <li>
        Vontade
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo no Mundo Greco Romano
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Um Cavaleiro de Ouro recebe uma técnica espiritual de um Juiz do Inferno.
        Mesmo que sua mente seja pressionada pela energia maligna,
        a armadura dourada fortalece seus testes de Vontade,
        permitindo resistir parcialmente ao efeito.
      </p>

    </div>

    <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
      Evolução Natural da Classe
    </h3>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Os testes de resistência também aumentam automaticamente conforme o personagem sobe de nível.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Esses valores são definidos diretamente pela 
      <strong style="color:var(--gold-light);">Tabela da Classe Cavaleiro</strong>.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1.5rem;">

      <p style="font-size:1rem; color:var(--silver);">

        Exemplo:
        <br><br>

        Um cavaleiro iniciante possui:
        <br><br>

        • Fortitude +2
        <br>

        • Reflexos +0
        <br>

        • Vontade +0
        <br><br>

        Em níveis mais altos, esses valores aumentam naturalmente,
        representando a evolução física, mental e espiritual do personagem.

      </p>

    </div>

    <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
      Talentos Que Aumentam Resistências
    </h3>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Alguns talentos especializados permitem que o cavaleiro resista melhor contra determinados tipos de ameaça.
    </p>

    <div style="overflow-x:auto;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

            <th style="padding:0.75rem; text-align:left;">
              Talento
            </th>

            <th style="padding:0.75rem; text-align:left;">
              Efeito
            </th>

          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Grande Fortitude
            </td>

            <td style="padding:0.75rem;">
              +2 em testes de Fortitude
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Reflexos Rápidos
            </td>

            <td style="padding:0.75rem;">
              +2 em testes de Reflexos
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Vontade de Ferro
            </td>

            <td style="padding:0.75rem;">
              +2 em testes de Vontade
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              Determinação Cósmica
            </td>

            <td style="padding:0.75rem;">
              +1 em todos os testes de resistência enquanto possuir Cosmo acima de 50%
            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

  <div class="cosmos-card p-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Resumo dos Testes de Resistência
    </h2>

    <ul style="font-size:1rem; line-height:1.9; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Fortitude usa CON
      </li>

      <li style="margin-bottom:0.5rem;">
        Reflexos usa DES
      </li>

      <li style="margin-bottom:0.5rem;">
        Vontade usa SAB
      </li>

      <li style="margin-bottom:0.5rem;">
        Resistências protegem contra técnicas e efeitos especiais
      </li>

      <li style="margin-bottom:0.5rem;">
        O teste é feito usando 1d20 + bônus
      </li>

      <li style="margin-bottom:0.5rem;">
        O resultado deve superar a CD do efeito
      </li>

      <li>
        Armaduras e habilidades podem modificar resistências
      </li>

    </ul>

  </div>

</div>

`;