const database = [
  {
    "table": "Requisitos",
    "description": "Requisitos mínimos para progressão de Rank Cósmico.",
    "full_description": "O requisito estabelece o nível mínimo que uma cavaleiro deverá ter para ter acesso ao nível das técnicas. Cada RANK pertence a um determinado nível. Caso você cumpra tal requisito, você estará habilitado a adquirir aquele RANK desde que tenha XP suficiente para pagar o custo necessário para habilitar o RANK.",
    "data": [
      { "rank": 1, "nível mínimo": "-", "requisito de rank": "-" },
      { "rank": 2, "nível mínimo": 4, "requisito de rank": 1 },
      { "rank": 3, "nível mínimo": 6, "requisito de rank": 2 },
      { "rank": 4, "nível mínimo": 8, "requisito de rank": 3 },
      { "rank": 5, "nível mínimo": 10, "requisito de rank": 4 },
      { "rank": 6, "nível mínimo": 12, "requisito de rank": 5 },
      { "rank": 7, "nível mínimo": 14, "requisito de rank": 6 },
      { "rank": 8, "nível mínimo": 16, "requisito de rank": 7 },
      { "rank": 9, "nível mínimo": 18, "requisito de rank": 8 }
    ]
  },
  {
    "table": "Habilitar",
    "description": "Custo em XP para habilitar Ranks Cósmicos.",
    "full_description": "Esta tabela apresenta o custo em XP para habilitar cada Rank Cósmico de técnica. Quanto maior o Rank, maior o investimento necessário para despertar o poder correspondente.",
    "formula": [
      { "range": "2-3", "expression": "rank * 125" },
      { "range": "4-6", "expression": "rank * 250" },
      { "range": "7-9", "expression": "rank * 500" }
    ],
    "data": [
      { "rank": 2, "xp": 250 },
      { "rank": 3, "xp": 375 },
      { "rank": 4, "xp": 1000 },
      { "rank": 5, "xp": 1250 },
      { "rank": 6, "xp": 1500 },
      { "rank": 7, "xp": 3500 },
      { "rank": 8, "xp": 4000 },
      { "rank": 9, "xp": 4500 }
    ]
  },
  {
    "table": "Custo de XP para Criação de Técnicas",
    "description": "Custo de XP para criação de técnicas.",
    "full_description": "O custo para criar uma técnica nova é calculado usando a fórmula Rank² × 500 XP. Quanto maior o Rank pretendido, maior o esforço e o refinamento exigidos para moldar o Cosmo em uma técnica única.",
    "formula": "rank^2 * 500",
    "data": [
      { "rank": 2, "xp": 2000 },
      { "rank": 3, "xp": 4500 },
      { "rank": 4, "xp": 8000 },
      { "rank": 5, "xp": 12500 },
      { "rank": 6, "xp": 18000 },
      { "rank": 7, "xp": 24500 },
      { "rank": 8, "xp": 32000 },
      { "rank": 9, "xp": 40500 }
    ]
  },
  {
    "table": "Custo de Cosmo da Técnica",
    "description": "Custo de Cosmo para execução da técnica.",
    "full_description": "O custo em Cosmo para executar uma técnica é sempre igual ao dobro do Rank da técnica. Esse valor deve ser pago pelo personagem no momento em que a técnica é utilizada. Se este custo pertencer a uma habilidade secundário, o custo será igual ao RANK da ténica.",
    "formula": "rank * 2",
    "data": [
      { "rank": 1, "custo de cosmo": 2 },
      { "rank": 2, "custo de cosmo": 4 },
      { "rank": 3, "custo de cosmo": 6 },
      { "rank": 4, "custo de cosmo": 8 },
      { "rank": 5, "custo de cosmo": 10 },
      { "rank": 6, "custo de cosmo": 12 },
      { "rank": 7, "custo de cosmo": 14 },
      { "rank": 8, "custo de cosmo": 16 },
      { "rank": 9, "custo de cosmo": 18 }
    ]
  },
  {
    "table": "Dado de Dano da Técnica",
    "description": "Dado base associado ao Rank.",
    "full_description": "O dano causado por uma técnica é definido pelo dado base correspondente ao Rank, multiplicado pelo nível do personagem. Use o dado indicado para cada Rank ao calcular o dano total da técnica.",
    "data": [
      { "rank": 1, "dado de dano": "d4/nível" },
      { "rank": 2, "dado de dano": "d6/nível" },
      { "rank": 3, "dado de dano": "d8/nível" },
      { "rank": 4, "dado de dano": "d10/nível" },
      { "rank": 5, "dado de dano": "d12/nível" },
      { "rank": 6, "dado de dano": "d12 + d4/nível" },
      { "rank": 7, "dado de dano": "d12 + d6/nível" },
      { "rank": 8, "dado de dano": "d12 + d8/nível" },
      { "rank": 9, "dado de dano": "d12 + d10/nível" }
    ]
  },
  {
    "table": "Dano Direto (Ignora Redução de Armadura)",
    "description": "Dano que ignora completamente a divisão com armadura, atingindo diretamente os pontos de vida.",
    "full_description": "Este tipo de técnica causa dano direto ao alvo, ignorando qualquer forma de mitigação por armadura ou efeitos equivalentes. O dano escala com o nível do personagem, representando maior domínio da técnica, mas possui um limite máximo baseado no Rank para evitar crescimento descontrolado.",
    "data": [
      { "rank": 1, "dano base": "1d4 por nível",  "dano máximo": "até 4d4" },
      { "rank": 2, "dano base": "1d6 por nível",  "dano máximo": "até 6d6" },
      { "rank": 3, "dano base": "1d8 por nível",  "dano máximo": "até 8d8" },
      { "rank": 4, "dano base": "1d10 por nível", "dano máximo": "até 10d10" },
      { "rank": 5, "dano base": "1d12 por nível", "dano máximo": "até 12d12" },
      { "rank": 6, "dano base": "1d12 por nível", "dano máximo": "até 14d12" },
      { "rank": 7, "dano base": "1d12 por nível", "dano máximo": "sem limite" },
      { "rank": 8, "dano base": "2d8 por nível",  "dano máximo": "sem limite" },
      { "rank": 9, "dano base": "2d10 por nível", "dano máximo": "sem limite" }
    ]
  },
  {
    "table": "Dano Direto na Armadura",
    "description": "Dano que afeta diretamente os pontos de vida da armadura, ignorando o usuário.",
    "full_description": "Esta técnica causa dano diretamente à armadura do alvo, ignorando completamente o personagem. É especialmente eficaz para destruir defesas, reduzindo rapidamente a durabilidade do equipamento. O dano escala com o nível do usuário, mas possui um limite máximo baseado no Rank, acompanhando a progressão natural dos pontos de vida das armaduras.",
    "data": [
      { "rank": 1, "dano base": "1d6 por nível",   "dano máximo": "até 40" },
      { "rank": 2, "dano base": "1d8 por nível",   "dano máximo": "até 60" },

      { "rank": 3, "dano base": "1d10 por nível",  "dano máximo": "até 100" },
      { "rank": 4, "dano base": "1d12 por nível",  "dano máximo": "até 140" },

      { "rank": 5, "dano base": "2d8 por nível",   "dano máximo": "até 200" },
      { "rank": 6, "dano base": "2d10 por nível",  "dano máximo": "até 260" },

      { "rank": 7, "dano base": "2d12 por nível",  "dano máximo": "até 360" },
      { "rank": 8, "dano base": "3d10 por nível",  "dano máximo": "até 450" },

      { "rank": 9, "dano base": "3d12 por nível",  "dano máximo": "até 550" }
    ]
  },
  {
    "table":"Arremesso (Distância)",
    "description":"Distância em metros que um alvo pode ser arremessado por técnicas de arremesso.",
    "full_description":"Algumas técnicas permitem arremessar o alvo a uma determinada distância. A metragem é calculada com base no nível do personagem que executa a técnica, respeitando um limite máximo definido pelo Rank da técnica. A distância final nunca pode exceder o limite máximo indicado para o Rank correspondente.",
    "data":[
      { "rank":1, "distância por nível":"1 m por nível", "distância máxima":"até +4 m" },
      { "rank":2, "distância por nível":"1 m por nível", "distância máxima":"até +6 m" },
      { "rank":3, "distância por nível":"1 m por nível", "distância máxima":"até +8 m" },
      { "rank":4, "distância por nível":"2 m por nível", "distância máxima":"até +12 m" },
      { "rank":5, "distância por nível":"2 m por nível", "distância máxima":"até +16 m" },
      { "rank":6, "distância por nível":"2 m por nível", "distância máxima":"até +20 m" },
      { "rank":7, "distância por nível":"3 m por nível", "distância máxima":"até +28 m" },
      { "rank":8, "distância por nível":"3 m por nível", "distância máxima":"até +34 m" },
      { "rank":9, "distância por nível":"3 m por nível", "distância máxima":"até +42 m" }
    ]
  },
  {
    "table": "Cura por Rank",
    "description": "Recuperação de pontos de vida proporcional ao domínio da técnica.",
    "full_description": "Técnicas de cura restauram pontos de vida ao canalizar energia vital ou espiritual. A eficácia da cura depende diretamente do Rank da técnica, refletindo maior controle e intensidade. A cura é calculada pela fórmula Cura = (Rank × 12) + Dado do Rank. Diferente de efeitos regenerativos passivos, essa cura é imediata e escalável, sendo mais eficiente em ranks elevados devido ao aumento do dado associado.",
    "formula": "Cura = (Rank × 12) + Dado do Rank",
    "data": [
      { "rank": 1, "rank do dado": "d4",  "fórmula de cura": "(1 × 12) + d4",  "total de cura": "12 + d4" },
      { "rank": 2, "rank do dado": "d6",  "fórmula de cura": "(2 × 12) + d6",  "total de cura": "24 + d6" },
      { "rank": 3, "rank do dado": "d8",  "fórmula de cura": "(3 × 12) + d8",  "total de cura": "36 + d8" },
      { "rank": 4, "rank do dado": "d10", "fórmula de cura": "(4 × 12) + d10", "total de cura": "48 + d10" },
      { "rank": 5, "rank do dado": "d12", "fórmula de cura": "(5 × 12) + d12", "total de cura": "60 + d12" },
      { "rank": 6, "rank do dado": "d12", "fórmula de cura": "(6 × 12) + d12", "total de cura": "72 + d12" },
      { "rank": 7, "rank do dado": "d20", "fórmula de cura": "(7 × 12) + d20", "total de cura": "84 + d20" },
      { "rank": 8, "rank do dado": "d20", "fórmula de cura": "(8 × 12) + d20", "total de cura": "96 + d20" },
      { "rank": 9, "rank do dado": "d20", "fórmula de cura": "(9 × 12) + d20", "total de cura": "108 + d20" }
    ]
  },
  {
    "table": "Dano de Aniquilação Espiritual",
    "description": "Dano que transcende o físico, atingindo diretamente a essência e a alma do alvo.",
    "full_description": "Certas técnicas não causam apenas dano físico, mas afetam diretamente a essência espiritual do alvo. Esse tipo de dano ignora processos naturais de regeneração rápida, exigindo dias ou até mais tempo para recuperação completa. Ferimentos desse tipo representam corrosão da alma, queimaduras existenciais ou ruptura energética profunda. Caso o alvo seja derrotado por esse dano, sua essência é completamente desintegrada, impossibilitando qualquer forma de ressurreição ou retorno. O dano é calculado pela fórmula Dano de Aniquilação Espiritual = (Rank × 8) + Dado do Rank, utilizando o dado correspondente ao Rank da técnica. A quantidade de dias para se recuperar por completo deste tipo de dano é o RANK da técnica.",
    "formula": "Dano de Aniquilação Espiritual = (Rank × 8) + Dado do Rank",
    "data": [
      { "rank": 1, "regeneração": "1 dia", "formula do dano": "(1 × 8) + d4",  "dano total": "8 + d4" },
      { "rank": 2, "regeneração": "2 dias", "formula do dano": "(2 × 8) + d6",  "dano total": "16 + d6" },
      { "rank": 3, "regeneração": "3 dias", "formula do dano": "(3 × 8) + d8",  "dano total": "24 + d8" },
      { "rank": 4, "regeneração": "4 dias", "formula do dano": "(4 × 9) + d10", "dano total": "36 + d10" },
      { "rank": 5, "regeneração": "5 dias", "formula do dano": "(5 × 9) + d12", "dano total": "45 + d12" },
      { "rank": 6, "regeneração": "6 dias", "formula do dano": "(6 × 9) + d20", "dano total": "54 + d20" },
      { "rank": 7, "regeneração": "7 dias", "formula do dano": "(7 × 10) + d20","dano total": "70 + d20" },
      { "rank": 8, "regeneração": "8 dias", "formula do dano": "(8 × 11) + d20","dano total": "88 + d20" },
      { "rank": 9, "regeneração": "9 dias", "formula do dano": "(9 × 12) + d20","dano total": "108 + d20" }
    ]
  },
  {
    "table": "Dureza",
    "description": "Valor estrutural que define a resistência de criações, barreiras e objetos gerados por técnicas.",
    "full_description": "Dureza não é uma técnica independente, mas um atributo aplicado a qualquer objeto, barreira ou estrutura criada por uma técnica. Ela representa a resistência absoluta da matéria ou energia condensada, reduzindo diretamente o dano recebido antes de afetar seus pontos de vida. A Dureza só se aplica a elementos físicos ou energéticos criados (como escudos, paredes, armas conjuradas ou invocações estruturais), não tendo efeito direto sobre personagens. Sempre que uma criação receber dano, subtraia o valor de Dureza do dano total antes de aplicar ao seu PV. Caso o dano restante seja zero ou negativo, a estrutura não sofre dano.",
    "data": [
      { "rank": 1, "dureza": 10 },
      { "rank": 2, "dureza": 15 },
      { "rank": 3, "dureza": 20 },
      { "rank": 4, "dureza": 30 },
      { "rank": 5, "dureza": 40 },
      { "rank": 6, "dureza": 50 },
      { "rank": 7, "dureza": 65 },
      { "rank": 8, "dureza": 80 },
      { "rank": 9, "dureza": 95 }
    ]
  },
  {
    "table": "Duração em Rodadas",
    "description": "Duração de técnicas contínuas aplicadas em combate direto.",
    "full_description": "Esta categoria deve ser usada para técnicas com impacto direto em combate, como dano contínuo, controle, debuffs ou efeitos que influenciam ações turno a turno. Essas técnicas exigem alta concentração e consumo constante de Cosmo, limitando sua duração a poucas rodadas para manter o equilíbrio do combate. A duração é determinada pelo Rank da técnica e não deve ser convertida para outras unidades.",
    "formula": "Duração = 1 rodada por Rank da técnica",
    "data": [
      { "rank": 1, "duração máxima": "1 rodada" },
      { "rank": 2, "duração máxima": "2 rodadas" },
      { "rank": 3, "duração máxima": "3 rodadas" },
      { "rank": 4, "duração máxima": "4 rodadas" },
      { "rank": 5, "duração máxima": "5 rodadas" },
      { "rank": 6, "duração máxima": "6 rodadas" },
      { "rank": 7, "duração máxima": "7 rodadas" },
      { "rank": 8, "duração máxima": "8 rodadas" },
      { "rank": 9, "duração máxima": "9 rodadas" }
    ]
  },
  {
    "table": "Duração em Minutos",
    "description": "Duração de técnicas contínuas de efeito moderado ou situacional.",
    "full_description": "Utilizada para técnicas que não afetam diretamente o fluxo de combate turno a turno, mas ainda exigem manutenção ativa de Cosmo, como buffs leves, detecção, manipulação ambiental ou efeitos utilitários. Essas técnicas podem coexistir com combate, mas não devem gerar impacto direto contínuo equivalente a dano ou controle pesado.",
    "formula": "Duração = 1 minuto por Rank da técnica",
    "data": [
      { "rank": 1, "duração máxima": "1 minuto" },
      { "rank": 2, "duração máxima": "2 minutos" },
      { "rank": 3, "duração máxima": "3 minutos" },
      { "rank": 4, "duração máxima": "4 minutos" },
      { "rank": 5, "duração máxima": "5 minutos" },
      { "rank": 6, "duração máxima": "6 minutos" },
      { "rank": 7, "duração máxima": "7 minutos" },
      { "rank": 8, "duração máxima": "8 minutos" },
      { "rank": 9, "duração máxima": "9 minutos" }
    ]
  },
  {
    "table": "Duração em Horas",
    "description": "Duração de técnicas de longa manutenção e baixo impacto direto.",
    "full_description": "Aplicada a técnicas de efeito prolongado que não exigem atenção constante em combate, como proteções passivas, encantamentos, selos, rastreamento ou melhorias contínuas. Essas técnicas representam um investimento estável de Cosmo e não devem causar dano contínuo ou controle direto de combate. A duração escala com o nível do personagem, respeitando um limite máximo por Rank.",
    "formula": "Duração = 1 hora por nível (limitado pelo Rank)",
    "data": [
      { "rank": 1, "duração máxima": "1 h por nível (máx. 4 h)" },
      { "rank": 2, "duração máxima": "1 h por nível (máx. 6 h)" },
      { "rank": 3, "duração máxima": "1 h por nível (máx. 8 h)" },
      { "rank": 4, "duração máxima": "1 h por nível (máx. 11 h)" },
      { "rank": 5, "duração máxima": "1 h por nível (máx. 14 h)" },
      { "rank": 6, "duração máxima": "1 h por nível (máx. 17 h)" },
      { "rank": 7, "duração máxima": "1 h por nível (máx. 21 h)" },
      { "rank": 8, "duração máxima": "1 h por nível (máx. 24 h)" },
      { "rank": 9, "duração máxima": "1 h por nível (sem limite)" }
    ]
  },
  {
    "table": "Invocação",
    "description": "Permite invocar criaturas com poder limitado pelo Rank da técnica.",
    "full_description": "Esta técnica permite invocar uma ou mais entidades (criaturas, espíritos, construtos ou avatares). O poder total das invocações é limitado por um valor de ND (Nível de Desafio), que pode ser distribuído livremente entre as criaturas invocadas. O usuário pode escolher invocar uma única entidade poderosa ou várias mais fracas, desde que a soma total do ND não ultrapasse o limite definido pelo Rank. As características completas das criaturas devem ser definidas separadamente, utilizando as regras de criação de invocações.",
    "formula": "ND Total = Rank × 2",
    "data": [
      { "rank": 1, "nd total": "2",  "quantidade máxima": "1" },
      { "rank": 2, "nd total": "4",  "quantidade máxima": "2" },
      { "rank": 3, "nd total": "6",  "quantidade máxima": "2" },
      { "rank": 4, "nd total": "8",  "quantidade máxima": "3" },
      { "rank": 5, "nd total": "10", "quantidade máxima": "3" },
      { "rank": 6, "nd total": "12", "quantidade máxima": "4" },
      { "rank": 7, "nd total": "14", "quantidade máxima": "4" },
      { "rank": 8, "nd total": "16", "quantidade máxima": "5" },
      { "rank": 9, "nd total": "18", "quantidade máxima": "6" }
    ]
  },
  {
    "table": "Aumentar Tamanho",
    "description": "Permite ao cavaleiro expandir seu corpo, aumentando poder físico ao custo de mobilidade, precisão e controle.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>Esta característica permite que o cavaleiro aumente progressivamente seu tamanho, recebendo bônus cumulativos em força e impacto físico, enquanto sofre penalidades em agilidade, defesa e precisão. A partir do limite físico (+6 categorias), os ranks passam a evoluir controle e eficiência.</p><div style='margin-top:1rem;'><p style='color:var(--gold-light);'><strong>Rank 1 – +1 Categoria</strong></p><p style='color:var(--silver);'>FOR +2, CON +2, DES -2. CA -1, Ataque -1. Alcance +1,5m. Área 2x2. Deslocamento -1,5m. +2 em Agarrar. Dano corpo a corpo +2.</p><p style='color:var(--gold-light);'><strong>Rank 2 – +2 Categorias</strong></p><p style='color:var(--silver);'>FOR +4, CON +4, DES -4. CA -2, Ataque -2. Alcance +3m. Área 3x3. Deslocamento -3m. +4 em Agarrar. Dano corpo a corpo +4.</p><p style='color:var(--gold-light);'><strong>Rank 3 – +3 Categorias</strong></p><p style='color:var(--silver);'>FOR +6, CON +6, DES -6. CA -3, Ataque -3. Alcance +4,5m. Área 4x4. Deslocamento -4,5m. +6 em Agarrar. Dano corpo a corpo +6.</p><p style='color:var(--gold-light);'><strong>Rank 4 – +4 Categorias</strong></p><p style='color:var(--silver);'>FOR +8, CON +8, DES -8. CA -4, Ataque -4. Alcance +6m. Área 5x5. Deslocamento -6m. +8 em Agarrar. Dano corpo a corpo +8.</p><p style='color:var(--gold-light);'><strong>Rank 5 – +5 Categorias</strong></p><p style='color:var(--silver);'>FOR +10, CON +10, DES -10. CA -5, Ataque -5. Alcance +7,5m. Área 6x6. Deslocamento -7,5m. +10 em Agarrar. Dano corpo a corpo +10.</p><p style='color:var(--gold-light);'><strong>Rank 6 – +6 Categorias (Forma Colossal)</strong></p><p style='color:var(--silver);'>FOR +12, CON +12, DES -12. CA -6, Ataque -6. Alcance +9m. Área 8x8. Deslocamento -9m. +12 em Agarrar. Dano corpo a corpo +12.</p><p style='color:var(--gold-light);'><strong>Rank 7 – Domínio Estável</strong></p><p style='color:var(--silver);'>FOR +12, CON +12, DES -10. CA -4, Ataque -4. Deslocamento -6m. +12 em Agarrar. Dano corpo a corpo +12.</p><p style='color:var(--gold-light);'><strong>Rank 8 – Controle Avançado</strong></p><p style='color:var(--silver);'>FOR +12, CON +12, DES -8. CA -2, Ataque -2. Deslocamento -3m. +14 em Agarrar. Dano corpo a corpo +12.</p><p style='color:var(--gold-light);'><strong>Rank 9 – Forma Perfeita</strong></p><p style='color:var(--silver);'>FOR +12, CON +12, DES sem penalidade. CA normal. Ataque normal. Sem penalidade de deslocamento. +16 em Agarrar. Dano corpo a corpo +12.</p></div><div style='border-left:3px solid var(--gold-light); padding-left:1rem; margin-top:1rem;'><p style='color:var(--silver);'>O bônus de dano listado é adicional ao aumento natural do dado de dano por tamanho do sistema d20.</p></div>",
    "data": [
      { "rank":1, "tamanho máximo":"+1 categoria", "bônus de dano":"+2" },
      { "rank":2, "tamanho máximo":"+2 categorias", "bônus de dano":"+4" },
      { "rank":3, "tamanho máximo":"+3 categorias", "bônus de dano":"+6" },
      { "rank":4, "tamanho máximo":"+4 categorias", "bônus de dano":"+8" },
      { "rank":5, "tamanho máximo":"+5 categorias", "bônus de dano":"+10" },
      { "rank":6, "tamanho máximo":"+6 categorias", "bônus de dano":"+12" },
      { "rank":7, "tamanho máximo":"+6 categorias (domínio estável)", "bônus de dano":"+12" },
      { "rank":8, "tamanho máximo":"+6 categorias (controle avançado)", "bônus de dano":"+12" },
      { "rank":9, "tamanho máximo":"+6 categorias (forma perfeita)", "bônus de dano":"+12" }
    ]
  },
  {
    "table":"Alcance da Técnica",
    "description":"Distância máxima para executar a técnica.",
    "full_description":"<p style='color:var(--silver); line-height:1.8;'>O alcance define até onde a técnica pode ser usada.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Quando baseado em nível, multiplique o valor indicado pelo nível do personagem, respeitando o limite máximo.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>O alcance não altera dano, precisão ou área de efeito. Apenas limita a distância da execução.</p>",
    "data":[
      { "rank":1, "alcance":"9 m (fixo)" },
      { "rank":2, "alcance":"3 m por nível (máx. 18 m)" },
      { "rank":3, "alcance":"5 m por nível (máx. 36 m)" },
      { "rank":4, "alcance":"7 m por nível (máx. 72 m)" },
      { "rank":5, "alcance":"9 m por nível (máx. 144 m)" },
      { "rank":6, "alcance":"12 m por nível (máx. 288 m)" },
      { "rank":7, "alcance":"15 m por nível (sem limite)" },
      { "rank":8, "alcance":"20 m por nível (sem limite)" },
      { "rank":9, "alcance":"30 m por nível (sem limite)" }
    ]
  },
  {
    "table":"Alcance de Salto",
    "description":"Distância máxima em altura que um personagem pode saltar e causar dano.",
    "full_description":"O alcance determina a altura e distância máxima na qual o Cavaleiro pode saltar. Sendo a distância sempre a metade da altura máxima.",
    "data":[
      { "rank":1, "alcance":"9 m (fixo)" },
      { "rank":2, "alcance":"2 m por nível (máx. 16 m)" },
      { "rank":3, "alcance":"3 m por nível (máx. 32 m)" },
      { "rank":4, "alcance":"4 m por nível (máx. 64 m)" },
      { "rank":5, "alcance":"6 m por nível (máx. 128 m)" },
      { "rank":6, "alcance":"8 m por nível (máx. 256 m)" },
      { "rank":7, "alcance":"10 m por nível (sem limite)" },
      { "rank":8, "alcance":"13 m por nível (sem limite)" },
      { "rank":9, "alcance":"16 m por nível (sem limite)" }
    ]
  },
  {
    "table": "Teletransporte",
    "description": "Distância máxima que o Cavaleiro pode se mover instantaneamente através do Cosmo.",
    "full_description": "Algumas técnicas permitem ao Cavaleiro dobrar o espaço e mover-se instantaneamente através do Cosmo. O alcance é definido por metros por nível, respeitando sempre um limite máximo absoluto de segurança. Ultrapassar esse limite pode causar falha cósmica, danos severos ou perda no vazio dimensional.",
    "data": [
      { "rank": 1, "alcance": "não recomendado (instável/proibido)", "alcance máximo": "não recomendável" },
      { "rank": 2, "alcance": "não recomendado (instável/proibido)", "alcance máximo": "não recomendável" },
      { "rank": 3, "alcance": "não recomendado (instável/proibido)", "alcance máximo": "não recomendável" },
      { "rank": 4, "alcance": "200 m por nível", "alcance máximo": "1,2 km" },
      { "rank": 5, "alcance": "200 m por nível", "alcance máximo": "1,6 km" },
      { "rank": 6, "alcance": "200 m por nível", "alcance máximo": "2,2 km" },
      { "rank": 7, "alcance": "300 m por nível", "alcance máximo": "2,8 km" },
      { "rank": 8, "alcance": "300 m por nível", "alcance máximo": "3,5 km" },
      { "rank": 9, "alcance": "300 m por nível", "alcance máximo": "5 km" }
    ]
  },
  {
    "table":"Detecção Cósmica",
    "description":"Permite perceber presenças, intenções e energia através do Cosmo.",
    "full_description":"<p style='color:var(--silver); line-height:1.8;'>A Detecção Cósmica permite ao Cavaleiro expandir sua percepção além dos sentidos físicos, identificando presenças, intenções e níveis de poder à distância. Quanto maior o Rank, maior o alcance e a precisão da leitura do Cosmo.</p>",
    "data":[
      {
        "rank":1,
        "alcance":"1 km/nível",
        "detecção":"Percebe presenças dentro do alcance. Distingue aliado de inimigo, sem identificar força ou intenção."
      },
      {
        "rank":2,
        "alcance":"2 km/nível",
        "detecção":"Percebe emoções básicas (hostilidade, medo, calma). Diferencia múltiplas presenças próximas."
      },
      {
        "rank":3,
        "alcance":"3 km/nível",
        "detecção":"Identifica intenções hostis claras. Consegue contar quantas presenças existem na área."
      },
      {
        "rank":4,
        "alcance":"5 km/nível",
        "detecção":"Determina nível geral de poder (fraco, médio, forte). Identifica direção exata da origem."
      },
      {
        "rank":5,
        "alcance":"7 km/nível",
        "detecção":"Diferencia indivíduos dentro de grupos. Detecta presenças ocultas sem técnicas de bloqueio."
      },
      {
        "rank":6,
        "alcance":"10 km/nível",
        "detecção":"Percebe flutuações de Cosmo (uso de técnicas, aumento de energia). Consegue rastrear movimento contínuo."
      },
      {
        "rank":7,
        "alcance":"15 km/nível",
        "detecção":"Detecta sem linha de visão. Identifica nível de poder aproximado com boa precisão."
      },
      {
        "rank":8,
        "alcance":"20 km/nível",
        "detecção":"Ignora ocultação comum. Percebe intenção antes da ação (antecipação leve de combate)."
      },
      {
        "rank":9,
        "alcance":"30 km/nível",
        "detecção":"Leitura completa: presença, intenção, nível exato de poder e variações em tempo real. Detecta seres ocultos ou com energia suprimida, exceto contra técnicas equivalentes ou superiores."
      }
    ]
  },
  {
    "table":"Telepatia",
    "description":"Limite máximo de alcance seguro para telepatia.",
    "full_description":"Capacidade de se comunicar mentalmente a distância com outros seres que possuem a mesma capacidade. Um ser sem telepatia pode apenas ouvir sua voz em sua mente. A telepatia funciona como um sistema de ondas de rádio onde quem o ouvir pode responder de volta se for capaz. E as pessoas que o ouvirem podem te responder sem problemas de distância desde que tenham sido alcançadas por você.",
    "data":[
      { "rank":1, "alcance":"2 km/nível" },
      { "rank":2, "alcance":"4 km/nível" },
      { "rank":3, "alcance":"6 km/nível" },
      { "rank":4, "alcance":"10 km/nível" },
      { "rank":5, "alcance":"15 km/nível" },
      { "rank":6, "alcance":"20 km/nível" },
      { "rank":7, "alcance":"30 km/nível" },
      { "rank":8, "alcance":"45 km/nível" },
      { "rank":9, "alcance":"60 km/nível" }
    ]
  },
  {
    "table":"Raio de Efeito",
    "description":"Define a área circular afetada por uma técnica.",
    "full_description":"<p style='color:var(--silver); line-height:1.8;'>O Raio de Efeito determina uma área circular que afeta todos os seres dentro dela, sem distinção entre aliados e inimigos.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>O ponto de origem pode ser o próprio Cavaleiro ou qualquer ponto dentro do alcance da técnica. A partir desse ponto, o efeito se expande igualmente em todas as direções.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Toda técnica que afeta múltiplos alvos dentro de um raio deve permitir um teste de resistência.</p>\n\n<div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'>\n<p style='color:var(--gold-light); text-align:center;'>CD = 10 + Modificador de Sabedoria (SAB) + Rank da técnica</p>\n</div>\n\n<p style='color:var(--silver); line-height:1.8;'>O tipo de teste de resistência (Fortitude, Reflexos ou Vontade) depende da natureza da técnica. Em caso de sucesso, o efeito pode ser reduzido ou negado, conforme descrito na técnica.</p>",
    "data":[
      { "rank":1, "raio de efeito":"não possui área" },
      { "rank":2, "raio de efeito":"1 m/nível (máx. 4 m)" },
      { "rank":3, "raio de efeito":"1,5 m/nível (máx. 6 m)" },
      { "rank":4, "raio de efeito":"2 m/nível (máx. 10 m)" },
      { "rank":5, "raio de efeito":"3 m/nível (máx. 15 m)" },
      { "rank":6, "raio de efeito":"4 m/nível (máx. 20 m)" },
      { "rank":7, "raio de efeito":"6 m/nível" },
      { "rank":8, "raio de efeito":"8 m/nível" },
      { "rank":9, "raio de efeito":"12 m/nível" }
    ]
  },
  {
    "table":"Cone de Efeito",
    "description":"Área em formato de leque frontal que se projeta a partir do personagem.",
    "full_description":"<p style='color:var(--silver); line-height:1.8;'>O Cone de Efeito é uma projeção direcional de Cosmo em formato de leque, originada no usuário e expandida em linha frontal.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>A técnica afeta todos os alvos dentro da área, sem seleção individual. O cone é definido por dois parâmetros: alcance (profundidade) e abertura angular.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>O alcance segue progressão base + incremento por nível da técnica, garantindo escalonamento constante de potência e alcance tático.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>A abertura do cone é escolhida pelo jogador no momento da execução da técnica, permitindo ajuste tático da dispersão do ataque. Essa abertura não pode ultrapassar o limite máximo definido pelo Rank da técnica.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Todos os alvos atingidos dentro da área devem realizar teste de resistência conforme as regras gerais de técnicas de área.</p>\n\n<div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'>\n<p style='color:var(--gold-light); text-align:center;'>CD = 10 + Modificador de Sabedoria (SAB) + Rank da técnica</p>\n</div>",
    "data":[
      { "level":1, "cone":"3 m + 0.5 m/nível / abertura máxima 20°" },
      { "level":2, "cone":"4 m + 1 m/nível / abertura máxima 25°" },
      { "level":3, "cone":"6 m + 1.5 m/nível / abertura máxima 30°" },
      { "level":4, "cone":"8 m + 2 m/nível / abertura máxima 35°" },
      { "level":5, "cone":"10 m + 3 m/nível / abertura máxima 40°" },
      { "level":6, "cone":"12 m + 4 m/nível / abertura máxima 45°" },
      { "level":7, "cone":"15 m + 6 m/nível / abertura máxima 50°" },
      { "level":8, "cone":"18 m + 8 m/nível / abertura máxima 60°" },
      { "level":9, "cone":"22 m + 10 m/nível / abertura máxima 75°" }
    ]
  },
  {
    "table":"Linha de Efeito",
    "description":"Ataque em trajetória reta que atravessa tudo em seu caminho.",
    "full_description":"<p style='color:var(--silver); line-height:1.8;'>A Linha de Efeito representa uma liberação de Cosmo em trajetória retilínea e concentrada, avançando diretamente do ponto de origem até seu limite de alcance.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Todos os alvos na trajetória são atingidos em sequência, sem dispersão lateral. É uma forma altamente precisa, mas dependente de alinhamento direto com o alvo.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>A largura da linha aumenta levemente com o nível da técnica, representando maior estabilidade energética, mas sem perder sua natureza perfurante.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Técnicas em linha podem atravessar múltiplos alvos dependendo da potência do efeito.</p>",
    "data":[
      { "level":1, "linha":"4 m + 1 m/nível" },
      { "level":2, "linha":"6 m + 1,2 m/nível" },
      { "level":3, "linha":"8 m + 1,5 m/nível" },
      { "level":4, "linha":"10 m + 2 m/nível" },
      { "level":5, "linha":"12 m + 2,5 m/nível" },
      { "level":6, "linha":"15 m + 3 m/nível" },
      { "level":7, "linha":"18 m + 3,5 m/nível" },
      { "level":8, "linha":"22 m + 4 m/nível" },
      { "level":9, "linha":"28 m + 5 m/nível" }
    ]
  },
  {
    "table":"Cilindro de Efeito",
    "description":"Área tridimensional em forma de coluna que se expande verticalmente a partir de um ponto de origem.",
    "full_description":"<p style='color:var(--silver); line-height:1.8;'>O Cilindro de Efeito é uma projeção de Cosmo em formato de coluna tridimensional que se expande verticalmente e horizontalmente a partir de um ponto de origem definido.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Essa forma de área é especialmente eficaz para atingir múltiplos alvos distribuídos em diferentes alturas, permitindo afetar simultaneamente inimigos no solo, em estruturas elevadas ou em voo dentro do volume do cilindro.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>O ponto de origem pode ser o próprio Cavaleiro ou um ponto no espaço. Quando a técnica é originada no Cavaleiro, ela naturalmente cobre áreas acima e abaixo dele dentro do volume definido. Quando o ponto de origem está fora do corpo do usuário, é obrigatório que a técnica possua a característica de alcance para posicionar corretamente o cilindro no campo de batalha.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>O efeito do cilindro atinge todos os seres dentro do volume tridimensional, independentemente de estarem no solo, suspensos ou em movimento vertical.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Todos os alvos afetados devem realizar teste de resistência conforme as regras gerais de técnicas de área.</p>\n\n<div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'>\n<p style='color:var(--gold-light); text-align:center;'>CD = 10 + Modificador de Sabedoria (SAB) + Rank da técnica</p>\n</div>",
    "data":[
      { "level":1, "cilindro":"altura 3 m + 0,5 m/nível / raio 1 m" },
      { "level":2, "cilindro":"altura 4 m + 0,7 m/nível / raio 1,2 m" },
      { "level":3, "cilindro":"altura 5 m + 1 m/nível / raio 1,5 m" },
      { "level":4, "cilindro":"altura 6 m + 1,5 m/nível / raio 2 m" },
      { "level":5, "cilindro":"altura 8 m + 2 m/nível / raio 2,5 m" },
      { "level":6, "cilindro":"altura 10 m + 2,5 m/nível / raio 3 m" },
      { "level":7, "cilindro":"altura 12 m + 3 m/nível / raio 3,5 m" },
      { "level":8, "cilindro":"altura 15 m + 3,5 m/nível / raio 4 m" },
      { "level":9, "cilindro":"altura 18 m + 4 m/nível / raio 5 m" }
    ]
  },
  {
    "table": "Emanação de Efeito",
    "description": "Área que se expande a partir de um epicentro como uma aura contínua de Cosmo.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>A Emanação representa uma liberação constante de Cosmo que se manifesta como uma área ativa de influência contínua.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>O epicentro da Emanação pode estar no próprio Cavaleiro ou em um ponto externo, desde que a técnica possua a característica de alcance suficiente para definir esse ponto de origem.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Uma vez definido o epicentro, a Emanação se expande a partir dele e seus efeitos persistem na área ao redor desse ponto, mesmo após a ação inicial de execução da técnica, mantendo influência contínua enquanto durar sua duração.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Esse tipo de técnica é utilizado para controle de área, efeitos persistentes e imposição de condições nocivas ou limitantes, como dano contínuo, debuffs, restrições de movimento ou interferência sensorial.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Sempre que a Emanação aplicar efeitos que não sejam dano direto imediato, as criaturas dentro da área devem realizar teste de resistência.</p>\n\n<div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'>\n<p style='color:var(--gold-light); text-align:center;'>CD do Teste de Resistência = 10 + Modificador de Sabedoria (SAB) + Rank da técnica</p>\n</div>\n\n<p style='color:var(--silver); line-height:1.8;'>Falha no teste faz com que o alvo sofra integralmente os efeitos enquanto permanecer na área ou enquanto durar a técnica, conforme sua descrição específica.</p>",
    "data": [
      { "level": 1, "emanação": "1 m + 0,3 m/nível" },
      { "level": 2, "emanação": "1,5 m + 0,5 m/nível" },
      { "level": 3, "emanação": "2 m + 0,7 m/nível" },
      { "level": 4, "emanação": "3 m + 1 m/nível" },
      { "level": 5, "emanação": "4 m + 1,3 m/nível" },
      { "level": 6, "emanação": "5 m + 1,6 m/nível" },
      { "level": 7, "emanação": "6 m + 2 m/nível" },
      { "level": 8, "emanação": "8 m + 2,5 m/nível" },
      { "level": 9, "emanação": "10 m + 3 m/nível" }
    ]
  },
  {
    "table": "Zona de Efeito",
    "description": "Área fixa ou móvel que aplica efeitos contínuos definidos pelo usuário.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>A Zona de Efeito cria uma área delimitada no campo de batalha onde seus efeitos são aplicados de forma imediata e constante durante toda a sua duração.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>A zona pode ter dois tipos de origem: um <strong>epicentro fixo</strong>, definido em um ponto do espaço, ou um <strong>epicentro móvel</strong>, centrado no próprio Cavaleiro. No caso de origem móvel, a área acompanha seus movimentos, mantendo sua extensão ao redor dele.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Em ambos os casos, qualquer criatura dentro da área é afetada sem distinção entre aliados ou inimigos. Os efeitos são aplicados automaticamente a todos os alvos presentes ou que entrem na zona durante sua duração.</p>\n\n<p style='color:var(--silver); line-height:1.8;'>Os efeitos da Zona são definidos pelo usuário no momento da ativação e devem ser baseados em características do sistema, como penalidades, bônus, redução de deslocamento, dano contínuo ou outras condições de controle e suporte.</p>\n\n<div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'>\n<p style='color:var(--gold-light); text-align:center;'>CD = 10 + Modificador de Sabedoria (SAB) + Rank da técnica</p>\n</div>",
    "data": [
      { "level": 1, "zona": "2 m + 0,5 m/nível" },
      { "level": 2, "zona": "3 m + 0,7 m/nível" },
      { "level": 3, "zona": "4 m + 1 m/nível" },
      { "level": 4, "zona": "5 m + 1,3 m/nível" },
      { "level": 5, "zona": "6 m + 1,7 m/nível" },
      { "level": 6, "zona": "8 m + 2 m/nível" },
      { "level": 7, "zona": "10 m + 2,5 m/nível" },
      { "level": 8, "zona": "12 m + 3 m/nível" },
      { "level": 9, "zona": "15 m + 4 m/nível" }
    ]
  },
  {
    "table":"Alvos",
    "description":"Quantidade máxima de alvos que podem ser afetados simultaneamente.",
    "full_description":"A quantidade máxima de alvos representa quantas criaturas, objetos ou pontos no espaço podem ser afetados simultaneamente pela técnica cósmica do Cavaleiro. Em Ranks mais elevados, o Cosmo pode se expandir a ponto de envolver grandes grupos ou exércitos inteiros.",
    "data":[
      { "rank":1, "alvos":"até 2 alvos" },
      { "rank":2, "alvos":"até 3 alvos" },
      { "rank":3, "alvos":"até 4 alvos" },
      { "rank":4, "alvos":"1 alvo por nível (máx. 8)" },
      { "rank":5, "alvos":"1 alvo por nível (máx. 12)" },
      { "rank":6, "alvos":"1 alvo por nível (máx. 14)" },
      { "rank":7, "alvos":"1 alvo por nível (sem limite)" },
      { "rank":8, "alvos":"2 alvos por nível (sem limite)" },
      { "rank":9, "alvos":"3 alvos por nível (sem limite)" }
    ]
  },
  {
    "table":"Deslocamento Aumentado (Terra, Água e Ar)",
    "description":"Bônus de deslocamento concedido por técnicas de aumento de mobilidade.",
    "full_description":"Algumas técnicas ampliam a velocidade de movimento do Cavaleiro, permitindo avanços rápidos, corrida sobre a água ou impulsos de salto aéreo que simulam breves instantes de voo. O bônus de deslocamento varia de acordo com o Rank da técnica.",
    "data":[
      { "rank":1, "bônus de movimento":"+2 m por nível (máx. +4 m)" },
      { "rank":2, "bônus de movimento":"+2 m por nível (máx. +6 m)" },
      { "rank":3, "bônus de movimento":"+2 m por nível (máx. +8 m)" },
      { "rank":4, "bônus de movimento":"+3 m por nível (máx. +14 m)" },
      { "rank":5, "bônus de movimento":"+3 m por nível (máx. +16 m)" },
      { "rank":6, "bônus de movimento":"+3 m por nível (máx. +18 m)" },
      { "rank":7, "bônus de movimento":"+4 m por nível (máx. +24 m)" },
      { "rank":8, "bônus de movimento":"+4 m por nível (máx. +30 m)" },
      { "rank":9, "bônus de movimento":"+4 m por nível (sem limite)" }
    ]
  },
  {
    "table": "Quantidade de Peso Manipulável (Kg)",
    "description": "Capacidade de manipular matéria física com força cósmica sem contato direto, permitindo levantar, deslocar ou arremessar objetos do campo de batalha medieval.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>Algumas técnicas permitem a manipulação de objetos físicos por meio de <strong style='color:var(--gold-light);'>força cósmica</strong>, sem necessidade de contato direto. O Cavaleiro pode <strong style='color:var(--gold-light);'>levantar</strong>, <strong style='color:var(--gold-light);'>deslocar</strong> ou <strong style='color:var(--gold-light);'>arremessar</strong> estruturas inteiras durante o combate.</p><p style='color:var(--silver); line-height:1.8;'>No contexto medieval, isso inclui pedras de muralha, blocos de rocha, colunas de templos, troncos de árvores antigas, carruagens e partes de fortificações.</p><p style='color:var(--silver); line-height:1.8;'>O impacto de objetos arremessados causa dano baseado no peso e velocidade do lançamento, podendo atingir múltiplos alvos em linha ou área de impacto.</p><div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'><p style='color:var(--gold-light); text-align:center;'>Referência de impacto: objetos mais pesados aumentam o dano base de ataques de arremesso e colisão estrutural</p></div>",
    "data": [
      { "rank": 1, "peso máximo": "10 Kg por nível (máx. 80 Kg)", "dano estimado": "1d6 (pedras pequenas, tijolos, armas arremessadas)" },
      { "rank": 2, "peso máximo": "20 Kg por nível (máx. 120 Kg)", "dano estimado": "1d8 (escudos de madeira, blocos de pedra, baús)" },
      { "rank": 3, "peso máximo": "30 Kg por nível (máx. 240 Kg)", "dano estimado": "2d6 (troncos grossos, portas reforçadas, rodas de carroça)" },
      { "rank": 4, "peso máximo": "50 Kg por nível (máx. 480 Kg)", "dano estimado": "2d8 (estátuas pequenas, pilares de madeira, partes de muralha leve)" },
      { "rank": 5, "peso máximo": "70 Kg por nível (máx. 960 Kg)", "dano estimado": "3d6 (colunas de pedra, carroças completas, blocos de fortificação)" },
      { "rank": 6, "peso máximo": "90 Kg por nível (máx. 1920 Kg)", "dano estimado": "3d8 (portões de madeira maciça, rochas de penhasco, torres pequenas em colapso)" },
      { "rank": 7, "peso máximo": "120 Kg por nível (sem limite)", "dano estimado": "4d6 (colunas de templo, muralhas parciais, fragmentos de castelo)" },
      { "rank": 8, "peso máximo": "240 Kg por nível (sem limite)", "dano estimado": "4d8 (torres de vigia, seções de muralha, rochas gigantes de montanha)" },
      { "rank": 9, "peso máximo": "480 Kg por nível (sem limite)", "dano estimado": "6d8 (estruturas massivas, portões de castelo, blocos de fortaleza e formação rochosa)" }
    ]
  },
  {
    "table": "Telecinese (Deslocamento e Controle de Massa)",
    "description": "Capacidade de levitar, deslocar e sustentar objetos ou criaturas através de força cósmica, controlando simultaneamente altura, quantidade de alvos e massa manipulada.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>A <strong style='color:var(--gold-light);'>Telecinese</strong> permite ao Cavaleiro manipular matéria sem contato físico, utilizando o Cosmo para exercer força direta sobre objetos, estruturas e criaturas.</p><p style='color:var(--silver); line-height:1.8;'>Essa técnica combina três parâmetros fundamentais: <strong style='color:var(--gold-light);'>altura de levitação</strong>, <strong style='color:var(--gold-light);'>quantidade simultânea de alvos</strong> e <strong style='color:var(--gold-light);'>peso máximo manipulável</strong>. O equilíbrio entre esses fatores define o nível real de domínio telecinético.</p><p style='color:var(--silver); line-height:1.8;'>No contexto de combate medieval, isso permite erguer pedras de muralhas, colunas de templos, troncos, carruagens e até múltiplos inimigos simultaneamente, desde que dentro dos limites estruturais do Cosmo.</p><p style='color:var(--silver); line-height:1.8;'>A telecinese pode ser usada tanto para controle tático quanto ofensivo direto, incluindo arremessos de alta energia cinética, esmagamento por compressão e deslocamento de campo de batalha.</p><div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'><p style='color:var(--gold-light); text-align:center;'>Exceder o limite de peso ou concentração pode causar perda de controle e colapso da técnica</p></div>",
    "data": [
      {
        "rank": 1,
        "altura": "1 m por nível (máx. 4 m)",
        "objetos simultâneos": "1 por nível (máx. 4)",
        "peso máximo": "10 Kg por nível (máx. 80 Kg)"
      },
      {
        "rank": 2,
        "altura": "1 m por nível (máx. 6 m)",
        "objetos simultâneos": "1 por nível (máx. 6)",
        "peso máximo": "20 Kg por nível (máx. 120 Kg)"
      },
      {
        "rank": 3,
        "altura": "1 m por nível (máx. 8 m)",
        "objetos simultâneos": "1 por nível (máx. 8)",
        "peso máximo": "30 Kg por nível (máx. 240 Kg)"
      },
      {
        "rank": 4,
        "altura": "1 m por nível (máx. 12 m)",
        "objetos simultâneos": "1 por nível (máx. 12)",
        "peso máximo": "50 Kg por nível (máx. 480 Kg)"
      },
      {
        "rank": 5,
        "altura": "1 m por nível (máx. 16 m)",
        "objetos simultâneos": "1 por nível (máx. 16)",
        "peso máximo": "70 Kg por nível (máx. 960 Kg)"
      },
      {
        "rank": 6,
        "altura": "1 m por nível (máx. 20 m)",
        "objetos simultâneos": "1 por nível (máx. 20)",
        "peso máximo": "90 Kg por nível (máx. 1920 Kg)"
      },
      {
        "rank": 7,
        "altura": "1 m por nível (máx. 26 m)",
        "objetos simultâneos": "1 por nível (máx. 26)",
        "peso máximo": "120 Kg por nível"
      },
      {
        "rank": 8,
        "altura": "1 m por nível (máx. 32 m)",
        "objetos simultâneos": "1 por nível (máx. 32)",
        "peso máximo": "240 Kg por nível"
      },
      {
        "rank": 9,
        "altura": "1 m por nível",
        "objetos simultâneos": "1 por nível",
        "peso máximo": "480 Kg por nível"
      }
    ]
  },
  {
    "table":"Altura (Voo)",
    "description":"Altura máxima que um Cavaleiro pode alcançar em voo.",
    "full_description":"Define a altura máxima que um Cavaleiro pode atingir ao voar utilizando técnicas de sustentação ou propulsão cósmica. A altura é calculada em metros por nível, respeitando um limite máximo conforme o Rank da técnica.",
    "data":[
      { "rank":1, "altura máxima":"1 m por nível (máx. 4 m)" },
      { "rank":2, "altura máxima":"1 m por nível (máx. 6 m)" },
      { "rank":3, "altura máxima":"1 m por nível (máx. 8 m)" },
      { "rank":4, "altura máxima":"2 m por nível (máx. 12 m)" },
      { "rank":5, "altura máxima":"2 m por nível (máx. 16 m)" },
      { "rank":6, "altura máxima":"2 m por nível (máx. 20 m)" },
      { "rank":7, "altura máxima":"3 m por nível (máx. 30 m)" },
      { "rank":8, "altura máxima":"4 m por nível (máx. 40 m)" },
      { "rank":9, "altura máxima":"5 m por nível" }
    ]
  },
  {
    "table":"Carga (Voo)",
    "description":"Peso máximo que um Cavaleiro pode transportar enquanto voa.",
    "full_description":"Define o peso máximo que um Cavaleiro consegue carregar durante o voo utilizando técnicas cósmicas. O valor é calculado em quilogramas por nível, respeitando um limite máximo conforme o Rank da técnica, quando aplicável.",
    "data":[
      { "rank":1, "carga máxima":"10 Kg por nível (máx. 40 Kg)" },
      { "rank":2, "carga máxima":"20 Kg por nível (máx. 80 Kg)" },
      { "rank":3, "carga máxima":"30 Kg por nível (máx. 120 Kg)" },
      { "rank":4, "carga máxima":"50 Kg por nível (máx. 480 Kg)" },
      { "rank":5, "carga máxima":"70 Kg por nível (máx. 640 Kg)" },
      { "rank":6, "carga máxima":"90 Kg por nível (máx. 1900 Kg)" },
      { "rank":7, "carga máxima":"120 Kg por nível" },
      { "rank":8, "carga máxima":"140 Kg por nível" },
      { "rank":9, "carga máxima":"180 Kg por nível" }
    ]
  },

  {
    "table": "Privação",
    "description": "Efeitos de privação aplicados por técnicas.",
    "full_description": "Este tipo de categoria se aplica a técnicas que são capazes de privar alguma habilidade natural de um ser. Tais habilidades naturais incluem os cinco sentidos, capacidade de fala, capacidade de pensamento, capacidade de respirar e entre outras. O alvo sempre tem direito a um teste de resistência de vontade para anular o efeito.",
    "data": [
      { "rank": 1, "efeito": "Privação do Olfato ou Paladar: Causa uma penalidade de –2 em testes de Observar e Sentir Motivação." },
      { "rank": 2, "efeito": "Privação da Fala: O alvo fica silenciado, impedindo a execução de técnicas que exijam gesticulação vocal ou comandos gritados." },
      { "rank": 3, "efeito": "Privação da Audição: O alvo sofre uma penalidade de –4 na Iniciativa e não pode realizar testes de Ouvir." },
      { "rank": 4, "efeito": "Privação da Visão: O alvo fica sob efeito de Cegueira, recebendo 50% de chance de erro em seus ataques e perdendo o bônus de Destreza na CA." },
      { "rank": 5, "efeito": "Privação da Respiração (Asfixia): O alvo começa a sofrer dano por contusão a cada rodada (1d6) e deve realizar testes de Fortitude CD 10 + nível da técnica para não cair inconsciente." },
      { "rank": 6, "efeito": "Privação do Tato (Paralisia): O alvo perde a sensibilidade corporal e a capacidade motora, ficando Imobilizado (incapaz de agir ou se mover)." },
      { "rank": 7, "efeito": "Privação do Pensamento/Razão (6º Sentido): O alvo perde o controle sobre suas ações e o livre arbítrio, podendo ser comandado pelo usuário ou ficando em estado catatônico." },
      { "rank": 8, "efeito": "Privação do Cosmo (Atrofia Cósmica): O alvo é impedido de “Queimar o Cosmo”, não podendo usar técnicas especiais ou elevar sua energia acima da metade do valor máximo." },
      { "rank": 9, "efeito": "Privação Espiritual (Aniquilação dos Sentidos): Remove simultaneamente todos os sentidos físicos e mentais, reduzindo o alvo a uma “casca vazia”." }
    ]
  },
  {
    "table": "Dano/Cura por Rodada de Manutenção",
    "description": "Define o valor de dano ou cura contínua gerado por técnicas sustentadas enquanto permanecem ativas no campo de batalha.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>Algumas técnicas possuem efeito de <strong style='color:var(--gold-light);'>manutenção contínua</strong>, permanecendo ativas por múltiplas rodadas e aplicando efeitos repetidos a cada turno.</p><p style='color:var(--silver); line-height:1.8;'>Esse efeito pode causar <strong style='color:var(--gold-light);'>dano contínuo</strong> (como queimaduras cósmicas, corrosão espiritual ou esmagamento progressivo) ou <strong style='color:var(--gold-light);'>cura contínua</strong> (regeneração de energia vital ou restauração cósmica).</p><p style='color:var(--silver); line-height:1.8;'>O valor aplicado a cada rodada é baseado no nível do personagem, mas sempre limitado pelo Rank da técnica para evitar escalonamento excessivo.</p><p style='color:var(--silver); line-height:1.8;'>Esses efeitos são aplicados automaticamente no início ou final de cada rodada, enquanto a técnica permanecer ativa e o alvo estiver dentro da área ou condição definida.</p><div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'><p style='color:var(--gold-light); text-align:center;'>Efeitos contínuos podem ser interrompidos por dissipação de Cosmo, quebra de concentração ou saída da área de efeito</p></div>",
    "data": [
      { "rank": 1, "dano/cura por rodada": "1 por nível", "limite por rodada": "até 4" },
      { "rank": 2, "dano/cura por rodada": "1 por nível", "limite por rodada": "até 6" },
      { "rank": 3, "dano/cura por rodada": "1 por nível", "limite por rodada": "até 8" },
      { "rank": 4, "dano/cura por rodada": "2 por nível", "limite por rodada": "até 13" },
      { "rank": 5, "dano/cura por rodada": "2 por nível", "limite por rodada": "até 16" },
      { "rank": 6, "dano/cura por rodada": "2 por nível", "limite por rodada": "até 19" },
      { "rank": 7, "dano/cura por rodada": "3 por nível", "limite por rodada": "até 23" },
      { "rank": 8, "dano/cura por rodada": "3 por nível", "limite por rodada": "até 27" },
      { "rank": 9, "dano/cura por rodada": "3 por nível", "limite por rodada": "até 31" }
    ]
  },
  {
    "table":"Habilidade (Aumento de Atributos Primários)",
    "description":"Aumento temporário de atributos físicos, mentais ou espirituais.",
    "full_description":"Algumas técnicas elevam os atributos primários do cavaleiro como FOR, CON, DES, SAB, INT ou CAR .",
    "data":[
      { "rank":1, "dado de habilidade":"d4 + 1" },
      { "rank":2, "dado de habilidade":"d6 + 3" },
      { "rank":3, "dado de habilidade":"d8 + 6" },
      { "rank":4, "dado de habilidade":"d6 + 9" },
      { "rank":5, "dado de habilidade":"d8 + 12" },
      { "rank":6, "dado de habilidade":"d10 + 15" },
      { "rank":7, "dado de habilidade":"d10 + 18" },
      { "rank":8, "dado de habilidade":"d12 + 21" },
      { "rank":9, "dado de habilidade":"d20 + 25" }
    ]
  },
  {
    "table":"Habilidade (Aumento de Atributos Secundários)",
    "description":"Aumento temporário de atributos secundários.",
    "full_description":"Algumas técnicas elevam os atributos secundários de um personagem que podem ser: CA, Iniciativa, Fortitude, Vontade, Reflexo, Perícia em específico ou Ataque.",
    "data":[
      { "rank":1, "dado de habilidade":"1" },
      { "rank":2, "dado de habilidade":"3" },
      { "rank":3, "dado de habilidade":"6" },
      { "rank":4, "dado de habilidade":"9" },
      { "rank":5, "dado de habilidade":"12" },
      { "rank":6, "dado de habilidade":"15" },
      { "rank":7, "dado de habilidade":"18" },
      { "rank":8, "dado de habilidade":"21" },
      { "rank":9, "dado de habilidade":"25" }
    ]
  },
  {
    "table":"Profundidade",
    "description":"Capacidade de criar buracos ou crateras.",
    "full_description":"A profundidade é definida em metros para saber o quão profundo uma cratera poder se abrir. E a largura máxima define o tamanho máximo do buraco.",
    "data":[
      { "rank":1, "largura": "1 m", "profundidade":"2 m" },
      { "rank":2, "largura": "1.5 m", "profundidade":"4 m" },
      { "rank":3, "largura": "2 m", "profundidade":"6 m" },
      { "rank":4, "largura": "3 m", "profundidade":"10 m" },
      { "rank":5, "largura": "4 m", "profundidade":"15 m" },
      { "rank":6, "largura": "5 m", "profundidade":"20 m" },
      { "rank":7, "largura": "10 m", "profundidade":"30 m" },
      { "rank":8, "largura": "15 m", "profundidade":"40 m" },
      { "rank":9, "largura": "20 m", "profundidade":"50 m" }
    ]
  },
  {
    "table": "Reflexão de Ataque",
    "description": "Técnica defensiva que permite refletir parte do dano recebido e dificultar a precisão dos ataques inimigos por meio de um teste resistido contra a execução ofensiva.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>A <strong style='color:var(--gold-light);'>Reflexão de Ataque</strong> funciona como uma resposta ativa à ofensiva inimiga, convertendo parte da energia recebida em retorno direto contra o atacante.</p><p style='color:var(--silver); line-height:1.8;'>Para que a reflexão ocorra de forma eficaz, o sistema exige um <strong style='color:var(--gold-light);'>teste resistido</strong> contra o atacante no momento em que o dano é calculado.</p><p style='color:var(--silver); line-height:1.8;'>O atacante deve realizar um teste contra a seguinte <strong style='color:var(--gold-light);'>CD de resistência</strong>: <strong>10 + Rank da técnica + Modificador de Sabedoria (SAB) + Bônus de Dificuldade da Reflexão</strong>.</p><p style='color:var(--silver); line-height:1.8;'>Se o atacante falhar no teste, a reflexão é ativada com sucesso e uma porcentagem do dano recebido é devolvida imediatamente ao agressor. Se o teste for bem-sucedido, a reflexão não se manifesta e o dano é aplicado normalmente.</p><p style='color:var(--silver); line-height:1.8;'>O <strong style='color:var(--gold-light);'>Bônus de Dificuldade</strong> representa a instabilidade gerada no fluxo ofensivo do inimigo, tornando mais difícil manter precisão e controle durante ataques repetidos contra o alvo protegido.</p><p style='color:var(--silver); line-height:1.8;'>Essa mecânica transforma a defesa em um sistema de risco: quanto mais forte a técnica de reflexão, maior a chance de punição direta ao atacante ao insistir no combate.</p><div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'><p style='color:var(--gold-light); text-align:center;'>CD de Reflexão = 10 + Rank da técnica + SAB + Bônus de Dificuldade</p></div>",
    "data": [
      { "rank": 1, "porcentagem do dano refletido": "10%", "bônus de dificuldade": "+1" },
      { "rank": 2, "porcentagem do dano refletido": "20%", "bônus de dificuldade": "+2" },
      { "rank": 3, "porcentagem do dano refletido": "30%", "bônus de dificuldade": "+3" },
      { "rank": 4, "porcentagem do dano refletido": "40%", "bônus de dificuldade": "+4" },
      { "rank": 5, "porcentagem do dano refletido": "50%", "bônus de dificuldade": "+5" },
      { "rank": 6, "porcentagem do dano refletido": "60%", "bônus de dificuldade": "+6" },
      { "rank": 7, "porcentagem do dano refletido": "70%", "bônus de dificuldade": "+7" },
      { "rank": 8, "porcentagem do dano refletido": "80%", "bônus de dificuldade": "+8" },
      { "rank": 9, "porcentagem do dano refletido": "90%", "bônus de dificuldade": "+9" }
    ]
  },
  {
    "table": "Absorção de Energia",
    "description": "Conversão de parte do dano sofrido em recuperação imediata de Cosmo.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>Absorção de Energia é uma técnica de retroalimentação cósmica onde o corpo do Cavaleiro converte parte da energia destrutiva recebida em reserva de Cosmo utilizável.</p><p style='color:var(--silver); line-height:1.8;'>Sempre que o personagem sofre dano, uma quantidade fixa de Cosmo é recuperada imediatamente após a aplicação do dano. Essa recuperação ocorre independentemente da redução de dano, resistência ou mitigação, sendo calculada apenas com base no dano final efetivamente sofrido.</p><p style='color:var(--silver); line-height:1.8;'>A energia absorvida não pode ultrapassar o limite máximo de Cosmo do personagem. Excedentes são perdidos. Técnicas de maior Rank aumentam a eficiência da conversão e estabilizam a absorção contra diferentes tipos de dano (físico, energético ou cósmico).</p><div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'><p style='color:var(--gold-light); text-align:center;'>A conversão ocorre após o dano final e não interfere em testes de resistência ou mitigação</p></div>",
    "data": [
      { "rank": 1, "cosmo recuperado": "2 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 2, "cosmo recuperado": "3 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 3, "cosmo recuperado": "4 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 4, "cosmo recuperado": "5 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 5, "cosmo recuperado": "6 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 6, "cosmo recuperado": "7 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 7, "cosmo recuperado": "9 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 8, "cosmo recuperado": "11 pontos de Cosmo por 5 de dano sofrido" },
      { "rank": 9, "cosmo recuperado": "14 pontos de Cosmo por 5 de dano sofrido" }
    ]
  },
  {
    "table": "Selo de Técnica",
    "description": "Bloqueio temporário do uso de uma técnica específica já observada pelo usuário.",
    "full_description": "<p style='color:var(--silver); line-height:1.8;'>Selo de Técnica é uma forma de interferência cósmica direcionada que atua diretamente na estrutura energética responsável pela execução de uma habilidade específica do alvo.</p><p style='color:var(--silver); line-height:1.8;'>Para aplicar o selo, o Cavaleiro deve obrigatoriamente escolher uma técnica que já tenha visto ser utilizada anteriormente. Não é possível selar técnicas desconhecidas ou nunca testemunhadas, pois o processo depende da leitura e ancoragem do padrão energético já manifestado.</p><p style='color:var(--silver); line-height:1.8;'>Uma vez aplicado com sucesso, o alvo fica impedido de utilizar a técnica selada pelo período determinado, podendo continuar usando normalmente outras habilidades. O selo não bloqueia o Cosmo geral do alvo, apenas a técnica específica escolhida.</p><p style='color:var(--silver); line-height:1.8;'>A aplicação exige resistência do alvo contra uma CD baseada em 10 + Rank da técnica + modificador de Sabedoria (SAB) do usuário. Bônus de controle cósmico podem aumentar a dificuldade do bloqueio.</p><p style='color:var(--silver); line-height:1.8;'>Técnicas de maior Rank permitem selar habilidades mais complexas e aumentam a estabilidade do bloqueio, dificultando sua remoção antecipada.</p><div style='background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin:1rem 0;'><p style='color:var(--gold-light); text-align:center;'>Somente técnicas previamente observadas podem ser selecionadas para aplicação do selo</p></div>,"
    "data": [
      { "rank": 1, "duração": "1 rodada" },
      { "rank": 2, "duração": "1d2 rodadas" },
      { "rank": 3, "duração": "1d3 rodadas" },
      { "rank": 4, "duração": "1d4 rodadas" },
      { "rank": 5, "duração": "1d6 rodadas" },
      { "rank": 6, "duração": "1d8 rodadas" },
      { "rank": 7, "duração": "1d10 rodadas" },
      { "rank": 8, "duração": "1d12 rodadas" },
      { "rank": 9, "duração": "2d6 rodadas" }
    ]
  }
];