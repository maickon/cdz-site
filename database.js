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
    "full_description": "O custo em Cosmo para executar uma técnica é sempre igual ao dobro do Rank da técnica. Esse valor deve ser pago pelo personagem no momento em que a técnica é utilizada.",
    "formula": "rank * 2",
    "data": [
      { "rank": 1, "custod de cosmo": 2 },
      { "rank": 2, "custod de cosmo": 4 },
      { "rank": 3, "custod de cosmo": 6 },
      { "rank": 4, "custod de cosmo": 8 },
      { "rank": 5, "custod de cosmo": 10 },
      { "rank": 6, "custod de cosmo": 12 },
      { "rank": 7, "custod de cosmo": 14 },
      { "rank": 8, "custod de cosmo": 16 },
      { "rank": 9, "custod de cosmo": 18 }
    ]
  },
  {
    "table": "Dado de Dano da Técnica",
    "description": "Dado base associado ao Rank.",
    "full_description": "O dano causado por uma técnica é definido pelo dado base correspondente ao Rank, multiplicado pelo nível do personagem. Use o dado indicado para cada Rank ao calcular o dano total da técnica.",
    "data": [
      { "rank": 1, "dado de dano": "d4" },
      { "rank": 2, "dado de dano": "d6" },
      { "rank": 3, "dado de dano": "d8" },
      { "rank": 4, "dado de dano": "d6" },
      { "rank": 5, "dado de dano": "d8" },
      { "rank": 6, "dado de dano": "d10" },
      { "rank": 7, "dado de dano": "d10" },
      { "rank": 8, "dado de dano": "d12" },
      { "rank": 9, "dado de dano": "d20" }
    ]
  },
  {
    "table":"Dano Direto (Ignora Redução de Armadura)",
    "description":"Dano direto que ignora qualquer forma de redução concedida por armaduras ou efeitos semelhantes.",
    "full_description":"Este tipo de técnica causa dano direto ao alvo, ignorando qualquer forma de redução de dano concedida por armaduras ou efeitos semelhantes. O dano é baseado no nível do personagem e limitado por um valor máximo conforme o Rank da técnica, quando aplicável.",
    "data":[
      { "rank":1, "dano base":"1d4 por nível", "dano máximo":"até 5d4" },
      { "rank":2, "dano base":"1d6 por nível", "dano máximo":"até 5d6" },
      { "rank":3, "dano base":"1d6 por nível", "dano máximo":"até 5d6" },
      { "rank":4, "dano base":"1d8 por nível", "dano máximo":"até 7d8" },
      { "rank":5, "dano base":"1d8 por nível", "dano máximo":"até 7d8" },
      { "rank":6, "dano base":"1d10 por nível", "dano máximo":"até 7d10" },
      { "rank":7, "dano base":"1d10 a cada 2 níveis", "dano máximo":"sem limite fixo" },
      { "rank":8, "dano base":"1d12 a cada 2 níveis", "dano máximo":"sem limite fixo" },
      { "rank":9, "dano base":"1d20 a cada 2 níveis", "dano máximo":"sem limite fixo" }
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
    "table": "Quantidade Máxima de Dados de Dano",
    "description": "Limite máximo de dados de dano.",
    "full_description": "Cada técnica possui um limite de dados de dano que pode atingir, independente do nível do personagem. Siga os valores abaixo conforme o Rank da técnica.",
    "data": [
      { "rank": 1, "dano máximo": "10d4" },
      { "rank": 2, "dano máximo": "10d6" },
      { "rank": 3, "dano máximo": "10d8" },
      { "rank": 4, "dano máximo": "15d6" },
      { "rank": 5, "dano máximo": "15d8" },
      { "rank": 6, "dano máximo": "15d10" },
      { "rank": 7, "dano máximo": "sem limite" },
      { "rank": 8, "dano máximo": "sem limite" },
      { "rank": 9, "dano máximo": "sem limite" }
    ]
  },
  {
    "table":"Classe de Dificuldade (CD) da Técnica",
    "description":"Valor de dificuldade para resistir aos efeitos de uma técnica.",
    "full_description":"A Classe de Dificuldade (CD) para resistir a uma técnica é sempre calculada pela fórmula base CD = 10 + modificador de Sabedoria (SAB) + Rank da técnica. A Sabedoria representa o controle espiritual e a compreensão cósmica do Cavaleiro, enquanto o Rank define a intensidade da técnica utilizada.",
    "formula":"CD = 10 + Mod. SAB + Rank da técnica",
    "data":[
      { "rank":1, "cd":"10 + Mod. SAB + 1" },
      { "rank":2, "cd":"10 + Mod. SAB + 2" },
      { "rank":3, "cd":"10 + Mod. SAB + 3" },
      { "rank":4, "cd":"10 + Mod. SAB + 4" },
      { "rank":5, "cd":"10 + Mod. SAB + 5" },
      { "rank":6, "cd":"10 + Mod. SAB + 6" },
      { "rank":7, "cd":"10 + Mod. SAB + 7" },
      { "rank":8, "cd":"10 + Mod. SAB + 8" },
      { "rank":9, "cd":"10 + Mod. SAB + 9" }
    ]
  },
  {
    "table":"Cura por Rank",
    "description":"Recuperação de pontos de vida baseada no Rank da técnica.",
    "full_description":"Algumas técnicas permitem recuperar pontos de vida. A cura total é calculada pela fórmula Cura = (Rank × 15) + Dado do Rank, utilizando o dado correspondente ao Rank da técnica conforme a tabela de Dado do Rank.",
    "formula":"Cura = (Rank × 15) + Dado do Rank",
    "data":[
      { "rank":1, "rank do dado":"d4", "fórmula de cura":"(1 × 15) + d4", "total de cura":"15 + d4" },
      { "rank":2, "rank do dado":"d6", "fórmula de cura":"(2 × 15) + d6", "total de cura":"30 + d6" },
      { "rank":3, "rank do dado":"d8", "fórmula de cura":"(3 × 15) + d8", "total de cura":"45 + d8" },
      { "rank":4, "rank do dado":"d6", "fórmula de cura":"(4 × 15) + d6", "total de cura":"60 + d6" },
      { "rank":5, "rank do dado":"d8", "fórmula de cura":"(5 × 15) + d8", "total de cura":"75 + d8" },
      { "rank":6, "rank do dado":"d10", "fórmula de cura":"(6 × 15) + d10", "total de cura":"90 + d10" },
      { "rank":7, "rank do dado":"d10", "fórmula de cura":"(7 × 15) + d10", "total de cura":"105 + d10" },
      { "rank":8, "rank do dado":"d12", "fórmula de cura":"(8 × 15) + d12", "total de cura":"120 + d12" },
      { "rank":9, "rank do dado":"d20", "fórmula de cura":"(9 × 15) + d20", "total de cura":"135 + d20" }
    ]
  },
  {
    "table":"Dano por Toque",
    "description":"Dano causado por contato direto com o alvo.",
    "full_description":"Algumas técnicas causam dano apenas ao tocar o alvo, representando queimaduras cósmicas, corrosão espiritual ou descargas de energia concentrada. O dano é calculado pela fórmula Dano por Toque = (Rank × 8) + Dado do Rank, utilizando o dado correspondente ao Rank da técnica.",
    "formula":"Dano por Toque = (Rank × 8) + Dado do Rank",
    "data":[
      { "rank":1, "dado do rank":"d4", "formula do dano":"(1 × 8) + d4", "dano total":"8 + d4" },
      { "rank":2, "dado do rank":"d6", "formula do dano":"(2 × 8) + d6", "dano total":"16 + d6" },
      { "rank":3, "dado do rank":"d8", "formula do dano":"(3 × 8) + d8", "dano total":"24 + d8" },
      { "rank":4, "dado do rank":"d6", "formula do dano":"(4 × 8) + d6", "dano total":"32 + d6" },
      { "rank":5, "dado do rank":"d8", "formula do dano":"(5 × 8) + d8", "dano total":"40 + d8" },
      { "rank":6, "dado do rank":"d10", "formula do dano":"(6 × 8) + d10", "dano total":"48 + d10" },
      { "rank":7, "dado do rank":"d10", "formula do dano":"(7 × 8) + d10", "dano total":"56 + d10" },
      { "rank":8, "dado do rank":"d12", "formula do dano":"(8 × 8) + d12", "dano total":"64 + d12" },
      { "rank":9, "dado do rank":"d20", "formula do dano":"(9 × 8) + d20", "dano total":"72 + d20" }
    ]
  },
  {
    "table": "Dureza",
    "description": "Dureza Cósmica de barreiras e objetos.",
    "full_description": "A Dureza representa a resistência absoluta de um objeto, barreira ou manifestação criada pela técnica. Ela reduz diretamente o dano recebido, funcionando como uma proteção sólida causada pela condensação do Cosmo.",
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
    "table":"Duração em Rodadas",
    "description":"Tempo máximo de manutenção de técnicas de efeito contínuo.",
    "full_description":"A duração de uma técnica de efeito contínuo é medida em rodadas de combate. Quanto maior o Rank da técnica, mais tempo o Cavaleiro consegue manter o fluxo de Cosmo ativo sem perder o controle. A duração é calculada pela fórmula Duração = 1 rodada por Rank da técnica.",
    "formula":"Duração = 1 rodada por Rank da técnica",
    "data":[
      { "rank":1, "duração máxima":"1 rodada" },
      { "rank":2, "duração máxima":"2 rodadas" },
      { "rank":3, "duração máxima":"3 rodadas" },
      { "rank":4, "duração máxima":"4 rodadas" },
      { "rank":5, "duração máxima":"5 rodadas" },
      { "rank":6, "duração máxima":"6 rodadas" },
      { "rank":7, "duração máxima":"7 rodadas" },
      { "rank":8, "duração máxima":"8 rodadas" },
      { "rank":9, "duração máxima":"9 rodadas" }
    ]
  },
  {
    "table":"Duração em Minutos",
    "description":"Tempo máximo de manutenção de técnicas de efeito contínuo fora de combate.",
    "full_description":"A duração de uma técnica de efeito contínuo pode ser medida em minutos quando utilizada fora de combate ou em efeitos prolongados. Quanto maior o Rank da técnica, mais tempo o Cavaleiro consegue sustentar o fluxo de Cosmo. A duração é calculada pela fórmula Duração = 1 minuto por Rank da técnica.",
    "formula":"Duração = 1 minuto por Rank da técnica",
    "data":[
      { "rank":1, "duração máxima":"1 minuto" },
      { "rank":2, "duração máxima":"2 minutos" },
      { "rank":3, "duração máxima":"3 minutos" },
      { "rank":4, "duração máxima":"4 minutos" },
      { "rank":5, "duração máxima":"5 minutos" },
      { "rank":6, "duração máxima":"6 minutos" },
      { "rank":7, "duração máxima":"7 minutos" },
      { "rank":8, "duração máxima":"8 minutos" },
      { "rank":9, "duração máxima":"9 minutos" }
    ]
  },
  {
  "table":"Duração em Horas",
    "description":"Tempo máximo de manutenção de técnicas de efeito prolongado.",
    "full_description":"Algumas técnicas não são criadas para o combate imediato, mas para efeitos prolongados como proteção espiritual, fortalecimento corporal, bênçãos divinas, rastreamento de energia cósmica ou manutenção de selos místicos. Nesses casos, a duração é medida em horas e depende do Rank da técnica.",
    "data":[
      { "rank":1, "duração máxima":"1 h por nível (máx. 4 h)" },
      { "rank":2, "duração máxima":"1 h por nível (máx. 6 h)" },
      { "rank":3, "duração máxima":"1 h por nível (máx. 8 h)" },
      { "rank":4, "duração máxima":"1 h por nível (máx. 11 h)" },
      { "rank":5, "duração máxima":"1 h por nível (máx. 14 h)" },
      { "rank":6, "duração máxima":"1 h por nível (máx. 17 h)" },
      { "rank":7, "duração máxima":"1 h por nível (máx. 21 h)" },
      { "rank":8, "duração máxima":"1 h por nível (máx. 24 h)" },
      { "rank":9, "duração máxima":"1 h por nível (sem limite)" }
    ]
  },
  {
    "table":"ND Total da Invocação",
    "description":"Nível de Desafio máximo permitido para criaturas invocadas por técnicas.",
    "full_description":"Quando uma técnica permite invocar uma criatura, avatar divino, espírito guardião ou construto de Cosmo, o Nível de Desafio (ND) máximo da entidade invocada é limitado pelo Rank da técnica utilizada. O cálculo segue a fórmula ND Máximo da Criatura Invocada = Rank × 2.",
    "formula":"ND Máximo da Criatura Invocada = Rank × 2",
    "data":[
      { "rank":1, "nd máximo":"ND 2" },
      { "rank":2, "nd máximo":"ND 4" },
      { "rank":3, "nd máximo":"ND 6" },
      { "rank":4, "nd máximo":"ND 8" },
      { "rank":5, "nd máximo":"ND 10" },
      { "rank":6, "nd máximo":"ND 12" },
      { "rank":7, "nd máximo":"ND 14" },
      { "rank":8, "nd máximo":"ND 16" },
      { "rank":9, "nd máximo":"ND 18" }
    ]
  },
  {
    "table":"Tamanho da Forma Criada ou Invocada",
    "description":"Tamanho máximo permitido para formas alteradas ou entidades invocadas.",
    "full_description":"Algumas técnicas permitem alterar o corpo do próprio Cavaleiro ou criar e invocar entidades cósmicas. O tamanho influencia alcance físico, força, peso e as manobras possíveis em combate. O tamanho máximo permitido é determinado pelo Rank da técnica.",
    "data":[
      { "rank":1, "tamanho máximo":"Pequeno" },
      { "rank":2, "tamanho máximo":"Pequeno" },
      { "rank":3, "tamanho máximo":"Pequeno" },
      { "rank":4, "tamanho máximo":"Médio" },
      { "rank":5, "tamanho máximo":"Médio" },
      { "rank":6, "tamanho máximo":"Grande" },
      { "rank":7, "tamanho máximo":"Enorme" },
      { "rank":8, "tamanho máximo":"Imenso" },
      { "rank":9, "tamanho máximo":"Colossal" }
    ]
  },
  {
    "table":"Aumentar tamanho",
    "description":"Aumenta o tamanho do cavaleiro o tornando mais poderoso.",
    "full_description":"Esta característica permite que o cavaleiro aumente o seu tamanho e se beneficie dos ajustes concedidos pelo seu novo tamanho conforme a tabela de tamanhos de criaturas. A tabela a seguir apenas indica até quantas categorias você é capaz de aumentar baseado no seu tamanho atual.",
    "data":[
      { "rank":1, "tamanho máximo":"+1 categoria" },
      { "rank":2, "tamanho máximo":"+2 categoria" },
      { "rank":3, "tamanho máximo":"+2 categoria" },
      { "rank":4, "tamanho máximo":"+3 categoria" },
      { "rank":5, "tamanho máximo":"+3 categoria" },
      { "rank":6, "tamanho máximo":"+4 categoria" },
      { "rank":7, "tamanho máximo":"+4 categoria" },
      { "rank":8, "tamanho máximo":"+5 categoria" },
      { "rank":9, "tamanho máximo":"+6 categoria" }
    ]
  },
  {
    "table":"Alcance da Técnica",
    "description":"Distância máxima em que uma técnica pode ser executada.",
    "full_description":"O alcance determina a distância máxima na qual o Cavaleiro pode executar sua técnica contra um alvo ou ponto no espaço. Técnicas de Rank mais alto representam maior domínio do Cosmo, permitindo atingir oponentes a grandes distâncias.",
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
    "table":"Alcance de Teletransporte",
    "description":"Distância máxima que o Cavaleiro pode se mover instantaneamente através do Cosmo.",
    "full_description":"Algumas técnicas permitem ao Cavaleiro dobrar o espaço e mover-se instantaneamente através do Cosmo. O teletransporte é uma habilidade avançada e não deve ser utilizada em Ranks mais baixos devido à instabilidade e aos riscos envolvidos.",
    "data":[
      { "rank":"1 a 3", "alcance":"não recomendado (técnica instável / proibida)" },
      { "rank":"4 a 6", "alcance":"200 m por nível" },
      { "rank":"7 a 9", "alcance":"300 m por nível" }
    ]
  },
  {
    "table":"Teletransporte — Alcance",
    "description":"Limite máximo seguro para uso de técnicas de teletransporte.",
    "full_description":"Mesmo quando o teletransporte é medido em metros por nível, existe um limite máximo absoluto de segurança. Ultrapassar esse limite pode causar falha cósmica, danos corporais severos ou a perda total do Cavaleiro no vazio entre dimensões.",
    "data":[
      { "rank":1, "alcance máximo":"não recomendável" },
      { "rank":2, "alcance máximo":"não recomendável" },
      { "rank":3, "alcance máximo":"não recomendável" },
      { "rank":4, "alcance máximo":"1,2 km" },
      { "rank":5, "alcance máximo":"1,6 km" },
      { "rank":6, "alcance máximo":"2,2 km" },
      { "rank":7, "alcance máximo":"2,8 km" },
      { "rank":8, "alcance máximo":"3,5 km" },
      { "rank":9, "alcance máximo":"5 km" }
    ]
  },
  {
    "table":"Detecção Cósmica",
    "description":"Distância máxima para percepção, detecção de outros seres através do Cosmo.",
    "full_description":"Algumas técnicas permitem ao Cavaleiro sentir presenças, emoções ou intenções hostis à distância. O alcance dessa percepção é determinado pelo Rank da técnica e calculado por quilômetros por nível.",
    "data":[
      { "rank":"1 a 3", "alcance por nível":"1 km por nível" },
      { "rank":"4 a 6", "alcance por nível":"2 km por nível" },
      { "rank":"7 a 9", "alcance por nível":"3 km por nível" }
    ]
  },
  {
    "table":"Telepatia",
    "description":"Limite máximo de alcance seguro para telepatia.",
    "full_description":"Capacidade de se comunicar mentalmente a distância com outros seres que possuem a mesma capacidade. Um ser sem telepatia pode apenas ouvir sua voz em sua mente. A telepatia funciona como um sistema de ondas de rádio onde quem o ouvir pode responder de volta se for capaz. E as pessoas que o ouvirem podeem te responder sem problemas de distância desde que elas tenham sido alcançadas por você.",
    "data":[
      { "rank":1, "alcance máximo":"4 km" },
      { "rank":2, "alcance máximo":"6 km" },
      { "rank":3, "alcance máximo":"8 km" },
      { "rank":4, "alcance máximo":"12 km" },
      { "rank":5, "alcance máximo":"16 km" },
      { "rank":6, "alcance máximo":"22 km" },
      { "rank":7, "alcance máximo":"28 km" },
      { "rank":8, "alcance máximo":"35 km" },
      { "rank":9, "alcance máximo":"48 km" }
    ]
  },
  {
    "table":"Raio de Efeito",
    "description":"Área circular afetada por uma técnica.",
    "full_description":"O raio de efeito determina a área de influência de uma técnica, afetando todos que estiverem dentro de uma zona circular. Em Ranks mais baixos essa capacidade não existe, manifestando-se a partir do Rank 2 conforme o domínio do Cosmo do Cavaleiro.",
    "data":[
      { "rank":1, "raio de efeito":"não possui área" },
      { "rank":2, "raio de efeito":"0,5 m por nível (máx. 3 m)" },
      { "rank":3, "raio de efeito":"0,5 m por nível (máx. 4,5 m)" },
      { "rank":4, "raio de efeito":"1 m por nível (máx. 12 m)" },
      { "rank":5, "raio de efeito":"1 m por nível (máx. 15 m)" },
      { "rank":6, "raio de efeito":"1 m por nível (máx. 18 m)" },
      { "rank":7, "raio de efeito":"2 m por nível (sem limite)" },
      { "rank":8, "raio de efeito":"5 m por nível (sem limite)" },
      { "rank":9, "raio de efeito":"10 m por nível (sem limite)" }
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
    "table":"Quantidade de Peso Manipulável (Kg)",
    "description":"Peso máximo de objetos físicos que podem ser manipulados por força cósmica.",
    "full_description":"Algumas técnicas permitem levantar, empurrar, arremessar ou manipular objetos físicos utilizando uma força cósmica invisível (o cavaleiro nem toca no objeto levantado). O peso máximo manipulável depende do Rank da técnica e é calculado em quilogramas por nível, respeitando um limite máximo quando aplicável.",
    "data":[
      { "rank":1, "peso máximo":"10 Kg por nível (máx. 80 Kg)" },
      { "rank":2, "peso máximo":"20 Kg por nível (máx. 120 Kg)" },
      { "rank":3, "peso máximo":"30 Kg por nível (máx. 240 Kg)" },
      { "rank":4, "peso máximo":"50 Kg por nível (máx. 480 Kg)" },
      { "rank":5, "peso máximo":"70 Kg por nível (máx. 960 Kg)" },
      { "rank":6, "peso máximo":"90 Kg por nível (máx. 1920 Kg)" },
      { "rank":7, "peso máximo":"120 Kg por nível (sem limite)" },
      { "rank":8, "peso máximo":"240 Kg por nível (sem limite)" },
      { "rank":9, "peso máximo":"480 Kg por nível (sem limite)" }
    ]
  },
  {
    "table":"Habilidades da Criatura Invocada",
    "description":"Quantidade máxima de habilidades especiais concedidas a criaturas invocadas.",
    "full_description":"Criaturas invocadas através do Cosmo podem receber habilidades extras, como sentidos aprimorados, resistências elementais ou ataques especiais. A quantidade total de habilidades disponíveis é determinada diretamente pelo Rank da técnica utilizada na invocação.",
    "data":[
      { "rank":1, "máximo de habilidades":"2 habilidades" },
      { "rank":2, "máximo de habilidades":"4 habilidades" },
      { "rank":3, "máximo de habilidades":"6 habilidades" },
      { "rank":4, "máximo de habilidades":"8 habilidades" },
      { "rank":5, "máximo de habilidades":"10 habilidades" },
      { "rank":6, "máximo de habilidades":"12 habilidades" },
      { "rank":7, "máximo de habilidades":"14 habilidades" },
      { "rank":8, "máximo de habilidades":"16 habilidades" },
      { "rank":9, "máximo de habilidades":"18 habilidades" }
    ]
  },
  {
    "table":"Armadura Natural da Criatura Invocada",
    "description":"Valor de Armadura Natural concedido a criaturas invocadas ou alteradas pelo Cosmo.",
    "full_description":"Algumas criaturas formadas, alteradas ou invocadas através do Cosmo possuem uma proteção física sobrenatural representada por Armadura Natural. Esse valor se soma a outras defesas da criatura, aumentando sua resistência em combate conforme o Rank da técnica utilizada.",
    "data":[
      { "rank":1, "armadura natural":1 },
      { "rank":2, "armadura natural":1 },
      { "rank":3, "armadura natural":3 },
      { "rank":4, "armadura natural":6 },
      { "rank":5, "armadura natural":10 },
      { "rank":6, "armadura natural":15 },
      { "rank":7, "armadura natural":21 },
      { "rank":8, "armadura natural":28 },
      { "rank":9, "armadura natural":34 }
    ]
  },
  {
    "table":"Altura e Largura de Objetos Inanimados Criados/Alterados",
    "description":"Dimensões máximas permitidas para objetos inanimados criados ou moldados por técnicas.",
    "full_description":"Técnicas capazes de criar, moldar ou convocar objetos inanimados através do Cosmo seguem limites dimensionais definidos pelo Rank da técnica. As medidas representam a altura x largura máximas possíveis, podendo assumir qualquer forma equivalente dentro do volume permitido.",
    "data":[
      { "rank":1, "dimensão máxima":"1 × 1 m (máximo)" },
      { "rank":2, "dimensão máxima":"2 × 2 m (máximo)" },
      { "rank":3, "dimensão máxima":"3 × 3 m (máximo)" },
      { "rank":4, "dimensão máxima":"6 × 6 m (máximo)" },
      { "rank":5, "dimensão máxima":"9 × 9 m (máximo)" },
      { "rank":6, "dimensão máxima":"12 × 12 m (máximo)" },
      { "rank":7, "dimensão máxima":"16 × 16 m (máximo)" },
      { "rank":8, "dimensão máxima":"20 × 20 m (máximo)" },
      { "rank":9, "dimensão máxima":"1 × 1 m por nível (sem limite fixo)" }
    ]
  },
  {
    "table":"Deslocamento (Levitação)",
    "description":"Altura máxima de levitação permitida por Rank.",
    "full_description":"O deslocamento por levitação define a altura máxima que um Cavaleiro ou objeto pode se manter suspenso acima do solo utilizando sustentação cósmica. A altura é calculada em metros por nível, respeitando um limite máximo conforme o Rank da técnica.",
    "data":[
      { "rank":1, "deslocamento":"1 m por nível (máx. 4 m)" },
      { "rank":2, "deslocamento":"1 m por nível (máx. 6 m)" },
      { "rank":3, "deslocamento":"1 m por nível (máx. 8 m)" },
      { "rank":4, "deslocamento":"1 m por nível (máx. 12 m)" },
      { "rank":5, "deslocamento":"1 m por nível (máx. 16 m)" },
      { "rank":6, "deslocamento":"1 m por nível (máx. 20 m)" },
      { "rank":7, "deslocamento":"1 m por nível (máx. 26 m)" },
      { "rank":8, "deslocamento":"1 m por nível (máx. 32 m)" },
      { "rank":9, "deslocamento":"1 m por nível" }
    ]
  },
  {
    "table":"Quantidade Máxima (Levitação)",
    "description":"Número máximo de objetos que podem ser levitados simultaneamente.",
    "full_description":"Define a quantidade máxima de objetos que um Cavaleiro pode manter levitando ao mesmo tempo por meio de sustentação cósmica. O valor é calculado em objetos por nível, respeitando um limite máximo conforme o Rank.",
    "data":[
      { "rank":1, "máximo de objetos":"1 objeto por nível (máx. 4)" },
      { "rank":2, "máximo de objetos":"1 objeto por nível (máx. 6)" },
      { "rank":3, "máximo de objetos":"1 objeto por nível (máx. 8)" },
      { "rank":4, "máximo de objetos":"1 objeto por nível (máx. 12)" },
      { "rank":5, "máximo de objetos":"1 objeto por nível (máx. 16)" },
      { "rank":6, "máximo de objetos":"1 objeto por nível (máx. 20)" },
      { "rank":7, "máximo de objetos":"1 objeto por nível (máx. 26)" },
      { "rank":8, "máximo de objetos":"1 objeto por nível (máx. 32)" },
      { "rank":9, "máximo de objetos":"1 objeto por nível" }
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
    "table":"Redução de Dano (RD) – Criatura Invocada",
    "description":"Quantidade de dano reduzido por criaturas invocadas conforme o Rank da técnica.",
    "full_description":"A Redução de Dano (RD) define quanto dano uma criatura invocada consegue absorver ou anular passivamente graças à sua estrutura cósmica. O valor da RD é determinado diretamente pelo Rank da técnica utilizada para a invocação.",
    "data":[
      { "rank":1, "redução de dano":0 },
      { "rank":2, "redução de dano":1 },
      { "rank":3, "redução de dano":2 },
      { "rank":4, "redução de dano":4 },
      { "rank":5, "redução de dano":6 },
      { "rank":6, "redução de dano":8 },
      { "rank":7, "redução de dano":10 },
      { "rank":8, "redução de dano":12 },
      { "rank":9, "redução de dano":14 }
    ]
  },
  {
    "table":"Subtipo da Criatura Invocada",
    "description":"Categorias disponíveis de criaturas invocadas conforme o Rank da técnica.",
    "full_description":"O subtipo define a categoria ou tipo específico da criatura invocada, afetando habilidades, resistências e interações no jogo. O jogador deve escolher entre os subtipos permitidos de acordo com o Rank da técnica utilizada, respeitando o contexto do RPG de cavaleiros greco-romanos.",
    "data":[
      { "rank":"1-2", "tipos disponíveis":"Humanoide, Bestial, Elemental (menor), Morto-vivo (menor)" },
      { "rank":"3-4", "tipos disponíveis":"Humanoide, Bestial, Elemental, Morto-vivo, Fada/Espírito, Monstruoso (pequeno/médio)" },
      { "rank":"5-6", "tipos disponíveis":"Bestial (grande), Elemental (grande), Morto-vivo (forte), Monstruoso, Celestial (menor), Infernal (menor)" },
      { "rank":"7-8", "tipos disponíveis":"Celestial, Infernal, Monstruoso (grande), Dragão (menor), Divino (menor), Elemental (gigante)" },
      { "rank":"9", "tipos disponíveis":"Divino, Dragão (grande), Celestial (poderoso), Infernal (poderoso), Monstruoso Colossal" }
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
      { "rank": 8, "efeito": "Privação Espiritual (Aniquilação dos Sentidos): Remove simultaneamente todos os sentidos físicos e mentais, reduzindo o alvo a uma “casca vazia”." }
    ]
  },
  {
    "table":"Dano/cura por Rodada de Manutenção",
    "description":"Dano/Cura contínua causado por técnicas mantidas ativas.",
    "full_description":"Algumas técnicas geram dano ou cura contínua enquanto permanecem ativas. O dano/cura por rodada é calculado com base no nível do personagem que executa a técnica, respeitando um valor máximo por rodada definido pelo Rank da técnica. O dano nunca pode exceder o limite máximo indicado para o Rank correspondente, independentemente do nível do personagem.",
    "data":[
      { "rank":1, "dano/cura por rodada":"1/nível", "máximo por rodada":"até 4"},
      { "rank":2, "dano/cura por rodada":"1/nível", "máximo por rodada":"até 6"},
      { "rank":3, "dano/cura por rodada":"1/nível", "máximo por rodada":"até 8"},
      { "rank":4, "dano/cura por rodada":"2/nível", "máximo por rodada":"até 13" },
      { "rank":5, "dano/cura por rodada":"2/nível", "máximo por rodada":"até 16" },
      { "rank":6, "dano/cura por rodada":"2/nível", "máximo por rodada":"até 19" },
      { "rank":7, "dano/cura por rodada":"3/nível", "máximo por rodada":"até 23" },
      { "rank":8, "dano/cura por rodada":"3/nível", "máximo por rodada":"até 27" },
      { "rank":9, "dano/cura por rodada":"3/nível", "máximo por rodada":"até 31" }
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
    "table": "Reflexão de ataque",
    "description": "Percentual de dano refletido e aumento da dificuldade.",
    "full_description": "Define o bônus adicional na dificuldade para testes e define a porcentagem de dano que será refletida ao oponente.",
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
  }
];