const ARMORS = `

<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Armaduras</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">O Poder dos Trajes Sagrados</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Em nosso universo, todo combatente que se preze precisa ter a sua armadura para que ele se torne um verdadeiro Cavaleiro. Cada armadura possui um determinado tipo de poder que pode proporcionar ao guerreiro que a veste. Os mais poderosos tendem a ser sempre aqueles que vestem as armaduras mais lendárias.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
        As armaduras de <strong style="color:var(--gold-light);">Bronze</strong> normalmente são vestidas por cavaleiros aspirantes, recém-adolescentes que acabaram de passar no teste básico e estão começando a sua jornada. Sendo os de menor hierarquia, estabelecem a base do exército de seu Deus.
      </p>
      
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; text-align: left; border-collapse: collapse; color: var(--silver); font-size: 0.95rem; white-space: nowrap;">
          <thead>
            <tr style="border-bottom: 1px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.5rem;">Armadura</th>
              <th style="padding: 0.5rem;">RD</th>
              <th style="padding: 0.5rem;">Bônus</th>
              <th style="padding: 0.5rem;">Escudo</th>
              <th style="padding: 0.5rem;">PV Base</th>
              <th style="padding: 0.5rem;">Recuperação de Cosmo</th>
              <th style="padding: 0.5rem;">Mágico</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Bronze</td><td style="padding: 0.5rem;">5/-</td><td style="padding: 0.5rem;">+5</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">50</td><td style="padding: 0.5rem;">1 / rodada</td><td style="padding: 0.5rem;">+1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Prata</td><td style="padding: 0.5rem;">10/-</td><td style="padding: 0.5rem;">+10</td><td style="padding: 0.5rem;">+2</td><td style="padding: 0.5rem;">100</td><td style="padding: 0.5rem;">2 / rodada</td><td style="padding: 0.5rem;">+2</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Ouro</td><td style="padding: 0.5rem;">15/-</td><td style="padding: 0.5rem;">+15</td><td style="padding: 0.5rem;">+3</td><td style="padding: 0.5rem;">200</td><td style="padding: 0.5rem;">3 / rodada</td><td style="padding: 0.5rem;">+3</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Kamui</td><td style="padding: 0.5rem;">20/-</td><td style="padding: 0.5rem;">+20</td><td style="padding: 0.5rem;">+4</td><td style="padding: 0.5rem;">400</td><td style="padding: 0.5rem;">4 / rodada</td><td style="padding: 0.5rem;">+4</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem;">Titan</td><td style="padding: 0.5rem;">25/-</td><td style="padding: 0.5rem;">+25</td><td style="padding: 0.5rem;">+5</td><td style="padding: 0.5rem;">500</td><td style="padding: 0.5rem;">5 / rodada</td><td style="padding: 0.5rem;">+5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:1rem; padding-left:1rem; list-style-type:square;">
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">RD:</strong> O quanto a armadura consegue reduzir do valor rolado quando sofre algum dano.</li>
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Bônus:</strong> O bônus concedido na CA (Classe de Armadura) ao usar o traje.</li>
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Escudo:</strong> O bônus extra na CA concedido caso a armadura forneça algum tipo de proteção específica como escudo, broquel, etc.</li>
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">PV Base:</strong> São os pontos de vida estruturais da própria armadura.</li>
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Recuperação de Cosmo:</strong> O bônus de energia cósmica que o cavaleiro recupera naturalmente a cada rodada de combate.</li>
        <li><strong style="color:var(--gold-light);">Mágico:</strong> Bônus adicional somado ao ataque e ao dano causado pelo cavaleiro (em ataques corpo-a-corpo ou técnicas de dano).</li>
      </ul>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Outros Benefícios</h2>
      
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; text-align: left; border-collapse: collapse; color: var(--silver); font-size: 0.95rem;">
          <thead>
            <tr style="border-bottom: 1px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.5rem;">Armadura</th>
              <th style="padding: 0.5rem;">Deslocamento Adicional</th>
              <th style="padding: 0.5rem;">Ataques Adicionais (com o pior bônus)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Bronze</td><td style="padding: 0.5rem;">+4 metros</td><td style="padding: 0.5rem; text-align: center;">0</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Prata</td><td style="padding: 0.5rem;">+10 metros</td><td style="padding: 0.5rem; text-align: center;">1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Ouro</td><td style="padding: 0.5rem;">+18 metros</td><td style="padding: 0.5rem; text-align: center;">2</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Kamui</td><td style="padding: 0.5rem;">+30 metros</td><td style="padding: 0.5rem; text-align: center;">3</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem;">Titan</td><td style="padding: 0.5rem;">+50 metros</td><td style="padding: 0.5rem; text-align: center;">4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Todo cavaleiro que vestir sua devida armadura se beneficiará passivamente de seus poderes, ganhando deslocamento adicional e ataques extras conforme a hierarquia do traje.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">A Urna de Transporte</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Toda armadura possui a sua Urna, uma caixa sagrada onde fica guardada enquanto não está sendo vestida. Ela funciona como um ambiente de cura especial para o metal mitológico; enquanto o traje repousa ali dentro, ele se regenera dos danos sofridos em batalha.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Embora alguns sejam ousados e andem sempre equipados, é vital armazenar a armadura em sua urna periodicamente. <strong style="color:var(--gold-light);">Uma armadura se regenera a uma taxa de 10% de seus Pontos de Vida totais a cada hora.</strong> Isso significa que, em 10 horas de repouso na Urna, um traje completamente danificado (mas não destruído) será restaurado em 100%.
      </p>
    </div>

    <div class="cosmos-card p-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">A Manifestação da Armadura Sagrada</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Todo combatente possui o direito intrínseco de evocar seu traje místico através de uma <strong style="color:var(--gold-light);">Ação Especial</strong>. Esta ação representa o ápice da conexão espiritual entre o guerreiro e sua constelação guardiã, sendo um "momento épico" sagrado garantido por regra, tanto para Jogadores quanto para NPCs.
      </p>
      
      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Ação de Invocação</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Ao declarar o uso desta Ação Especial, o jogador detém total liberdade narrativa para interpretar como seu personagem clama pelo traje. O Mestre deve obrigatoriamente descrever a cena e <strong>garantir a conclusão do ato</strong>, assegurando que o personagem complete a equipagem de forma triunfal, sem que oponentes possam interromper o processo.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">A Fusão com a Urna</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          No instante em que a armadura é evocada, a estrutura física da urna se desmaterializa, transformando-se em energia pura que se funde ao traje enquanto este cobre o corpo do guerreiro instantaneamente.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">O Repouso do Traje</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Quando o combatente decide retirar sua proteção, as peças se desprendem do corpo de forma autônoma. A energia cósmica rematerializa a urna sólida instantaneamente à frente do usuário, e o traje retorna ao seu interior de forma organizada para iniciar a autorregeneração passiva.
        </p>
      </div>
    </div>
</div>

<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Evolução das Armaduras</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">O Processo de Evolução</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        As armaduras se dividem em 5 classificações de hierarquia: <strong style="color:var(--gold-light);">Bronze, Prata, Ouro, Titan e Kamui</strong>. 
        Sempre que uma armadura sofrer mais que a metade dos seus pontos de vida totais e for 100% restaurada, ela passará por um processo de evolução. Quanto mais perto da destruição chegar, maior será o seu poder após a regeneração.
      </p>
      
      <div style="overflow-x: auto; margin-bottom: 1rem;">
        <table style="width: 100%; text-align: left; border-collapse: collapse; color: var(--silver); font-size: 0.95rem;">
          <thead>
            <tr style="border-bottom: 1px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.5rem;">Armadura</th>
              <th style="padding: 0.5rem;">PV base</th>
              <th style="padding: 0.5rem;">PV perdido</th>
              <th style="padding: 0.5rem;">XP Recebido</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Bronze</td><td style="padding: 0.5rem;">50</td><td style="padding: 0.5rem;">25</td><td style="padding: 0.5rem;">100 xp</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Prata</td><td style="padding: 0.5rem;">100</td><td style="padding: 0.5rem;">50</td><td style="padding: 0.5rem;">200 xp</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Ouro</td><td style="padding: 0.5rem;">200</td><td style="padding: 0.5rem;">100</td><td style="padding: 0.5rem;">400 xp</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">Titan</td><td style="padding: 0.5rem;">400</td><td style="padding: 0.5rem;">200</td><td style="padding: 0.5rem;">800 xp</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem;">Kamui</td><td style="padding: 0.5rem;">500</td><td style="padding: 0.5rem;">250</td><td style="padding: 0.5rem;">1000 xp</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Durante um combate, para cada incremento de dano tomado (ex: 25 PV para Bronze), a armadura recebe XP proporcional. 
        Se o dano ultrapassar os pontos de vida máximos daquele nível, a armadura será destruída.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Níveis e Benefícios</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Toda armadura começa no nível 1 dentro da sua categoria. Para uma armadura subir de nível ela precisa seguir a tabela de experiência abaixo. Todos os bônus recebidos são acumulativos.
      </p>
      
      <div style="overflow-x: auto;">
        <table style="width: 100%; text-align: left; border-collapse: collapse; color: var(--silver); font-size: 0.95rem; white-space: nowrap;">
          <thead>
            <tr style="border-bottom: 1px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.5rem;">Nível</th>
              <th style="padding: 0.5rem;">XP</th>
              <th style="padding: 0.5rem;">RD</th>
              <th style="padding: 0.5rem;">Bônus CA</th>
              <th style="padding: 0.5rem;">Escudo</th>
              <th style="padding: 0.5rem;">PV</th>
              <th style="padding: 0.5rem;">Cosmo</th>
              <th style="padding: 0.5rem;">Mágico</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">1</td><td style="padding: 0.5rem;">0</td><td style="padding: 0.5rem;">-</td><td style="padding: 0.5rem;">-</td><td style="padding: 0.5rem;">-</td><td style="padding: 0.5rem;">-</td><td style="padding: 0.5rem;">-</td><td style="padding: 0.5rem;">-</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">2</td><td style="padding: 0.5rem;">500</td><td style="padding: 0.5rem;">+3</td><td style="padding: 0.5rem;">+3</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">+25</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">+1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">3</td><td style="padding: 0.5rem;">1000</td><td style="padding: 0.5rem;">+5</td><td style="padding: 0.5rem;">+5</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">+50</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">+1</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 0.5rem;">4</td><td style="padding: 0.5rem;">2000</td><td style="padding: 0.5rem;">+7</td><td style="padding: 0.5rem;">+7</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">+150</td><td style="padding: 0.5rem;">+1</td><td style="padding: 0.5rem;">+1</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem;">5</td><td style="padding: 0.5rem;">5000</td><td style="padding: 0.5rem;">+10</td><td style="padding: 0.5rem;">+10</td><td style="padding: 0.5rem;">+2</td><td style="padding: 0.5rem;">+275</td><td style="padding: 0.5rem;">+2</td><td style="padding: 0.5rem;">+2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="cosmos-card p-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">A Memória de Sangue</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        As armaduras sagradas são dotadas de vida própria. Quando um cavaleiro utiliza a <strong style="color:var(--gold-light);">Comunhão Cósmica</strong> ou repara seu traje com o próprio sangue, ocorre uma fusão de DNA cósmico entre o guerreiro e o metal.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        A evolução e as habilidades conquistadas não ficam gravadas "na placa de metal", mas sim no sangue e no Cosmo do Cavaleiro. Quando ele veste uma nova armadura de hierarquia superior, o traje novo absorve a experiência contida no sangue do usuário e se reconfigura instantaneamente.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Se a armadura antiga já possuía níveis, esses avanços são mantidos. Porém, caso a armadura alcance o nível máximo de evolução, a única forma de continuar aprimorando seu poder será através da <strong style="color:var(--gold-light);">Comunhão Cósmica</strong>.
      </p>
    </div>
</div>
`;

