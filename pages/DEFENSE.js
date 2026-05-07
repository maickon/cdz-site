const DEFENSE = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Fundamentos do Sistema</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Classe de Armadura (CA) e Defesa</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que é Classe de Armadura (CA)
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      A <strong style="color:var(--gold-light);">Classe de Armadura (CA)</strong> representa o quão difícil é atingir um personagem durante o combate.
      Quanto maior for sua CA, mais difícil será acertar golpes contra você.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No sistema Greco Romano RPG, a defesa de um cavaleiro não depende apenas da armadura física, mas também da velocidade,
      reflexos, experiência de batalha e do Cosmo utilizado para antecipar movimentos inimigos.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">
      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Exemplo: Um Cavaleiro de Bronze extremamente veloz pode evitar ataques mesmo usando uma armadura mais fraca,
        enquanto um Cavaleiro de Ouro consegue bloquear golpes usando tanto sua proteção quanto seu domínio absoluto do Cosmo.
      </p>
    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Como Funciona a Defesa
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Sempre que alguém tenta acertar um ataque, o atacante faz:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
      <p style="font-size:1.1rem; color:var(--gold-light); text-align:center;">
        1d20 + bônus de ataque
      </p>
    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Se o resultado for igual ou maior que a CA do alvo, o golpe acerta.
      Caso contrário, o ataque erra.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">
      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Exemplo do mundo real:
        imagine um lutador tentando acertar um soco em outro.
        Quanto mais rápido, protegido e experiente o defensor for, mais difícil será acertá-lo.
        A CA representa exatamente essa dificuldade.
      </p>
    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Como Calcular a CA
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      A Classe de Armadura normalmente é calculada da seguinte forma:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
      <p style="font-size:1.1rem; color:var(--gold-light); text-align:center;">
        10 + DES + bônus da armadura + bônus de escudo + bônus adicionais
      </p>
    </div>

    <div style="overflow-x:auto; margin-top:1rem;">
      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">
        <thead>
          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">Elemento</th>
            <th style="padding:0.5rem;">Função</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">10</td>
            <td style="padding:0.5rem;">Valor base de defesa.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">DES</td>
            <td style="padding:0.5rem;">Representa reflexos, velocidade e esquiva.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Armadura</td>
            <td style="padding:0.5rem;">Proteção física fornecida pelo traje sagrado.</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Escudo</td>
            <td style="padding:0.5rem;">Proteções adicionais como escudos e broquéis.</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;">Bônus adicionais</td>
            <td style="padding:0.5rem;">Técnicas, poderes, talentos ou efeitos temporários.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Exemplo Prático
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Um Cavaleiro de Bronze possui:
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:1rem;">
      <li>10 de base</li>
      <li>+3 de Destreza</li>
      <li>+5 da Armadura de Bronze</li>
      <li>+1 de Escudo</li>
    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Sua Classe de Armadura será:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem;">
      <p style="font-size:1.1rem; color:var(--gold-light); text-align:center;">
        10 + 3 + 5 + 1 = CA 19
      </p>
    </div>

    <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:1rem;">
      Isso significa que um inimigo precisará alcançar pelo menos 19 no ataque para acertar o golpe.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Defesa de Toque
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Alguns ataques ignoram parcialmente a armadura física e precisam apenas tocar o alvo.
      Isso é chamado de <strong style="color:var(--gold-light);">Defesa de Toque</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Nesses casos, a defesa considera apenas:
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
      <p style="font-size:1.1rem; color:var(--gold-light); text-align:center;">
        10 + DES + bônus especiais
      </p>
    </div>

    <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
      Técnicas cósmicas, rajadas espirituais e poderes mentais frequentemente usam ataques de toque,
      já que não dependem apenas de força física.
    </p>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Defesa Surpresa
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Quando um personagem é pego desprevenido, sem conseguir reagir adequadamente,
      ele perde parte da sua capacidade defensiva.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Isso normalmente acontece:
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
      <li>Antes do personagem agir no combate</li>
      <li>Durante emboscadas</li>
      <li>Quando está inconsciente ou distraído</li>
      <li>Contra técnicas extremamente rápidas</li>
    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">
      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Nessa situação, o personagem normalmente perde o bônus de DES na CA,
        pois não consegue reagir a tempo ao ataque inimigo.
      </p>
    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Armaduras Sagradas e Defesa
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      As armaduras do Greco Romano RPG possuem papel central no sistema defensivo.
      Além da proteção física, elas também ampliam o Cosmo defensivo do cavaleiro.
    </p>

    <div style="overflow-x:auto; margin-top:1rem; margin-bottom:1rem;">
      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">
        <thead>
          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
            <th style="padding:0.5rem;">Armadura</th>
            <th style="padding:0.5rem;">Bônus CA</th>
            <th style="padding:0.5rem;">Escudo</th>
          </tr>
        </thead>

        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Bronze</td>
            <td style="padding:0.5rem;">+5</td>
            <td style="padding:0.5rem;">+1</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Prata</td>
            <td style="padding:0.5rem;">+10</td>
            <td style="padding:0.5rem;">+2</td>
          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
            <td style="padding:0.5rem;">Ouro</td>
            <td style="padding:0.5rem;">+15</td>
            <td style="padding:0.5rem;">+3</td>
          </tr>

          <tr>
            <td style="padding:0.5rem;">Kamui</td>
            <td style="padding:0.5rem;">+20</td>
            <td style="padding:0.5rem;">+4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
      Quanto mais poderosa a armadura, maior será a capacidade do cavaleiro de resistir a golpes físicos,
      técnicas cósmicas e ataques devastadores.
    </p>

  </div>


	<div class="cosmos-card p-6 mb-6">

	  <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
	    Variações de Defesa em Combate
	  </h2>

	  <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
	    No Greco Romano RPG, a Classe de Armadura não é um valor totalmente fixo.
	    Durante o combate, o cavaleiro pode alterar sua forma de defesa dependendo da situação,
	    utilizando reflexos, força física, técnicas ou manobras especiais.
	  </p>

	  <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
	    Isso representa diferentes estilos de luta vistos constantemente entre cavaleiros,
	    onde alguns preferem bloquear ataques diretamente enquanto outros dependem de velocidade extrema e esquivas impossíveis.
	  </p>

	  <hr style="border-color:rgba(255,255,255,0.08); margin:1.5rem 0;">

	  <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
	    Defesa Tradicional (DES)
	  </h3>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
	    Esta é a forma mais comum de defesa.
	    O personagem utiliza reflexos, velocidade e movimentação corporal para evitar golpes.
	  </p>

	  <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
	    <p style="font-size:1.05rem; color:var(--gold-light); text-align:center;">
	      CA = 10 + DES + Armadura + bônus adicionais
	    </p>
	  </div>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
	    Cavaleiros velozes normalmente preferem esse estilo,
	    utilizando movimentos rápidos e leitura de combate para evitar ataques.
	  </p>

	  <hr style="border-color:rgba(255,255,255,0.08); margin:1.5rem 0;">

	  <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
	    Defesa por Bloqueio (FOR)
	  </h3>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
	    Alguns cavaleiros preferem bloquear ataques diretamente ao invés de esquivar.
	    Nesse caso, o personagem utiliza força física e resistência para aparar ou suportar o impacto.
	  </p>

	  <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
	    <p style="font-size:1.05rem; color:var(--gold-light); text-align:center;">
	      CA = 10 + FOR + Armadura + bônus adicionais
	    </p>
	  </div>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
	    Esse tipo de defesa é comum entre cavaleiros extremamente resistentes,
	    guerreiros brutais ou usuários de grandes escudos e armas pesadas.
	  </p>

	  <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">
	    <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
	      Exemplo:
	      Um cavaleiro de Touro pode preferir bloquear um soco diretamente usando sua força monstruosa,
	      enquanto um cavaleiro mais ágil tentaria evitar o ataque.
	    </p>
	  </div>

	  <hr style="border-color:rgba(255,255,255,0.08); margin:1.5rem 0;">

	  <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
	    Esquiva Total
	  </h3>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
	    O personagem pode abandonar completamente sua postura ofensiva para focar apenas em evitar ataques.
	  </p>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
	    Ao entrar em estado de esquiva, o cavaleiro recebe:
	  </p>

	  <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square; margin-bottom:1rem;">
	    <li><strong style="color:var(--gold-light);">-6 na própria CA</strong></li>
	    <li>Maior liberdade narrativa para descrever esquivas acrobáticas</li>
	    <li>Bônus situacionais definidos pelo Mestre</li>
	  </ul>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
	    Essa mecânica representa movimentos extremos de evasão,
	    onde o cavaleiro reduz estabilidade defensiva para tentar escapar completamente do golpe.
	  </p>

	  <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;">
	    <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
	      Exemplo:
	      Um cavaleiro pode saltar sobre destroços, deslizar no chão ou desaparecer momentaneamente usando sua velocidade cósmica.
	    </p>
	  </div>

	  <hr style="border-color:rgba(255,255,255,0.08); margin:1.5rem 0;">

	  <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">
	    Talentos, Técnicas e Habilidades
	  </h3>

	  <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
	    A CA também pode ser alterada por diversos efeitos especiais do sistema.
	  </p>

	  <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

	    <li style="margin-bottom:0.5rem;">
	      <strong style="color:var(--gold-light);">Talentos:</strong>
	      Alguns talentos aumentam esquiva, bloqueio, defesa total ou resistência contra ataques específicos.
	    </li>

	    <li style="margin-bottom:0.5rem;">
	      <strong style="color:var(--gold-light);">Técnicas Cósmicas:</strong>
	      Técnicas podem criar barreiras, aumentar reflexos ou reforçar a armadura temporariamente.
	    </li>

	    <li style="margin-bottom:0.5rem;">
	      <strong style="color:var(--gold-light);">Habilidades de Armadura:</strong>
	      Armaduras evoluídas podem fornecer bônus defensivos adicionais como Reflexo de Flash, Escudo de Inércia ou Dureza Adaptativa.
	    </li>

	    <li>
	      <strong style="color:var(--gold-light);">Estados de Combate:</strong>
	      Efeitos como atordoamento, medo, paralisia ou Cosmo elevado também podem alterar a defesa do personagem.
	    </li>

	  </ul>

	</div>
</div>

`;