const MARKET = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
        <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
        <h1 class="section-title text-2xl md:text-3xl mb-4">O Mercado</h1>
        <div class="gold-rule mb-6"></div>
    </div>
    
    <div class="page-search mb-4"></div>

    <div class="cosmos-card p-6 mb-6">
        <div class="corner-ornament corner-tl"></div>
        <div class="corner-ornament corner-tr"></div>
        <div class="corner-ornament corner-bl"></div>
        <div class="corner-ornament corner-br"></div>
        <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">
            O Mercado do Mundo Greco Romano
        </h2>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; margin-bottom:1.5rem;">
            "Todo cavaleiro aprende cedo que cosmo resolve muita coisa. Dinheiro resolve o resto. 
            E para o que nem cosmo nem dinheiro resolvem — existe o mercado negro."
        </p>
        <h3 style="color:var(--gold-light); font-size:1rem; letter-spacing:0.08em; margin-bottom:0.75rem;">
            Como o Comércio Funciona
        </h3>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
            O mundo Greco Romano possui <strong style="color:var(--gold-light);">três camadas de mercado</strong> 
            que coexistem em praticamente todas as cidades com população suficiente para sustentá-las.
        </p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1rem; list-style-type:none;">
            <li style="margin-bottom:1.25rem; border-left:2px solid rgba(255,255,255,0.2); padding-left:1rem;">
                <strong style="color:var(--gold-light); font-size:1.05rem;">Mercado Popular</strong><br>
                Bancas, lojas e vendedores ambulantes encontrados em qualquer cidade de tamanho médio. 
                Não exige reputação nem apresentação. Você chega, paga em 
                <strong style="color:var(--gold-light);">dôbroes de ouro</strong> e leva o item. 
                Os produtos são regulamentados pelo <strong>Santuário</strong> com níveis variados de rigor 
                dependendo de quão distante do Continente Greco a cidade se encontra.
            </li>
            <li style="margin-bottom:1.25rem; border-left:2px solid rgba(255,255,255,0.2); padding-left:1rem;">
                <strong style="color:var(--gold-light); font-size:1.05rem;">Mercado Raro</strong><br>
                Estabelecimentos fixos que não anunciam o que vendem na fachada. 
                Para entrar é necessário <strong style="color:var(--gold-light);">reputação</strong>, 
                <strong style="color:var(--gold-light);">indicação de cliente</strong> ou simplesmente 
                saber <em>onde bater e como perguntar</em>.  
                Os preços são altos — mas a qualidade costuma justificar.
            </li>
            <li style="border-left:2px solid rgba(255,255,255,0.2); padding-left:1rem;">
                <strong style="color:var(--gold-light); font-size:1.05rem;">Mercado Negro</strong><br>
                Não possui endereço fixo. Funciona através de 
                <strong style="color:var(--gold-light);">palavras-chave, encontros marcados e intermediários</strong> 
                que nunca sabem a identidade uns dos outros por segurança mútua.  
                <div style="margin-top:0.5rem;">
                    O <strong>Velho Oeste</strong> possui a rede mais densa.  
                    O <strong>Refúgio do Mal</strong> abriga o circuito mais exclusivo.  
                    <strong>Alexandria</strong> mantém o mercado negro mais sofisticado.
                </div>
                <div style="margin-top:0.5rem;">
                    Os preços são absurdos e as garantias são inexistentes — mas existem itens aqui 
                    que simplesmente <strong style="color:var(--gold-light);">não podem ser encontrados em nenhum outro lugar</strong>.
                </div>
            </li>
        </ul>
    </div>

    <div class="max-w-2xl mx-auto px-4 py-10">
        <div class="text-center mb-8">
            <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
            <h1 class="section-title text-2xl md:text-3xl mb-4">🏪 MERCADO POPULAR</h1>
            <div class="gold-rule mb-6"></div>
        </div>
        <div class="cosmos-card p-6 mb-6 pulse-glow">
            <div class="corner-ornament corner-tl"></div>
            <div class="corner-ornament corner-tr"></div>
            <div class="corner-ornament corner-bl"></div>
            <div class="corner-ornament corner-br"></div>
            <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
                Disponível em qualquer cidade de médio a grande porte
            </p>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">⚔️ CONSUMÍVEIS DE COMBATE</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óleo de Chama</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma como ação livre. +1d4 fogo nos próximos 3 acertos. Não funciona submerso. 300 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pó de Areia do Pântano</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Arremessado como ação padrão. Alvo: Fortitude CD 12 ou -2 nas jogadas de ataque até fim do próximo turno. 150 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Fumaça Grega</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Cria névoa de 4m de raio por 3 rodadas. Bloqueia linha de visão completamente. 400 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno de Medusa Diluído</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 14 ou Paralisado por 1 rodada. Dose única. 800 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pedra de Afiar Cósmica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    10 minutos fora de combate. +1 nas jogadas de dano da arma por 24h. Não acumula. 250 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Água Benta de Atena</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aspergida como ação padrão. 2d6 de dano sagrado em mortos-vivos e criaturas do Submundo. Inofensiva para vivos. 500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pregos de Armadilha</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Espalhados como ação de movimento. Cobre área de 2m². Criaturas que passarem: Reflexos CD 12 ou movem-se a metade da velocidade por 1d4 rodadas. 100 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pó Irritante de Enxofre</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Arremessado como ação padrão. Área de 2m de raio. Todos na área: Fortitude CD 11 ou ficam Enjoados por 1 rodada. 200 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óleo Escorregadio</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Despejado em área de 3m². Qualquer criatura que entrar: Reflexos CD 13 ou cai Prostrada. Dura 5 rodadas. 350 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Granada de Barro Cósmico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Arremessada como ação padrão. Explode em área de 3m de raio. Criaturas atingidas: -2 na CA e Reflexos por 2 rodadas. 600 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Tocha de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Dura 8h. Não apaga com vento. Reacende automaticamente se soprada. 150 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Corda de Fogo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Corda impregnada que queima lentamente. Usada como pavio para armadilhas ou distração. Dura 10 minutos por metro. 80 dbo por metro
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno de Escorpião Comum</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 12 ou -1d2 de Força. Dano secundário em 1 minuto: mais -1d2 de Força. 600 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sal de Espectro</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Arremessado como ação padrão. 1d6 de dano sagrado em mortos-vivos. Sem efeito em criaturas vivas. 300 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Luz Cósmica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Estoura em clarão de luz. Criaturas em 6m de raio: Fortitude CD 13 ou ficam Cegas por 1 rodada. Criaturas sensíveis à luz: Cegas por 1d4 rodadas. 700 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🎒 EQUIPAMENTOS DE EXPLORAÇÃO</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Corda de Tendão de Centauro</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    15 metros. Suporta até 400kg. Não apodrece em ambientes úmidos. 500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Lanterna de Cosmo Mínimo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Ilumina 6m à frente por 8h. Não apaga com vento. Recarregável por qualquer cavaleiro com cosmo básico. 600 dbo — Recarga: 100 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Kit de Escalada Básico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Pitões, martelo e luvas reforçadas. +2 em testes de Escalada em superfícies que permitam fixação. 700 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Rações Olímpicas</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Alimentação para 1 dia. Compacta e eficiente. Sem sabor identificável. Pacote de 7 dias disponível. 50 dbo/unidade — 300 dbo pacote semanal
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sinalizador de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Produz luz colorida visível a 2km à noite e 500m de dia. Dura 1 minuto. 200 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Grappling Hook de Bronze</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Gancho de arremesso com 10m de corda. Arremesso: ataque a toque CD 10. Suporta 200kg. 400 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Kit de Primeiros Socorros</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Bandagens, ervas básicas e unguentos. Permite testes de Cura para estabilizar personagens e remover condições de sangramento. 300 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Luneta de Vidro Grego</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aumenta visão em até 5x. +4 em testes de Observar a longas distâncias. Frágil — quebra com impacto forte. 1.200 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bússola de Minerio</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Indica o norte magnético. +2 em testes de Sobrevivência para navegação e orientação. 400 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Manto Impermeável</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Tecido tratado com óleo de baleia. Protege contra chuva e ambientes úmidos. Evita penalidades de terreno encharcado em testes de Furtividade. 350 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pé de Cabra de Bronze</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    +4 em testes de Força para arrombar portas, abrir tampas e mover objetos pesados. 250 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Espelho de Sinalização</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Reflete luz solar como sinal visível a até 3km. Também usado para ver ao redor de cantos sem exposição. 300 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Saco de Dormir de Lã de Ciclope</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Garante descanso confortável em temperaturas de até -10°C. Sem ele, ambientes frios podem impedir recuperação total do descanso longo. 500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Machado de Escalada</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Serve como ferramenta e arma leve (1d4 dano). +2 em Escalada em superfícies de rocha ou gelo. 600 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óculos de Névoa</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Óculos com lentes tratadas. Reduz penalidade de visibilidade em névoa e fumaça de -4 para -2. 800 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Lanterna Direcional</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Cone de luz focado de 10m. Não ilumina área — apenas direção específica. Ideal para furtividade. 500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Vela de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Vela que queima por 6h. Criaturas invisíveis em raio de 3m ficam visíveis como contornos leves de luz. 400 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Tenda de Campanha</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Abrigo para 2 pessoas. Proteção contra chuva e vento. Montagem em 10 minutos. 600 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🔮 ITENS MÍSTICOS E DE COSMO</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Cristal Condutor Básico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Catalisador externo para técnicas de cosmo. +1 na CD de técnicas de cosmo por 1 hora. Item de uso único. 350 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Incenso de Meditação de Delfos</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Queimado durante descanso curto. Reduz o tempo necessário para recuperação mínima de cosmo em 10 minutos. 400 dbo por bastão
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Amuleto de Proteção Comum</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    +1 em um teste de salvamento por dia. Escolhido antes de rolar. Não acumula com outros amuletos. 200 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pedra de Ancoragem Menor</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Carregada no corpo. Uma vez por descanso longo, concede +2 em qualquer teste de salvamento. Declarado após ver o resultado. 800 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pergaminho de Técnica Básica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Contém uma técnica de cosmo de nível 1. Qualquer cavaleiro pode usá-la uma vez sem conhecê-la. Item de uso único. 1.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pó de Constelação</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aspergido em armadura como ritual de 5 minutos. Concede +1 na CA por 24h. Não acumula. 600 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Vela de Proteção</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Acesa em área de descanso. Criaturas do Submundo precisam de Vontade CD 12 para entrar no raio de 5m enquanto queima. Dura 2h. 500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Fita de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Fita impregnada enrolada em arma ou armadura. +1 nas jogadas de dano ou +1 CA por 8h. Uso único. 700 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sal de Purificação</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Despejado em círculo de 3m de diâmetro. Mortos-vivos não podem cruzar a barreira por 1h ou até ser desfeita. 400 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Conta de Vidente</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Conta de vidro fumê. Uma vez por dia, ao segurar e concentrar por 1 minuto: +4 no próximo teste de Sentir Motivação ou Diplomacia. 600 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🍖 COMIDAS E BEBIDAS</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Vinho de Baco — Safra Comum</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Uma taça: +1 em Blefar e Diplomacia por 1h. -1 em Percepção. Duas taças: bônus dobrado, penalidade dobrada. Três taças: decisão do jogador. 180 dbo por garrafa
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Carne Seca de Touro de Creta</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumida durante descanso curto. Recupera +1d4 de PV adicionais. Funciona uma vez por descanso. 120 dbo por porção
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Chá de Ervas da Zona Oculta</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Antes de dormir: descanso longo sem interrupções de pesadelos. Durante o dia: +2 no próximo teste de resistência contra efeitos mentais. 300 dbo por pacote de 10 doses
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pão de Centeia de Esparta</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Ração de campo espartana. Consumir antes de combate concede +1 em testes de Fortitude contra exaustão por 4h. 80 dbo por porção
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Mel de Abelha Olímpica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em ferimento como ação padrão. Estabiliza automaticamente personagem com PV negativos sem teste de Cura. 400 dbo por frasco
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sopa de Osso de Gigante</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Refeição quente. Consumida durante descanso longo. +2 temporários em Força por 8h após o descanso. 250 dbo por porção
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Cerveja Escura do Coliseu</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Popular entre gladiadores. Concede +1 em Intimidação por 2h. -1 em Reflexos. Não acumula com outros consumíveis de bebida. 100 dbo por caneca
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Suco de Romã de Creta</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Bebida não alcoólica. Consumida durante descanso curto: recupera +2 de PV adicionais. 60 dbo por frasco
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Ração de Guerreiro Espartano</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Concentrada e sem graça. Alimenta por 2 dias. Consumir concede imunidade a penalidades de fome por 48h. 150 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Queijo Curado de Corinto</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Luxo acessível. Consumido antes de descanso longo: o personagem recupera +1 PV adicional por nível. 300 dbo por rodela
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🎭 SUPORTE SOCIAL</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Documento de Trânsito Básico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    +2 em Diplomacia com guardas e autoridades menores. Cavaleiros experientes reconhecem falsificações automaticamente. 500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Kit de Disfarce Básico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Tinturas, peruca e roupas genéricas. +2 em testes de Disfarce para alterações superficiais. 600 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Moeda de Apresentação do Santuário</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Acesso a hospedagens militares e cooperação básica de guardas em cidades aliadas. 400 dbo nos postos do Santuário
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Carta de Recomendação Genérica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Carta com lacre comercial de cidade específica. +2 em Diplomacia na primeira interação com comerciantes e nobres menores. 300 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Perfume de Corinto</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Frasco de perfume refinado. +2 em Diplomacia e Blefar em interações sociais formais por 4h. 400 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Tinta Invisível</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Escrita só visível com aquecimento ou reagente específico. Útil para mensagens secretas e documentos ocultos. 350 dbo por frasco
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Lacre de Cera com Símbolo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Conjunto com cera e carimbo de casa comercial fictícia. Documentos lacrados ganham aparência oficial. 200 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Roupas de Classe Alta</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Vestimenta de qualidade. +2 em testes de Diplomacia com nobres. -4 em Furtividade em ambientes populares por serem conspícuas. 800 dbo
                </p>
            </div>
        </div>
    </div>
    <div class="max-w-2xl mx-auto px-4 py-10">
        <div class="text-center mb-8">
            <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
            <h1 class="section-title text-2xl md:text-3xl mb-4">💎 MERCADO RARO</h1>
            <div class="gold-rule mb-6"></div>
        </div>
        <div class="cosmos-card p-6 mb-6 pulse-glow">
            <div class="corner-ornament corner-tl"></div>
            <div class="corner-ornament corner-tr"></div>
            <div class="corner-ornament corner-bl"></div>
            <div class="corner-ornament corner-br"></div>
            <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
                Acesso mediante reputação, indicação ou saber onde e como perguntar
            </p>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">⚔️ CONSUMÍVEIS DE COMBATE</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno da Víbora de Petróleo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 17 ou 2d6 de fogo no início de cada turno por 3 rodadas. Armaduras com resistência a fogo reduzem à metade. 2.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Cosmo Invertido</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 5m de raio por 2 rodadas. Técnicas de cosmo custam o dobro para serem usadas dentro da área. Afeta aliados e inimigos. 3.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óleo de Gorgônio</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em armadura em 5 minutos. Redução de dano físico adicional de 2 pontos por 24h. Não acumula com outros óleos. 4.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Granada de Relâmpago</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 4m de raio. 3d6 de dano elétrico. Reflexos CD 16 para metade. 5.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno de Quimera</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 16 ou 1d6 de dano por rodada por 4 rodadas. Tipo de dano aleatório: 1-2 fogo, 3-4 ácido, 5-6 frio. 3.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pó de Osso de Dragão</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aspergido em arma como ação livre. O próximo acerto ignora redução de dano de criaturas com escamas ou couro natural. Uso único. 2.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Gelo Abissal</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 4m de raio. 2d6 de frio. Reflexos CD 15 para metade. Alvos que falharem reduzem deslocamento à metade por 2 rodadas. 3.200 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno Paralisante de Aranha Gigante</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 18 ou Paralisado por 1d4 rodadas. 4.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óleo de Invisibilidade</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em objeto ou armadura em 1 minuto. O item fica invisível por 1h. O portador continua visível. 3.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sal de Fúria de Ares</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Misturado em bebida ou comida sem sabor ou cheiro. Alvo: Vontade CD 15 ou fica Furioso por 1d4 rodadas atacando o alvo mais próximo. 2.800 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Granada de Ácido de Hidra</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 3m de raio. 3d6 de ácido. Reflexos CD 15 para metade. Armaduras atingidas perdem -1 CA permanentemente se o portador falhar no teste. 4.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🎒 EQUIPAMENTOS DE EXPLORAÇÃO</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Mapa Vivo de Hermes</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Atualiza automaticamente o terreno em raio de 500m ao redor do portador. Percepção CD 15 para detectar criaturas grandes. Dura 30 dias. 8.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Âncora Dimensional Portátil</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Raio de 10m por 8h. Bloqueia portais não autorizados e abdução espontânea. 5 usos antes de precisar recarga na Zona Oculta. 12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bússola de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Indica maior concentração de cosmo em raio de 1km. Útil para localizar cavaleiros, armaduras e fontes de energia. 9.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Botas de Caminhada Silenciosa</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    +4 em Furtividade em movimento. Não deixam rastros em terreno natural. Em terreno artificial reduz bônus para +2. 6.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Rede de Captura Cósmica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Arremessada como ação padrão. Alvo: Reflexos CD 16 ou fica Preso. Resistência CD 20 para escapar. Criaturas com cosmo ativo: CD reduzida para 14 por interferência. 5.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óculos de Visão Cósmica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Permite ver auras de cosmo ao redor de criaturas e objetos. +4 em Detectar Magia. Revela armaduras e técnicas ativas. 7.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Corda de Cosmo Auto-Enrolável</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    20 metros. Enrola-se por comando verbal. Suporta 600kg. Pode ser fixada em superfícies verticais sem gancho. 8.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bolsa de Armazenamento Expandida</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Comporta até 100kg sem alterar o peso externo. Peso real da bolsa: 500g independente do conteúdo. Capacidade volumétrica equivalente a um baú médio. 10.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Lanterna de Visão Verdadeira</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Ilumina 10m. Criaturas e objetos ilusórios na área de luz ficam visíveis em sua forma real. Dura 4h por carga. 9.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Âncora de Rastro</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Pequeno dispositivo fixado secretamente em pessoa ou objeto. O portador de seu par sabe a direção e distância aproximada do alvo por 7 dias. 6.500 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🔮 ITENS MÍSTICOS E DE COSMO</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Fragmento de Cosmo Cristalizado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. +2d8 de cosmo energia imediatamente. Dois fragmentos no mesmo dia: Fortitude CD 15 ou tremores nas mãos por 1d4h — desvantagem em ataques de precisão. 6.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Catalisador Elemental</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado nas mãos em 5 minutos. Por 1h técnicas do elemento escolhido causam +2 dados de dano adicionais. Elementos: fogo, água, vento ou terra. 7.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pedra de Ancoragem de Alma</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Carregada no corpo. Se o portador chegar a 0 PV, a pedra se fragmenta e o estabiliza automaticamente em 1 PV. Uso único. 15.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Ampola de Cosmo de Deus</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumida. Vantagem em todos os testes de cosmo e dano de técnicas por 10 minutos. Após o efeito: Exausto por 1h. 20.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pergaminho de Técnica Avançada</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Contém uma técnica de cosmo de nível 3 ou 4. Qualquer cavaleiro pode usá-la uma vez sem conhecê-la. Uso único. 8.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Cristal de Absorção de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Quando o portador recebe dano de técnica de cosmo, absorve até 10 pontos do dano. Armazena até 30 pontos. Ao liberar como ação padrão, causa dano acumulado ao alvo em raio de 5m. 12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Talismã de Resistência Elemental</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Escolhido no momento da compra: fogo, frio, elétrico, ácido ou sônico. Concede Resistência 5 ao elemento escolhido. 10.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Estatueta de Armadura de Bolso</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Estatueta que ao ser ativada conjura uma armadura de bronze não mágica em tamanho real por 1h. CA 16. Não possui bônus de cosmo. 9.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Tinta de Runas de Combate</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Pintada em arma em 10 minutos. A arma passa a ser considerada mágica para fins de superar redução de dano por 24h. 5.500 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Conta de Cosmo Reserva</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Conta de cristal carregada com cosmo externo. Ao quebrar como ação livre: +1d10 de cosmo energia imediatamente. 4.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🍖 COMIDAS E BEBIDAS</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Néctar de Olimpo — Versão Diluída</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. Restaura 2d8 PV e remove uma condição negativa leve. Uma dose por dia. Segunda dose: náuseas por 2h. 8.000 dbo por dose
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Fruto da Árvore Panday</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. Remove todas as maldições de nível não-lendário, restaura PV ao máximo e concede imunidade a venenos por 24h. Aparece raramente no mercado. 25.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Caldo de Hidra Processado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido após combate durante descanso curto. Recupera o máximo possível de PV do descanso mais 1d6 adicional. Uma vez por descanso. 10.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Extrato de Cosmo de Ambrosia</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. Por 1h o portador não pode ser reduzido abaixo de 1 PV por dano único menor que 20 pontos. Após o efeito: -2 em todos os atributos por 1h. 15.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Vinho de Baco — Safra Reserva</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. +2 em Blefar, Diplomacia e Intimidação por 2h. Imunidade a efeitos de medo por 1h. Ressaca no dia seguinte: -1 em Percepção e Iniciativa. 3.000 dbo por garrafa
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sopa de Tritão</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumida. Por 24h o portador respira sob a água e nada com deslocamento de 9m. Também concede +4 em Fortitude contra efeitos de afogamento. 12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Fruta do Mar de Poseidon</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumida. Restaura 3d8 PV. Se consumida dentro ou adjacente a corpo d'água: restaura 4d8 PV. 7.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🎭 SUPORTE SOCIAL</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Identidade Completa — Pacote Avançado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Certidão, carta de recomendação e contato vivo que confirma a história. Funciona contra investigações de cavaleiros de bronze. Cinco origens disponíveis. 18.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Perfume de Geisa</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Frasco de perfume do culto de Geisa. +4 em Diplomacia e Blefar por 4h. Efeito anulado se o alvo passar em Sentir Motivação CD 18. 8.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Máscara de Identidade</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Máscara que altera fisionomia completa do portador. +6 em Disfarce. Não muda voz. Cavaleiros com Detectar Cosmo ativo percebem a máscara automaticamente. 12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Contrato de Silêncio Vinculado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Pergaminho mágico. Ambas as partes assinam. Quem quebrar o sigilo sofre -2 em todos os testes por 7 dias como penalidade cósmica. 5.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Tinta de Escrita Destrutiva</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Texto escrito desintegra-se 1h após a leitura do destinatário específico. Inútil para qualquer outro leitor. 4.000 dbo por frasco
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sinal de Reconhecimento da Máfia Borelis</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Um objeto ou tatuagem temporária que identifica o portador como contato da Máfia. Evita confronto imediato com membros de baixo escalão no Velho Oeste. 6.000 dbo
                </p>
            </div>
        </div>
    </div>
    <div class="max-w-2xl mx-auto px-4 py-10">
        <div class="text-center mb-8">
            <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
            <h1 class="section-title text-2xl md:text-3xl mb-4">🖤 MERCADO NEGRO</h1>
            <div class="gold-rule mb-6"></div>
        </div>
        <div class="cosmos-card p-6 mb-6 pulse-glow">
            <div class="corner-ornament corner-tl"></div>
            <div class="corner-ornament corner-tr"></div>
            <div class="corner-ornament corner-bl"></div>
            <div class="corner-ornament corner-br"></div>
            <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
                Sem endereço fixo. Acesso por palavras-chave, intermediários ou reputação. Sem garantias, sem reembolso.
            </p>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">⚔️ CONSUMÍVEIS DE COMBATE</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno Sem Nome</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 14 ou 1d6 por rodada. CD aumenta +2 por rodada até CD 20. Antídoto genérico: Medicina CD 18.8.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pó do Sono de Morfeu — Concentrado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 3m ou superfície de contato. Fortitude CD 19 ou inconsciente por 1d4h. Cosmo ativo: +4 no teste.12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Supressão de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 6m de raio por 3 rodadas. Técnicas de cosmo ativas custam o dobro. Bônus passivos de armaduras divinas reduzidos à metade. Afeta todos na área.30.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno de Basilisco Bruto</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. No primeiro acerto: Fortitude CD 20 ou Petrificado permanentemente. Sucesso: apenas -2 em todos os atributos físicos por 24h.18.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Cosmo Negro</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 5m de raio. 4d8 de dano de trevas sem tipo definido. Reflexos CD 17 para metade. Mortos-vivos são curados pelo dano em vez de sofrê-lo.15.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Óleo de Dissolução</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em armadura inimiga sem que ele perceba — requer toque furtivo. Em 1d4 rodadas a armadura perde -3 CA permanentemente.10.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pó de Paralisia Total</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Arremessado em área de 2m de raio. Fortitude CD 17 ou Paralisado por 2d4 rodadas. Sucesso: Lentidão por 1 rodada.14.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Granada de Vácuo Cósmico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 4m de raio por 2 rodadas. Criaturas na área ficam surdas e não podem usar habilidades que dependam de som ou vocalização para ativação.12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Veneno de Espectro Destilado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Aplicado em arma. Causa dano direto à Constituição: 1d4 de Constituição no acerto, mais 1d4 em 1 minuto. Fortitude CD 17 para metade do dano secundário.20.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Bomba de Desintegração Parcial</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Área de 3m de raio. 5d6 de dano. Reflexos CD 18 para metade. Armaduras na área: Fortitude CD 15 ou perdem 1d4 de CA permanentemente.25.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🎒 EQUIPAMENTOS DE EXPLORAÇÃO</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Chave Mestra de Cosmo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    +6 em Abrir Fechaduras para mecanismos com cosmo básico a intermediário. 15% de chance de danificar a chave por uso.15.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Kit de Supressão de Rastro Cósmico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    15 minutos de aplicação. Reduz detecção cósmica do portador a zero por 4h. Não torna invisível aos olhos.20.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Dispositivo de Escuta Cósmica</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Fixado em superfície. Transmite sons em raio de 10m para o par receptor a até 500m de distância por 24h.18.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Gancho de Silêncio</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Grappling hook revestido de material amortecedor. Sem barulho ao fixar. +4 em Furtividade ao usar para escalada.8.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Máscara de Ar Subterrâneo</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Permite respiração em ambientes com gás, fumaça tóxica ou baixo oxigênio por 2h. Imunidade a penalidades de terreno com gases nocivos nesse período.9.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Detector de Armadilhas Cósmico</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Varinha que vibra ao se aproximar de armadilhas mágicas ou mecânicas em raio de 3m. +4 em Procurar armadilhas.12.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Corda de Fantasma</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Corda que passa por superfícies sólidas finas como paredes de madeira ou grades. Não atravessa pedra ou metal.16.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🔮 ITENS MÍSTICOS E DE COSMO</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Fragmento de Armadura Negra</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Incorporado em armadura por ferreiro especializado. +1d6 de dano adicional em técnicas de cosmo ofensivas. O portador pode ter lampejos do cavaleiro original — a critério do mestre.22.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Selo de Hades Falsificado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Autoriza passagens menores no Submundo e convence espectros de nível baixo. Hades sabe que existem e tolera por ora.40.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Essência de Cosmo Primordial</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumida. +3d8 de cosmo energia. Técnicas ignoram resistências não-lendárias por 1h. Após o efeito: sono imediato por 8h sem exceção.50.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Tatuagem de Cosmo Selada</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Tatuagem permanente feita com tinta de cosmo concentrado. Escolha no momento: +2 em um atributo físico OU +1d6 em um tipo específico de dano de técnica. Irreversível.35.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Cristal de Memória Roubada</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Contém memórias extraídas de um cavaleiro ou figura poderosa. O portador pode acessar as memórias como visões. +4 em Conhecimento em área específica relacionada ao original. Efeito colateral: pesadelos ocasionais com memórias não solicitadas.28.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Âncora de Alma Negra</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Similar à Pedra de Ancoragem mas mais poderosa. Ao chegar a 0 PV o portador não morre e age normalmente por mais 1d4 rodadas com PV negativos. Após esse período cai inconsciente normalmente. Uso único.45.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Pergaminho Proibido de Técnica Lendária</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Contém técnica de cosmo de nível 6 ou 7. Uso único. Qualquer cavaleiro pode usar uma vez. Após o uso: teste de Fortitude CD 18 ou fica Exausto por 24h.60.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🍖 COMIDAS E BEBIDAS</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Destilado do Pântano do Velho Oeste</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. Por 2h: imune a venenos e doenças, +3 em Fortitude e Intimidação, -2 em Diplomacia e Percepção.3.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Fruto Proibido de Perséfone</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    1 semente: visão dos mortos por 1h. 3 sementes: visão dos mortos por 8h mas os mortos também enxergam o portador. Romã inteira: os vendedores não recomendam.35.000 dbo por romã
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Extrato de Cosmo de Titã</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. +4 em Força e Constituição por 1h. Após o efeito: -2 nesses atributos por 4h. Uso recorrente semanal requer Fortitude CD 16 ou perda permanente de 1 ponto de Sabedoria.20.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Sangue de Dragão Engarrafado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Consumido. Imunidade ao elemento do dragão de origem por 24h. Também causa 1d4 de dano de fogo a qualquer criatura que morda o portador nesse período.18.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Licor Negro de Hades</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Bebida destilada no Submundo. Consumido: o portador vê e ouve espectros por 2h. Também torna-se parcialmente visível ao Submundo no mesmo período.15.000 dbo
                </p>
            </div>
        </div>
        <div class="cosmos-card p-6 mb-6">
            <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:1rem;">🎭 SUPORTE SOCIAL</h2>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Dossier Comprometedor Personalizado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Serviço sob encomenda. 1d4 semanas de prazo. Entrega informações reais e verificáveis sobre o alvo que ele preferia não ter divulgadas.25.000 dbo — Figuras de alto perfil: 50.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Carta de Imunidade da Máfia Borelis</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Passagem livre em territórios da Máfia por 6 meses. Não protege contra outros grupos. Cavaleiros do Santuário com este item são automaticamente suspeitos.30.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Identidade de Cavaleiro Falsa</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Documentação completa que imita registro oficial de cavaleiro de bronze. Inclui medalha de cosmo falsificada. Funciona contra civis e guardas. Falha perante qualquer cavaleiro de prata ou superior.40.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 1.5rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Mandato de Prisão Forjado</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Documento com selo falsificado do Santuário autorizando detenção de pessoa específica. Funciona em 80% das guardas municipais. Os 20% restantes vão atrás do emissor.22.000 dbo
                </p>
            </div>
            <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
                <h3 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.25rem;">Serviço de Sumiço</h3>
                <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                    Não é um item — é um contato. Faz uma pessoa desaparecer dos registros oficiais de uma cidade por 6 meses. Remove de listas de procurados locais. Não funciona em registros do Santuário central.35.000 dbo
                </p>
            </div>
        </div>
    </div>
</div>
`;