const GLOSSARY = `

<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Referência</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Glossário</h1>
      <div class="gold-rule mb-6"></div>
    </div>
    ${[
	    ["Cosmo", "A energia vital e espiritual que permeia o universo e conecta os Cavaleiros às forças divinas. Os Cavaleiros aprendem a controlar e amplificar seu próprio Cosmo para realizar façanhas sobre-humanas."],
	    ["SAB (Sabedoria)", "Atributo que representa o controle espiritual e a compreensão cósmica do Cavaleiro. A Sabedoria influencia diretamente a fórmula da Classe de Dificuldade (CD) das técnicas."],
	    ["Manipular Cosmo", "Perícia essencial que demonstra que o cavaleiro dominou o controle do cosmo e está apto a desenvolver suas técnicas. Permite detectar a cosmo energia em outras formas de vida,curar ferimentos,ocultar a própria energia e aumentar temporariamente a CD ou o dano das técnicas."],
	    ["XP (Pontos de Experiência)", "Moeda de evolução adquirida em aventuras,que representa todo o tempo que um cavaleiro gastará para aprender a sua técnica. É usada para habilitar Ranks,criar e evoluir técnicas,e realizar a Comunhão Cósmica da armadura."],
	    ["Rank", "Nível de poder de uma técnica cósmica,variando de 1 (básico) a 9 (divino/titã). O Rank define o poder máximo das características da técnica,como o custo de cosmo,alcance,duração e dados de dano."],
	    ["Dado do Rank", "O dado de base associado a cada nível de Rank,como d4 para Rank 1 ou d20 para Rank 9. Este dado é utilizado nos cálculos das fórmulas de dano,cura por toque e cura total de pontos de vida."],
	    ["CD (Classe de Dificuldade)", "Valor calculado com base na Sabedoria e no Rank da técnica. Representa o valor que um alvo deve igualar ou superar em um teste de resistência para anular ou reduzir os efeitos nocivos de uma técnica."],
	    ["ND (Nível de Desafio)", "Medida de poder de uma criatura invocada ou conjurada pelas técnicas do personagem. O ND define a quantidade de dados de vida da criatura, seu bônus base de ataque (BBA) e testes de resistência."],
	    ["Bônus de Dano Passivo", "Valor de dano extra adicionado ao primeiro ataque do personagem no turno durante o combate. Esse bônus é sempre igual à metade dos pontos de Cosmo que o cavaleiro possui atualmente em sua reserva."],
	    ["Explosão Cósmica (Queimar o Cosmo)", "Ato de intensificar deliberadamente o fluxo de Cosmo para o seu limite máximo através de um talento especial. Isso potencializa o guerreiro, mas impõe uma redução de 3 pontos de cosmo por rodada até que a energia caia a zero."],
	    ["Cosmo Ardente", "O estado oposto à exaustão, onde o cavaleiro atinge o ápice de sua vibração atômica, geralmente em momentos de superação. A reserva de Cosmo se eleva ao valor máximo instantaneamente, concedendo +2 em jogadas de ataque e testes de resistência."],
	    ["Exaustão Cósmica", "Condição que representa o esgotamento total das reservas espirituais e físicas quando o cosmo cai abaixo de zero. Causa uma penalidade de –2 em todas as jogadas de ataque, resistências e perícias, impedindo o uso de talentos cósmicos."],
	    ["Cosmo Zero (Estado de Indetectabilidade)", "Estratégia na qual o guerreiro reduz propositalmente sua energia para 0 usando a perícia Manipular Cosmo. O cavaleiro torna-se uma casca vazia, impossível de ser detectada por percepções extrassensoriais de outros cavaleiros."],
	    ["Ação Especial", "Tipo de Ação Completa reservada exclusivamente para a execução de qualquer habilidade especial ou técnica do cavaleiro. Também é usada para evocar e vestir a Armadura Sagrada em combate."],
	    ["Ação de Contragolpe", "Tipo de ação onde o cavaleiro segura a sua ação com a condição de bloquear ou anular um golpe ou técnica de outro cavaleiro. Resolve-se através de um teste resistido de Cosmo e Rank da técnica contra o oponente."],
	    ["Privação", "Categoria de técnicas que têm a capacidade de privar alguma habilidade natural de um ser vivo. Pode remover os sentidos físicos, a fala, a respiração, a razão ou até a capacidade de elevar e queimar o Cosmo."],
	    ["Armadura Sagrada", "Trajes místicos dotados de vida própria, compostos por oricalco, gamânio e pó de estrelas, divididos nas categorias Bronze, Prata, Ouro, Kamui e Titan. Concedem Redução de Dano, Pontos de Vida, bônus na CA e recuperação de cosmo."],
	    ["Urna", "Uma caixa sagrada e receptáculo onde a armadura fica guardada enquanto não é vestida. Funciona como um sistema de suporte à vida que permite à armadura regenerar passivamente 10% de seus pontos de vida a cada hora."],
	    ["RD (Redução de Dano)", "Valor numérico que permite reduzir diretamente o dano recebido. É passivamente absorvido pelas Armaduras Sagradas de acordo com sua categoria, ou por criaturas invocadas e objetos criados por técnicas."],
	    ["Armadura Natural", "Proteção física e sobrenatural intrínseca que é adicionada à defesa de criaturas, formas ou avatares invocados pelo Cosmo do cavaleiro."],
	    ["Comunhão Cósmica", "Técnica onde o cavaleiro sintoniza sua cosmo energia com a de sua armadura para evoluí-la. Só pode ser usada gastando 250 XP após a armadura sobreviver à perda de mais da metade de sua vida e se recuperar totalmente."],
	    ["Reparo por sangue (Reparador de Armaduras)", "Perícia que permite dominar o fechamento de frestas e a regeneração de vestimentas. O cavaleiro oferece o próprio sangue e sacrifica seus Pontos de Vida para curar os danos de uma armadura instantaneamente."],
	    ["Memória de Sangue", "Processo místico em que a evolução não fica gravada no metal, mas no sangue do cavaleiro. Ao vestir uma nova armadura de categoria superior, ela absorve essa experiência instantaneamente e se reconfigura para manter as melhorias."],
	    ["Graças Divinas", "Pontos de recompensa que os deuses ou o mestre concedem ao jogador por feitos super-heroicos ou por sobreviver a perigos extremos. Podem ser gastos como preces atendidas para alterar resultados dos dados ou obter ações extras em combate."]
	].map(([term, def]) => `
      <div class="cosmos-card p-5 mb-3">
        <div style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:0.85rem; letter-spacing:0.1em; margin-bottom:0.4rem;">⊕ ${term}</div>
        <p style="font-size:1rem; line-height:1.7; color:var(--silver);">${def}</p>
      </div>
    `).join('')}
  </div>
`;

const TECHNIQUES = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Evolução de Técnicas</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Conceito Geral</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        No sistema de RPG de <strong style="color:var(--gold-light);">Cavaleiros Greco-Romanos</strong>, cada técnica representa a manifestação única do <strong style="color:var(--gold-light);">Cosmo</strong> de um cavaleiro. As técnicas possuem <strong style="color:var(--gold-light);">RANKs</strong>, que indicam o nível de domínio e poder alcançado. Quanto maior o RANK, mais complexo e devastador será o efeito.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Evoluindo Técnicas</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Para evoluir uma técnica já existente para um <strong style="color:var(--gold-light);">RANK superior</strong>, o cavaleiro deve gastar XP. O custo é calculado pela diferença entre o XP do RANK atual e o XP do RANK desejado.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Fórmula de Custo por RANK</h2>
      <div style="text-align:center; padding:1.25rem; background:rgba(255,215,0,0.05); border:1px solid var(--gold-light); border-radius:4px; color:var(--gold-light); font-size:1.1rem; font-family:'Cinzel',serif; letter-spacing:0.05em; margin-top:1rem;">
        XP do RANK = (RANK)² × 500
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Exemplo de Evolução</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Técnica:</strong> Pirâmide de Fogo</p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">RANK Atual:</strong> 2</p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;"><strong style="color:var(--gold-light);">RANK Desejado:</strong> 9</p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:circle;">
        <li style="margin-bottom:0.25rem;">RANK 2 &rarr; 2² × 500 = <strong style="color:var(--silver);">2.000 XP</strong></li>
        <li>RANK 9 &rarr; 9² × 500 = <strong style="color:var(--silver);">40.500 XP</strong></li>
      </ul>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
        <p style="font-size:1.05rem; color:var(--silver);">
          <strong>Custo de Evolução:</strong> <strong style="color:var(--gold-light); font-size:1.1rem;">38.500 XP</strong>
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
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Técnicas com Múltiplos Efeitos</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Toda técnica possui um <strong style="color:var(--gold-light);">efeito principal</strong>, definido no momento de sua criação. Efeitos secundários podem ser adicionados para ampliar dano, alcance ou utilidade.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Cada efeito adicional é tratado como uma <strong style="color:var(--gold-light);">técnica independente</strong> para o cálculo de Cosmo.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Exemplo Prático</h2>
      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Técnica:</strong> Pirâmide de Fogo</li>
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Efeito Principal:</strong> 10d6 de dano direto (RANK 5)</li>
        <li><strong style="color:var(--gold-light);">Efeito Secundário:</strong> 6 de dano contínuo por 2 rodadas (RANK 2)</li>
      </ul>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px;">
        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.25rem;">RANK 5 &rarr; 10 pontos de Cosmo (custo igual ao dobro do RANK)</p>
        <p style="font-size:1rem; color:var(--silver); margin-bottom:0.75rem;">RANK 2 &rarr; 4 pontos de Cosmo (custo igual ao dobro do RANK)</p>
        <div style="height:1px; background:rgba(255,215,0,0.2); margin-bottom:0.75rem;"></div>
        <p style="font-size:1.05rem; color:var(--silver);">Total: <strong style="color:var(--gold-light);">14 pontos de Cosmo</strong></p>
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


