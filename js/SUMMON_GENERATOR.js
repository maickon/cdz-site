// ══════════════════════════════════════
// DATA SETS (Regras enviadas)
// ══════════════════════════════════════

const RANK_RULES = {
    1: { nd: 2,  size: "Pequeno",  abilities: 2, naturalArmor: 1,  rd: 0,  types: ["Humanoide", "Bestial", "Elemental (menor)", "Morto-vivo (menor)"] },
    2: { nd: 4,  size: "Pequeno",  abilities: 3, naturalArmor: 1,  rd: 1,  types: ["Humanoide", "Bestial", "Elemental (menor)", "Morto-vivo (menor)"] },
    3: { nd: 6,  size: "Pequeno",  abilities: 4, naturalArmor: 3,  rd: 2,  types: ["Humanoide", "Bestial", "Elemental", "Morto-vivo", "Fada/Espírito", "Monstruoso"] },
    4: { nd: 8,  size: "Médio",    abilities: 4, naturalArmor: 6,  rd: 4,  types: ["Humanoide", "Bestial", "Elemental", "Morto-vivo", "Fada/Espírito", "Monstruoso"] },
    5: { nd: 10, size: "Médio",    abilities: 5, naturalArmor: 10, rd: 6,  types: ["Bestial (grande)", "Elemental (grande)", "Morto-vivo (forte)", "Monstruoso", "Celestial (menor)", "Infernal (menor)"] },
    6: { nd: 12, size: "Grande",   abilities: 5, naturalArmor: 15, rd: 8,  types: ["Bestial (grande)", "Elemental (grande)", "Morto-vivo (forte)", "Monstruoso", "Celestial (menor)", "Infernal (menor)"] },
    7: { nd: 14, size: "Enorme",   abilities: 6, naturalArmor: 21, rd: 10, types: ["Celestial", "Infernal", "Monstruoso (grande)", "Dragão (menor)", "Divino (menor)", "Elemental (gigante)"] },
    8: { nd: 16, size: "Imenso",   abilities: 6, naturalArmor: 28, rd: 12, types: ["Celestial", "Infernal", "Monstruoso (grande)", "Dragão (menor)", "Divino (menor)", "Elemental (gigante)"] },
    9: { nd: 18, size: "Colossal", abilities: 6, naturalArmor: 34, rd: 14, types: ["Divino", "Dragão (grande)", "Celestial (poderoso)", "Infernal (poderoso)", "Monstruoso Colossal"] }
};

const TAMANHOS = {
    "Pequeno":  { deslocamento: "6m",  alcance: "1m",    bonus_ataque: -1, bonus_dano: -1 },
    "Médio":    { deslocamento: "9m",  alcance: "1,5m",  bonus_ataque: 0,  bonus_dano: 0  },
    "Grande":   { deslocamento: "12m", alcance: "3m",    bonus_ataque: 1,  bonus_dano: 2  },
    "Enorme":   { deslocamento: "12m", alcance: "4,5m",  bonus_ataque: 2,  bonus_dano: 4  },
    "Imenso":   { deslocamento: "9m",  alcance: "6m",    bonus_ataque: 3,  bonus_dano: 6  },
    "Colossal": { deslocamento: "9m",  alcance: "9m",    bonus_ataque: 4,  bonus_dano: 8  }
};

const NAMES_PREFIX = [
    // Originais
    "Guardião", "Avatar", "Sombra", "Espírito", "Construto", "Servo", "Arauto",
    
    // Títulos Militares e Nobres
    "Campeão", "Emissário", "Executor", "Vigia", "Algoz", "Paladino", "Cavaleiro", 
    "Inquisidor", "Senhor", "Monarca", "Soberano", "Vanguarda", "Comandante", "Mercenário",
    
    // Criaturas e Entidades
    "Colosso", "Entidade", "Devorador", "Errante", "Flagelo", "Titã", "Golem", 
    "Manifestação", "Espectro", "Anomalia", "Quimera", "Besta", "Leviatã", "Dragão",
    
    // Místicos e Religiosos
    "Devoto", "Protetor", "Oráculo", "Profeta", "Herege", "Cultista", "Mártir", 
    "Anjo", "Demônio", "Arcanjo", "Lich", "Aparição", "Elemental", "Assombração",
    
    // Conceituais
    "Eco", "Reflexo", "Fragmento", "Essência", "Lâmina", "Punho", "Olho", "Voz"
];

