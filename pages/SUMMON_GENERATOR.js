const SUMMON_GENERATOR = `
<link rel="stylesheet" type="text/css" href="css/SUMMON_GENERATOR.css">

<div class="generator-container">
    <div class="text-center mb-8">
        <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
        <h1 class="section-title text-2xl md:text-3xl mb-4">Gerador de Entidades Cósmicas</h1>
        <div class="gold-rule mb-6"></div>
        <p class="home-body-text text-center">
            Manifeste avatares, espíritos guardiões ou construtos de puro Cosmo. 
            O poder da criatura é limitado pelo Rank da técnica de invocação.
        </p>
    </div>

    <!-- Painel de Configuração -->
    <div class="config-panel">
        <div class="input-group">
            <label>Rank da Técnica</label>
            <select id="rankSelect">
                <option value="1">Rank 1 (Discípulo)</option>
                <option value="2">Rank 2</option>
                <option value="3">Rank 3 (Cav. Bronze)</option>
                <option value="4">Rank 4</option>
                <option value="5">Rank 5 (Cav. Prata)</option>
                <option value="6">Rank 6</option>
                <option value="7">Rank 7 (Cav. Ouro)</option>
                <option value="8">Rank 8</option>
                <option value="9">Rank 9 (Divino/Titã)</option>
            </select>
        </div>

        <div class="input-group">
            <label>Subtipo de Essência</label>
            <select id="typeSelect">
                <option value="random">Aleatório</option>
                
                <optgroup label="Fantasia Clássica">
                    <option value="Humanoide">Humanoide</option>
                    <option value="Bestial">Bestial</option>
                    <option value="Elemental">Elemental</option>
                    <option value="Morto-vivo">Morto-vivo</option>
                    <option value="Fada/Espírito">Fada/Espírito</option>
                    <option value="Monstruoso">Monstruoso</option>
                    <option value="Celestial">Celestial</option>
                    <option value="Infernal">Infernal</option>
                    <option value="Dragão">Dragão</option>
                    <option value="Divino">Divino</option>
                </optgroup>

                <optgroup label="Sagas (Saint Seiya)">
                    <option value="Espectro">Espectro</option>
                    <option value="Marina">Marina</option>
                    <option value="Nórdico">Nórdico</option>
                    <option value="Autômato">Autômato</option>
                    <option value="Besta Mítica">Besta Mítica</option>
                </optgroup>

                <optgroup label="Cósmicos & Primordiais">
                    <option value="Astral">Astral</option>
                    <option value="Construto">Construto</option>
                    <option value="Abissal">Abissal</option>
                    <option value="Quimérico">Quimérico</option>
                    <option value="Primordial">Primordial</option>
                </optgroup>
            </select>
        </div>

        <div class="input-group">
            <label>Quantidade</label>
            <input type="number" id="amountInput" value="1" min="1" max="20">
        </div>

        <button class="btn-generate" onclick="generateInvocations()">Invocar Entidade</button>
    </div>

    <!-- Resultados -->
    <div id="creaturesGrid" class="creatures-grid">
        <!-- Cards gerados via JS -->
    </div>

    <!-- TELA DA FICHA DE RPG -->
    <div id="rpgSheetScreen" class="rpg-sheet-screen">
        <div class="rpg-sheet-container">
            <button class="sheet-close-btn" onclick="closeSheet()">×</button>
            <div id="sheetBody" class="sheet-inner">
                <!-- Conteúdo Injetado via JS -->
            </div>
        </div>
    </div>
</div>

<script src="js/SUBTYPES.js"></script>
<script src="js/TYPE_MAP.js"></script>
<script src="js/SUMMON_GENERATOR.js"></script>
`;