const CHARACTER_CREATE = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Criação de Personagem</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passos 1 e 2: Origem e Atributos</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Em nosso RPG, todos os personagens criados pelos jogadores são humanos. O jogador deve apenas descrever a aparência do seu personagem, sua história e rolar os dados de habilidades.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Os jogadores rolam <strong style="color:var(--gold-light);">4d6</strong> para cada habilidade (Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma). Descarte o dado de menor valor e some os outros três.
      </p>
      <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1rem; margin-bottom:1rem;">
        <p style="font-size:1rem; color:var(--silver);">
          O valor mínimo que uma habilidade pode ter é <strong style="color:var(--gold-light);">12</strong>. Rolagens com um resultado menor do que doze são descartadas e o jogador deve fazer uma nova rolagem para aquela habilidade.
        </p>
      </div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Esta regra reflete que cada indivíduo que conseguiu se tornar um cavaleiro é acima da média, e que pessoas comuns não têm chances de ingressar nessa ordem sagrada.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 3: Técnicas Iniciais</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Todo cavaleiro começa com algumas técnicas básicas que aprendeu em seu treinamento (ou que inventou na hora). Você começa o jogo com um número de técnicas de <strong style="color:var(--gold-light);">RANK 1</strong> igual a:
      </p>
      <div style="text-align:center; padding:1rem; border:1px solid rgba(255,215,0,0.2); border-radius:4px; margin-bottom:1rem; color:var(--gold-light); font-family:'Cinzel',serif;">
        1 + seu modificador de Inteligência
      </div>
      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem; font-style:italic;">
        (Exemplo: Se você tem Inteligência 14, seu modificador é +2. Você começa com 1 + 2 = 3 técnicas de RANK 1).
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Estas técnicas iniciais <strong style="color:var(--gold-light);">não custam</strong> Pontos de Experiência (XP) para serem criadas. Você deve criá-las usando o “Gerador de Técnicas” (Capítulo 3).
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 4: Talentos Iniciais</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        No Nível 1, todo Cavaleiro recebe <strong style="color:var(--gold-light);">1 (um) talento</strong> (como visto na Tabela da Classe). Você pode escolher qualquer talento da lista de “Talentos Especiais para Cavaleiros” ou “Talentos Modificados” (Capítulo 2), desde que cumpra seus pré-requisitos.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 5: A Classe Cavaleiro</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Os Cavaleiros são guerreiros lendários, inspirados pelas antigas tradições dos seus Deuses e pelo poder cósmico que permeia o universo. Essa classe representa a conexão profunda entre o indivíduo e as forças cósmicas, permitindo que desencadeiem habilidades impressionantes e manifestem a energia das estrelas em batalha.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
        Todo cavaleiro pertence a uma única classe que dita o seu avanço. Entenda as colunas da tabela de progressão:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">XP / Lv:</strong> Pontos de experiência necessários e o Nível atual.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Cosmo:</strong> Pontos de cosmo ganhos conforme avança de nível.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Dano:</strong> O dano do ataque desarmado do cavaleiro.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">BBA:</strong> Bônus Base de Ataque.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">FORT, VONT, REFL:</strong> Testes de resistência base (Fortitude, Vontade, Reflexos).</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Talento:</strong> Talentos ou Sentidos adicionais despertados.</li>
        <li><strong style="color:var(--gold-light);">Desl:</strong> O deslocamento base (em metros).</li>
      </ul>

      <div style="overflow-x: auto;">
        <table style="width: 100%; text-align: center; border-collapse: collapse; color: var(--silver); font-size: 0.85rem; white-space: nowrap;">
          <thead>
            <tr style="border-bottom: 2px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.5rem;">XP</th>
              <th style="padding: 0.5rem;">Lv</th>
              <th style="padding: 0.5rem;">Cosmo</th>
              <th style="padding: 0.5rem;">Dano</th>
              <th style="padding: 0.5rem;">BBA</th>
              <th style="padding: 0.5rem;">FORT</th>
              <th style="padding: 0.5rem;">VONT</th>
              <th style="padding: 0.5rem;">REFL</th>
              <th style="padding: 0.5rem;">Talento</th>
              <th style="padding: 0.5rem;">Desl.</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>0</td><td>1</td><td>1</td><td>d6</td><td>1</td><td>2</td><td>2</td><td>2</td><td>1.Tal</td><td>9</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>1.000</td><td>2</td><td>2</td><td>d6</td><td>2</td><td>3</td><td>3</td><td>3</td><td>1.Tal</td><td>12</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>3.000</td><td>3</td><td>3</td><td>d6</td><td>3</td><td>3</td><td>3</td><td>3</td><td>-</td><td>15</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>6.000</td><td>4</td><td>4</td><td>d6</td><td>4</td><td>4</td><td>4</td><td>4</td><td>1.Tal</td><td>18</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>10.000</td><td>5</td><td>5</td><td>d8</td><td>5/1</td><td>4</td><td>4</td><td>4</td><td>-</td><td>22</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>15.000</td><td>6</td><td>7</td><td>d8</td><td>6/2</td><td>5</td><td>5</td><td>5</td><td>1.Tal</td><td>26</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>21.000</td><td>7</td><td>9</td><td>d8</td><td>7/3</td><td>5</td><td>5</td><td>5</td><td>6º Sentido</td><td>30</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>28.000</td><td>8</td><td>11</td><td>d8</td><td>8/4</td><td>6</td><td>6</td><td>6</td><td>1.Tal</td><td>34</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>36.000</td><td>9</td><td>13</td><td>d10</td><td>9/5/1</td><td>6</td><td>6</td><td>6</td><td>-</td><td>39</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>45.000</td><td>10</td><td>15</td><td>d10</td><td>10/6/2</td><td>7</td><td>7</td><td>7</td><td>1.Tal</td><td>44</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>55.000</td><td>11</td><td>18</td><td>d10</td><td>11/7/3</td><td>7</td><td>7</td><td>7</td><td>-</td><td>49</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>66.000</td><td>12</td><td>21</td><td>d10</td><td>12/8/4</td><td>8</td><td>8</td><td>8</td><td>1.Tal</td><td>53</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>78.000</td><td>13</td><td>24</td><td>d12</td><td>13/9/5/1</td><td>8</td><td>8</td><td>8</td><td>7º Sentido</td><td>58</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>91.000</td><td>14</td><td>27</td><td>d12</td><td>14/10/6/2</td><td>9</td><td>9</td><td>9</td><td>1.Tal</td><td>63</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>105.000</td><td>15</td><td>30</td><td>d12</td><td>15/11/7/3</td><td>9</td><td>9</td><td>9</td><td>-</td><td>68</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>120.000</td><td>16</td><td>34</td><td>d12</td><td>16/12/8/4</td><td>10</td><td>10</td><td>10</td><td>1.Tal</td><td>73</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>136.000</td><td>17</td><td>38</td><td>d20</td><td>17/13/9/5/1</td><td>10</td><td>10</td><td>10</td><td>-</td><td>80</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>153.000</td><td>18</td><td>42</td><td>d20</td><td>18/14/10/6/2</td><td>11</td><td>11</td><td>11</td><td>1.Tal, 8º Sentido</td><td>90</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>171.000</td><td>19</td><td>46</td><td>d20</td><td>19/15/11/7/3</td><td>11</td><td>11</td><td>11</td><td>-</td><td>100</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>190.000</td><td>20</td><td>50</td><td>d20</td><td>20/16/12/8/4</td><td>12</td><td>12</td><td>12</td><td>1.Tal</td><td>110</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>210.000</td><td>21</td><td>55</td><td>2d10</td><td>+1</td><td>12</td><td>12</td><td>12</td><td>-</td><td>130</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>231.000</td><td>22</td><td>60</td><td>2d10</td><td>+1</td><td>13</td><td>13</td><td>13</td><td>1.Tal</td><td>150</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>243.000</td><td>23</td><td>65</td><td>2d10</td><td>+1</td><td>13</td><td>13</td><td>13</td><td>-</td><td>170</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>287.000</td><td>24</td><td>70</td><td>2d10</td><td>+1</td><td>14</td><td>14</td><td>14</td><td>1.Tal</td><td>190</td></tr>
            <tr><td>312.000</td><td>25</td><td>75</td><td>2d10</td><td>+1</td><td>14</td><td>14</td><td>14</td><td>-</td><td>220</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 6: Detalhes Finais</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Agora, junte tudo. Dê ao seu Cavaleiro um nome (provavelmente ridículo, como manda a tradição), uma descrição física e pense em sua história. Por que ele se tornou um cavaleiro? Qual seu objetivo? Ele quer salvar o mundo ou apenas pagar as contas?
      </p>
    </div>
