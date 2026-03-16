
const RESUME = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Resumo de Regras</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="page-search mb-4"></div>
  
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