const COMBAT = `
<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Regras de Combate</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>
  
  <div class="cosmos-card p-6 mb-6 pulse-glow">
    <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
      O combate no sistema Greco Romano funciona de maneira semelhante a um combate tradicional do sistema d20,
      porém apresenta particularidades inspiradas no estilo dramático e técnico dos cavaleiros que manipulam o Cosmo.
      Embora suas bases sejam familiares para jogadores acostumados com sistemas d20, o sistema amplia as
      possibilidades táticas durante a batalha, incentivando decisões estratégicas e interpretações cinematográficas
      em cada confronto.
    </p>
  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Início do Combate
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Antes que o confronto comece, os participantes normalmente declaram suas intenções iniciais, como preparar um
      ataque, assumir uma postura defensiva ou observar o comportamento do inimigo. Em seguida é realizada a rolagem
      de <strong style="color:var(--gold-light);">Iniciativa</strong>, que determina a ordem de atuação dos combatentes.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Assim como nos sistemas d20 tradicionais, o personagem com o maior resultado de iniciativa age primeiro,
      seguido pelos demais em ordem decrescente. A partir desse momento o combate passa a ocorrer em turnos,
      representando pequenas janelas de tempo nas quais cada combatente executa suas ações.
    </p>

  </div>


  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">
      Tipos de Defesa
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Em Greco Romano, o combate pode se tornar altamente estratégico dependendo das circunstâncias em que o
      personagem se encontra. Em determinadas situações pode ser mais seguro evitar um ataque através da esquiva,
      enquanto em outras será mais vantajoso bloquear o impacto diretamente.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Pelas regras padrão, quando um personagem sofre um ataque sua <strong style="color:var(--gold-light);">Classe de Armadura (CA)</strong>
      é calculada normalmente utilizando o modificador de <strong style="color:var(--gold-light);">Destreza</strong>.
      O ataque do oponente será resolvido conforme as regras tradicionais do sistema d20: caso o valor de ataque
      supere a CA, o golpe acerta; caso contrário, ele falha.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
      Entretanto, o jogador pode optar por sair desse fluxo padrão e tomar uma decisão tática consciente: bloquear
      deliberadamente o golpe ou tentar se esquivar dele. Nesses casos, a forma como a defesa acontece passa a fazer
      parte da narrativa conduzida pelo próprio jogador.
    </p>


    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Bloquear o Golpe
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        O bloqueio é a forma mais direta de defesa. O personagem utiliza as mãos, arma, escudo, antebraço ou qualquer
        recurso disponível para interceptar o impacto de um ataque físico ou de uma técnica baseada em impacto.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        Nesta condição, a <strong style="color:var(--gold-light);">CA do personagem passa a utilizar o modificador de Força
        em vez do modificador de Destreza</strong>. Caso o oponente acerte o ataque mesmo assim, o dano é aplicado
        normalmente.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        Se o bloqueio for bem-sucedido, o jogador pode narrar livremente como seu personagem interceptou o golpe.
        Isso permite criar momentos dramáticos como segurar o punho do inimigo com uma mão, parar um ataque
        poderoso com o escudo ou demonstrar superioridade bloqueando o ataque sem esforço aparente.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        Essa pequena janela narrativa existe apenas para interpretação e não altera mecanicamente o combate.
        Ela não gera ataques de oportunidade nem concede vantagens adicionais, servindo apenas para enriquecer
        a cena de combate.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Entretanto, suportar o impacto sempre gera um <strong style="color:var(--gold-light);">Dano Residual</strong>.
        Esse dano representa o choque físico transmitido ao corpo do cavaleiro mesmo quando o ataque é bloqueado.
      </p>

      <ul style="color:var(--silver); font-size:0.95rem; line-height:1.6; padding-left:1rem;">
        <li>Dano residual igual ao <strong style="color:var(--gold-light);">modificador de Força do atacante</strong> em ataques físicos comuns.</li>
        <li>Dano residual igual ao <strong style="color:var(--gold-light);">RANK da técnica</strong> ao bloquear uma técnica especial.</li>
        <li>Se a técnica for focada em força física, o dano residual é <strong style="color:var(--gold-light);">metade do modificador de Força + metade do RANK da técnica</strong>, arredondado para baixo.</li>
      </ul>

    </div>



    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-bottom:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Esquivar do Golpe
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        A esquiva é uma reação mais difícil de executar, porém extremamente eficiente quando bem-sucedida.
        O personagem utiliza sua agilidade e percepção para sair da trajetória do ataque no último instante.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        Nesta manobra a CA continua utilizando o modificador de <strong style="color:var(--gold-light);">Destreza</strong>,
        porém o personagem sofre uma penalidade de <strong style="color:var(--gold-light);">-6 na CA</strong>
        durante a tentativa de esquiva.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        Caso o oponente erre o ataque, a esquiva foi bem-sucedida e o personagem não sofre absolutamente
        nenhum dano, nem ele nem sua armadura.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
        A esquiva só pode ser utilizada contra ataques corpo-a-corpo, ataques à distância ou golpes especiais
        focados em dano físico direcionado a um alvo específico. Além disso, o personagem precisa estar
        consciente da presença do atacante para reagir ao golpe.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Assim como no bloqueio, o jogador pode descrever como seu personagem realizou a esquiva. Em ataques
        especiais, essa descrição pode incluir movimentos rápidos, deslocamentos súbitos ou efeitos visuais
        gerados pela manipulação do Cosmo.
      </p>

    </div>


    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,215,0,0.2); padding:1rem; border-radius:4px;">

      <p style="font-size:1rem; color:var(--silver);">
        <strong style="color:var(--gold-light);">Especial — Queima de Cosmo Defensiva:</strong>
        Tanto ao bloquear quanto ao tentar uma esquiva, o cavaleiro pode gastar
        <strong style="color:var(--gold-light);">2 pontos de Cosmo</strong> para receber
        <strong style="color:var(--gold-light);">+1 na CA</strong> contra aquele ataque.
        Este bônus representa o cavaleiro elevando sua cosmo-energia para reforçar sua defesa.
        Esse gasto pode ser realizado apenas <strong style="color:var(--gold-light);">uma vez por ataque</strong>.
      </p>

    </div>

  </div>



  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">
      Tipos de Ações em um Turno
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Durante seu turno, um cavaleiro pode executar diferentes tipos de ações. Cada uma representa o nível de
      esforço físico, mental ou cósmico necessário para realizá-la.
    </p>

    <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:none;">

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação Completa</strong><br>
        Após executar uma ação deste tipo, o personagem encerra imediatamente o seu turno.
      </li>

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação Parcial</strong><br>
        Uma ação parcial pode ser combinada com outra ação parcial durante o mesmo turno,
        permitindo que o personagem realize duas ações desse tipo na mesma rodada.
      </li>

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação Livre</strong><br>
        Representa ações simples que não exigem esforço significativo, como falar,
        soltar um objeto, pensar rapidamente ou se jogar ao chão sem se deslocar.
      </li>

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação de Movimento (Parcial)</strong><br>
        Permite deslocar-se até o valor do deslocamento base do personagem.
        Caso o personagem esteja dentro ou atravesse uma área ameaçada por um inimigo,
        esse movimento pode gerar um <em>Ataque de Oportunidade</em>.
      </li>

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação de Retirada (Completa)</strong><br>
        Permite sair de uma área ameaçada sem provocar ataques de oportunidade.
        Além disso, o personagem pode se mover até <strong style="color:var(--gold-light);">4 vezes seu deslocamento base</strong>
        e ainda realizar um teste de esconder-se caso deseje desaparecer da visão de seus oponentes.
      </li>

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação Especial (Completa)</strong><br>
        Utilizada para executar técnicas especiais do cavaleiro. Sempre consome uma ação completa,
        exceto quando a descrição da técnica indicar explicitamente o contrário.
        Antes de executar a técnica, o cavaleiro pode se afastar até
        <strong style="color:var(--gold-light);">6 metros</strong> para preparar sua postura ou gestos necessários.
        Caso a técnica envolva um ataque corpo-a-corpo, ele pode percorrer novamente esses
        6 metros para atingir o alvo. Esse deslocamento não gera ataques de oportunidade.
        <br><br>
        Executar uma técnica exige um teste de
        <strong style="color:var(--gold-light);">Concentração (CD 10 + RANK da técnica)</strong>.
        Caso o personagem tenha sofrido dano durante o turno, o valor do dano é aplicado
        como penalidade neste teste.
      </li>

      <li style="margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Ação de Suporte Cósmico (Parcial)</strong><br>
        Permite transferir Cosmo da própria reserva para outro personagem.
        O alvo precisa aceitar receber essa energia. Caso contrário,
        ocorre um teste resistido de Cosmo contra Cosmo
        <em>(d20 + Cosmo atual)</em>.
        <br><br>
        A distância máxima para transferir Cosmo é:
        <strong style="color:var(--gold-light);">9 metros + (Nível do Cavaleiro × Multiplicador da Armadura)</strong>.
        
        <div style="margin-top:0.5rem; overflow-x:auto;">
          <table style="width:60%; text-align:left; border-collapse:collapse; font-size:0.85rem; border:1px solid rgba(255,255,255,0.1);">
            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
              <th style="padding:0.4rem;">Armadura</th>
              <th style="padding:0.4rem;">Multiplicador</th>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Bronze</td><td style="padding:0.4rem;">1</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Prata</td><td style="padding:0.4rem;">2</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Ouro</td><td style="padding:0.4rem;">3</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);"><td style="padding:0.4rem;">Kamui</td><td style="padding:0.4rem;">4</td></tr>
            <tr><td style="padding:0.4rem;">Titan</td><td style="padding:0.4rem;">5</td></tr>
          </table>
        </div>

        <p style="margin-top:0.5rem;">
          O cavaleiro pode transferir qualquer quantidade de Cosmo que desejar,
          desde que possua essa energia disponível em sua reserva.
        </p>

      </li>

    </ul>

    <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:none;">

      <li style="margin-bottom:1.5rem;">
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Ataque Comum (Tipo: Parcial)</strong><br>

        A Ação de Ataque Comum representa os ataques básicos que um cavaleiro pode realizar durante o combate,
        seja através de ataques corpo-a-corpo, ataques à distância, utilizando armas ou mesmo lutando desarmado.
        A mecânica segue o funcionamento tradicional do sistema d20, porém foi ajustada para manter o caráter
        tático do Sistema Greco Romano.

        <br><br>

        Conforme o cavaleiro evolui de nível, ele passa a adquirir a capacidade de executar múltiplos ataques
        dentro de um mesmo turno. Entretanto, todos esses ataques continuam pertencendo a
        <strong style="color:var(--gold-light);">uma única Ação de Ataque Comum</strong>.

        <br><br>

        Isso significa que o tipo de ação utilizado dependerá da quantidade de ataques que o personagem decide
        executar naquele turno.

        <div style="margin-top:0.5rem; overflow-x:auto;">
          <table style="width:60%; text-align:left; border-collapse:collapse; font-size:0.85rem; border:1px solid rgba(255,255,255,0.1);">

            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">
              <th style="padding:0.4rem;">Situação</th>
              <th style="padding:0.4rem;">Tipo de Ação</th>
            </tr>

            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:0.4rem;">1 ataque</td>
              <td style="padding:0.4rem;">Parcial</td>
            </tr>

            <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
              <td style="padding:0.4rem;">Até metade do total de ataques</td>
              <td style="padding:0.4rem;">Parcial</td>
            </tr>

            <tr>
              <td style="padding:0.4rem;">Todos os ataques disponíveis</td>
              <td style="padding:0.4rem;">Completa</td>
            </tr>

          </table>
        </div>

        <p style="margin-top:0.5rem;">
          Dessa forma, realizar apenas parte dos ataques disponíveis exige menos esforço e permite combinar essa
          ação com outra ação parcial. Já executar todos os ataques possíveis demanda concentração total durante
          o turno, transformando a ação em uma <strong style="color:var(--gold-light);">Ação Completa</strong>.
        </p>
      </li>



      <li style="margin-bottom:1.5rem;">
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Ataque Geral (Tipo: Completa)</strong><br>

        Neste tipo de ação o cavaleiro utiliza todo o seu turno para atacar múltiplos oponentes diferentes
        enquanto se desloca pelo campo de batalha.

        <br><br>

        O personagem pode realizar um ataque comum contra cada alvo diferente, desde que todos estejam
        dentro do limite total do seu deslocamento. Isso significa que ele pode se mover entre os inimigos
        enquanto executa seus ataques.

        <br><br>

        Por exemplo: se um cavaleiro possui <strong style="color:var(--gold-light);">21 metros de deslocamento</strong>
        e é capaz de executar <strong style="color:var(--gold-light);">3 ataques comuns</strong>, ele pode atacar
        até três inimigos diferentes, deslocando-se entre eles e desferindo um ataque em cada um.

        <br><br>

        Entretanto, o deslocamento total utilizado durante essa manobra não pode ultrapassar o valor
        máximo de movimento do personagem. Caso isso aconteça, a ação não poderá ser executada.

        <br><br>

        Além disso, o cavaleiro precisa ser capaz de perceber seus alvos. Não é possível atacar um inimigo
        que ele não veja ou que ainda não tenha percebido no campo de batalha.

        <br><br>

        Entrar na área ameaçada de um inimigo através dessa ação não provoca Ataques de Oportunidade.
        Porém, caso o cavaleiro esteja dentro da área ameaçada de um oponente e se afaste dela para
        alcançar outro alvo, o inimigo poderá realizar um Ataque de Oportunidade normalmente.

        <br><br>

        Ao final desta ação, o cavaleiro sempre termina seu deslocamento engajado em
        <strong style="color:var(--gold-light);">combate corpo-a-corpo com o último alvo atacado</strong>.
      </li>



      <li style="margin-bottom:1.5rem;">
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Defesa Total (Tipo: Completa)</strong><br>

        Nesta ação o cavaleiro abandona completamente qualquer postura ofensiva e se dedica exclusivamente
        a se defender de seus oponentes.

        <br><br>

        Durante esta rodada o personagem não realiza ataques, concentrando todos os seus esforços
        em resistir e evitar golpes inimigos.

        <br><br>

        Ao assumir essa postura defensiva, o personagem recebe um bônus em sua
        <strong style="color:var(--gold-light);">Classe de Armadura</strong> igual a:

        <br><br>

        <strong style="color:var(--gold-light);">
          4 + (2 × Multiplicador da Armadura)
        </strong>

        <br><br>

        Esse bônus se aplica contra qualquer ataque que precise superar a CA do personagem,
        seja um ataque comum ou uma técnica especial.

        <br><br>

        O uso dessa ação precisa ser declarado durante o turno do personagem e seus efeitos
        permanecem válidos até o início de seu próximo turno.
      </li>



      <li style="margin-bottom:1.5rem;">
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Defesa Parcial (Tipo: Parcial)</strong><br>

        Ao utilizar esta ação o cavaleiro adota um estilo de combate defensivo. Ele continua
        atacando seus oponentes, porém reduz sua agressividade para concentrar parte de sua
        atenção na própria proteção.

        <br><br>

        Essa postura gera os seguintes efeitos:

        <ul style="padding-left:1rem; margin-top:0.5rem;">
          <li>Penalidade de <strong style="color:var(--gold-light);">-6 nos ataques</strong></li>
          <li>Bônus de <strong style="color:var(--gold-light);">+3 na CA</strong></li>
        </ul>

        <br>

        O <strong style="color:var(--gold-light);">Multiplicador da Armadura</strong> influencia diretamente
        essa ação, melhorando sua eficiência defensiva.

        <ul style="padding-left:1rem; margin-top:0.5rem;">
          <li>Cada ponto do multiplicador reduz a penalidade de ataque em <strong style="color:var(--gold-light);">-1</strong></li>
          <li>Cada ponto do multiplicador aumenta o bônus de CA em <strong style="color:var(--gold-light);">+1</strong></li>
        </ul>

        <br>

        Dessa forma, um cavaleiro com armadura de alto nível pode transformar essa ação em
        uma postura extremamente eficiente, chegando ao limite de
        <strong style="color:var(--gold-light);">-1 no ataque e +8 na CA</strong>.
      </li>



      <li style="margin-bottom:1.5rem;">
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Recarregar Cosmo (Tipo: Parcial/Completa)</strong><br>

        Nesta ação o cavaleiro concentra sua energia interior para intensificar a recuperação
        de sua cosmo-energia durante o combate.

        <br><br>

        Ao executar essa ação, a aura cósmica do personagem se manifesta visivelmente ao seu
        redor, indicando que ele está canalizando sua energia para restaurar sua reserva.

        <br><br>

        Existem duas formas de utilizar essa ação:

        <ul style="padding-left:1rem; margin-top:0.5rem;">
          <li>
            <strong style="color:var(--gold-light);">Ação Parcial:</strong>
            aumenta a recuperação de Cosmo em um valor adicional equivalente à
            <strong style="color:var(--gold-light);">metade da recuperação normal</strong>.
          </li>

          <li>
            <strong style="color:var(--gold-light);">Ação Completa:</strong>
            o cavaleiro recupera
            <strong style="color:var(--gold-light);">o dobro de sua recuperação normal</strong>.
          </li>
        </ul>

        <br>

        Essa ação só pode ser utilizada durante situações de combate e
        <strong style="color:var(--gold-light);">não provoca Ataques de Oportunidade</strong>.
      </li>



      <li style="margin-bottom:1.5rem;">
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Limiar (Tipo: Completa)</strong><br>

        A Ação de Limiar representa o momento em que um cavaleiro ultrapassa seus próprios limites
        diante de uma situação extrema.

        <br><br>

        Esse estado só pode ser ativado quando uma das seguintes condições ocorre durante o combate:

        <ol style="padding-left:1rem; margin-top:0.5rem;">
          <li>O cavaleiro possui apenas <strong style="color:var(--gold-light);">20% de seus pontos de vida</strong>.</li>
          <li>O cavaleiro sofreu <strong style="color:var(--gold-light);">3 falhas críticas</strong> durante o combate.</li>
          <li>Um ou mais aliados do personagem caíram em combate.</li>
        </ol>

        <br>

        Ao atingir esse estado, o personagem libera seu poder máximo impulsionado
        por emoções intensas como ódio, revolta ou determinação absoluta.

        <br><br>

        Quando utilizar sua Ação de Limiar, o cavaleiro recebe os seguintes efeitos
        durante aquela rodada:

        <ul style="padding-left:1rem; margin-top:0.5rem;">
          <li><strong style="color:var(--gold-light);">Dano dobrado</strong> em todas as ações ofensivas</li>
          <li><strong style="color:var(--gold-light);">+5 em testes de resistência</strong></li>
          <li><strong style="color:var(--gold-light);">+5 no bônus de ataque</strong></li>
          <li>Seu <strong style="color:var(--gold-light);">Cosmo atinge automaticamente o valor máximo</strong></li>
        </ul>

        <br>

        Após a execução dessa ação, o corpo do cavaleiro não suporta o esforço extremo
        e ele cai <strong style="color:var(--gold-light);">inconsciente no chão</strong>,
        permanecendo incapaz de voltar ao combate pelo restante da batalha.
      </li>



      <li>
        <strong style="color:var(--gold-light); font-size:1.05rem;">Ação de Contragolpe (Tipo: Parcial/Completa)</strong><br>

        Nesta ação o cavaleiro decide segurar sua ação para reagir diretamente a um ataque
        ou técnica especial de um oponente.

        <br><br>

        Ao declarar um contragolpe, o jogador precisa estabelecer
        <strong style="color:var(--gold-light);">uma condição específica de ativação</strong>.
        Por exemplo: “Se um inimigo atacar determinado aliado, o contragolpe será executado”.

        <br><br>

        Quando a condição acontece, inicia-se um
        <strong style="color:var(--gold-light);">teste resistido</strong> entre os combatentes.

        <br><br>

        Se o contragolpe for realizado com uma técnica especial:

        <br>

        <strong>
        d20 + Cosmo Atual + RANK da Técnica
        </strong>

        <br><br>

        Caso seja um ataque comum:

        <br>

        <strong>
        d20 + Cosmo Atual + Bônus de Ataque
        </strong>

        <br><br>

        O resultado mais alto vence o confronto.

        <br><br>

        O tipo de ação utilizada no contragolpe deve corresponder à intensidade da ação
        original do oponente:

        <ul style="padding-left:1rem; margin-top:0.5rem;">
          <li>Ataques simples (parciais) exigem apenas um contragolpe parcial.</li>
          <li>Técnicas ou ações completas exigem um contragolpe de ação completa.</li>
        </ul>

        <br>

        O contragolpe não causa dano direto. Seu objetivo é apenas
        <strong style="color:var(--gold-light);">neutralizar ou bloquear a ação do inimigo</strong>.

        <br><br>

        Cabe ao mestre narrar a cena do cavaleiro interceptando o golpe adversário
        de forma precisa e impressionante, destacando o momento como um feito
        técnico e dramático dentro do combate.
      </li>

    </ul>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Graças Divinas
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Durante a jornada de um cavaleiro, existem momentos em que o destino parece intervir
      diretamente no curso dos acontecimentos. Esses momentos são representados pelas
      <strong style="color:var(--gold-light);">Graças Divinas</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Um jogador pode receber uma Graça Divina quando realiza feitos marcantes durante
      a campanha. Isso pode incluir sobreviver a um obstáculo extremamente difícil,
      resolver um problema que ninguém conseguiu solucionar, executar um ato
      verdadeiramente heroico ou provocar uma reviravolta memorável na história
      através de suas ações ou rolagens de dados.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Nessas situações, o mestre — caso julgue apropriado — pode conceder ao jogador
      <strong style="color:var(--gold-light);">pontos de Graça Divina</strong>.
      Esses pontos podem ser acumulados ao longo da campanha e utilizados em momentos
      críticos para alterar o destino do personagem.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Os pontos de Graça Divina podem ser gastos das seguintes formas:
    </p>

    <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle;">

      <li style="margin-bottom:0.4rem;">
        <strong style="color:var(--gold-light);">1 ponto:</strong>
        Permite alterar o resultado de um dado já rolado ou conceder ao personagem
        uma <strong style="color:var(--gold-light);">Ação Parcial adicional</strong> durante o turno.
      </li>

      <li>
        <strong style="color:var(--gold-light);">2 pontos:</strong>
        Permite ao personagem ganhar uma
        <strong style="color:var(--gold-light);">rodada completa adicional</strong>,
        recebendo um turno extra imediatamente após o atual.
      </li>

    </ul>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
      Uma vez utilizados, os pontos de Graça Divina são consumidos permanentemente
      e não são recuperados automaticamente. Por isso, é aconselhável utilizá-los
      apenas em momentos verdadeiramente decisivos.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic;">
      Narrativamente, esses momentos representam as preces do cavaleiro sendo
      escutadas pelos deuses. Quando tudo parece perdido, uma pequena intervenção
      divina pode alterar completamente o destino da batalha.
    </p>

  </div>



  <div class="cosmos-card p-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">
      Condições Especiais
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Durante o curso de uma batalha ou ao longo de uma campanha, um cavaleiro pode
      entrar em determinados estados que alteram temporariamente suas capacidades.
      Essas situações são chamadas de <strong style="color:var(--gold-light);">Condições Especiais</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
      Essas condições podem surgir por diversos fatores, como desgaste físico,
      liberação extrema de energia cósmica ou estratégias específicas adotadas
      durante o combate.
    </p>


    <div style="margin-bottom:1.2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exaustão Cósmica
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Esta condição representa o esgotamento completo das reservas espirituais
        e físicas do cavaleiro. Ela ocorre quando o personagem ultrapassa os
        limites normais de sua resistência e sua reserva de Cosmo cai
        <strong style="color:var(--gold-light);">abaixo de 0</strong>.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Neste estado o cavaleiro ainda consegue lutar, mas seu corpo e mente já
        estão extremamente debilitados.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        <strong style="color:var(--gold-light);">Penalidades Mecânicas:</strong>
        O personagem sofre
        <strong style="color:var(--gold-light);">–2 em todas as jogadas de ataque</strong>,
        <strong style="color:var(--gold-light);">–2 em todos os testes de resistência</strong>
        (Fortitude, Vontade e Reflexos) e
        <strong style="color:var(--gold-light);">–2 em testes de perícia</strong>.
        Além disso, ele não pode utilizar nenhum talento relacionado ao Cosmo
        enquanto permanecer nesta condição.
      </p>

    </div>



    <div style="margin-bottom:1.2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Cosmo Ardente
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        O Cosmo Ardente representa o estado oposto à exaustão. Neste momento
        o cavaleiro atinge o ponto máximo da vibração de seus átomos,
        liberando uma energia cósmica intensa que normalmente surge
        em situações de superação, clímax dramático ou determinação extrema.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        <strong style="color:var(--gold-light);">Benefício imediato:</strong>
        a reserva de Cosmo do cavaleiro é elevada instantaneamente
        ao seu valor máximo.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        <strong style="color:var(--gold-light);">Bônus Temporário:</strong>
        enquanto o Cosmo permanecer no máximo, o personagem recebe
        <strong style="color:var(--gold-light);">+2 em jogadas de ataque</strong>
        e <strong style="color:var(--gold-light);">+2 em testes de resistência</strong>.
      </p>

    </div>



    <div>

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Estado de Indetectabilidade (Cosmo Zero)
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Esta condição representa uma estratégia avançada onde o cavaleiro
        oculta completamente sua presença cósmica. Ao suprimir totalmente
        sua aura, ele se torna praticamente invisível para qualquer tipo
        de percepção espiritual ou sensorial baseada em Cosmo.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        <strong style="color:var(--gold-light);">Mecânica:</strong>
        o personagem utiliza a perícia
        <strong style="color:var(--gold-light);">Manipular Cosmo</strong>
        para reduzir deliberadamente sua energia cósmica até o valor zero.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        <strong style="color:var(--gold-light);">Efeito:</strong>
        enquanto permanecer nesse estado, o cavaleiro se torna indetectável
        para outros cavaleiros, mesmo aqueles capazes de perceber energia cósmica
        através de sentidos especiais.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        <strong style="color:var(--gold-light);">Risco de Combate:</strong>
        caso o personagem seja forçado a entrar em combate nesse estado,
        sua reserva de Cosmo iniciará em zero, impedindo o uso imediato
        de técnicas que possuam custo de Cosmo até que ele consiga recuperar
        energia novamente.
      </p>

    </div>

  </div>
</div>
`;