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
        <li><strong style="color:var(--gold-light);">Talento adicional:</strong> Toda armadura quando conquistada concede ao seu portador 1 talento adicional.</li>
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

    <div class="cosmos-card p-6 mb-6">
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

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Recuperação e PV das Armaduras
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Armaduras são feitas de materiais místicos como <strong style="color:var(--gold-light);">oricalco, gamânio e pó das estrelas</strong>, o que lhes concede vida própria e a capacidade de se autorregenerar. Essa recuperação, porém, depende de condições específicas.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li style="margin-bottom:0.6rem;">
          <strong style="color:var(--gold-light);">Regeneração Passiva (Urna):</strong>
          Dentro da urna a armadura recupera <strong>10% do PV total por hora</strong>, restaurando-se completamente em cerca de <strong>10 horas</strong>.  
          Em locais sagrados (templos, santuários ou na presença de um Deus) a recuperação dobra, completando-se em <strong>5 horas</strong>.
        </li>

        <li style="margin-bottom:0.6rem;">
          <strong style="color:var(--gold-light);">Reparo por Sangue:</strong>
          Um cavaleiro pode sacrificar seus próprios PV para curar a armadura na mesma proporção (1 PV para 1 PV).  
          Exige <strong>Teste de Concentração CD 20</strong> e treinamento em <em>Reparador de Armaduras</em>.  
          Os PV sacrificados levam <strong>1 semana</strong> para se recuperar e não podem ser acelerados por magia ou descanso.
        </li>

        <li style="margin-bottom:0.6rem;">
          <strong style="color:var(--gold-light);">Místico Reparador:</strong>
          Um especialista pode restaurar completamente a armadura e remover efeitos negativos. Geralmente exige uma missão para localizar e convencer o reparador.
        </li>

        <li style="margin-bottom:0.6rem;">
          <strong style="color:var(--gold-light);">Materiais Místicos:</strong>
          Itens raros como <em>oricalco, gamânio</em> e <em>pó das estrelas</em> também podem reparar armaduras, mas normalmente exigem missões perigosas para serem obtidos.
        </li>

      </ul>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Locais de Recuperação Especial
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Alguns lugares do mundo Greco Romano possuem propriedades únicas que aceleram drasticamente a regeneração das armaduras.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li style="margin-bottom:0.5rem;">
          <strong style="color:var(--gold-light);">Ilha do Sol Vermelho:</strong>
          Dentro do vulcão <em>Chakabum</em>, uma armadura na urna pode se regenerar completamente em <strong>1 hora</strong>, embora a região seja extremamente perigosa.
        </li>

        <li style="margin-bottom:0.5rem;">
          <strong style="color:var(--gold-light);">Zona Oculta:</strong>
          Ilha rica em <em>pó das estrelas</em>, muito procurada por contrabandistas devido ao valor do material para reparos místicos.
        </li>

        <li>
          <strong style="color:var(--gold-light);">Fenda do Biquíni:</strong>
          As águas do lago <em>Santuário de Ceta</em> aceleram a regeneração de armaduras para <strong>25% do PV por hora</strong>. Frascos dessa água são frequentemente vendidos no mercado negro.
        </li>

      </ul>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Evolução por Comunhão Cósmica
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Além da evolução normal por experiência, uma armadura pode ser aprimorada através da <strong style="color:var(--gold-light);">Comunhão Cósmica</strong>. 
        Nesse processo o cavaleiro sincroniza seu Cosmo com o da armadura para despertar melhorias únicas.
      </p>

      <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
        <p style="font-size:1rem; color:var(--silver);">
          A Comunhão Cósmica só pode ser realizada quando a armadura sofre <strong>mais de 50% de dano</strong> e depois é totalmente restaurada. Esse momento representa o renascimento do traje após uma batalha intensa.
        </p>
      </div>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
        <li>O jogador deve gastar <strong style="color:var(--gold-light);">250 XP</strong> da reserva de experiência da armadura.</li>
        <li>Em seguida realiza um <strong>Teste de Concentração</strong>.</li>
        <li>A CD base é <strong>10 + CD da armadura</strong>.</li>
        <li>Se falhar, o XP é perdido e a armadura não evolui.</li>
        <li>Se passar, o jogador rola <strong>1d20</strong> para determinar a força do aprimoramento.</li>
      </ul>

      <div style="overflow-x:auto; margin-top:1rem;">
        <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.9rem;">
          <thead>
            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
              <th style="padding:0.5rem;">Armadura</th>
              <th style="padding:0.5rem;">CD adicional</th>
              <th style="padding:0.5rem;">CD Final</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:0.5rem;">Bronze</td><td style="padding:0.5rem;">+5</td><td style="padding:0.5rem;">15</td></tr>
            <tr><td style="padding:0.5rem;">Prata</td><td style="padding:0.5rem;">+10</td><td style="padding:0.5rem;">20</td></tr>
            <tr><td style="padding:0.5rem;">Ouro</td><td style="padding:0.5rem;">+15</td><td style="padding:0.5rem;">25</td></tr>
            <tr><td style="padding:0.5rem;">Titan</td><td style="padding:0.5rem;">+20</td><td style="padding:0.5rem;">30</td></tr>
            <tr><td style="padding:0.5rem;">Kamui</td><td style="padding:0.5rem;">+25</td><td style="padding:0.5rem;">35</td></tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
        Após passar no teste, o jogador rola <strong>1d20</strong> para determinar a intensidade do bônus recebido.
      </p>

      <div style="overflow-x:auto; margin-top:1rem;">
        <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.9rem; white-space:nowrap;">
          <thead>
            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
              <th style="padding:0.5rem;">Resultado (1d20)</th>
              <th style="padding:0.5rem;">RD</th>
              <th style="padding:0.5rem;">Bônus CA</th>
              <th style="padding:0.5rem;">Escudo</th>
              <th style="padding:0.5rem;">PV</th>
              <th style="padding:0.5rem;">Cosmo</th>
              <th style="padding:0.5rem;">Mágico</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:0.5rem;">1</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            <tr><td style="padding:0.5rem;">2–5</td><td>1d4</td><td>1d4</td><td>+1</td><td>+25</td><td>+1</td><td>+1</td></tr>
            <tr><td style="padding:0.5rem;">6–10</td><td>1d6</td><td>1d6</td><td>+2</td><td>+50</td><td>+1</td><td>+1</td></tr>
            <tr><td style="padding:0.5rem;">11–15</td><td>1d8</td><td>1d8</td><td>+3</td><td>+75</td><td>+1</td><td>+1</td></tr>
            <tr><td style="padding:0.5rem;">16–19</td><td>1d10</td><td>1d10</td><td>+4</td><td>+100</td><td>+1</td><td>+1</td></tr>
            <tr><td style="padding:0.5rem;">20</td><td>1d12</td><td>1d12</td><td>+5</td><td>+125</td><td>+2</td><td>+2</td></tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
        Se o resultado for <strong>1</strong>, a tentativa falha e a armadura não recebe nenhum bônus.  
        Para qualquer outro resultado, o jogador deve rolar <strong>1d6</strong> para definir qual atributo da armadura será aprimorado.
      </p>

      <div style="overflow-x:auto; margin-top:1rem;">
        <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.9rem;">
          <thead>
            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
              <th style="padding:0.5rem;">1d6</th>
              <th style="padding:0.5rem;">Atributo Melhorado</th>
              <th style="padding:0.5rem;">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.5rem;">1</td>
              <td style="padding:0.5rem;">RD</td>
              <td style="padding:0.5rem;">Aumenta a redução de dano da armadura.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">2</td>
              <td style="padding:0.5rem;">Bônus na CA</td>
              <td style="padding:0.5rem;">Eleva o bônus defensivo da armadura na Classe de Armadura.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">3</td>
              <td style="padding:0.5rem;">Escudo</td>
              <td style="padding:0.5rem;">Aumenta a proteção adicional concedida pela armadura.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">4</td>
              <td style="padding:0.5rem;">PV</td>
              <td style="padding:0.5rem;">Amplia os pontos de vida estruturais da armadura.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">5</td>
              <td style="padding:0.5rem;">Cosmo</td>
              <td style="padding:0.5rem;">Aumenta a recuperação ou capacidade de Cosmo concedida pela armadura.</td>
            </tr>
            <tr>
              <td style="padding:0.5rem;">6</td>
              <td style="padding:0.5rem;">Mágico</td>
              <td style="padding:0.5rem;">Melhora o bônus mágico aplicado aos ataques e danos do cavaleiro.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
        Todos os valores obtidos são <strong>acumulativos</strong> e se somam aos bônus atuais da armadura, permitindo que o traje evolua progressivamente conforme o cavaleiro fortalece sua ligação cósmica.
      </p>

    </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
    Habilidades Especiais da Armadura
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
    Quando o atributo <strong style="color:var(--gold-light);">Bônus Mágico</strong> da armadura atinge seu limite máximo de <strong style="color:var(--gold-light);">+5</strong>, qualquer novo aprimoramento obtido através da Comunhão Cósmica deixa de aumentar o valor mágico da armadura. Em vez disso, o cavaleiro pode converter esse bônus excedente em <strong style="color:var(--gold-light);">Habilidades Especiais</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
    Essas habilidades representam adaptações únicas que a armadura desenvolve após inúmeras batalhas. Elas refletem a evolução da ligação entre o Cosmo do cavaleiro e os materiais místicos que compõem a armadura.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">
    <p style="color:var(--silver); font-size:1rem;">
    Cada habilidade possui um <strong>custo em bônus mágico</strong>. O cavaleiro só poderá adquirir uma habilidade se possuir bônus mágico suficiente para “pagá-la”. Esses bônus representam o nível de refinamento cósmico da armadura.
    </p>
    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
    Algumas habilidades são permanentes e funcionam automaticamente durante o combate. Outras possuem condições específicas de ativação, geralmente relacionadas ao estado do Cosmo do cavaleiro ou a situações específicas de batalha.
    </p>

    <hr style="border-color:rgba(255,255,255,0.08); margin:1.5rem 0;">

    <h3 style="color:var(--gold-light); font-family:'Cinzel',serif;">Lista de Habilidades</h3>

    <p style="color:var(--silver); margin-bottom:1rem;">
    A seguir estão algumas das habilidades especiais que podem ser incorporadas à armadura após atingir o limite de bônus mágico.
    </p>

    <ul style="color:var(--silver); line-height:1.7;">

    <li>
    <strong style="color:var(--gold-light);">Núcleo de Pó de Estrela (+1, +2, +3)</strong><br>
    O núcleo da armadura passa a conter uma concentração pura de pó das estrelas, acelerando sua regeneração natural.  
    A armadura recupera automaticamente <strong>PV por rodada</strong> igual ao bônus escolhido (+1, +2 ou +3).  
    Esta regeneração ocorre durante combate e fora dele, representando o poder vital presente nos materiais sagrados da armadura.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Vínculo Sanguíneo (+1)</strong><br>
    A armadura estabelece uma ligação direta com a vitalidade do cavaleiro.  
    O usuário pode sacrificar <strong>1 PV próprio</strong> para restaurar <strong>5 PV da armadura</strong> como uma <strong>ação livre</strong>.  
    Esse efeito pode ser usado sempre que necessário durante combate.  
    Caso a armadura esteja com PV negativos, o cavaleiro pode sacrificar vida para estabilizá-la acima de 0 PV, evitando sua destruição completa.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Urna Portátil (+2)</strong><br>
    A armadura passa a reproduzir internamente as propriedades regenerativas da sua urna sagrada.  
    Mesmo enquanto está sendo utilizada, ela recebe os benefícios de recuperação normalmente disponíveis apenas quando guardada.  
    Isso acelera a recuperação passiva de Cosmo e auxilia na manutenção da integridade da armadura durante longas batalhas.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Ressonância Cósmica (+2)</strong><br>
    A armadura entra em perfeita sintonia com o Cosmo do cavaleiro.  
    O custo de Cosmo de todas as técnicas de <strong>Rank 1 e Rank 2</strong> é reduzido em <strong>-1 ponto</strong> (mínimo 1).  
    Esse efeito permite ao cavaleiro utilizar golpes básicos com maior frequência durante o combate.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Capacitor de Cosmo (+1, +2, +3)</strong><br>
    Cristais internos armazenam energia cósmica adicional.  
    O Cosmo Máximo do cavaleiro aumenta em <strong>+5 por nível de bônus</strong>.  
    Essa habilidade aumenta o limite máximo de Cosmo disponível, permitindo que o cavaleiro acumule energia para técnicas mais poderosas.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Inércia Amaldiçoada (+1)</strong><br>
    Quando o cavaleiro entra em estado de <strong>Cosmo 0</strong> (modo oculto), a armadura suprime sua presença cósmica.  
    Enquanto estiver nessa condição, o usuário recebe <strong>+4 em testes de Furtividade</strong>.  
    Isso permite esconder completamente sua presença energética, funcionando como um verdadeiro fantasma em batalha.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Refração de Cristal (+4)</strong><br>
    A estrutura da armadura se torna cristalina e capaz de refletir energia.  
    Sempre que sofrer um ataque direto, existe <strong>1 chance em 1d6</strong> de refletir <strong>50% do dano</strong> de volta ao atacante.  
    Essa reação é automática e não consome ações.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Memória de Batalha (+1)</strong><br>
    A armadura registra padrões de ataques inimigos.  
    Após ser atingida por uma técnica específica, o cavaleiro recebe <strong>+2 em testes de Reflexos ou Vontade</strong> contra aquela mesma técnica até o fim do combate.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Anfíbia (+2)</strong><br>
    A armadura é adaptada para combate aquático.  
    O cavaleiro não sofre penalidades de movimento na água e recebe <strong>+4 em testes de Natação</strong>.  
    Muito comum entre os Marinas da Fenda do Biquíni.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Dureza Inabalável (+1, +2, +3)</strong><br>
    A estrutura da armadura se torna extremamente resistente.  
    Cada nível aumenta a <strong>Redução de Dano</strong> base da armadura em <strong>+2</strong>.  
    Essa melhoria representa o fortalecimento físico da armadura contra impactos e ataques diretos.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Aura Intimidante (+2)</strong><br>
    A armadura emite uma presença cósmica esmagadora.  
    Todos os inimigos e aliados dentro de <strong>12 metros</strong> sofrem:  
    -2 em ataques contra o cavaleiro e -5 na iniciativa contra ele.  
    A aura funciona constantemente enquanto a armadura estiver ativa.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Sinfonia Protetora (+3)</strong><br>
    A armadura emite uma vibração cósmica protetora que estabiliza a mente do cavaleiro.  
    O usuário recebe <strong>+4 em testes contra ilusões e controle mental</strong>.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Sobrecarga Cósmica (+2)</strong><br>
    Enquanto o Cosmo atual do cavaleiro estiver acima de <strong>50% do máximo</strong>, ele adiciona seu <strong>modificador de Sabedoria</strong> como bônus de dano em ataques desarmados.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Dureza Adaptativa (+3)</strong><br>
    Quando a armadura sofre dano elemental (fogo, gelo, eletricidade etc.), ela adapta sua estrutura automaticamente.  
    Até o final do combate, o cavaleiro recebe <strong>RD 10</strong> contra aquele elemento específico.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Escudo de Inércia (+2)</strong><br>
    Quando o cavaleiro utiliza a ação de <strong>Defesa Total</strong>, o bônus de CA fornecido pela armadura é <strong>dobrado</strong> contra ataques recebidos.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Pilar de Resistência (+1)</strong><br>
    A armadura reforça a estabilidade física do cavaleiro.  
    O usuário recebe <strong>+4 em testes de Fortitude</strong> contra paralisia, atordoamento ou nocaute.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Vórtice Estelar (+2)</strong><br>
    A armadura gera um fluxo constante de Cosmo.  
    A recuperação passiva de Cosmo aumenta em <strong>+2 pontos por rodada</strong> durante combate.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Catalisador de Sacrifício (+1)</strong><br>
    Sempre que o cavaleiro sofrer um <strong>acerto crítico</strong>, ele recupera imediatamente uma quantidade de Cosmo igual ao <strong>nível da armadura</strong>.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Ressonância Econômica (+3)</strong><br>
    Reduz o custo de Cosmo de qualquer técnica de <strong>Rank 3 ou inferior</strong> em <strong>-2 pontos</strong> (mínimo 1).
    </li>

    <li>
    <strong style="color:var(--gold-light);">Impulso Cinético (+2)</strong><br>
    A armadura amplifica o movimento do cavaleiro.  
    Seu deslocamento base aumenta em <strong>+6 metros</strong>.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Reflexo de Flash (+4)</strong><br>
    O cavaleiro pode realizar <strong>um ataque adicional por rodada</strong> com seu maior bônus de ataque.  
    Esse efeito pode ser usado um número de vezes por dia igual ao <strong>modificador de Destreza</strong>.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Passo Dimensional (+3)</strong><br>
    O cavaleiro pode realizar um <strong>Passo de Ajuste de 3 metros</strong> sem provocar ataques de oportunidade, mesmo em terreno difícil.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Infusão Elementar (+1)</strong><br>
    Todos os ataques do cavaleiro causam <strong>1d8 de dano adicional</strong> de um elemento escolhido.  
    Uma vez escolhido, o elemento não pode ser alterado.  
    Esta habilidade pode ser adquirida múltiplas vezes para elementos diferentes.
    </li>

    <li>
    <strong style="color:var(--gold-light);">Núcleo Ígneo (+2)</strong><br>
    Quando o cavaleiro eleva seu Cosmo ao máximo, a armadura libera calor intenso.  
    Todos os inimigos em combate corpo-a-corpo sofrem dano de <strong>Fogo igual ao modificador de Constituição</strong> do cavaleiro.
    </li>

    </ul>

    </div>
  </div>
`;