const NAMES_SUFFIX = [
    // Originais
    "de Athena", "do Tártaro", "da Constelação", "do Érebo", "Zodiacal", "Primordial",
    
    // Cósmicos e Celestiais
    "Estelar", "Galáctico", "do Eclipse", "do Vazio", "da Alvorada", "do Crepúsculo", 
    "Astral", "do Cometa", "do Meteoro", "Nebuloso", "da Lua Sangrenta", "Solar",
    
    // Sombrios e Infernais
    "do Abismo", "das Cinzas", "da Ruína", "do Caos", "das Sombras", "do Purgatório", 
    "da Destruição", "do Desespero", "da Agonia", "Profano", "Maldito", "Esquecido",
    
    // Elementais e Físicos
    "de Sangue", "da Tempestade", "de Fogo", "de Gelo", "de Aço", "de Prata", "Dourado", 
    "de Cristal", "das Profundezas", "do Deserto", "da Floresta Negra", "Vulcânico",
    
    // Temporais e Épicos
    "Imortal", "Ancestral", "da Eternidade", "do Destino", "Sagrado", "Divino", 
    "Inabalável", "Lendário", "Caído", "Renascido", "Desperto", "Eterno"
];
// ══════════════════════════════════════
// LÓGICA DO GERADOR
// ══════════════════════════════════════

function generateInvocations() {
    const rank = document.getElementById('rankSelect').value;
    const amount = document.getElementById('amountInput').value;
    const selectedType = document.getElementById('typeSelect').value;
    const grid = document.getElementById('creaturesGrid');
    
    grid.innerHTML = ''; // Limpa grid
    
    const rules = RANK_RULES[rank];

    for(let i = 0; i < amount; i++) {
        const creature = createCreatureData(rank, rules, selectedType);
        const card = buildCreatureCard(creature);
        grid.appendChild(card);
    }
}

function createCreatureData(rank, rules, selectedType) {
    const r = parseInt(rank);

    const type = selectedType === 'random' ?
        rules.types[Math.floor(Math.random() * rules.types.length)] :
        selectedType;

    const name = NAMES_PREFIX[Math.floor(Math.random() * NAMES_PREFIX.length)] + " " +
                 NAMES_SUFFIX[Math.floor(Math.random() * NAMES_SUFFIX.length)];

    const baseKey = TYPE_MAP[type] || "Humanoide";
    const subtipo = SUBTIPOS[baseKey];
    const tamanho = TAMANHOS[rules.size] || TAMANHOS["Médio"];

    // Inerentes (sempre incluídas, não contam no limite de abilities)
    const inerentes = subtipo.inerentes.map(ab => ({
        nome: ab.nome,
        descricao: ab.descricao,
        tipo: ab.tipo,
        inerente: true,
        efeitos: ab.calcEfeitos ? ab.calcEfeitos(r) : ab.efeitos
    }));

    // Sorteia habilidades do pool até o limite do rank (máx 6)
    const skills = [];
    const poolCopy = subtipo.pool.filter(ab => !ab.inerente).map(ab => ({ ...ab }));
    const limit = Math.min(rules.abilities, poolCopy.length);
    for (let i = 0; i < limit; i++) {
        const idx = Math.floor(Math.random() * poolCopy.length);
        const ab = poolCopy.splice(idx, 1)[0];
        skills.push({
            nome: ab.nome,
            descricao: ab.descricao,
            tipo: ab.tipo,
            inerente: false,
            efeitos: ab.calcEfeitos(r)
        });
    }

    return {
        name, type, rank: r,
        nd: rules.nd,
        hp: (10 + (r * 8)) * (r / 2 + 1),
        ac: 10 + r + rules.naturalArmor + (tamanho.bonus_ataque || 0),
        size: rules.size,
        deslocamento: tamanho.deslocamento,
        alcance: tamanho.alcance,
        rd: rules.rd,
        naturalArmor: rules.naturalArmor,
        inerentes,
        skills,
        stats: {
            for: 10 + r * 2 + (tamanho.bonus_dano || 0),
            des: 10 + r + (tamanho.bonus_ataque || 0),
            con: 10 + r * 2,
            int: 8 + r,
            sab: 10 + r,
            car: 10 + r
        }
    };
}

