const TURNS = `

<div class="max-w-2xl mx-auto px-4 py-10">

  <div class="text-center mb-8">
    <div class="section-subtitle text-xs mb-3">Fluxo de Combate</div>
    <h1 class="section-title text-2xl md:text-3xl mb-4">Turnos, Rodadas e Ações</h1>
    <div class="gold-rule mb-6"></div>
  </div>

  <div class="page-search mb-4"></div>

  <div class="cosmos-card p-6 mb-6 pulse-glow">

    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que é uma Rodada
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      No Greco Romano RPG, o combate acontece em ciclos organizados chamados 
      <strong style="color:var(--gold-light);">rodadas</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Uma rodada representa alguns segundos de ação intensa onde todos os personagens envolvidos realizam seus movimentos, ataques, técnicas e reações.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1rem; color:var(--silver);">

        Uma rodada completa acontece quando:
        <br><br>

        <strong style="color:var(--gold-light);">
          Todos os combatentes já tiveram seu turno.
        </strong>

      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Depois que o último personagem age, uma nova rodada começa.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Se existem:
        <br><br>

        • 3 Cavaleiros
        <br>

        • 2 Espectros
        <br>

        • 1 Marina
        <br><br>

        todos eles irão agir uma vez durante a rodada.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Quando todos terminarem suas ações, inicia-se uma nova rodada de combate.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      O Que é um Turno
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Dentro da rodada, cada personagem possui um momento individual para agir.
      Esse momento é chamado de 
      <strong style="color:var(--gold-light);">turno</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Durante seu turno, o jogador decide o que seu Cavaleiro irá fazer.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Algumas possibilidades comuns incluem:
    </p>

    <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

      <li style="margin-bottom:0.5rem;">
        Atacar um inimigo
      </li>

      <li style="margin-bottom:0.5rem;">
        Executar uma Técnica Cósmica
      </li>

      <li style="margin-bottom:0.5rem;">
        Se mover pelo campo de batalha
      </li>

      <li style="margin-bottom:0.5rem;">
        Defender um aliado
      </li>

      <li style="margin-bottom:0.5rem;">
        Sacar uma arma
      </li>

      <li style="margin-bottom:0.5rem;">
        Tentar perceber uma ameaça
      </li>

      <li>
        Interagir com objetos ou estruturas
      </li>

    </ul>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Importante
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        O turno representa tudo o que o personagem consegue fazer naquele pequeno espaço de tempo da rodada.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Mesmo que a narrativa descreva movimentos extremamente rápidos, mecanicamente tudo ainda está acontecendo dentro do mesmo ciclo de combate.
      </p>

    </div>

  </div>

  <div class="cosmos-card p-6 mb-6">

    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Iniciativa
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Antes do combate começar, todos os participantes realizam um teste de 
      <strong style="color:var(--gold-light);">Iniciativa</strong>.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Esse teste define a ordem em que cada personagem irá agir durante a rodada.
    </p>

    <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-bottom:1rem;">

      <p style="font-size:1rem; color:var(--silver);">

        Fórmula básica:
        <br><br>

        <strong style="color:var(--gold-light);">
          1d20 + modificador de Destreza
        </strong>

      </p>

    </div>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      O personagem com maior resultado age primeiro.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
      Essa ordem normalmente permanece igual até o final do combate.
    </p>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">

        Resultado das iniciativas:
        <br><br>

        • Shura → 22
        <br>

        • Hyoga → 19
        <br>

        • Espectro → 14
        <br>

        • Soldado → 8

      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        A ordem dos turnos seguirá exatamente essa sequência em todas as rodadas seguintes.
      </p>

    </div>

  </div>

  
  <div class="cosmos-card p-6 mb-6">
  
    <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
      Tipos de Ações em um Turno
    </h2>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Depois que a iniciativa define a ordem dos combatentes, cada personagem começa a agir durante o seu próprio turno.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Dentro desse turno, o cavaleiro pode escolher diferentes tipos de ações dependendo da situação do combate.
    </p>

    <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
      Algumas ações representam movimentos rápidos e simples. Outras exigem total concentração física e cósmica.
    </p>

    <div style="overflow-x:auto; margin-top:1rem;">

      <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

        <thead>

          <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

            <th style="padding:0.75rem;">Tipo de Ação</th>
            <th style="padding:0.75rem;">O Que Representa</th>

          </tr>

        </thead>

        <tbody>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Ação Parcial
            </td>

            <td style="padding:0.75rem;">
              Ações rápidas que podem ser combinadas com outra ação parcial no mesmo turno.
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Ação Completa
            </td>

            <td style="padding:0.75rem;">
              Consome praticamente todo o turno do personagem.
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Ação Livre
            </td>

            <td style="padding:0.75rem;">
              Pequenas ações simples que quase não exigem esforço.
            </td>

          </tr>

          <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

            <td style="padding:0.75rem;">
              Movimento
            </td>

            <td style="padding:0.75rem;">
              Deslocar-se pelo campo de batalha.
            </td>

          </tr>

          <tr>

            <td style="padding:0.75rem;">
              Ação Especial
            </td>

            <td style="padding:0.75rem;">
              Uso de técnicas cósmicas e habilidades especiais.
            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <div style="border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1.5rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">
        Exemplo de Turno
      </h3>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Um Cavaleiro de Bronze pode usar uma ação parcial para correr até um inimigo e outra ação parcial para realizar um ataque comum.
      </p>

      <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
        Já um Cavaleiro de Ouro pode gastar uma ação completa para executar uma poderosa técnica cósmica que consome toda sua atenção naquele instante.
      </p>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Ação Parcial
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Representa ações rápidas e objetivas que exigem apenas parte do esforço do personagem.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Em Greco Romano, duas ações parciais normalmente podem ser combinadas durante o mesmo turno.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Isso cria cenas dinâmicas onde o cavaleiro pode se mover, atacar, se defender ou manipular o Cosmo em sequência.
      </p>

      <ul style="font-size:1rem; line-height:1.7; color:var(--silver); padding-left:1.5rem; list-style-type:square;">

        <li style="margin-bottom:0.5rem;">
          Executar um ataque comum
        </li>

        <li style="margin-bottom:0.5rem;">
          Entrar em postura defensiva parcial
        </li>

        <li style="margin-bottom:0.5rem;">
          Recarregar parte do Cosmo
        </li>

        <li>
          Transferir Cosmo para um aliado
        </li>

      </ul>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Ação Completa
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Algumas ações exigem concentração total do cavaleiro e encerram imediatamente o turno após sua execução.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Essas ações normalmente representam momentos importantes do combate, como técnicas especiais, defesa total ou movimentos extremos.
      </p>

      <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

        <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem;">
          Exemplo Narrativo
        </h4>

        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Shiryu concentra completamente seu Cosmo, assume sua postura de combate e libera o Cólera do Dragão utilizando toda sua atenção naquela rodada.
        </p>

      </div>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Movimento e Posicionamento
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Em RPGs de mesa, o posicionamento é extremamente importante durante o combate.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        O cavaleiro pode correr até aliados, avançar contra inimigos, fugir de ataques ou atravessar o campo de batalha para alcançar um objetivo.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Em Greco Romano, cavaleiros extremamente rápidos podem atravessar enormes distâncias em poucos segundos graças ao Cosmo.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Dependendo da diferença de velocidade entre os combatentes, personagens muito superiores podem até ganhar ações extras através da condição de Super Velocidade.
      </p>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Defesa Durante o Combate
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Quando um ataque acontece, o jogador não precisa apenas esperar o resultado.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Em Greco Romano, o cavaleiro pode escolher como deseja reagir ao golpe.
      </p>

      <div style="overflow-x:auto; margin-top:1rem;">

        <table style="width:100%; border-collapse:collapse; color:var(--silver); font-size:0.95rem;">

          <thead>

            <tr style="border-bottom:1px solid var(--gold-light); color:var(--gold-light);">

              <th style="padding:0.75rem;">
                Defesa
              </th>

              <th style="padding:0.75rem;">
                Característica
              </th>

            </tr>

          </thead>

          <tbody>

            <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">

              <td style="padding:0.75rem;">
                Bloqueio
              </td>

              <td style="padding:0.75rem;">
                Usa força e resistência para suportar o impacto.
              </td>

            </tr>

            <tr>

              <td style="padding:0.75rem;">
                Esquiva
              </td>

              <td style="padding:0.75rem;">
                Usa velocidade e agilidade para evitar completamente o golpe.
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-top:1rem;">
        Isso torna o combate mais cinematográfico e permite que os jogadores descrevam como seus cavaleiros reagem aos ataques inimigos.
      </p>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Técnicas Cósmicas
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        As técnicas especiais são o coração do combate em Greco Romano.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Para utilizar uma técnica, o cavaleiro normalmente executa uma ação especial completa e realiza um teste de Concentração.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Quanto mais poderosa a técnica, maior será a dificuldade para controlá-la corretamente.
      </p>

      <div style="border-left:3px solid var(--gold-light); padding-left:1rem;">

        <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem;">
          Exemplo
        </h4>

        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver);">
          Mesmo ferido, um cavaleiro pode elevar seu Cosmo até o limite para tentar executar uma técnica decisiva antes de cair em combate.
        </p>

      </div>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Crescimento de Cosmo Durante a Batalha
      </h3>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Diferente de muitos sistemas tradicionais, em Greco Romano o combate não é apenas físico.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        Conforme os turnos passam, os cavaleiros podem recuperar Cosmo, elevar sua energia interior e alcançar estados extremos de poder.
      </p>

      <p style="font-size:1rem; line-height:1.7; color:var(--silver);">
        Isso cria batalhas que começam controladas, mas se tornam cada vez mais intensas conforme os combatentes despertam níveis maiores de Cosmo durante a luta.
      </p>

    </div>

    <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:2rem;">

      <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.75rem;">
        Fluxo Básico de um Combate
      </h3>

      <ol style="font-size:1rem; line-height:1.8; color:var(--silver); padding-left:1.5rem;">

        <li style="margin-bottom:0.75rem;">
          O Mestre descreve o início do confronto.
        </li>

        <li style="margin-bottom:0.75rem;">
          Todos rolam iniciativa.
        </li>

        <li style="margin-bottom:0.75rem;">
          Os personagens agem em ordem.
        </li>

        <li style="margin-bottom:0.75rem;">
          Cada cavaleiro executa suas ações no turno.
        </li>

        <li style="margin-bottom:0.75rem;">
          Ataques, técnicas e defesas são resolvidos.
        </li>

        <li style="margin-bottom:0.75rem;">
          O Cosmo pode aumentar, diminuir ou ser transferido.
        </li>

        <li>
          A rodada termina e um novo ciclo começa.
        </li>

      </ol>

    </div>
  </div>

</div>

`;