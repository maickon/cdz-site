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

      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-top:1rem; padding-left:1rem; list-style-type:square;">
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
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Ao declarar o uso desta Ação Especial, o jogador detém total liberdade narrativa para interpretar como seu personagem clama pelo traje. O Mestre deve obrigatoriamente descrever a cena e <strong>garantir a conclusão do ato</strong>, assegurando que o personagem complete a equipagem de forma triunfal, sem que oponentes possam interromper o processo.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">A Fusão com a Urna</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          No instante em que a armadura é evocada, a estrutura física da urna se desmaterializa, transformando-se em energia pura que se funde ao traje enquanto este cobre o corpo do guerreiro instantaneamente.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">O Repouso do Traje</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
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

      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:circle;">
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
      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Técnica:</strong> Pirâmide de Fogo</li>
        <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Efeito Principal:</strong> 10d6 de dano direto (RANK 5)</li>
        <li><strong style="color:var(--gold-light);">Efeito Secundário:</strong> 6 de dano contínuo por 2 rodadas (RANK 2)</li>
      </ul>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px;">
        <p style="font-size:0.95rem; color:var(--silver); margin-bottom:0.25rem;">RANK 5 &rarr; 6 pontos de Cosmo</p>
        <p style="font-size:0.95rem; color:var(--silver); margin-bottom:0.75rem;">RANK 2 &rarr; 2 pontos de Cosmo</p>
        <div style="height:1px; background:rgba(255,215,0,0.2); margin-bottom:0.75rem;"></div>
        <p style="font-size:1.05rem; color:var(--silver);">Total: <strong style="color:var(--gold-light);">8 pontos de Cosmo</strong></p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Regras para Efeitos Secundários</h2>
      <ol style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; padding-left:1.5rem; list-style-type:decimal;">
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
      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
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
      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
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
        <p style="font-size:0.95rem; color:var(--silver);">
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
      <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem; font-style:italic;">
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

      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:square;">
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
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Em combate, a cosmo energia soma-se ao dano causado. Este bônus é igual à <strong style="color:var(--gold-light);">metade dos pontos de cosmo atuais</strong> na reserva do personagem. <em>(Exemplo: se o cosmo atual é 10, ele tem +5 de dano adicional)</em>. Este bônus aplica-se <strong>apenas ao primeiro ataque</strong> em caso de ataques múltiplos.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Usando Técnicas</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Executar uma técnica consome pontos de cosmo iguais ao seu custo. No entanto, para o cálculo do dano daquela técnica, a metade do valor de cosmo <strong>antes</strong> do gasto ainda conta como dano extra. O dano final será: <em>Dano da Técnica + Metade do Cosmo Ativo</em>. É necessário ter a reserva exigida para usar a técnica.
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Após a Batalha</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
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
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          Você usa suas mãos, escudo ou antebraço para suportar o impacto. Nesta condição, a sua CA é beneficiada pelo seu <strong style="color:var(--gold-light);">bônus de Força</strong>, e não de Destreza. Se o oponente acertar, o dano é causado normalmente. Se você bloquear, ganha o direito de narrar o bloqueio de forma épica ou intimidadora.
        </p>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          <strong style="color:var(--gold-light);">Custo:</strong> O bloqueio bem-sucedido sempre causa um <strong style="color:var(--gold-light);">Dano Residual</strong> igual ao modificador de Força do atacante (em ataques comuns) ou igual ao RANK da técnica especial bloqueada. Se a técnica focar em força, o dano residual é a metade do mod. de Força + metade do RANK (arredondado para baixo).
        </p>
      </div>

      <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">2. Esquivar do Golpe</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          Uma reação mais difícil, mas 100% segura. Você usa sua Destreza na CA, mas sofre uma <strong style="color:var(--gold-light);">penalidade de -6 na CA</strong>. Se o oponente errar, a esquiva foi perfeita: você e sua armadura não sofrem nenhum dano.
        </p>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          <strong style="color:var(--gold-light);">Restrição:</strong> Só funciona contra ataques corpo-a-corpo, à distância ou golpes com foco físico em alvo único. Você precisa estar ciente do atacante.
        </p>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px;">
        <p style="font-size:0.95rem; color:var(--silver);">
          <strong style="color:var(--gold-light);">Queima de Cosmo Defensiva:</strong> Tanto no bloqueio quanto na esquiva, o personagem pode gastar <strong style="color:var(--gold-light);">2 pontos de cosmo</strong> para receber um benefício de +1 na sua CA contra aquele ataque. Limite de 1 vez por ataque.
        </p>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Tipos de Ações num Turno</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        As ações podem ser de diversos tipos: <strong>Completa</strong> (encerra o turno), <strong>Parcial</strong> (pode fazer duas no turno), <strong>Livre</strong> (falar, soltar objeto), <strong>Movimento</strong> (gera AdO) e <strong>Retirada</strong> (Ação completa, move até 4x o deslocamento sem gerar AdO). Além destas, temos as manobras avançadas:
      </p>

      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:none;">
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
      <ul style="font-size:0.95rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-top:0.5rem;">
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Custo 1 ponto:</strong> Alterar o resultado de um dado ou ganhar 1 Ação Parcial extra.</li>
        <li><strong style="color:var(--gold-light);">Custo 2 pontos:</strong> Ganhar um turno (rodada de ação) inteiro adicional.</li>
      </ul>
    </div>

    <div class="cosmos-card p-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">Condições Especiais</h2>
      
      <div style="margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Exaustão Cósmica</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Ocorre quando o Cosmo fica abaixo de 0. O personagem sofre <strong style="color:var(--gold-light);">-2 em todos os Ataques e Testes de Resistência/Perícia</strong>, e perde acesso a qualquer Talento Cósmico.
        </p>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Cosmo Ardente</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          O ápice da vibração atômica. A reserva vai ao máximo instantaneamente. O cavaleiro recebe <strong style="color:var(--gold-light);">+2 nos Ataques e Testes de Resistência</strong> enquanto o Cosmo se mantiver no topo.
        </p>
      </div>

      <div>
        <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Estado de Indetectabilidade (Cosmo Zero)</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Usando a perícia Manipular Cosmo para zerar sua aura, o cavaleiro vira uma "casca vazia", invisível aos sentidos extrassensoriais inimigos. Se for forçado a lutar neste estado, inicia com 0 de reserva e não pode usar técnicas avançadas no primeiro turno.
        </p>
      </div>
    </div>
</div>
`;