function buildCreatureCard(c) {
    const div = document.createElement('div');
    div.className = "creature-card cosmos-card p-6 pulse-glow";

    const creatureJSON = JSON.stringify(c).replace(/'/g, "&apos;");
    const totalAbilities = (c.inerentes ? c.inerentes.length : 0) + (c.skills ? c.skills.length : 0);

    div.innerHTML = `
        <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
        <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>

        <div class="creature-header">
            <div style="font-family:'Cinzel', serif; color:var(--gold);">${c.name}</div>
            <div class="ability-tag" style="background:var(--gold-dim); color:black;">ND ${c.nd}</div>
        </div>

        <div class="stat-row"><span class="stat-label">Tipo:</span><span class="stat-value">${c.type}</span></div>
        <div class="stat-row"><span class="stat-label">Tamanho:</span><span class="stat-value">${c.size} · Des. ${c.deslocamento} · Alc. ${c.alcance}</span></div>
        <div class="stat-row"><span class="stat-label">PV:</span><span class="stat-value">${Math.floor(c.hp)}</span></div>
        <div class="stat-row"><span class="stat-label">CA / RD:</span><span class="stat-value">${c.ac} / ${c.rd}</span></div>
        <div class="stat-row"><span class="stat-label">Habilidades:</span><span class="stat-value">${totalAbilities} (${c.inerentes.length} inerentes)</span></div>

        <button onclick='openSheet(${creatureJSON})'
                class="btn-generate"
                style="width:100%; margin-top:15px; font-size:0.65rem; padding:8px;">
            Abrir Ficha Detalhada
        </button>
    `;
    return div;
}

const EFEITO_LABELS = {
    dano: "Dano", dano_veneno: "Veneno", cura: "Cura", absorção: "Absorção",
    alcance: "Alcance", raio: "Raio", area: "Área", distancia: "Distância", distancia_minima: "Distância mín.",
    duracao: "Duração", usos: "Usos", recarga: "Recarga",
    efeito: "Efeito", gatilho: "Gatilho", condicao: "Condição",
    salvaguarda: "Salvaguarda", alvo: "Alvo", alvos: "Alvos", ataques: "Ataques", dano_cada: "Dano cada",
    bonus: "Bônus", bonus_ataque: "Bônus Ataque", bonus_defesa: "Bônus Defesa", bonus_ca: "Bônus CA", bonus_temp: "Bônus temp.",
    penalidade: "Penalidade", penalidade_ca: "Penalidade CA",
    rd_bonus: "RD bônus", rd_temp: "RD temp.", amplificacao: "Amplificação",
    velocidade: "Vel. Voo", velocidade_voo: "Vel. Voo", altitude: "Altitude", altitude_max: "Alt. máx.",
    tamanho: "Tamanho Ilusão", imunidade: "Imunidade", imunidades: "Imunidades", imune: "Imune a",
    resistencia: "Resistência", regeneracao: "Regeneração", elemento: "Elemento",
    quantidade: "Quantidade", largura: "Largura",
    visao_noturna: "Visão Noturna", sentido_cego: "Sentido Cego",
    raio_aura: "Raio Aura", cd: "CD Base"
};

function renderEfeitos(efeitos) {
    if (!efeitos || Object.keys(efeitos).length === 0) return '';
    return Object.entries(efeitos).map(([k, v]) => {
        const label = EFEITO_LABELS[k] || k;
        return `<div class="efeito-tag"><span class="efeito-key">${label}</span><span class="efeito-val">${v}</span></div>`;
    }).join('');
}

function renderAbilityBlock(ab, isInerente) {
    const tipoClass = {
        'Ataque': 'tipo-ataque', 'Defesa': 'tipo-defesa', 'Controle': 'tipo-controle',
        'Suporte': 'tipo-suporte', 'Cura': 'tipo-cura', 'Debuff': 'tipo-debuff',
        'Mobilidade': 'tipo-mobilidade', 'Reação': 'tipo-reacao',
        'Passiva': 'tipo-passiva', 'Utilidade': 'tipo-utilidade'
    }[ab.tipo] || 'tipo-passiva';

    return `
        <div class="ability-block${isInerente ? ' ability-inerente' : ''}">
            <div class="ability-block-header">
                <span class="ability-block-name">${ab.nome}</span>
                <span class="ability-tipo-badge ${tipoClass}">${ab.tipo}</span>
                ${isInerente ? '<span class="ability-inerente-tag">Inerente</span>' : ''}
            </div>
            <div class="ability-block-desc">${ab.descricao}</div>
            <div class="ability-efeitos">${renderEfeitos(ab.efeitos)}</div>
        </div>
    `;
}

let _sheetScrollY = 0;

function openSheet(c) {
    const screen = document.getElementById('rpgSheetScreen');
    const body = document.getElementById('sheetBody');

    // Move o modal para body, escapando do stacking context do #main-content (z-index:10)
    if (screen.parentElement !== document.body) {
        document.body.appendChild(screen);
    }

    // Salva o scroll e trava o body sem perder a posição (fix iOS/Android)
    _sheetScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${_sheetScrollY}px`;
    document.body.style.width = '100%';

    const bba = Math.floor(c.nd * 1.0);
    const modFor = Math.floor((c.stats.for - 10) / 2);
    const modDes = Math.floor((c.stats.des - 10) / 2);
    const modCon = Math.floor((c.stats.con - 10) / 2);
    const modInt = Math.floor((c.stats.int - 10) / 2);
    const modSab = Math.floor((c.stats.sab - 10) / 2);
    const modCar = Math.floor((c.stats.car - 10) / 2);
    const fmt = v => v >= 0 ? '+' + v : String(v);

    const inerentesHTML = (c.inerentes || []).map(ab => renderAbilityBlock(ab, true)).join('');
    const skillsHTML = (c.skills || []).map(ab => renderAbilityBlock(ab, false)).join('');

    body.innerHTML = `
        <div style="text-align:center; padding-top:10px;">
            <div style="font-family:'Cinzel',serif; font-size:0.65rem; color:var(--gold-dim); letter-spacing:0.2em; text-transform:uppercase;">Rank ${c.rank} · ${c.type}</div>
            <h2 style="font-family:'Cinzel Decorative',serif; font-size:clamp(1.3rem,5vw,1.7rem); color:var(--gold); margin:4px 0 0; line-height:1.1; text-shadow:0 0 15px rgba(200,168,75,0.3);">${c.name}</h2>
            <div style="width:100px;height:1px;background:linear-gradient(90deg,transparent,var(--gold-dim),transparent);margin:10px auto;"></div>
        </div>

        <div class="sheet-block vital-grid">
            <div><span class="vital-label">ND</span><span class="vital-value">${c.nd}</span></div>
            <div><span class="vital-label">PV</span><span class="vital-value">${Math.floor(c.hp)}</span></div>
            <div><span class="vital-label">CA</span><span class="vital-value">${c.ac}</span></div>
            <div><span class="vital-label">RD</span><span class="vital-value">${c.rd}</span></div>
            <div><span class="vital-label">Deslocamento</span><span class="vital-value">${c.deslocamento}</span></div>
            <div><span class="vital-label">Alcance</span><span class="vital-value">${c.alcance}</span></div>
        </div>

        <div class="attr-grid">
            <div class="attr-box"><span class="attr-name">FOR</span><span class="attr-score">${c.stats.for}</span><span class="attr-mod">${fmt(modFor)}</span></div>
            <div class="attr-box"><span class="attr-name">DES</span><span class="attr-score">${c.stats.des}</span><span class="attr-mod">${fmt(modDes)}</span></div>
            <div class="attr-box"><span class="attr-name">CON</span><span class="attr-score">${c.stats.con}</span><span class="attr-mod">${fmt(modCon)}</span></div>
            <div class="attr-box"><span class="attr-name">INT</span><span class="attr-score">${c.stats.int}</span><span class="attr-mod">${fmt(modInt)}</span></div>
            <div class="attr-box"><span class="attr-name">SAB</span><span class="attr-score">${c.stats.sab}</span><span class="attr-mod">${fmt(modSab)}</span></div>
            <div class="attr-box"><span class="attr-name">CAR</span><span class="attr-score">${c.stats.car}</span><span class="attr-mod">${fmt(modCar)}</span></div>
        </div>

        <div class="sheet-block combat-grid">
            <div class="combat-item"><strong>Ataque:</strong> ${fmt(bba + modFor)}</div>
            <div class="combat-item"><strong>Dano Base:</strong> ${c.rank}d8${fmt(modFor)}</div>
            <div class="combat-item"><strong>Fortitude:</strong> ${fmt(bba + modCon)}</div>
            <div class="combat-item"><strong>Reflexo:</strong> ${fmt(bba + modDes)}</div>
            <div class="combat-item"><strong>Vontade:</strong> ${fmt(bba + modSab)}</div>
            <div class="combat-item"><strong>BBA:</strong> ${fmt(bba)}</div>
        </div>

        ${inerentesHTML ? `
        <div class="sheet-block">
            <div class="sheet-block-title">Habilidades Inerentes</div>
            <div class="abilities-blocks">${inerentesHTML}</div>
        </div>` : ''}

        ${skillsHTML ? `
        <div class="sheet-block">
            <div class="sheet-block-title">Habilidades Especiais</div>
            <div class="abilities-blocks">${skillsHTML}</div>
        </div>` : ''}
    `;

    screen.style.display = 'flex';
}

function closeSheet() {
    document.getElementById('rpgSheetScreen').style.display = 'none';
    // Restaura o body exatamente como estava antes
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, _sheetScrollY);
}