</div>
`;

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

const COMBAT = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">O Combate</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
        O combate no sistema Greco Romano funciona de maneira semelhante a um combate tradicional do sistema d20, mas possui particularidades inspiradas no estilo dramático e técnico dos cavaleiros que manipulam o Cosmo. As bases são familiares, porém o sistema oferece mais possibilidades táticas.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Início do Combate</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Antes que o confronto comece, os envolvidos costumam declarar suas intenções. Então, determina-se quem age primeiro através da rolagem de <strong style="color:var(--gold-light);">Iniciativa</strong>. Tal como no d20, o participante com iniciativa mais alta age antes, seguido pelos demais em ordem decrescente, desenvolvendo o combate em turnos.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Tipos de Defesa</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
        Em termos normais, a sua CA é formulada usando a Destreza. Mas, se quiser uma ação mais estratégica, você pode optar por bloquear um golpe deliberadamente ou se esquivar dele. Nestas condições, a ação narrativa entre o golpe e a defesa é definida por você.
      </p>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">1. Bloquear o Golpe</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          Você usa suas mãos, escudo ou antebraço para suportar o impacto. Nesta condição, a sua CA é beneficiada pelo seu <strong style="color:var(--gold-light);">bônus de Força</strong>, e não de Destreza. Se o oponente acertar, o dano é causado normalmente. Se você bloquear, ganha o direito de narrar o bloqueio de forma épica ou intimidadora.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          <strong style="color:var(--gold-light);">Custo:</strong> O bloqueio bem-sucedido sempre causa um <strong style="color:var(--gold-light);">Dano Residual</strong> igual ao modificador de Força do atacante (em ataques comuns) ou igual ao RANK da técnica especial bloqueada. Se a técnica focar em força, o dano residual é a metade do mod. de Força + metade do RANK (arredondado para baixo).
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">2. Esquivar do Golpe</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          Uma reação mais difícil, mas 100% segura. Você usa sua Destreza na CA, mas sofre uma <strong style="color:var(--gold-light);">penalidade de -6 na CA</strong>. Se o oponente errar, a esquiva foi perfeita: você e sua armadura não sofrem nenhum dano.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          <strong style="color:var(--gold-light);">Restrição:</strong> Só funciona contra ataques corpo-a-corpo, à distância ou golpes com foco físico em alvo único. Você precisa estar ciente do atacante.
        </p>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px;">
        <p style="font-size:1rem; color:var(--silver);">
          <strong style="color:var(--gold-light);">Queima de Cosmo Defensiva:</strong> Tanto no bloqueio quanto na esquiva, o personagem pode gastar <strong style="color:var(--gold-light);">2 pontos de cosmo</strong> para receber um benefício de +1 na sua CA contra aquele ataque. Limite de 1 vez por ataque.
        </p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Tipos de Ações num Turno</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        As ações podem ser de diversos tipos: <strong>Completa</strong> (encerra o turno), <strong>Parcial</strong> (pode fazer duas no turno), <strong>Livre</strong> (falar, soltar objeto), <strong>Movimento</strong> (gera AdO) e <strong>Retirada</strong> (Ação completa, move até 4x o deslocamento sem gerar AdO). Além destas, temos as manobras avançadas:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:none;">
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação Especial (Completa)</strong><br>
          Reservada para técnicas especiais (salvo exceções da própria técnica). O cavaleiro ganha um movimento bônus de <strong style="color:var(--gold-light);">6 metros</strong> sem gerar AdO para tomar distância e preparar a postura de seu golpe. Exige teste de <strong style="color:var(--gold-light);">Concentração (CD 10 + RANK da técnica)</strong>. Se sofreu dano no turno, o dano vira penalidade no teste.
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Suporte Cósmico (Parcial)</strong><br>
          Transfere Cosmo da sua reserva para um aliado disposto. O alcance é <strong style="color:var(--gold-light);">9 metros + (seu Nível × Multiplicador da Armadura)</strong>.
          <div style="margin-top:0.5rem; overflow-x: auto;">
            <table style="width: 60%; text-align: left; border-collapse: collapse; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.1);">
              <tr style="border-bottom: 1px solid var(--gold-light); color: var(--gold-light);">
                <th style="padding: 0.4rem;">Armadura</th><th style="padding: 0.4rem;">Multiplicador</th>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 0.4rem;">Bronze</td><td style="padding: 0.4rem;">1</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 0.4rem;">Prata</td><td style="padding: 0.4rem;">2</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 0.4rem;">Ouro</td><td style="padding: 0.4rem;">3</td></tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 0.4rem;">Kamui</td><td style="padding: 0.4rem;">4</td></tr>
              <tr><td style="padding: 0.4rem;">Titan</td><td style="padding: 0.4rem;">5</td></tr>
            </table>
          </div>
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Ataque Comum</strong><br>
          Até a metade de seus ataques totais gasta uma <strong style="color:var(--gold-light);">Ação Parcial</strong>. Executar TODOS os seus múltiplos ataques gasta uma <strong style="color:var(--gold-light);">Ação Completa</strong>.
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Ataque Geral (Completa)</strong><br>
          Desfere um ataque comum em cada oponente diferente que esteja dentro do seu limite total de deslocamento no turno. Não gera AdO ao entrar na área ameaçada, mas gera se você sair da área de um inimigo engajado para ir ao próximo.
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Defesa Total (Completa)</strong><br>
          O personagem apenas se defende. Recebe um bônus na CA igual a <strong style="color:var(--gold-light);">4 + (2 × Multiplicador da Armadura)</strong>.
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Defesa Parcial (Parcial)</strong><br>
          Sofre -6 de penalidade no Ataque, mas ganha +3 na CA. O multiplicador da armadura reduz a penalidade de ataque em -1 por ponto e aumenta a CA em +1 por ponto.
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Recarregar Cosmo</strong><br>
          Manifesta sua aura em combate para recuperar Cosmo mais rápido. Como <strong>Ação Parcial</strong>: +50% da recuperação normal. Como <strong>Ação Completa</strong>: 2x a recuperação normal. Não gera AdO.
        </li>
        <li style="margin-bottom:1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Contragolpe (Parcial/Completa)</strong><br>
          Prepara uma ação para anular o golpe de um oponente. Ocorre um <strong style="color:var(--gold-light);">Choque Cósmico</strong>: um teste resistido de <em>(d20 + Cosmo Atual + Bônus de Ataque ou RANK da Técnica)</em>. O vencedor sobrepuja o golpe. A ação gasta (Parcial ou Completa) deve ser equivalente ao nível do ataque recebido.
        </li>
        <li>
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Limiar (Completa)</strong><br>
          Ativada apenas ao chegar a 20% do PV, sofrer 3 falhas críticas, ou ver um aliado cair. Representa o despertar máximo do Cavaleiro pelo ódio ou desespero. <br>
          <strong>Efeitos:</strong> Cosmo vai ao MÁXIMO instantaneamente, Dano Dobrado, +5 no Ataque e Testes de Resistência naquela rodada. <strong style="color:var(--silver); text-decoration:underline;">Após o golpe, o cavaleiro cai inconsciente até o fim da luta.</strong>
        </li>
      </ul>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Graças Divinas</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Concedidas pelo Mestre ao realizar feitos épicos ou ter superações extremas. O jogador acumula estes pontos para mudar o destino.
      </p>
      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-top:0.5rem;">
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Custo 1 ponto:</strong> Alterar o resultado de um dado ou ganhar 1 Ação Parcial extra.</li>
        <li><strong style="color:var(--gold-light);">Custo 2 pontos:</strong> Ganhar um turno (rodada de ação) inteiro adicional.</li>
      </ul>
    </div>

    <div class="cosmos-card p-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Condições Especiais</h2>
      
      <div style="margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Exaustão Cósmica</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Ocorre quando o Cosmo fica abaixo de 0. O personagem sofre <strong style="color:var(--gold-light);">-2 em todos os Ataques e Testes de Resistência/Perícia</strong>, e perde acesso a qualquer Talento Cósmico.
        </p>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Cosmo Ardente</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          O ápice da vibração atômica. A reserva vai ao máximo instantaneamente. O cavaleiro recebe <strong style="color:var(--gold-light);">+2 nos Ataques e Testes de Resistência</strong> enquanto o Cosmo se mantiver no topo.
        </p>
      </div>

      <div>
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Estado de Indetectabilidade (Cosmo Zero)</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Usando a perícia Manipular Cosmo para zerar sua aura, o cavaleiro vira uma "casca vazia", invisível aos sentidos extrassensoriais inimigos. Se for forçado a lutar neste estado, inicia com 0 de reserva e não pode usar técnicas avançadas no primeiro turno.
        </p>
      </div>
    </div>
</div>
`;

const RESUME = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Resumo de Regras</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Custo e Características das Técnicas</h2>
      
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        O custo de cosmo para executar uma técnica é sempre o <strong style="color:var(--gold-light);">dobro do RANK</strong>.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Uma técnica pode ter várias características (efeito principal e secundários). Cada efeito é calculado como se o jogador adicionasse mais uma técnica ao grupo.
      </p>

      <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          <strong style="color:var(--gold-light);">Exemplo 1:</strong> Uma técnica que aumenta a Força (RANK 1) custa 2 de cosmo. Se aumentar FORÇA, DESTREZA e CONSTITUIÇÃO (todas no RANK 1), o custo total será <strong style="color:var(--gold-light);">6 pontos de cosmo</strong>.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          <strong style="color:var(--gold-light);">Exemplo 2 (Voo):</strong> Se exige Altura (RANK 2 = 4 cosmo), Duração (RANK 3 = 6 cosmo) e Carga (RANK 1 = 2 cosmo), o custo total para executar esse voo será de <strong style="color:var(--gold-light);">12 pontos de cosmo</strong>.
        </p>
      </div>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        <strong style="color:var(--gold-light);">Controle de Poder:</strong> Um cavaleiro não é obrigado a usar sua técnica no poder máximo. Ele pode declarar que usará uma técnica de RANK 9 como se fosse de RANK 1 para economizar cosmo, ajustando o dano e os efeitos para o nível escolhido.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Testes e Execução</h2>
      
      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Classe de Dificuldade (CD)</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Para qualquer técnica que exija um teste de resistência do alvo, a CD padrão é calculada pela fórmula: <strong style="color:var(--gold-light);">10 + Modificador de Sabedoria (SAB) + RANK da técnica</strong>. A Sabedoria representa o controle espiritual e cósmico.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Concentração</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
          Executar uma técnica em combate gasta uma <strong style="color:var(--gold-light);">Ação Especial (Rodada Completa)</strong> e exige um teste de Concentração com <strong style="color:var(--gold-light);">CD 10 + RANK da técnica</strong>. Se o cavaleiro sofreu dano na rodada, esse dano é somado como penalidade à CD.
        </p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Mecânicas de Cosmo (Energia Vital)</h2>
      
      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:square;">
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Cosmo Máximo:</strong> Soma do bônus de Cosmo da Tabela de Classe + soma de TODOS os modificadores de atributos (FOR + DES + CON + INT + SAB + CAR).
        </li>
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Cosmo no Combate:</strong> Ao iniciar uma luta, a reserva começa sempre pela <strong style="color:var(--gold-light);">metade</strong> do valor total.
        </li>
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Recuperação:</strong> Em combate, aumenta a cada rodada baseado na armadura (Bronze +1, Prata +2, Ouro +3). Após a batalha, diminui 1 ponto por minuto até estabilizar na metade.
        </li>
        <li>
          <strong style="color:var(--gold-light);">Bônus de Dano Passivo:</strong> Metade do seu Cosmo Atual é somado automaticamente como dano extra no seu <strong style="color:var(--gold-light);">primeiro ataque físico ou técnica</strong> de cada turno.
        </li>
      </ul>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Criação e Evolução de Técnicas (XP)</h2>
      
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        <strong style="color:var(--gold-light);">Habilitar um RANK:</strong> Antes de criar uma técnica, você deve pagar o custo fixo em XP para "desbloquear" aquele RANK para o seu personagem (Ex: Rank 2 custa 250 XP; Rank 4 custa 1.000 XP).
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Criar/Evoluir a Técnica:</strong> Para criar um efeito ou evoluir uma técnica, a fórmula do custo é sempre:
      </p>

      <div style="text-align:center; padding:1rem; background:rgba(255,215,0,0.05); border:1px solid var(--gold-light); border-radius:4px; color:var(--gold-light); font-size:1.1rem; font-family:'Cinzel',serif; letter-spacing:0.05em; margin-bottom:1rem;">
        Custo = (RANK)² × 500 XP
      </div>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); font-style:italic;">
        <strong>Exemplo de Evolução:</strong> Se você tem uma técnica RANK 2 (2.000 XP) e quer evoluir para RANK 9 (40.500 XP), você paga apenas a diferença (38.500 XP).
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Regras de Combate e Defesa</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
        Você não precisa aceitar um ataque passivamente. Reaja de três formas principais:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:none;">
        <li style="margin-bottom:1rem; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Bloqueio (Ação Reativa)</strong><br>
          Defesa com corpo, arma ou escudo. Substitui a Destreza pela <strong style="color:var(--gold-light);">Força</strong> na CA. Se for atingido, sofre dano normal. Se tiver sucesso no bloqueio, não sofre o dano total, mas sofre um <strong>Dano Residual</strong> (igual ao mod. de Força do atacante ou RANK da técnica do inimigo).
        </li>
        <li style="margin-bottom:1rem; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Esquiva (Ação Reativa)</strong><br>
          Mais difícil, porém mais segura. Sofre <strong style="color:var(--gold-light);">-6 de penalidade na CA</strong>. Se tiver sucesso, você não sofre nenhum dano.
          <div style="margin-top:0.5rem; font-style:italic; color:#aaa;">Nota: Gaste 2 pontos de cosmo em qualquer manobra (Bloqueio ou Esquiva) para ganhar +1 na CA contra aquele ataque.</div>
        </li>
        <li style="border-left: 2px solid rgba(255,255,255,0.2); padding-left: 1rem;">
          <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Contragolpe</strong><br>
          "Segurar" a ação para anular a técnica inimiga. Resolve-se com uma disputa: <strong style="color:var(--gold-light);">d20 + Cosmo Atual + RANK da técnica</strong> (de ambas as partes). O maior resultado vence e neutraliza o perdedor.
        </li>
      </ul>
    </div>

    <div class="cosmos-card p-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Armaduras Sagradas e Evolução</h2>
      
      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:square;">
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Evocar a Armadura:</strong> Vestir o traje é uma <strong style="color:var(--gold-light);">Ação Especial</strong> que nunca gera AdO e não pode ser interrompida. É um momento narrativo garantido.
        </li>
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Recuperação na Urna:</strong> Quando não está vestida, recupera <strong style="color:var(--gold-light);">10% dos PV</strong> por hora dentro da caixa sagrada.
        </li>
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Reparo por Sangue:</strong> Se quebrar, um Reparador de Armaduras (Concentração CD 20) pode sacrificar seus PVs (1 PV doedeiro cura 1 PV da armadura). PVs sacrificados assim demoram <strong>uma semana inteira</strong> para voltar.
        </li>
        <li style="margin-bottom:0.75rem;">
          <strong style="color:var(--gold-light);">Evolução (Comunhão Cósmica):</strong> Se perder mais de 50% dos PVs e for curada 100%, o cavaleiro pode gastar <strong style="color:var(--gold-light);">250 XP da armadura</strong> e testar uma evolução para ganhar bônus aleatórios.
        </li>
        <li>
          <strong style="color:var(--gold-light);">Memória de Sangue:</strong> Se trocar de armadura (ex: Bronze para Ouro), a nova armadura "lê" o sangue e herda instantaneamente os bônus ganhos nas evoluções passadas.
        </li>
      </ul>
    </div>
