const SUBTIPOS = {
    "Humanoide": {
        inerentes: [
            { nome: "Linguagem Universal", descricao: "A criatura entende e fala todos os idiomas mortais conhecidos.", tipo: "Passiva", inerente: true, efeitos: {} }
        ],
        pool: [
            { nome: "Golpe Preciso", descricao: "Ataque focado que ignora a armadura natural do alvo.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6`, bonus_ataque: `+${r}`, alcance: "Toque" }) },
            { nome: "Escudo de Cosmo", descricao: "Barreira mística que absorve dano recebido.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ absorção: `${r * 5} de dano`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Voz de Comando", descricao: "Ordem irresistível que força um alvo a hesitar.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ alvo: "1 criatura", duracao: `${Math.ceil(r/3)} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Aura de Intimidação", descricao: "Presença ameaçadora que enfraquece a moral dos inimigos.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, penalidade: `-${Math.ceil(r/2)} em testes`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Táticas de Guerra", descricao: "Manobra estratégica que concede vantagem aos aliados.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, bonus: `+${Math.ceil(r/2)} em ataque`, duracao: "1 rodada" }) },
            { nome: "Cura por Cosmo", descricao: "Canaliza energia cósmica para restaurar vida.", tipo: "Cura", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d6 + ${r}`, alcance: `${r * 3}m` }) },
            { nome: "Salto Místico", descricao: "Deslocamento instantâneo de curta distância.", tipo: "Mobilidade", inerente: false,
              calcEfeitos: (r) => ({ distancia: `${r * 3}m`, usos: `${Math.ceil(r/2)} por combate` }) },
            { nome: "Contra-ataque", descricao: "Reação imediata após receber um golpe.", tipo: "Reação", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6`, condicao: "Ao ser atacado" }) }
        ]
    },
    "Bestial": {
        inerentes: [
            { nome: "Faro Aguçado", descricao: "Sentido cego baseado em olfato e audição.", tipo: "Passiva", inerente: true, efeitos: { raio: "9m" } },
            { nome: "Garras Naturais", descricao: "Garras afiadas que aumentam o dano de ataques naturais.", tipo: "Passiva", inerente: true, efeitos: { bonus_dano: "+1d4" } }
        ],
        pool: [
            { nome: "Bote Selvagem", descricao: "Salto violento sobre o alvo, derrubando-o.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6`, distancia: `${r * 2}m`, efeito: `Derruba (Fortitude CD ${10+r})` }) },
            { nome: "Mordida Esmagadora", descricao: "Dentada poderosa que tritura armadura.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8 + ${Math.ceil(r/2)}`, penalidade_ca: `-${Math.ceil(r/3)} CA` }) },
            { nome: "Rugido Paralisante", descricao: "Grito animal que congela inimigos de medo.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, duracao: "1 rodada", salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Investida Brutal", descricao: "Corrida em alta velocidade para impacto devastador.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10`, distancia_minima: "3m", efeito: "Empurra 3m" }) },
            { nome: "Pele Grossa", descricao: "Couro endurecido que reduz dano físico.", tipo: "Passiva", inerente: true,
              calcEfeitos: (r) => ({ rd_bonus: `+${Math.ceil(r/3)}` }) },
            { nome: "Presas Envenenadas", descricao: "Veneno injetado pela mordida.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano_veneno: `${Math.ceil(r/2)}d4 por rodada`, duracao: `${Math.ceil(r/2)} rodadas`, salvaguarda: `Fortitude CD ${10+r}` }) },
            { nome: "Reflexos Animais", descricao: "Esquiva instintiva baseada em instinto puro.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ bonus_defesa: `+${Math.ceil(r/2)}`, usos: "1 por rodada (reação)" }) },
            { nome: "Cauda Açoitante", descricao: "Golpe lateral com a cauda atingindo múltiplos alvos.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6`, raio: "3m (cone lateral)", efeito: `Derruba (Fortitude CD ${8+r})` }) }
        ]
    },
    "Elemental": {
        inerentes: [
            { nome: "Corpo Elemental", descricao: "Imunidade ao elemento de origem da criatura.", tipo: "Passiva", inerente: true, efeitos: { imunidade: "Elemento de origem" } },
            { nome: "Resistência Mágica", descricao: "Resistência parcial a efeitos mágicos.", tipo: "Passiva", inerente: true, efeitos: { resistencia: "Reduz dano mágico em 25%" } }
        ],
        pool: [
            { nome: "Rajada Elemental", descricao: "Disparo concentrado de energia elemental.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8`, alcance: `${r * 6}m`, elemento: "Fogo/Gelo/Raio (conforme subtipo)" }) },
            { nome: "Aura Elemental", descricao: "Campo de energia que danifica criaturas próximas.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d4 por rodada`, raio: `${Math.ceil(r/2) * 3}m` }) },
            { nome: "Forma de Névoa", descricao: "Dissolve o corpo em névoa elemental, tornando-se intangível.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${Math.ceil(r/3)} rodadas`, efeito: "Imune a ataques físicos", usos: "1 por combate" }) },
            { nome: "Explosão Elemental", descricao: "Liberação explosiva de energia em área.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6`, raio: `${r * 2}m`, salvaguarda: `Reflexo CD ${10+r} (metade)` }) },
            { nome: "Absorção Elemental", descricao: "Absorve ataques do mesmo elemento para recuperar força.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d4`, gatilho: "Ao ser atingido pelo elemento de origem" }) },
            { nome: "Tempestade Elemental", descricao: "Invoca uma tempestade de energia que persiste.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6 por rodada`, raio: `${r * 3}m`, duracao: `${Math.ceil(r/3)} rodadas` }) },
            { nome: "Sentinela Elemental", descricao: "Controla o elemento ao redor para criar barreiras.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ absorção: `${r * 8}`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Toque Elemental", descricao: "Carrega o corpo de energia elemental no toque.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6`, alcance: "Toque", efeito: "Condição elemental (queimando/congelando/atordoado)" }) }
        ]
    },
    "Morto-vivo": {
        inerentes: [
            { nome: "Imortalidade Sombria", descricao: "Regenera pontos de vida por rodada.", tipo: "Passiva", inerente: true, efeitos: { regeneracao: "2 PV por rodada" } },
            { nome: "Corpo Morto", descricao: "Imune a veneno, doença e efeitos mentais.", tipo: "Passiva", inerente: true, efeitos: { imunidades: "Veneno, Doença, Medo, Sono" } }
        ],
        pool: [
            { nome: "Toque da Morte", descricao: "Toque que drena a vitalidade do alvo.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6 (necrótico)`, alcance: "Toque", efeito: `Reduz PV máximo em ${r * 2} até descanso` }) },
            { nome: "Dreno de Vida", descricao: "Suga a força vital do alvo à distância.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6`, alcance: `${r * 3}m`, cura: "50% do dano causado" }) },
            { nome: "Aura de Terror", descricao: "Presença assombrosa que apavora os vivos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, efeito: "Amedrontado", duracao: `${Math.ceil(r/2)} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Invocar Lacaios", descricao: "Levanta mortos próximos como servos.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ quantidade: `${Math.ceil(r/2)} lacaios ND ${Math.floor(r/2)}`, alcance: `${r * 3}m`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Névoa Fúnebre", descricao: "Nuvem de névoa sombria que confunde os vivos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, duracao: `${Math.ceil(r/2)} rodadas`, efeito: `-${Math.ceil(r/3)} em ataque e percepção` }) },
            { nome: "Maldição de Ossatura", descricao: "Maldição que enfraquece estruturalmente o alvo.", tipo: "Debuff", inerente: false,
              calcEfeitos: (r) => ({ penalidade: `-${Math.ceil(r/2)} FOR`, duracao: `${r} rodadas`, salvaguarda: `Fortitude CD ${10+r}` }) },
            { nome: "Golpe Paralisante", descricao: "Toque gélido que paralisa o sistema nervoso.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${Math.ceil(r/3)} rodadas`, salvaguarda: `Fortitude CD ${10+r}`, alcance: "Toque" }) },
            { nome: "Vampirismo Sombrio", descricao: "Mordida que transfere força vital para o morto-vivo.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6`, cura: `${r}d4`, alcance: "Toque" }) }
        ]
    },
    "Fada/Espírito": {
        inerentes: [
            { nome: "Incorporal", descricao: "Pode tornar-se intangível por 1 ação bônus.", tipo: "Passiva", inerente: true, efeitos: { efeito: "Imune a dano físico enquanto incorporal", usos: "1 por rodada" } },
            { nome: "Visão Etérea", descricao: "Enxerga o plano etéreo e criaturas invisíveis.", tipo: "Passiva", inerente: true, efeitos: { alcance: "18m" } }
        ],
        pool: [
            { nome: "Ilusão Perfeita", descricao: "Cria uma ilusão convincente de qualquer coisa.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ tamanho: r <= 3 ? "Médio" : r <= 6 ? "Grande" : "Enorme", duracao: `${r} minutos`, salvaguarda: `Investigação CD ${10+r}` }) },
            { nome: "Encantamento", descricao: "Força um alvo a considerar a criatura como aliado.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${r} rodadas`, salvaguarda: `Vontade CD ${10+r}`, alcance: `${r * 3}m` }) },
            { nome: "Fuga Dimensional", descricao: "Teletransporte instantâneo para local visível.", tipo: "Mobilidade", inerente: false,
              calcEfeitos: (r) => ({ distancia: `${r * 6}m`, usos: `${Math.ceil(r/2)} por combate` }) },
            { nome: "Aura de Sono", descricao: "Campo mágico que induz sono nos vivos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, duracao: `${Math.ceil(r/2)} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Glamour", descricao: "Altera a aparência para assumir qualquer forma.", tipo: "Utilidade", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${r} horas`, efeito: "Ilusão perfeita de aparência" }) },
            { nome: "Toque Espectral", descricao: "Ataque que atravessa armaduras e escudos.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d8`, alcance: "Toque", efeito: "Ignora CA de armadura" }) },
            { nome: "Benção da Floresta", descricao: "Canaliza energia natural para curar e proteger.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d4`, raio: `${r * 3}m`, bonus_temp: `+${Math.ceil(r/2)} CA` }) },
            { nome: "Sussurro Maldito", descricao: "Maldição sussurrada que corrói a mente do alvo.", tipo: "Debuff", inerente: false,
              calcEfeitos: (r) => ({ penalidade: `-${Math.ceil(r/2)} em todos os testes`, duracao: `${r} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) }
        ]
    },
    "Monstruoso": {
        inerentes: [
            { nome: "Armadura Maciça", descricao: "Corpo colossal que absorve impactos.", tipo: "Passiva", inerente: true, efeitos: { rd_bonus: "+2", imune: "Empurrão e derrubada" } },
            { nome: "Presença Aterradora", descricao: "Mera presença da criatura infunde terror.", tipo: "Passiva", inerente: true, efeitos: { raio: "9m", cd: "Vontade 12 ou Amedrontado" } }
        ],
        pool: [
            { nome: "Golpe Devastador", descricao: "Ataque com força colossal que causa tremor local.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10 + ${r * 2}`, efeito: "Derruba alvos num raio de 2m", alcance: "Toque" }) },
            { nome: "Triturar", descricao: "Agarra e esmaga o alvo com força brutal.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d8 por rodada`, efeito: `Alvo preso (Atletismo CD ${12+r} para escapar)` }) },
            { nome: "Pisão", descricao: "Impacto no chão que abala todos ao redor.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6`, raio: `${r * 2}m`, efeito: `Derruba (Reflexo CD ${10+r})` }) },
            { nome: "Regeneração Bestial", descricao: "Recupera pontos de vida a cada rodada.", tipo: "Passiva", inerente: true,
              calcEfeitos: (r) => ({ regeneracao: `${Math.ceil(r/2) * 2} PV por rodada` }) },
            { nome: "Armadura de Espinhos", descricao: "Espinhos que ferem quem ataca corpo a corpo.", tipo: "Reação", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d4`, gatilho: "Ao receber ataque corpo a corpo" }) },
            { nome: "Investida Colossus", descricao: "Corrida demolidora que arrasa tudo no caminho.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8`, distancia: `${r * 3}m`, largura: "3m", efeito: "Todos no caminho sofrem dano e são derrubados" }) },
            { nome: "Grito de Batalha", descricao: "Rugido que abala a estrutura dos inimigos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 6}m`, efeito: "Atordoado 1 rodada", salvaguarda: `Fortitude CD ${10+r}` }) },
            { nome: "Golpe Múltiplo", descricao: "Série de ataques rápidos com membros extras.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ ataques: `${Math.ceil(r/3) + 1} ataques`, dano_cada: `${Math.ceil(r/2)}d6` }) }
        ]
    },
    "Celestial": {
        inerentes: [
            { nome: "Aura Sagrada", descricao: "Iradia luz que fortalece aliados próximos.", tipo: "Passiva", inerente: true, efeitos: { raio: "9m", bonus: "+2 em testes de aliados" } },
            { nome: "Visão Verdadeira", descricao: "Enxerga através de ilusões, invisibilidade e disfarces.", tipo: "Passiva", inerente: true, efeitos: { alcance: "18m" } }
        ],
        pool: [
            { nome: "Bênção Divina", descricao: "Canaliza poder divino para fortalecer aliados.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ bonus: `+${Math.ceil(r/2)} em ataque e dano`, raio: `${r * 3}m`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Luz Sagrada", descricao: "Explosão de luz divina que cega e queima os impuros.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6 (sagrado)`, raio: `${r * 3}m`, efeito: "Cegado 1 rodada", salvaguarda: `Reflexo CD ${10+r}` }) },
            { nome: "Cura Celestial", descricao: "Restaura pontos de vida com poder divino.", tipo: "Cura", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d8 + ${r}`, alcance: `${r * 6}m`, alvos: Math.ceil(r/3) }) },
            { nome: "Escudo Angelical", descricao: "Barreira de luz que repele ataques.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ absorção: `${r * 8}`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Lança de Luz", descricao: "Projétil de energia pura de luz divina.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8`, alcance: `${r * 9}m`, efeito: "Dano dobrado vs mortos-vivos/infernais" }) },
            { nome: "Purificação", descricao: "Remove maldições, venenos e condições negativas.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ alcance: `${r * 3}m`, efeito: "Remove todas as condições negativas", alvos: Math.ceil(r/3) }) },
            { nome: "Voo Angelical", descricao: "Asas divinas que concedem voo mágico.", tipo: "Mobilidade", inerente: true,
              calcEfeitos: (r) => ({ velocidade_voo: `${(Math.ceil(r/2) + 1) * 3}m`, altitude_max: `${r * 6}m` }) },
            { nome: "Julgamento", descricao: "Marca o alvo para receber dano amplificado.", tipo: "Debuff", inerente: false,
              calcEfeitos: (r) => ({ amplificacao: `+${r}d4 em todo dano recebido`, duracao: `${Math.ceil(r/2)} rodadas`, alcance: `${r * 6}m` }) }
        ]
    },
    "Infernal": {
        inerentes: [
            { nome: "Resistência ao Fogo", descricao: "Imune ao fogo e resistente a calor extremo.", tipo: "Passiva", inerente: true, efeitos: { imunidade: "Fogo", resistencia: "Calor extremo" } },
            { nome: "Regeneração Sombria", descricao: "Recupera vida enquanto causar dano.", tipo: "Passiva", inerente: true, efeitos: { regeneracao: "2 PV por rodada enquanto causar dano" } }
        ],
        pool: [
            { nome: "Chama Infernal", descricao: "Labareda de fogo negro que queima a alma.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8 (fogo)`, alcance: `${r * 6}m`, efeito: `Queimando por ${Math.ceil(r/3)} rodadas` }) },
            { nome: "Pacto de Sangue", descricao: "Marca um alvo com um pacto que drena vida.", tipo: "Debuff", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d4 por rodada`, duracao: `${r} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Aura de Medo Profundo", descricao: "Emanação de terror sobrenatural.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, efeito: "Fugindo em pânico", duracao: `${Math.ceil(r/2)} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Grilhões de Trevas", descricao: "Correntes sombrias imobilizam o alvo.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ alcance: `${r * 6}m`, duracao: `${Math.ceil(r/2)} rodadas`, salvaguarda: `Força CD ${10+r} por rodada` }) },
            { nome: "Toque Corrosivo", descricao: "Corrói armaduras e escamas com ácido infernal.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6`, penalidade_ca: `-${Math.ceil(r/3)} CA (cumulativo)`, alcance: "Toque" }) },
            { nome: "Forma de Sombra", descricao: "Dissolve-se nas sombras, tornando-se invisível.", tipo: "Mobilidade", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${Math.ceil(r/2)} rodadas`, efeito: "Invisível em áreas de sombra" }) },
            { nome: "Olhar Paralisante", descricao: "Contato visual que petrifica de terror.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ alcance: `${r * 3}m`, duracao: `${Math.ceil(r/3)} rodadas`, salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Chuva de Cinzas", descricao: "Nuvem de cinzas infernais que sufoca e cega.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 4}m`, duracao: `${Math.ceil(r/3)} rodadas`, efeito: `Cegado e -${Math.ceil(r/4)} em todos os testes` }) }
        ]
    },
    "Dragão": {
        inerentes: [
            { nome: "Escamas Dracônicas", descricao: "Escamas naturais que concedem armadura excepcional.", tipo: "Passiva", inerente: true, efeitos: { bonus_ca: "+3", rd_bonus: "+2" } },
            { nome: "Sentidos Aguçados", descricao: "Visão às cegas, olfato e visão no escuro.", tipo: "Passiva", inerente: true, efeitos: { visao_noturna: "18m", sentido_cego: "9m" } }
        ],
        pool: [
            { nome: "Sopro de Dragão", descricao: "Exalação devastadora de energia elemental.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10`, area: `${r * 3}m de cone`, salvaguarda: `Reflexo CD ${10+r} (metade)`, recarga: "1d4 rodadas" }) },
            { nome: "Garras do Dragão", descricao: "Ataques simultâneos com ambas as garras.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6 + ${r}`, ataques: "2 garras", alcance: "Toque" }) },
            { nome: "Cauda Letal", descricao: "Golpe de cauda que atinge atrás e nos lados.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8`, raio: "3m (atrás e lados)", efeito: `Derruba (Reflexo CD ${10+r})` }) },
            { nome: "Mordida Trituradora", descricao: "Dentes que trituram qualquer material.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10 + ${r * 2}`, alcance: "Toque", efeito: "Ignora 5 pontos de RD" }) },
            { nome: "Asas Poderosas", descricao: "Bate as asas criando rajada devastadora.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d6`, raio: `${r * 2}m`, efeito: "Empurra 3m e derruba" }) },
            { nome: "Rugido de Dragão", descricao: "Rugido ancestral que abala a alma dos mortais.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 6}m`, efeito: `Amedrontado por ${Math.ceil(r/2)} rodadas`, salvaguarda: `Vontade CD ${12+r}` }) },
            { nome: "Pele de Diamante", descricao: "Escamas endurecem temporariamente como diamante.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ bonus_ca: `+${Math.ceil(r/2)}`, rd_temp: `+${Math.ceil(r/3)}`, duracao: `${Math.ceil(r/3)} rodadas` }) },
            { nome: "Voo Dracônico", descricao: "Voo poderoso com alcance e velocidade superiores.", tipo: "Mobilidade", inerente: true,
              calcEfeitos: (r) => ({ velocidade: `${r * 3}m`, altitude: `${r * 15}m`, efeito: "Pode usar sopro em voo" }) }
        ]
    },
    "Divino": {
        inerentes: [
            { nome: "Imortalidade Divina", descricao: "Regeneração poderosa e imunidade à morte instantânea.", tipo: "Passiva", inerente: true, efeitos: { regeneracao: "5 PV por rodada", imune: "Morte instantânea" } },
            { nome: "Aura Divina", descricao: "Todos ao redor sentem sua presença sobrenatural.", tipo: "Passiva", inerente: true, efeitos: { raio: "30m", efeito: "Criaturas sabem que algo divino está presente" } }
        ],
        pool: [
            { nome: "Palavra de Poder", descricao: "Palavra que pode apagar a consciência de um ser.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ efeito: r >= 7 ? "Inconsciente por 1d4 rodadas" : "Atordoado 1 rodada", salvaguarda: `Vontade CD ${12+r}`, alcance: `${r * 6}m` }) },
            { nome: "Raio Divino", descricao: "Punição divina em forma de raio de energia pura.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10 (divino)`, alcance: `${r * 9}m`, efeito: "Dano duplo vs servos do caos" }) },
            { nome: "Bênção Absoluta", descricao: "Bênção divina que transforma temporariamente aliados.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ bonus: `+${Math.ceil(r/2)} em tudo`, raio: `${r * 6}m`, duracao: `${Math.ceil(r/3)} rodadas` }) },
            { nome: "Maldição Eterna", descricao: "Maldição que persiste além do combate.", tipo: "Debuff", inerente: false,
              calcEfeitos: (r) => ({ penalidade: `-${Math.ceil(r/2)} em todos os atributos`, duracao: `${r} dias`, salvaguarda: `Vontade CD ${14+r}` }) },
            { nome: "Escudo de Fé Absoluta", descricao: "Barreira de fé que anula qualquer ataque uma vez.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ absorção: `Nega ${r * 10} de dano (uma vez)`, duracao: `${Math.ceil(r/2)} rodadas` }) },
            { nome: "Cura Absoluta", descricao: "Restauração completa de um aliado.", tipo: "Cura", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d12 + ${r * 3}`, alcance: `${r * 6}m`, efeito: "Remove todas as condições negativas" }) },
            { nome: "Forma Verdadeira", descricao: "Revela a forma divina verdadeira, intensificando todos os poderes.", tipo: "Suporte", inerente: false,
              calcEfeitos: (r) => ({ efeito: `+${Math.ceil(r/2)} em todos os atributos`, duracao: `${Math.ceil(r/3)} rodadas`, usos: "1 por combate" }) },
            { nome: "Julgamento Divino", descricao: "Julga um ser, causando dano proporcional a seus pecados.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d12`, alcance: `${r * 9}m`, efeito: "Dobrado se alvo agiu contra a moral neste combate" }) }
        ]
    },
    "Espectro": {
        inerentes: [
            { nome: "Proteção da Sapuris", descricao: "A armadura infernal concede resistência contra danos mágicos não-divinos.", tipo: "Passiva", inerente: true, efeitos: { rd_bonus: "+2", resistencia: "Luz/Sagrado" } },
            { nome: "Estrela Maligna", descricao: "Ligação direta com o Submundo. Não sofre penalidades no escuro.", tipo: "Passiva", inerente: true, efeitos: { visao_noturna: "36m" } }
        ],
        pool: [
            { nome: "Ondas do Inferno", descricao: "Emite ondas que atacam diretamente a alma do alvo.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8 (necrótico)`, alcance: `${r * 3}m`, salvaguarda: `Vontade CD ${10+r} (metade)` }) },
            { nome: "Toque do Cocyto", descricao: "Congela a vitalidade do inimigo com o frio do inferno.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${Math.ceil(r/3)} rodadas`, efeito: "Imobilizado pelo gelo", salvaguarda: `Fortitude CD ${10+r}` }) },
            { nome: "Ressurreição Obscura", descricao: "Retorna do chão com parte da vida após cair a 0 PV.", tipo: "Passiva", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r * 5} PV`, usos: "1 por combate" }) }
        ]
    },
    "Marina": {
        inerentes: [
            { nome: "Escamas de Oricalco", descricao: "Armadura forjada por Poseidon, brilha como ouro e protege sob forte pressão.", tipo: "Passiva", inerente: true, efeitos: { bonus_ca: "+2", imunidade: "Pressão e Afogamento" } },
            { nome: "Anfíbio", descricao: "Move-se livremente na água como na terra.", tipo: "Passiva", inerente: true, efeitos: { velocidade_nado: "Igual ao deslocamento base" } }
        ],
        pool: [
            { nome: "Prisão de Água", descricao: "Prende o alvo em uma esfera de água asfixiante.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ duracao: `${Math.ceil(r/2)} rodadas`, alcance: `${r * 3}m`, salvaguarda: `Reflexo CD ${10+r}` }) },
            { nome: "Tsunami", descricao: "Evoca uma onda devastadora que varre o campo de batalha.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6 (concussão)`, area: `${r * 2}m (cone)`, efeito: "Empurra 6m" }) },
            { nome: "Tridente Místico", descricao: "Projeta a aura de uma arma divina dos mares.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8 + ${r}`, alcance: "3m", efeito: "Ignora escudos físicos" }) }
        ]
    },
    "Nórdico": {
        inerentes: [
            { nome: "Sangue Frio de Asgard", descricao: "Adaptado ao frio extremo e a ventos cortantes.", tipo: "Passiva", inerente: true, efeitos: { imunidade: "Frio/Gelo" } },
            { nome: "Bênção da Safira de Odin", descricao: "Canaliza energia nórdica para aumentar a precisão.", tipo: "Passiva", inerente: true, efeitos: { bonus_ataque: "+2" } }
        ],
        pool: [
            { nome: "Nevasca de Asgard", descricao: "Cria uma tempestade de neve que cega e fere.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d4 por rodada`, raio: `${r * 3}m`, efeito: "Visão turva" }) },
            { nome: "Golpe do Lobo", descricao: "Ataque ágil e selvagem focado em pontos vitais.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8`, alcance: "Toque", efeito: "Acerto crítico com 19-20" }) },
            { nome: "Pó de Diamante", descricao: "Rajada rápida de cristais de gelo cortantes.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6 (gelo)`, alcance: `${r * 6}m`, salvaguarda: `Reflexo CD ${10+r} (metade)` }) }
        ]
    },
    "Autômato": {
        inerentes: [
            { nome: "Casca Vazia", descricao: "Armadura vazia animada por resquícios de Cosmo.", tipo: "Passiva", inerente: true, efeitos: { imunidades: "Mental, Medo, Sono, Veneno, Sangramento" } },
            { nome: "Corpo Inflexível", descricao: "Feito de material inorgânico, resiste a cortes.", tipo: "Passiva", inerente: true, efeitos: { rd_bonus: "+3" } }
        ],
        pool: [
            { nome: "Eco de Cosmo", descricao: "Dispara uma rajada genérica de energia acumulada.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/1.5)}d6`, alcance: `${r * 6}m` }) },
            { nome: "Auto-reparo Mecânico", descricao: "Reconstrói partes da própria estrutura.", tipo: "Cura", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d8`, usos: "2 por combate" }) },
            { nome: "Destruição Implacável", descricao: "Ignora a própria defesa para focar apenas em aniquilar.", tipo: "Passiva", inerente: false,
              calcEfeitos: (r) => ({ bonus_dano: `+${r*2}`, penalidade_ca: "-4" }) }
        ]
    },
    "Besta Mítica": {
        inerentes: [
            { nome: "Físico Lendário", descricao: "Possui as estatísticas superiores de monstros das lendas (Cérbero, Hidra, etc).", tipo: "Passiva", inerente: true, efeitos: { bonus_temp: "+15 PV" } },
            { nome: "Ataques Múltiplos Naturais", descricao: "Pode atacar mais vezes dependendo do número de apêndices.", tipo: "Passiva", inerente: true, efeitos: { ataques: "Mínimo 2 ataques por turno" } }
        ],
        pool: [
            { nome: "Regeneração da Hidra", descricao: "Cabeças ou membros decepados voltam a crescer rapidamente.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ regeneracao: `${r * 3} PV por rodada`, gatilho: "No início do turno" }) },
            { nome: "Presas Infernais", descricao: "Mordida potente, como a do cão guardião do Hades.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8 + ${r}`, efeito: "Queimadura ou Veneno (1d6 extra)" }) },
            { nome: "Voo de Pégaso", descricao: "Ganha capacidade de voo com extrema velocidade.", tipo: "Mobilidade", inerente: false,
              calcEfeitos: (r) => ({ velocidade_voo: `${r * 6}m`, efeito: "Ignora ataques de oportunidade" }) }
        ]
    },
    "Astral": {
        inerentes: [
            { nome: "Corpo Estelar", descricao: "O corpo é feito de puro Cosmo. Emite luz fraca, flutua ignorando terreno difícil e não precisa respirar.", tipo: "Passiva", inerente: true, efeitos: { imunidade: "Asfixia", deslocamento: "Flutua 3m acima do solo" } },
            { nome: "Essência Zodiacal", descricao: "Afinidade profunda com as estrelas, resistindo a efeitos ilusórios e mentais.", tipo: "Passiva", inerente: true, efeitos: { resistencia: "Ilusão e Dano Psíquico" } }
        ],
        pool: [
            { nome: "Chuva de Meteoros", descricao: "Dispara uma saraivada de golpes na velocidade da luz.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ ataques: `${Math.ceil(r/2) + 1} ataques`, dano_cada: `${Math.ceil(r/2)}d6`, alcance: `${r * 3}m` }) },
            { nome: "Poeira Estelar", descricao: "Uma névoa brilhante que cega e desorienta os inimigos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, duracao: `${Math.ceil(r/2)} rodadas`, efeito: "Cegado", salvaguarda: `Reflexo CD ${10+r}` }) },
            { nome: "Teletransporte Dimensional", descricao: "Dobra o espaço para se reposicionar instantaneamente no campo.", tipo: "Mobilidade", inerente: false,
              calcEfeitos: (r) => ({ distancia: `${r * 6}m`, usos: `${Math.ceil(r/2)} por combate` }) },
            { nome: "Explosão Galáctica", descricao: "Concentra o poder de uma supernova em um único ponto.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10 + ${r}`, raio: `${Math.ceil(r/2)}m`, salvaguarda: `Fortitude CD ${10+r} (metade)` }) }
        ]
    },
    "Construto": {
        inerentes: [
            { nome: "Sem Mente", descricao: "Sendo uma máquina ou armadura vazia, não possui mente para ser afetada.", tipo: "Passiva", inerente: true, efeitos: { imunidades: "Medo, Sono, Encantamento, Ilusão e Dano Psíquico" } },
            { nome: "Estrutura Metálica", descricao: "Corpo feito de bronze, prata, ouro ou oricalco.", tipo: "Passiva", inerente: true, efeitos: { imunidade: "Veneno e Doença", rd_bonus: "+2" } }
        ],
        pool: [
            { nome: "Punho Esmagador", descricao: "Golpe mecânico pesado que ignora defesas leves.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8 + ${r}`, alcance: "Toque", efeito: "Ignora CA de armaduras de couro/tecido" }) },
            { nome: "Blindagem de Oricalco", descricao: "Redireciona energia para endurecer ainda mais a carapaça.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ rd_temp: `+${r}`, bonus_ca: `+${Math.ceil(r/2)}`, duracao: `${Math.ceil(r/3)} rodadas` }) },
            { nome: "Sobrecarga de Cosmo", descricao: "Libera energia acumulada em uma explosão ao redor de si.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/1.5)}d6 (energia)`, raio: `${r * 2}m`, salvaguarda: `Reflexo CD ${10+r}` }) },
            { nome: "Protocolo de Reparo", descricao: "Sistemas alquímicos internos reparam o chassi.", tipo: "Cura", inerente: false,
              calcEfeitos: (r) => ({ cura: `${r}d8`, usos: "1 por combate" }) }
        ]
    },
    "Abissal": {
        inerentes: [
            { nome: "Anfíbio Mitológico", descricao: "Criatura dos domínios de Poseidon. Respira água e ar perfeitamente.", tipo: "Passiva", inerente: true, efeitos: { velocidade_nado: "Igual ao deslocamento base", imunidade: "Afogamento" } },
            { nome: "Pressão das Profundezas", descricao: "Acostumado à pressão esmagadora do fundo do mar.", tipo: "Passiva", inerente: true, efeitos: { resistencia: "Frio e Dano de Concussão" } }
        ],
        pool: [
            { nome: "Jato Perfurante", descricao: "Dispara água com pressão suficiente para cortar aço.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d6`, alcance: `${r * 6}m`, efeito: "Pode atravessar o alvo em linha reta" }) },
            { nome: "Turbilhão Marinho", descricao: "Cria um redemoinho que prende e sufoca os inimigos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 2}m`, duracao: `${Math.ceil(r/2)} rodadas`, salvaguarda: `Força CD ${10+r}` }) },
            { nome: "Abraço do Leviatã", descricao: "Tentáculos ou membros extras que esmagam o oponente.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d8`, alcance: "3m", efeito: `Agarrado (Atletismo CD ${10+r} para escapar)` }) },
            { nome: "Escudo de Corais", descricao: "Ergue uma barreira afiada de corais divinos.", tipo: "Defesa", inerente: false,
              calcEfeitos: (r) => ({ absorção: `${r * 5} de dano`, gatilho: "Quem quebrar o escudo sofre metade do dano absorvido de volta" }) }
        ]
    },
    "Quimérico": {
        inerentes: [
            { nome: "Anatomia Bizarra", descricao: "Múltiplas cabeças ou olhos garantem vigilância absoluta.", tipo: "Passiva", inerente: true, efeitos: { imunidade: "Flanqueamento", bonus: "Vantagem em Percepção" } },
            { nome: "Vigor Mítico", descricao: "Uma resiliência feroz de monstros lendários da antiguidade.", tipo: "Passiva", inerente: true, efeitos: { regeneracao: "1 PV por Rank no início do turno" } }
        ],
        pool: [
            { nome: "Ataque Coordenado", descricao: "Garras, presas e chifres atacando simultaneamente.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ ataques: `${Math.ceil(r/3) + 1} ataques`, dano_cada: `${Math.ceil(r/2)}d6`, alcance: "Toque" }) },
            { nome: "Rugido Discordante", descricao: "Gritos em diferentes frequências que perturbam a mente.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 3}m`, efeito: "Desorientado (-2 em ataques e defesas)", salvaguarda: `Vontade CD ${10+r}` }) },
            { nome: "Sangue Tóxico", descricao: "O sangue derramado da besta queima como ácido.", tipo: "Reação", inerente: false,
              calcEfeitos: (r) => ({ dano: `${Math.ceil(r/2)}d4 (ácido)`, gatilho: "Sempre que sofrer dano cortante ou perfurante corpo a corpo" }) },
            { nome: "Investida Alada", descricao: "Alça voo rasante e atropela os inimigos no caminho.", tipo: "Mobilidade", inerente: false,
              calcEfeitos: (r) => ({ distancia: `${r * 4}m`, dano: `${r}d6`, salvaguarda: `Reflexo CD ${10+r} para não cair` }) }
        ]
    },
    "Primordial": {
        inerentes: [
            { nome: "Aura Esmagadora", descricao: "A mera presença de um Titã altera as leis da física local.", tipo: "Passiva", inerente: true, efeitos: { raio_aura: "9m", penalidade: "Terreno difícil para inimigos dentro da aura" } },
            { nome: "Casca Imutável", descricao: "Corpo forjado na aurora dos tempos, quase indestrutível.", tipo: "Passiva", inerente: true, efeitos: { rd_bonus: "+4", imunidade: "Transmutação ou alteração de forma" } }
        ],
        pool: [
            { nome: "Esmagar a Realidade", descricao: "Um golpe tão pesado que distorce o ar ao redor do alvo.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d12 + ${r * 2}`, alcance: "Toque", efeito: "Alvo perde 1 ação no próximo turno se falhar em Fortitude" }) },
            { nome: "Fúria de Cronos", descricao: "Manipula o tempo local para atrasar os inimigos.", tipo: "Controle", inerente: false,
              calcEfeitos: (r) => ({ raio: `${r * 6}m`, duracao: `${Math.ceil(r/3)} rodadas`, efeito: "Deslocamento e número de ataques cortados pela metade", salvaguarda: `Vontade CD ${12+r}` }) },
            { nome: "Abalo Sísmico", descricao: "Pisa no chão, causando um terremoto focado.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d8`, raio: `${r * 3}m`, efeito: "Derruba e atordoa por 1 rodada", salvaguarda: `Fortitude CD ${10+r}` }) },
            { nome: "Erupção de Gaia", descricao: "Faz com que a energia pura da terra exploda sob os inimigos.", tipo: "Ataque", inerente: false,
              calcEfeitos: (r) => ({ dano: `${r}d10 (fogo/terra)`, area: "Cilindro de 6m de raio", alcance: `${r * 9}m`, salvaguarda: `Reflexo CD ${12+r} (metade)` }) }
        ]
    }
};