</div>
`;

const TALENTS = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Talentos Especiais</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
        Estes são talentos novos e exclusivos para o RPG Greco Romano.
      </p>
    </div>

    <div style="position: sticky; top: 3.8rem; z-index: 100; margin-bottom: 1.5rem; padding: 0.5rem; background: rgba(10, 10, 10, 0.9); border-radius: 6px; box-shadow: 0 4px 15px rgba(0,0,0,0.7); backdrop-filter: blur(5px); border: 1px solid rgba(255,215,0,0.3);">
        <input type="text" 
               placeholder="Pesquisar talento por nome..." 
               style="width: 100%; padding: 0.75rem 1rem; background: rgba(0,0,0,0.6); border: 1px solid var(--gold-light); color: var(--silver); border-radius: 4px; font-family: 'Cinzel', serif; font-size: 1rem; outline: none; box-sizing: border-box;"
               oninput="const q = this.value.toLowerCase(); document.querySelectorAll('.talent-item').forEach(el => el.style.display = el.querySelector('h3').innerText.toLowerCase().includes(q) ? 'block' : 'none');">
    </div>

    <div class="cosmos-card p-6">
      
      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ELEVAÇÃO CÓSMICA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Manipular cosmo 5 graduações.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O cavaleiro está com seu cosmo base em +3 pts, normalmente antes de se iniciar um combate o cavaleiro começa com seu cosmo pela metade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ELEVAÇÃO CÓSMICA APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Manipular cosmo 10 graduações e elevação cósmica.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O cavaleiro está com seu cosmo base em +6 pts ao invés de +3. Este talento substitui a sua versão anterior. Normalmente antes de se iniciar um combate o cavaleiro começa com seu cosmo pela metade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COSMO ADICIONAL [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Ter cosmo 20 ou maior e 5 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Adicione um bônus inerente de +2 ao seu cosmo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Especial:</strong> Este talento pode ser adquirido várias vezes, e a cada vez que for adquirido adiciona +1 a cada vez. Exemplo: quando adquirir pela segunda vez terá um bônus de +3, somados aos +2 pontos anteriores. Adquirir mais uma vez terá um bônus de +4, somados aos bônus anteriores de +2 e +3 com seus efeitos cumulativos.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALISTA TÉCNICO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O cavaleiro se especializa em uma técnica especial de tal forma que sua familiaridade chega a reduzir seu custo.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Uma técnica escolhida.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> -2 no custo de cosmo da técnica escolhida. Este talento pode ser escolhido diversas vezes seus efeitos se acumulam somente para a técnica escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE FERRO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 12 e Ataque desarmado aprimorado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d4 ao seu dano desarmado.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE BRONZE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 14, Punhos de ferro.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d6 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE PRATA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 16, Punhos de bronze, BBA +5.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d8 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE OURO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 18, Punhos de prata, BBA +10.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d10 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE DIAMANTE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 20, Punhos de ouro, BBA+15.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d12 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE ADAMANTE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 22, Punhos de diamante, BBA+20.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d20 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE PLATINA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 22, Punhos de adamante.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d20+10 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE TITÃ [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 22, Punhos de platina.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d20+20 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PROTEÇÃO DO DEUS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +2 na CA permanentemente, este bônus não cai sob nenhuma condição normal, exceto a vontade do próprio deus.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PROTEGIDO DOS DEUSES [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Alguém olha por você, pois lhe acha especial.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +1 nos testes de resistência.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">GRAÇA DA SORTE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Carisma 14 ou maior.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando você tirar 1 no dado, terá uma nova chance de rolagem.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">GRAÇA DA SORTE APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Carisma 16 ou maior e graça da sorte.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Você ganha uma chance adicional podendo repetir até duas rolagens de falha naturais consecutivas, no caso um 1 no dado. Este talento substitui o anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">GRAÇA DA SORTE MAIOR [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Carisma 20 ou maior e Graça da sorte aprimorada.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Não existe falha crítica para você, quando tirar 1 no dado, você soma ao seu bônus normalmente como se estivesse tirando 2 ou mais. Rolagem de dados fracassadas terão até três chances adicionais. Este talento substitui o anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DURO DE MATAR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">Você já deveria estar morto. O corpo não responde, a visão escurece, a vida escapa… mas o Cosmo dentro de você não aceita o fim. Guiado pela lembrança de sua causa, pelos gritos de quem você deve proteger ou pela misericórdia dos deuses, você queima o que resta de sua essência e volta a lutar.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Tolerância, Explosão cósmica aprimorada.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.5rem; font-style:italic;"><strong>Uso:</strong> Apenas 1 vez por combate e um número máximo de vezes por dia igual ao modificador de Carisma (mínimo 1).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Quando o personagem chegar a 0 pontos de vida ou menos, em vez de cair imediatamente, ele pode invocar seu Cosmo como ação livre, mesmo inconsciente. Faça um teste de Vontade (CD Igual ao dano excedente que o levou abaixo de 0).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Se for bem-sucedido:</strong></p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-bottom:0.5rem;">
          <li>O personagem se levanta imediatamente, mesmo que estivesse inconsciente.</li>
          <li>Recupera pontos de vida iguais a metade de seu nível + seu modificador de Carisma (mínimo 1).</li>
          <li>Entra em estado de Cosmo Ardente com a cosmo energia no máximo até o fim do próximo turno, recebendo +2 em jogadas de ataque e testes de resistência.</li>
        </ul>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Após o fim desse turno heroico, o personagem sofre exaustão cósmica:</strong></p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle;">
          <li>Sofre –2 em testes de ataque, resistência e perícias, não pode usar novamente este talento até o término do combate.</li>
          <li>Se cair abaixo de 0 pontos de vida novamente no mesmo combate, não pode fazer novo teste: cai imediatamente.</li>
        </ul>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CONHECIMENTO CÓSMICO APRENDIZ [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você treinou e conhece bem a fundo os segredos e poderes da cosmo energia.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 10 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +3 de bônus na perícia Manipular cosmo.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CONHECIMENTO CÓSMICO INTERMEDIÁRIO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você treinou muito e conhece bem a fundo os segredos e poderes da cosmo energia tendo facilidade de manipulá-la com melhores performances.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +5 de bônus na perícia Manipular cosmo. Este bônus substitui o bônus anterior oferecido pelo talento conhecimento cósmico aprendiz.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CONHECIMENTO CÓSMICO MESTRE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você treinou ao nível máximo e se tornou mestre, sabe exatamente como manipular esta energia para se curar ou causar dano e destruir objetos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +7 de bônus na perícia Manipular cosmo. Este bônus substitui o bônus anterior oferecido pelo talento conhecimento cósmico intermediário.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EXPLOSÃO CÓSMICA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 10 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Com um teste bem sucedido de vontade (CD = seu cosmo total), lhe permite queimar o seu cosmo ao máximo. Desta forma seu cosmo estará no máximo e sofrerá uma redução de 3 pontos de cosmo por rodada.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Observação:</strong> Após ser bem-sucedido usando este talento, seu cosmo só diminuirá até chegar a 0. Quando ele chegar a zero, seu cosmo voltará a aumentar normalmente durante um combate.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EXPLOSÃO CÓSMICA APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15 graduações em Manipular cosmo e explosão cósmica.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> A CD é reduzida pela metade, ou seja, metade do seu cosmo total. Quando o seu cosmo chegar ao máximo através desta explosão, ele sofrerá redução de 3 pontos de cosmo por rodada até que alcance ¼ de seu total de cosmo. Este talento pode ser usado quantas vezes o cavaleiro desejar porém, a cada explosão a CD é aumentada em 10. Explodir o cosmo é uma ação livre e não consome ataques de oportunidades.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid #ff4500; background:rgba(255,69,0,0.02); padding-left: 1rem; margin-bottom: 1.5rem; padding-top: 0.5rem; padding-bottom: 0.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EXCLAMATION! [Geral/Especial]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem; font-style:italic;">Você é capaz de sintonizar sua energia vital com outros companheiros de fé para gerar uma explosão de poder proibida, disparada em nome da divindade que vocês servem.</p>
        
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem;"><strong>Pré-requisito:</strong> Nível 12+, Manipular Cosmo 15 graduações, talento "Explosão Cósmica".</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem;"><strong>Condição de Ativação:</strong> É necessário um grupo de no mínimo 3 cavaleiros que possuam este talento, sigam o mesmo Deus e vistam armaduras da mesma categoria (ex: todos de Bronze, todos de Prata ou todos de Ouro).</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem;"><strong>Custo de Ação:</strong> Todos os participantes devem utilizar uma Ação Especial (Tipo: Completa) no mesmo turno. A iniciativa do grupo passa a ser a do cavaleiro mais lento entre os três para que o golpe ocorra simultaneamente.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.75rem;"><strong>Custo de Cosmo:</strong> Cada cavaleiro deve pagar 20 pontos de Cosmo (ou o máximo que possuírem, caso tenham menos que 20, entrando em exaustão cósmica após o golpe).</p>
        
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefícios e Efeito:</strong></p>
        <ol style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-bottom:0.75rem;">
          <li style="margin-bottom:0.25rem;"><strong>Dano de Escala Big Bang:</strong> O dano base é calculado como se fosse uma técnica de RANK 9 (d20 por nível do cavaleiro de maior nível no grupo).</li>
          <li style="margin-bottom:0.25rem;"><strong>Soma de Potencial:</strong> Ao dano final, soma-se a metade da reserva de Cosmo atual de TODOS os participantes combinados (seguindo a regra de bônus de dano passivo).</li>
          <li style="margin-bottom:0.25rem;"><strong>Multiplicador de Hierarquia:</strong> O dano total (Dados + Bônus de Cosmo) é multiplicado pelo Multiplicador de Armadura da categoria que o trio compartilha (Bronze x1, Prata x2, Ouro x3, etc.).</li>
          <li><strong>Impacto Inevitável:</strong> O alvo não tem direito a testes de esquiva ou reflexos (CA de toque), mas pode tentar uma Ação de Contragolpe se também estiver em um grupo de 3 cavaleiros preparando uma Exclamação oposta.</li>
        </ol>
        
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa; font-style:italic;"><strong>Exemplo Narrativo no Estilo:</strong> Se três cavaleiros de ouro que servem ao deus Baco usarem a técnica, ela se chamaria "Exclamação de Baco". O mestre deve descrever não apenas a explosão galáctica, mas possivelmente um rastro de vinho estelar que pulveriza os átomos do inimigo.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM TÉCNICA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Aumenta a CD de sua técnica escolhida em +2.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM TÉCNICA APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Foco em técnica.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Substituindo o talento anterior (foco em técnica), este concede um bônus de +4 na sua CD para a técnica escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SEXTO SENTIDO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 3° nível de cavaleiro, Sabedoria 12.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> +2 nos testes e CD, +2 na CA (deflexão), coloca carisma na CA e nos testes de resistência (como bônus de sorte), +1 em manipular cosmo, ataque chi +2.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Observação:</strong> Os benefícios dos talentos de sentido são acumulativos.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SÉTIMO SENTIDO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 9° nível de cavaleiro, Sabedoria 14.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +3 nos testes e CD, + 3 na CA (deflexão), +3 em manipular cosmo e mantém o carisma na CA e testes de resistência, inteligência na iniciativa, cura pelas mão como uma ação padrão (modificador de carisma x nível de cavaleiro = cura). Capacidade de se concentrar para sentir e ouvir criaturas no plano astral. Ataque chi +3.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">OITAVO SENTIDO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15° nível de cavaleiro, Sabedoria 16.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +4 nos teste e CD, + 4 na CA (deflexão), +4 em manipular cosmo, capacidade de interagir no plano astral, não precisa dos 5 sentidos e esquiva sobrenatural (não ser flanqueado, destreza na CA, não pode ser surpreendido), lutar às cegas, coloca o dobro da sabedoria na perícia manipular cosmo. O personagem com oitavo sentido atinge um nível tão alto que ele é capaz de sair do corpo e interagir no mundo astral, ele é capaz de observar e se comunicar com criaturas astrais. Além de ser capaz de ver o plano astral com o seu próprio corpo físico. Ataque chi +4.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">INICIATIVA DE CAVALEIRO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Destreza 13 ou maior.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Você ganha +3 em suas jogadas de iniciativa. Este talento é acumulativo com iniciativa aprimorada.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">APTIDÃO PARA CAVALEIRO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é habilidoso com tarefas relacionadas à execução de suas técnicas.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de concentração para executar suas técnicas.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE EM TODOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">A velocidade do personagem é tão grande que ele é capaz de golpear os oponentes que estão dentro de seu alcance (deslocamento) usando incríveis golpes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 16, Int 13, Acrobacia 9 graduações, Especialização em Combate, Esquiva, Mobilidade, bônus base de ataque +12.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem usar a ação de ataque total, ele poderá desferir um número de ataques corporais em cada oponente dentro de seu deslocamento padrão (sem sofrer ataques de oportunidade), utilizando cada um de seus ataques contra cada oponente dentro do seu alcance. Quando utiliza um Ataque em todos, o personagem perde qualquer bônus ou ataques adicionais concedidos por outros talentos ou habilidades (como o talento Trespassar ou a técnicas de velocidade).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE EM TODOS APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Os seus golpes agora são tão precisos que você praticamente nunca erra.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 18, Int 14, Ataque em todos.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem utilizar este talento, todos os seus ataque terão o melhor bônus. Este bônus é fixo e nunca cairá, além de poder ser combinado com rajada de golpes.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESTENDER TÉCNICA [Efeito]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode executar técnicas mais duradouras.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Uma técnica estendida tem o dobro da duração normal. As técnicas com duração “Concentração”, “Instantânea” ou “Permanente” não são afetadas por este talento. Uma técnica estendida ocupa o lugar de uma técnica de um nível superior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">POTENCIALIZAR INVOCAÇÃO [Efeito]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">As criaturas invocadas pelo conjurador são mais poderosas que o normal.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Uma técnica escolhida com habilidade de invocar criaturas.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> As criaturas conjuradas pelo seu personagem através da sua técnica escolhida recebem +4 de bônus de aprimoramento em Força e Constituição enquanto a técnica permanecer ativa.</p>
      </div>

      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; letter-spacing:0.1em; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem; margin-top: 2.5rem; margin-bottom:1.5rem;">
        Talentos Modificados <span style="font-size:0.85rem; color:#aaa; text-transform:none; letter-spacing:normal;">(Ajustados para cavaleiros)</span>
      </h2>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EVASÃO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Reflexos base 3.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O cavaleiro é capaz de evitar ataques de técnicas incomuns por meio de sua agilidade extraordinária. Sempre que o cavaleiro se tornar alvo de um ataque que permita um teste de resistência de Reflexos para reduzir o dano à metade ele não sofrerá nenhum dano se obtiver sucesso no teste de resistência. Um cavaleiro indefeso (inconsciente, paralisado ou imobilizado) não recebe os benefícios dessa habilidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM ARMA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> BBA 1 ou maior.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +1 nas jogadas de ataque com a arma escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM ARMA APRIMORADO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> BBA 6 ou maior e foco em arma.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +2 nas jogadas de ataque com a arma escolhida. Este talento substitui o foco anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM ARMA MAIOR [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> BBA 12 ou maior e foco em arma aprimorado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +3 nas jogadas de ataque com a arma escolhida e mais 1 no dano. Este talento substitui o foco anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ACUIDADE COM ARMA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é especialmente habilidoso para utilizar armas que se beneficiam mais da Destreza do que da Força.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Bônus base de ataque +1.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem estiver usando uma arma leve, um sabre, chicote ou corrente com cravos apropriados para uma criatura do seu tamanho, ele pode considerar o modificador de Destreza no lugar do modificador de Força nas jogadas de ataque corporal. A penalidade de armadura do escudo do personagem (se houver) também se aplica nesta jogada de ataque. As armas naturais sempre são consideradas armas leves.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">AFINIDADE COM ANIMAIS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem se relaciona bem com animais.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Adestrar Animais e Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">AGARRAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para agarrar seus oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 13, Ataque Desarmado Aprimorado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem não provoca um ataque de oportunidade quando realiza o ataque de toque inicial da manobra Agarrar. Ele também recebe +4 de bônus em todos os testes de Agarrar, não importa quem iniciou a manobra.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, o personagem provocaria um ataque de oportunidade ao realizar o ataque de toque inicial da manobra Agarrar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ÁGIL [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é particularmente flexível e esguio.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Equilíbrio e Arte da Fuga.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">APANHAR OBJETOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem consegue apanhar projéteis atirados contra ele em pleno ar, como flechas, virotes, lanças e outros projéteis e armas de arremesso.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 15, Desviar Objetos, Ataque Desarmado Aprimorado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando usar o talento Desviar Objetos, o personagem será capaz de apanhar a arma (ou projétil) em vez de apenas desviá-la. As armas de arremesso, como lanças e machados, podem ser imediatamente arremessadas contra o atacante original (mesmo que não seja o turno do personagem) ou mantidas para utilização posterior.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><em>É necessário ter, pelo menos, uma mão livre (sem segurar nada) para usar esse talento.</em></p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE ATORDOANTE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe atingir oponentes em áreas vulneráveis.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Sab 16, Ataque Desarmado Aprimorado, bônus base de ataque +8.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> O jogador precisa declarar que seu personagem está usando esse talento antes de realizar a jogada de ataque (logo, um fracasso na jogada desperdiçará a tentativa). Um oponente atingido por um ataque desarmado atordoante deve realizar um teste de resistência de Fortitude (CD 10 + metade do nível do atacante + modificador de Sab), além de sofrer o dano normalmente. Caso fracasse, o alvo ficará atordoado durante 1 rodada completa (até o final da próxima ação do personagem).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">Um personagem atordoado não consegue agir, perde qualquer bônus de Destreza na CA e sofre -2 de penalidade na CA. É possível desferir um ataque atordoante uma vez por dia a cada quatro níveis de personagem, mas somente uma vez por rodada. Os constructos, limos, plantas, mortos-vivos, criaturas incorpóreas e criaturas imunes a sucessos decisivos não podem ser atordoadas.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE DESARMADO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para combater desarmado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Considera-se que seu personagem está armado mesmo quando ele está desarmado – ou seja, os oponentes armados não podem realizar ataques de oportunidade quando ele atacar com as mãos vazias. Entretanto, seu personagem ainda poderá desferir um ataque de oportunidade quando alguém desarmado tentar atacá-lo. Além disso, o personagem é capaz de causar dano letal ou dano por contusão usando seus ataques desarmados.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, os personagens que usam ataques desarmados sofrem todas as penalidades padrão (incluindo ataques de oportunidade) e causa apenas dano por contusão.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE PODEROSO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de realizar ataques corporais excepcionalmente poderosos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 16.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Durante a ação de seu personagem, mas antes de realizar as jogadas de ataque, é possível subtrair um valor específico de cada jogada de ataque e adicioná-lo a suas jogadas de dano. Esse valor não pode exceder seu bônus base de ataque. As alterações no ataque e no dano continuam válidas até seu próximo turno, inclusive para ataques de oportunidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE PODEROSO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem aprende a concentrar ainda mais força bruta em seus golpes, ultrapassando seus limites anteriores.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 18, Ataque Poderoso, bônus base de ataque +6.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando usar Ataque Poderoso, para cada –1 aplicado na jogada de ataque, o personagem recebe +3 de dano se estiver usando uma arma de duas mãos, +2 de dano com arma de uma mão ou arma leve. O valor máximo que pode ser subtraído das jogadas de ataque agora é seu bônus base de ataque +2.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE PODEROSO SUPREMO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem atinge um nível brutal de domínio sobre sua força, sacrificando completamente a precisão por carnificina absoluta.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 20, Ataque Poderoso Aprimorado, bônus base de ataque +11.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando usar Ataque Poderoso, para cada –1 aplicado na jogada de ataque, o personagem recebe +4 de dano com arma de duas mãos, +3 de dano com arma de uma mão ou arma leve. Agora o valor máximo que pode ser subtraído das jogadas de ataque é seu bônus base de ataque +4.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATLÉTICO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem talento para façanhas atléticas.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Escalar e Natação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATROPELAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para derrubar seus oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 18, Ataque Poderoso.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando seu personagem realizar uma tentativa de Atropelar um adversário, a vítima será incapaz de evitar o atacante. Ele também receberá +4 de bônus no teste de Força para derrubar esse oponente.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem este talento, a vítima da manobra Atropelar pode escolher evitar ou bloquear o atacante.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">AUTOSSUFICIENTE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode tomar conta de si mesmo durante situações difíceis e em ambientes áridos.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Cura e Sobrevivência.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">BLOQUEIO AMBIDESTRO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Seu estilo de combate com duas armas privilegia a defesa e o ataque.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 15, Combater com Duas Armas.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Enquanto estiver brandindo uma arma dupla ou combatendo com duas armas (exceto armas naturais e ataques desarmados), seu personagem recebe +1 de bônus de escudo na CA. Quando estiver combatendo defensivamente ou usando a ação de defesa total, esse bônus de escudo aumenta para +2.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COMBATER COM DUAS ARMAS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode combater com uma arma em cada mão; ele é capaz de desferir um ataque adicional por rodada com a segunda arma.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 15.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> As penalidades para combater com duas armas são reduzidas. A penalidade da mão hábil diminui em 2 pontos e da mão inábil diminui em 6 pontos.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Veja Combater com Duas Armas e a Tabela 8-10: Penalidades para Combate com Duas Armas [livro do jogador].</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COMBATER COM DUAS ARMAS APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é um especialista em combate com duas armas.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 17, Combater com Duas Armas, bônus base de ataque +6.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Além do ataque adicional realizado em função da segunda arma na mão inábil, o personagem recebe um segundo ataque com a mesma arma, mas sofre -5 de penalidade (veja a Tabela 8-10 [livro do jogador]).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, o personagem realiza apenas um ataque adicional com a arma da mão inábil.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COMBATER COM DUAS ARMAS MAIOR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é um mestre no combate com duas armas.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 19, Combater com Duas Armas Aprimorado, Combater com Duas Armas, bônus base de ataque +11.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem é capaz de realizar um terceiro ataque com a mão inábil, mas sofre -10 de penalidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CORRIDA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é mais rápido que o normal.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando estiver correndo, seu personagem percorre cinco vezes seu deslocamento normal.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Um personagem percorre quatro vezes seu deslocamento.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DEDOS LÉPIDOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem facilidade em manipular objetos pequenos e delicados.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Operar Mecanismo e Abrir Fechaduras.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DESARME APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como desarmar oponentes em combate corporal.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 13, Especialização em Combate.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem não provoca um ataque de oportunidade quando tenta desarmar um oponente e este adversário também não conseguiu desarmá-lo caso fracasse. O personagem recebe +4 de bônus no teste de ataque resistido para desarmar o alvo.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Consulte as regras normais para desarme.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DESVIAR OBJETOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode desviar flechas, virotes de besta, lanças ou outras armas de disparo ou arremesso.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Ataque Desarmado Aprimorado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> É necessário que o personagem tenha pelo menos uma mão livre (sem segurar nada) para usar esse talento. Uma vez por rodada, quando o personagem normalmente seria atingido por uma arma de ataque à distância, ele será capaz de desviá-la sem sofrer qualquer dano. Ele precisa estar ciente do ataque e não pode estar surpreso. Desviar um objeto não é considerado uma ação. É impossível defletir as armas de ataque à distância incomuns (como as rochas arremessadas pelos gigantes ou os ataques gerados por técnicas).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DILIGENTE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Sua perspicácia é capaz de encontrar detalhes que escapam aos demais.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Avaliação e Decifrar Escrita.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS TITÂNICOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você canaliza força bruta de modo tão intenso que seus golpes desarmados se tornam equivalentes ao impacto de uma arma de duas mãos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 17, Ataque Desarmado Aprimorado, bônus base de ataque +4.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seus ataques desarmados passam a ser tratados como arma pesada de duas mãos para todos os efeitos que dependam do tipo de empunhadura da arma, incluindo talentos, manobras marciais e multiplicadores de dano baseados em força.</p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-bottom:0.5rem;">
          <li>Você aplica 1,5x seu modificador de Força ao dano dos seus ataques desarmados.</li>
          <li>Se usar talentos como Ataque Poderoso, usa o valor para arma de duas mãos.</li>
          <li>Seu ataque desarmado é tratado como arma de duas mãos para empurrar, quebrar objetos, golpes de aríete, e demais situações definidas pelo mestre.</li>
        </ul>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">Não é possível usar seus “punhos titânicos” com um escudo ou qualquer objeto segurado na outra mão que exija ações de ataque, pois exige postura corporal total e foco na força bruta.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Ataques desarmados não são tratados como arma de duas mãos.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS TITÂNICOS APRIMORADOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você ultrapassa o limite físico do impacto corporal, tornando seus ataques desarmados equivalentes a verdadeiras armas de destruição bruta. O corpo range, as juntas imploram misericórdia, e ainda assim você avança.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 19, Punhos Titânicos, Ataque Desarmado Aprimorado, bônus base de ataque +9.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seus ataques desarmados continuam sendo tratados como arma pesada de duas mãos, mas agora seus golpes provocam impacto extremo, permitindo multiplicadores de força ainda maiores e efeitos brutais. Você recebe:</p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-bottom:0.5rem;">
          <li><strong>Multiplicador de Força aumentado:</strong> Você passa a aplicar 2x seu modificador de Força ao dano dos ataques desarmados.</li>
          <li><strong>Sinergia com Ataque Poderoso:</strong> Quando usar Ataque Poderoso (ou equivalente), utilize o valor de dano para arma de duas mãos, mas acrescente +1 de dano adicional por ponto de ataque sacrificado. <em>(Exemplo: se normalmente dá +3 por –1; você passa a dar +4 por –1)</em>.</li>
          <li><strong>Impacto Brutal:</strong> Ao acertar um crítico com ataque desarmado, a criatura atingida deve ser bem-sucedida em um teste de Fortitude (CD = 10 + 1/2 do seu nível + seu mod. de Força) ou fica atordoada por 1 rodada.</li>
        </ul>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ENCONTRÃO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como forçar seus oponentes a recuar.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 14 e Ataque Poderoso.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem usar a manobra Encontrão, ele não provocará um ataque de oportunidade do defensor. Ele também recebe +4 de bônus no teste resistido de Força para empurrar o alvo.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALIZAÇÃO EM ARMA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma em que o personagem já tenha o talento Foco em Arma. É possível selecionar ataque desarmado ou a manobra Agarrar para a aplicação desse talento. O personagem causa dano adicional com a arma escolhida.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar a Arma escolhida, Foco em Arma, 4° nível de guerreiro.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> O personagem recebe +2 de bônus no dano causado usando a arma escolhida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Seus efeitos não são cumulativos. Sempre que escolher esse talento, ele se aplica a uma arma diferente.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALIZAÇÃO EM ARMA MAIOR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma em que o personagem já tenha o talento Especialização em Arma. É possível selecionar ataque desarmado ou a manobra Agarrar para a aplicação desse talento. O personagem causa dano excepcional com a arma escolhida.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar a Arma escolhida, Foco em Arma Maior, Foco em Arma, Especialização em Arma, 12° nível.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> O personagem recebe +2 de bônus no dano causado usando a arma escolhida. Este bônus se acumula com quaisquer outros bônus de dano, incluindo o dano adicional de Especialização em Arma.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Seus efeitos são cumulativos. Sempre que escolher esse talento, ele se aplica a arma escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALIZAÇÃO EM COMBATE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para utilizar sua perícia em combate na defesa e no ataque com a mesma eficiência.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 13.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando seu personagem utilizar a ação de ataque ou ataque total num combate corporal, será capaz de designar entre -1 e -5 de penalidade nas jogadas de ataque e acrescentar o valor inverso como um bônus de esquiva na Classe de Armadura (limitado a +5). Esse valor não pode exceder seu bônus base de ataque. As alterações nas jogadas de ataque continuam válidas até seu próximo turno, inclusive para ataques de oportunidade.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Um personagem sem este talento é capaz de lutar defensivamente quando utiliza a ação de ataque ou ataque total, sofrendo -4 de penalidade em suas jogadas de ataque e recebendo +2 de bônus de esquiva na CA.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESQUIVA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é muito hábil para se esquivar de golpes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Durante sua ação, o personagem seleciona um oponente, recebendo +1 de bônus de esquiva na Classe de Armadura contra os ataques provenientes dele. É possível escolher um adversário diferente a cada rodada. Qualquer condição que faça o personagem perder seu bônus de Destreza na Classe de Armadura (se houver) também eliminará os bônus de esquiva.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESQUIVA APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem desenvolveu sua esquiva para se esquivar de golpes de vários oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 16 e Esquiva.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando utilizar a esquiva, o personagem poderá escolher uma quantidade de alvos igual ao seu modificador de destreza para se beneficiar deste talento.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FINTAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como distrair a atenção dos seus adversários em combate.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 13, Especialização em Combate.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem pode realizar o teste de Blefar para fintar em combate usando uma ação de movimento.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FORTITUDE MAIOR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é mais resistente que o normal.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de resistência de Fortitude.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FRAUDULENTO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como encobrir a verdade.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Disfarces e Falsificação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">IMOBILIZAÇÃO APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para mobilizar seus oponentes com segurança e ainda realizar um ataque.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 14, Especialização em Combate.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Enquanto estiver desarmado, seu personagem não provoca um ataque de oportunidade para imobilizar um adversário. Ele também recebe +4 de bônus nos seus testes resistidos de Força para a manobra imobilização. Quando o personagem imobilizar um adversário num combate corporal, ele poderá deferir imediatamente um ataque contra esse oponente, como se não tivesse usado seu ataque para iniciar a manobra.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Quando está desarmado, o personagem provoca um ataque de oportunidade caso queira mobilizar um adversário.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">INICIATIVA APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode reagir mais rapidamente que o normal numa luta.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +4 de bônus nos testes de Iniciativa.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">INVESTIGADOR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como descobrir informações.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Obter Informação e Procurar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">LUTAR ÀS CEGAS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado em combate corporal, mesmo sem enxergar seus oponentes.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Em qualquer combate corporal, sempre que seu personagem não atingir um adversário devido à camuflagem, ele poderá realizar novamente a jogada de porcentagem. Um atacante invisível não recebe nenhum bônus para atingir seu personagem em um combate corporal (logo, você não perde seu bônus de Destreza na CA e o atacante não recebe +2 de bônus em função da invisibilidade). No entanto, os bônus da criatura invisível ainda se aplicam para ataques à distância.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">Quando o personagem não conseguir enxergar, sofrerá apenas metade da penalidade no deslocamento. Geralmente, a escuridão e a baixa visibilidade reduzem o deslocamento para três quartos do normal, em vez de metade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">MOBILIDADE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para se esquivar entre os oponentes e evitar golpes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Esquiva.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +4 de bônus de esquiva na Classe de Armadura contra os ataques de oportunidade provocados quando ele entra ou sai de uma área ameaçada. Qualquer condição que faça o personagem perder seu bônus de Destreza na Classe de Armadura (se houver) também eliminará os bônus de esquiva.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">NEGOCIADOR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como influenciar as atitudes alheias.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Diplomacia e Sentir Motivação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PERSUASIVO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como usar as palavras e a linguagem corporal.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Blefar e Intimidação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PRONTIDÃO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem sentidos aguçados.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Ouvir e Observar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">REFLEXOS DE COMBATE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de reagir rápida e repetidamente contra os oponentes que baixam a própria guarda.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando os oponentes se descuidam e baixam a guarda, o personagem poderá realizar uma quantidade de ataques de oportunidade equivalente ao seu modificador de Destreza. <em>(Ex: Um personagem com Destreza 15 teria um total de 3 ataques de oportunidade na mesma rodada)</em>. No entanto, somente é possível executar um ataque de oportunidade em cada situação capaz de provocá-los. Com esse talento, ele conseguirá realizar ataques de oportunidade mesmo quando estiver surpreso.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, um personagem somente consegue realizar um ataque de oportunidade a cada rodada e não será capaz de desferi-los enquanto estiver surpreso.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">REFLEXOS RÁPIDOS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem reflexos mais rápidos que o normal.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Reflexos.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SAQUE RÁPIDO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de sacar suas armas com uma velocidade estonteante.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Bônus base de ataque +1.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem pode sacar uma arma usando uma ação livre, em vez de uma ação de movimento. Ele é capaz de sacar uma arma oculta usando uma ação de movimento. Um personagem com este talento consegue utilizar sua quantidade normal de ataques com armas de arremesso quando escolhe uma ação de ataque total.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SEPARAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para atacar as armas e escudos dos adversários, entre outros objetos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 14 e Ataque Poderoso.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem atacar um objeto empunhado ou carregado por um adversário, ele não provoca um ataque de oportunidade. Seu personagem também recebe +4 de bônus em todas as jogadas de ataque contra objetos que seu adversário estiver empunhando ou carregando.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SORRATEIRO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você tem um talento notável para evitar ser notado.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Esconder-se e Furtividade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SUCESSO DECISIVO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma. O personagem consegue desferir golpes mais precisos com a arma selecionada.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar a Arma, bônus base de ataque +8.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando estiver usando a arma escolhida, sua margem de ameaça será dobrada. <em>(Por exemplo, a margem de ameaça da espada longa é 19-20; com o talento será 17-20)</em>.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir este talento diversas vezes. Seus efeitos não se acumulam. Sempre que escolher esse talento, ele se aplica a uma arma diferente. Esse talento não se acumula com qualquer técnica que aumente a margem de ameaça de uma arma.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO CERTEIRO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe realizar disparos com mais exatidão quando seu alvo está mais próximo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +1 de bônus nas jogadas de ataque e dano com armas de ataque à distância contra alvos num raio de 9 m.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO EM MOVIMENTO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é extremamente habilidoso em técnicas de combate com armas de ataque à distância.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Esquiva, Mobilidade, Tiro Certeiro, bônus base de ataque +4.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem executar uma ação de ataque simples com uma arma de ataque a distância, ele poderá se deslocar antes e depois do ataque, a menos que a distância total percorrida seja maior que seu deslocamento. Para as armas de arremesso, o incremento de distância é dobrado.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO MÚLTIPLO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de disparar várias flechas simultaneamente contra um alvo próximo.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 18, Tiro Certeiro, Tiro Rápido, bônus base de ataque +6.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Usando uma ação padrão, seu personagem é capaz de disparar duas flechas em um oponente num raio de 9 m. Os disparos utilizam a mesma jogada de ataque (com -4 de penalidade). A cada cinco pontos de bônus base de ataque superior a +6, o personagem consegue disparar uma flecha adicional (limitado a quatro disparos com BBA +16). Cada flecha além da segunda impõe -2 de penalidade cumulativa na jogada.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O dano baseado na precisão (como ataque furtivo) é aplicado uma única vez. Num sucesso decisivo, somente a primeira flecha terá o dano multiplicado.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO PRECISO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para mirar e disparar no momento e locais exatos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Tiro Certeiro.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem é capaz de usar armas de ataque à distância contra oponentes engajados em combate corporal sem sofrer a penalidade padrão (-4).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO PRECISO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Seus ataques à distância ignoram a cobertura e a camuflagem.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 20, Tiro Certeiro, Tiro Preciso, bônus base de ataque +11.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Os ataques à distância realizados pelo seu personagem ignoram o bônus na CA concedido por qualquer nível de cobertura inferior a total e qualquer chance de falha garantida pela camuflagem (exceto total).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, atirar num alvo agarrado requer determinar aleatoriamente quem foi atingido.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO RÁPIDO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode usar armas de ataque à distância com velocidade excepcional.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 13, Tiro Certeiro.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe um ataque adicional com uma arma de ataque a distância. O disparo considera o bônus base de ataque mais elevado, mas cada disparo (inclusive o adicional) sofre -2 de penalidade. Esse talento só pode ser utilizado durante uma ação de ataque total.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TOLERÂNCIA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de executar incríveis façanhas de resistência.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem recebe +4 de bônus em testes de Natação (para evitar dano por contusão), Constituição (corridas, evitar dano de marcha forçada, inanição/desidratação, prender respiração) e Fortitude (evitar dano de frio/calor extremo e asfixia). Além disso, ele consegue dormir usando armaduras leves ou médias sem ficar fatigado.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Quando um personagem sem esse talento dormir usando armaduras médias ou pesadas, ele ficará fatigado no dia seguinte.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TRESPASSAR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de realizar outro ataque corporal depois de um golpe eficiente.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 14, Ataque Poderoso.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Num combate corporal, quando seu personagem causar dano suficiente para derrubar uma criatura (reduzindo seus PV a 0 ou matando-a), ele poderá executar um ataque corporal extra contra outra criatura dentro do seu alcance. Não é possível caminhar antes de realizar este ataque adicional. O personagem pode usar essa habilidade somente uma vez por rodada.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TRESPASSAR MAIOR [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem brande uma arma com muita eficiência e consegue atacar diversas vezes quando derrubar seus oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 15, Trespassar, Ataque Poderoso, bônus base de ataque +4.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Similar a Trespassar, mas não há limite para a quantidade de ataques adicionais por rodada.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMA COMUM [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma comum, como arco longo. O personagem sabe combater com a arma selecionada. Use esse talento para aumentar a lista de armas que o personagem sabe usar (a relação das armas que o personagem sabe utilizar consta na descrição da sua classe).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem ataca normalmente com a arma escolhida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa; margin-bottom:0.25rem;"><strong>Normal:</strong> Um personagem empunhando uma arma que não saiba usar sofre -4 de penalidade nas jogadas de ataque.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Sempre que o escolher, ele se aplica a outra arma comum.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMAS EXÓTICAS [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma exótica, como mangual atroz ou shuriken. O personagem sabe combater com a arma selecionada.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Bônus base de ataque +1 (e For 14 para espada bastarda e machado de guerra).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem ataca normalmente com a arma escolhida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa; margin-bottom:0.25rem;"><strong>Normal:</strong> Um personagem empunhando uma arma que não saiba usar sofre -4 de penalidade nas jogadas de ataque.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Sempre que o escolher, ele se aplica a outra arma exótica. Esse talento, quando aplicado à espada bastarda e ao machado de guerra, terá o pré-requisito adicional For 14.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMAS SIMPLES [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe usar todas as variedades de armas simples em combate.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem ataca normalmente com qualquer arma simples.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Um personagem empunhando uma arma que não saiba usar sofre –4 de penalidade nas jogadas de ataque.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMADURA (LEVE) [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para usar armaduras.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando estiver usando qualquer armadura leve, a penalidade de armadura do equipamento somente afetará os testes de Equilíbrio, Escalar, Arte da Fuga, Esconder-se, Saltar, Furtividade, Prestidigitação e Acrobacia.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Se o personagem utiliza uma armadura, mas não recebeu treinamento adequado, ele sofrerá a penalidade desta armadura nas jogadas de ataque e nos testes de perícia que exijam movimentos, inclusive Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMADURA (MÉDIA) [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para usar armaduras médias.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar Armadura (leve).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Veja Usar Armadura (leve).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Veja Usar Armadura (leve).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMADURA (PESADA) [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para usar armaduras pesadas.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar Armadura (leve), Usar Armadura (média).</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Veja Usar Armadura (leve).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Veja Usar Armadura (leve).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ESCUDO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe usar escudos pequenos e grandes, assim como o broquel.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem é capaz de usar escudos e sofrerá somente as penalidades padrão.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Se o personagem utiliza um escudo, mas não recebeu treinamento adequado, ele sofrerá a penalidade de armadura do escudo nas jogadas de ataque e nos testes de perícia que exijam movimentos, inclusive Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ESCUDO DE CORPO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe usar escudos de corpo.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar Escudo.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem é capaz de usar escudos de corpo e sofrerá somente as penalidades padrão.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Se o personagem utiliza um escudo, mas não recebeu treinamento adequado, ele sofrerá a penalidade de armadura do escudo nas jogadas de ataque e nos testes de perícia que exijam movimentos, inclusive Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">VITALIDADE [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é mais vigoroso que o normal.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Con 16.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seu personagem recebe +10 pontos de vida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode escolher este talento diversas vezes. Seus efeitos se acumulam.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">VITALIDADE APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem aprimorou o seu vigor a um nível sobrenatural.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Vitalidade, Con 18.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seu personagem recebe +20 pontos de vida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode escolher este talento diversas vezes. Seus efeitos se acumulam.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">VONTADE DE FERRO [Geral]</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">A vontade do personagem é muito superior ao normal.</p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de resistência de Vontade.</p>
      </div>
    </div>
</div>
`;