const MARKET = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
        <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
        <h1 class="section-title text-2xl md:text-3xl mb-4">O Mercado</h1>
        <div class="gold-rule mb-6"></div>
    </div>
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
    <div class="cosmos-card p-6 mb-6">
        <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; letter-spacing:0.1em; margin-bottom:1.5rem; text-align:center;">ARMAS</h2>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🏹 O Arco de Elisza — A Caçadora Implacável</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Ilha das Amazonas — Fenda do Biquíni<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Arco longo cerimonial feito de madeira de coral petrificado e corda trançada com cabelo das próprias Amazonas.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Elisza não usa o arco para matar. Usa para avisar. Se o alvo está morto, é porque o aviso foi ignorado."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Forjado pelas ferreiras da tribo de Elisza Sanches durante um ritual de lua cheia na Ilha Clitoris, este arco foi abençoado por Poseidon como reconhecimento ao pacto indireto que mantém com as Amazonas. Cada flecha disparada por ele carrega a intenção da atirante de forma tão precisa que os alvos frequentemente descrevem a sensação de serem atingidos como "ser encontrado" em vez de "ser acertado."
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Dano base:</strong> 2d8 + modificador de destreza</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Marca da Caçadora:</strong> Ao acertar um alvo, você pode gastar uma ação bônus para marcá-lo. Enquanto marcado, o alvo não pode se tornar invisível, não pode ser ocultado por névoa ou escuridão mágica e você sempre sabe sua direção exata independentemente da distância. A marca dura até o alvo morrer ou até você marcar outro alvo.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Flecha de Poseidon:</strong> Uma vez por dia, você pode disparar uma flecha que se transforma em água pressurizada no momento do impacto. O alvo sofre 4d8 de dano sem redução e deve fazer um teste de Fortitude CD 18 ou ser derrubado e arrastado 6 metros na direção do disparo.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> Não pode ser comprado. Só pode ser obtido vencendo um desafio de caça proposto pelas Amazonas — ou convencendo Elisza pessoalmente, o que ninguém documentou ter conseguido ainda.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> O arco possui consciência rudimentar e rejeita portadores que ataquem mulheres sem provocação direta. Se isso ocorrer, o arco para de conceder seus bônus por 1d4 dias e o portador sofre desvantagem em todos os testes de ataque durante esse período.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🔨 O Martelo de Nhack — A Lei do Pântano</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Velho Oeste<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Martelo de guerra forjado com dentes de jacaré do pântano fundidos em metal negro extraído do subsolo pantanoso.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Esse martelo não pertence a ninguém. Ele apenas permite que algumas pessoas o segurem por um tempo."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Não foi criado por nenhum ferreiro. Apareceu nas profundezas do pântano do Velho Oeste há gerações — possivelmente como uma manifestação física do espírito Nhack, possivelmente como um artefato muito mais antigo que o pântano simplesmente engoliu e preservou. A Máfia Borelis tentou roubá-lo quatro vezes. Nas quatro ocasiões, o portador designado desapareceu no pântano antes de conseguir sair com ele.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Dano base:</strong> 2d10 + modificador de força</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Território Reivindicado:</strong> Quando você acerta um inimigo com este martelo, o solo em um raio de 3 metros ao redor do alvo se torna temporariamente pantanoso por 3 rodadas. Qualquer criatura nessa área tem seu deslocamento reduzido à metade e sofre desvantagem em testes de Atletismo e Acrobacia.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Nhack Responde:</strong> Uma vez por combate, quando você é derrubado ao chão, você pode invocar o espírito do pântano como reação. Você não sofre o dano que o derrubou, levanta imediatamente e seu próximo ataque causa dano dobrado. Após usar esta habilidade, você deve fazer um teste de Sabedoria CD 16. Se falhar, fica com compulsão de proteger a área onde está por 1d4 rodadas, recusando-se a recuar.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 18.000 dôbroes de ouro — se você conseguir encontrar alguém disposto a vender. A maioria dos portadores anteriores está no pântano.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> O martelo é pesado além do normal físico — não no peso literal, mas no peso espiritual. Portadores de longo prazo relatam sonhos recorrentes com profundezas escuras e tesouros submersos. Após 30 dias carregando o martelo, o portador deve fazer um teste de Vontade CD 14 semanalmente ou desenvolver relutância crescente em se afastar de corpos d'água.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🗡️ As Gêmeas de Vespera — Argumento e Contra-Argumento</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Refúgio do Mal<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Par de adagas curtas de metal escuro com runas que mudam de posição dependendo do ângulo de observação.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Uma adaga convence. A outra encerra o debate."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Vespera — mão direita de Lorde Sinistro — forjou estas adagas durante os anos em que ainda trabalhava para o Santuário, como ferramenta pessoal de campo. Quando foi embora, levou-as. Quando ocasionalmente perde uma delas em combate, a adaga retorna a ela em 24 horas por meios que ninguém conseguiu explicar satisfatoriamente. Existe um par idêntico circulando no mundo — ninguém sabe se Vespera os fez intencionalmente ou se o par simplesmente existiu junto e se separou.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Dano base:</strong> 1d6 + destreza cada</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Ataque Combinado:</strong> Quando você ataca com ambas as adagas no mesmo turno e acerta com as duas, o segundo ataque causa dano adicional igual ao primeiro sem necessidade de nova rolagem.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Argumento Definitivo:</strong> Uma vez por descanso longo, você pode desferir um golpe com ambas simultaneamente em um único alvo. O alvo sofre 6d6 de dano perfurante sem redução e deve fazer um teste de Constituição CD 17 ou ficar atordoado até o fim do próximo turno dele.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Contra-Argumento:</strong> Se um inimigo acertar você com um ataque corpo a corpo, você pode usar sua reação para aparar com as duas adagas simultaneamente, reduzindo o dano recebido em 1d10 + seu modificador de destreza.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> Não vendidas. Só podem ser obtidas como recompensa, saque ou presente muito improvável de Vespera.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> Portadores que não sejam Vespera têm 20% de chance por semana de uma das adagas desaparecer e retornar à dona original. Essa chance aumenta para 50% se o portador usar as adagas para fins que Vespera consideraria estrategicamente estúpidos — o que ela avalia por critérios que ninguém documentou completamente.
            </p>
        </div>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; letter-spacing:0.1em; margin-bottom:1.5rem; text-align:center;">ACESSÓRIOS</h2>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🌊 O Colar de Dente de Ceta — Presente das Profundezas</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Lago de Ceta — Fenda do Biquíni<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Colar feito com um único dente de ser abisal do lago, polido até parecer âmbar escuro, pendurado em corrente de prata marinha.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Poseidon não dá presentes. Ele faz investimentos. A diferença é que você só descobre qual era quando já é tarde para devolver."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Periodicamente, um dente aparece nas margens do Lago de Ceta sem explicação. Os nativos da Fenda sabem que pegar o dente é aceitar atenção de Poseidon — o que pode ser proteção ou complicação dependendo inteiramente do humor do deus no momento. Os Marinas tratam portadores do colar com uma deferência cautelosa que nunca explicam diretamente.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Respiração Abissal:</strong> O portador pode respirar debaixo d'água indefinidamente e enxergar em águas escuras até 30 metros como se fosse luz plena.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Favor de Poseidon:</strong> Uma vez por dia, você pode invocar uma onda de cosmo aquático ao redor de si mesmo. Todos os inimigos em raio de 4 metros sofrem 3d6 de dano e são empurrados 3 metros. Aliados na mesma área recebem +2 na CA até o início do seu próximo turno.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Presença Abissal:</strong> Em negociações e interações sociais que ocorram em ambientes costeiros, portuários ou aquáticos, você recebe +3 em todos os testes de Diplomacia, Intimidação e Blefar. Fora desses ambientes o bônus cai para +1.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 12.000 dôbroes de ouro — se um nativo concordar em intermediar a venda. Alternativamente, pode ser encontrado nas margens do Lago de Ceta com uma rolagem de Percepção CD 22 durante lua cheia.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> Uma vez por semana, Poseidon pode usar o colar para enviar ao portador uma visão ou mensagem não solicitada — geralmente sobre algo que ele quer que o portador faça e que pode ou não ser conveniente. Recusar a mensagem não tem consequência imediata. Acumular recusas tem.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🎭 O Manto de Mirra — Sete Faces, Nenhuma Verdadeira</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Refúgio do Mal<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Manto de tecido que parece mudar de cor dependendo da luz, sem cor definida própria.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Quem usou este manto por tempo suficiente e ainda sabe exatamente quem é, provavelmente não o usou direito."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Mirra Sete Faces possui o original. Este é uma das três cópias que ela criou antes de perceber que as cópias funcionavam de forma ligeiramente diferente do original — não pior, apenas imprevisível em formas que a preocuparam suficientemente para ela parar de criar mais. Os três mantos cópias estão em circulação no mundo por razões que Mirra prefere não discutir.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Disfarce Perfeito:</strong> Como ação, você pode assumir a aparência física de qualquer pessoa que tenha observado por pelo menos 1 hora. O disfarce inclui voz, maneirismo e cheiro. Dura até você decidir encerrar ou até você ser atingido por dano que supere 15 pontos em um único golpe.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Persona Temporária:</strong> Uma vez por descanso longo, você pode assumir uma persona completamente diferente por até 4 horas. Durante esse período, você substitui temporariamente duas de suas perícias por duas perícias que a persona possuiria, determinadas pelo mestre. Você também ganha acesso a memórias fabricadas coerentes com a persona que podem enganar até magias de detecção de mentira.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Sem Rastro Cósmico:</strong> Enquanto usa o manto com capuz levantado, sua presença de cosmo não pode ser detectada por meios não físicos.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> Não vendido. Circula no mundo e encontra seus portadores de formas que parecem coincidir mas provavelmente não são.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> Após cada uso de Persona Temporária, o portador deve fazer um teste de Sabedoria CD 15. Se falhar, por 1d4 horas após o fim da persona, responde ao nome da persona em vez do próprio sem perceber. Após 10 usos acumulados de falha nesse teste, o portador perde permanentemente 1 ponto de Sabedoria e passa a ter uma segunda personalidade funcional que o mestre controla em situações de estresse extremo.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">📿 O Amuleto de Cadê Joel — O Peso do Esquecimento</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Aldeia de Lete — Zona Oculta<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Amuleto de pedra cinza fosca, quente ao toque, com uma inscrição que muda toda vez que você tenta relê-la.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "O que você esquece não some. Fica guardado em algum lugar que não é você. O problema é que esse lugar tem dono."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Fabricado pelos habitantes da Aldeia de Lete com pedra extraída da depressão geográfica ao redor da aldeia — material impregnado com décadas da influência de Cadê Joel. Os artesãos que o fizeram não lembram de tê-lo feito, o que é completamente consistente com o contexto de produção.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Apagar Presença:</strong> Uma vez por dia, como ação, você pode fazer com que até três criaturas que possam ver você façam um teste de Sabedoria CD 17. As que falharem simplesmente esquecem que você está presente pelo número de rodadas igual ao seu modificador de Carisma. Elas não ficam cegas — apenas sua atenção escorrega de você constantemente. O efeito termina se você atacar uma delas.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Memória Seletiva:</strong> Três vezes por descanso longo, você pode tocar uma criatura disposta ou inconsciente e remover uma memória específica das últimas 24 horas. A criatura não sente a ausência — a memória simplesmente não está lá.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Névoa Mental:</strong> Em situações de interrogatório ou magia de leitura de mente, você recebe +4 em todos os testes de resistência e pode apresentar uma memória falsa em lugar da verdadeira uma vez por cena.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 9.000 dôbroes de ouro — encontrado ocasionalmente em mercados da Zona Oculta por vendedores que geralmente não lembram como chegou ao estoque deles.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> O amuleto armazena as memórias que remove. Quando acumula memórias demais — a critério do mestre, geralmente após uso intenso por semanas — começa a devolvê-las ao portador aleatoriamente durante o sono, na forma de pesadelos de outras pessoas. O portador não sabe de quem são as memórias. Apenas que não são suas. Às vezes não tem tanta certeza.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">⚡ O Cinto de Fortúnio — A Aposta que Ganhou Forma</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Velho Oeste<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Cinto de couro com uma fivela em formato de dado de seis faces cujo número nunca mostra o mesmo resultado duas vezes seguidas.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Fortúnio não garante que você vai ganhar. Garante que o jogo vai ser interessante. Para ele, são a mesma coisa."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Apareceu em um jogo de azar no Velho Oeste há gerações — o vencedor da partida acordou com ele no lugar do seu próprio cinto sem nenhuma explicação. Desde então passou por dezenas de portadores, sempre chegando a novos donos através de apostas, roubos ou coincidências estatisticamente improváveis.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Sorte Suja:</strong> Uma vez por rodada, quando fizer qualquer rolagem de dado, você pode declarar antes de rolar que está "apostando com Fortúnio." Role dois dados e fique com o resultado mais alto. Se ambos mostrarem o mesmo número, o efeito é maximizado automaticamente. Se ambos mostrarem 1, o efeito falha catastroficamente de uma forma criativa decidida pelo mestre.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Fuga Improváavel:</strong> Uma vez por descanso curto, quando você seria capturado, cercado ou encurralado sem saída lógica, role 1d6 secretamente. Com resultado 4 ou mais, uma saída improvável mas real aparece — uma porta que não estava ali, um aliado que passa na hora certa, uma distração inexplicável. Com resultado 3 ou menos, a situação piora antes de melhorar.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Leitura de Intenção:</strong> Você recebe +2 permanente em testes de Sentir Motivação e Blefar. Fortúnio aprecia quem consegue ler o jogo.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 14.000 dôbroes de ouro — se você conseguir encontrá-lo. O cinto não fica parado em lugar nenhum por muito tempo.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> Uma vez por semana, o mestre pode acionar o lado de Fortúnio e forçar o portador a fazer uma aposta não solicitada — uma rolagem em momento inesperado cujo resultado determina algo no mundo que o portador não controlava e que pode beneficiá-lo ou complicar sua vida de formas proporcionalmente equivalentes.
            </p>
        </div>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; letter-spacing:0.1em; margin-bottom:1.5rem; text-align:center;">ITENS DE UTILIDADE</h2>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">📖 O Compêndio Incompleto de Erastos</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Arquivo do Refúgio do Mal — compilado originalmente em Troia<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Livro encadernado em couro escuro cujas páginas nunca parecem terminar mas nunca têm o que você procura na primeira vez que procura.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Erastos não escreveu um livro. Escreveu uma conversa com atraso de resposta variável."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Uma das cópias de trabalho que Erastos mantinha antes de deixar Troia — impregnada com anos de seu cosmo específico de arquivista. O livro responde a intenções de quem o carrega de formas que sugerem consciência rudimentar, embora Erastos negue isso categoricamente toda vez que o assunto surge.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Consulta:</strong> Como ação fora de combate, você pode consultar o Compêndio sobre qualquer assunto. Role Conhecimento. Com resultado 15 ou mais, o livro fornece informação útil e precisa. Com resultado 10 a 14, fornece informação parcial ou com uma lacuna estratégica. Com resultado abaixo de 10, fornece informação que parece útil mas contém um erro que só se revela quando você age com base nela.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Mapa Narrativo:</strong> Uma vez por dia, você pode pedir ao livro que mapeie as motivações de uma pessoa específica que você descreveu com pelo menos três detalhes concretos. O livro fornece uma análise de duas a três motivações prováveis com grau de confiança indicado. A precisão depende da qualidade dos detalhes fornecidos.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Registro Permanente:</strong> Qualquer coisa escrita no Compêndio não pode ser apagada por meios normais e fica permanentemente registrada, incluindo data, local aproximado e estado emocional do escritor conforme o livro interpretou.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 7.000 dôbroes de ouro em mercados de conhecimento raros. Bibliotecários de Troia pagariam o dobro para tê-lo de volta.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> O livro ocasionalmente adiciona anotações por conta própria — comentários marginais sobre o que o portador fez, decisões que tomou, pessoas que encontrou. Os comentários são factuais, precisos e completamente não solicitados. Portadores que tentaram destruir o livro por esse motivo relatam que ele reaparece no dia seguinte sem dano aparente e com uma nova anotação sobre a tentativa de destruição.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem; margin-bottom: 2.5rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🧭 A Bússola de Astra</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Zona Oculta<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Bússola de metal prateado cuja agulha aponta não para o norte magnético mas para o que o portador mais precisa encontrar no momento.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Astra não diz onde você quer ir. Diz onde você precisa estar. São raramente o mesmo lugar."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Criada por Astra de Bússola — a amazona de prata líder dos exploradores da Zona Oculta — como ferramenta de trabalho para recuperar cavaleiros perdidos após episódios de abdução. Ela possui o original. Este é um dos três instrumentos secundários que ela calibrou com fragmento do seu próprio cosmo antes de perceber que havia colocado mais de si mesma neles do que pretendia.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Orientação Necessária:</strong> A bússola sempre aponta para o que o portador mais precisa no momento — que pode ser um aliado em perigo, uma saída, um item crucial, ou uma informação. O que constitui necessidade é interpretado pela bússola, não pelo portador, o que nem sempre é conveniente.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Rastreamento Cósmico:</strong> Uma vez por dia, se você tiver estado em contato físico com uma pessoa ou objeto por pelo menos 1 minuto, pode calibrar a bússola para rastreá-lo especificamente por até 8 horas. Durante esse período, a agulha aponta para o alvo independentemente de distância, barreiras físicas ou ocultação mágica. A única exceção documentada é o interior da Aldeia de Lete.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Alerta de Abdução:</strong> Se você estiver na Zona Oculta ou em área afetada por seus fenômenos, a bússola vibra suavemente 1d4 rodadas antes de um episódio de abdução ou deslocamento dimensional ocorrer na sua área. Tempo suficiente para reagir. Insuficiente para relaxar.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 11.000 dôbroes de ouro — ou uma negociação direta com Astra de Bússola, que aceita trocas por informações sobre localizações de cavaleiros desaparecidos na Zona Oculta.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> A bússola mantém um vínculo com Astra. Em momentos de crise extrema — quando a Zona Oculta precisa dela — Astra pode usar o vínculo para puxar a atenção do portador em sua direção, o que se manifesta como distração involuntária e compulsão de ir ao encontro dela. Isso raramente é um problema. Raramente.
            </p>
        </div>
        <div style="border-left: 3px solid var(--gold-light); padding-left: 1rem;">
            <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.75rem;">🍺 A Caneca de Baco — O Fundo Sem Fim</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
                <strong style="color:var(--gold-light);">Origem:</strong> Fenda do Biquíni<br>
                <strong style="color:var(--gold-light);">Tipo:</strong> Caneca de cerâmica simples, levemente lascada na borda, que parece um item absolutamente comum até você tentar esvaziá-la.
            </p>
            <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
                "Baco perdeu esta caneca em uma aposta. Ou fingiu perdê-la. Com Baco é difícil distinguir os dois."
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
                Circula na Fenda do Biquíni há gerações, passando de taverna em taverna, de portador em portador. Ninguém sabe exatamente quando apareceu. Baco, quando perguntado, diz que não lembra onde a deixou, o que pode ser verdade.
            </p>
            <h4 style="color:var(--gold-light); font-size:0.95rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
            <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem; list-style-type: none; padding-left: 0;">
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Fundo Sem Fim:</strong> A caneca nunca esvazia completamente. Qualquer líquido colocado nela regenera até a capacidade original em 10 minutos. Se usada com poções, funciona como amplificador — poções de vida usadas da caneca curam um dado adicional além do normal.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Resistência Bacanal:</strong> Quem beber da caneca recebe por 1 hora resistência a venenos, toxinas e efeitos de exaustão. Testes de Fortitude durante esse período têm vantagem.</li>
                <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Moral de Campanha:</strong> Uma vez por descanso longo, se você servir da caneca para pelo menos três aliados ao mesmo tempo em um brinde, todos os participantes recebem 1d8 de pontos de vida temporários e vantagem no próximo teste de resistência que fizerem. O brinde precisa ser sincero — a caneca não funciona se o portador estiver usando o ritual instrumentalmente sem intenção real de celebrar.</li>
            </ul>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
                <strong style="color:var(--gold-light);">Custo:</strong> 6.000 dôbroes de ouro — encontrada em tavernas da Fenda do Biquíni com frequência suficiente para sugerir que aparece onde quer estar.
            </p>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
                <strong style="color:var(--gold-light);">Risco:</strong> Portadores que usam a caneca mais de três vezes por dia devem fazer teste de Fortitude CD 13 ou acordar no dia seguinte em um local completamente diferente de onde adormeceram, sem memória clara de como chegaram lá. Os relatos de onde as pessoas acabam são variados, ocasionalmente úteis e frequentemente constrangedores.
            </p>
        </div>
    </div>
</div>
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
        <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
        <h1 class="section-title text-2xl md:text-3xl mb-4">Artefatos Épicos</h1>
        <div class="gold-rule mb-6"></div>
    </div>
    <div class="cosmos-card p-6 mb-6 pulse-glow">
        <div class="corner-ornament corner-tl"></div>
        <div class="corner-ornament corner-tr"></div>
        <div class="corner-ornament corner-bl"></div>
        <div class="corner-ornament corner-br"></div>
        <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.1rem; letter-spacing:0.1em; margin-bottom:0.75rem; text-align:center;">REGRA GERAL DOS ARTEFATOS ÉPICOS</h2>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
            Artefatos épicos não são comprados. Não têm preço. São obtidos através de quests, heranças, derrotas de portadores anteriores ou circunstâncias que o mestre define. Cada artefato é único no mundo — existe apenas um exemplar.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">O MANTO DE ATENA</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Manto de lã branca com bordas douradas que nunca suja, nunca rasga e nunca pesa mais do que uma folha de papel independentemente do que carrega.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Atena não o usa mais. Diz que não precisa. Os cavaleiros que a conhecem há tempo suficiente suspeitam que a verdade é que ela não consegue mais carregar o que ele representa."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            O Manto foi o primeiro item que Atena criou quando seu cosmo atingiu o limiar divino — não como arma, não como proteção, mas como um teste. Ela queria saber se conseguia transferir parte de sua proteção para outro ser. Conseguiu. O Manto existe há tanto tempo quanto Atena existe como deusa e carregou em algum momento cada cavaleiro de ouro da história do Santuário, embora nenhum deles por tempo suficiente para compreendê-lo completamente.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Atena o perdeu — ou o deixou ser perdido, dependendo de qual versão da história você acredita — durante um conflito que os registros do Santuário descrevem apenas como "O Dia do Julgamento Equivocado." Os detalhes desse evento foram removidos dos arquivos oficiais. Erastos tem uma cópia. Não compartilha.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Égide Viva:</strong> O portador recebe +4 na CA e imunidade a dano de fontes que não sejam portadores de cosmo. Ataques mundanos — flechas comuns, lâminas sem cosmo, armadilhas físicas — simplesmente não atingem enquanto o Manto estiver ativo.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Julgamento de Atena:</strong> Uma vez por descanso longo, o portador pode declarar um Julgamento sobre uma criatura que possa ver. Por 1 minuto, todos os ataques do portador contra essa criatura acertam automaticamente, e todos os ataques dessa criatura contra o portador têm desvantagem. Após o minuto, independentemente do resultado, o portador fica exausto e perde metade dos pontos de vida temporários acumulados.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Memória do Santuário:</strong> O portador pode acessar fragmentos de memória de cavaleiros anteriores que usaram o Manto — visões breves, técnicas esquecidas, informações que deveriam estar perdidas. O mestre decide o que cada visão revela. Isso não pode ser controlado — acontece durante sonhos ou momentos de estresse extremo.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O Manto está guardado na Casa de Áries — dentro de um cofre que não tem fechadura visível e que apenas se abre quando o visitante responde corretamente à pergunta que o cofre faz. A pergunta muda para cada pessoa. Ninguém que tentou relatou a pergunta que recebeu, o que os acadêmicos de Troia consideram suspeito e revelador ao mesmo tempo.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O Manto reporta ao cosmo de Atena. Não como espionagem — ela não vê o que o portador vê. Mas sente o estado emocional do portador de forma contínua. Isso significa que Atena sabe, em tempo real, se o portador está com medo, com raiva, com dúvida. Ela nunca intervém baseada nisso. Mas sabe. E portadores que carregam o Manto por tempo suficiente relatam a sensação persistente de que alguém está prestando atenção.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">O TRIDENTE PARTIDO DE POSEIDON</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Metade de um tridente — a haste e dois dos três dentes, o terceiro quebrado na base. O dente faltante não existe em lugar nenhum documentado.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Poseidon diz que quebrou durante uma batalha. Diz isso com uma leveza que convence ninguém que o conhece."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O Tridente original era o símbolo de poder de Poseidon — não sua arma principal, mas o objeto através do qual ele formalizava sua autoridade sobre os mares. Foi partido em um confronto cujos detalhes Poseidon não divulga e cujo registro Hades mantém no Tártaro por razões que também não divulga. A metade que existe está no mundo há décadas, mudando de portador com uma frequência que sugere que ou é muito cobiçada ou que os portadores têm uma expectativa de vida reduzida, possivelmente ambos.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Autoridade Incompleta:</strong> Dano base 3d10 + Força. Todos os ataques com o Tridente ignoram resistências e imunidades a dano de criaturas aquáticas ou ligadas a Poseidon. Marinas que enfrentam o portador têm desvantagem em todos os testes enquanto o Tridente estiver visível — não por magia, mas por reconhecimento instintivo do símbolo de autoridade de seu deus.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Comando das Águas:</strong> Uma vez por dia, o portador pode convocar uma coluna d'água de qualquer fonte aquática em raio de 60 metros. A coluna tem 10 metros de altura, 3 metros de diâmetro e pode ser direcionada como ação de movimento. Criaturas atingidas sofrem 5d8 de dano contundente e ficam Derrubadas. Criaturas que passem no teste de Força CD 20 sofrem apenas metade e não caem.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Chamado Inacabado:</strong> O portador sente a localização de qualquer massa d'água em raio de 1 quilômetro, incluindo subterrâneas e sobrenaturais. Em ambientes completamente secos, perde esse sentido e fica com leve desorientação permanente enquanto a situação durar.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            No fundo do Lago de Ceta existe uma câmara que só pode ser acessada por quem consegue respirar debaixo d'água por tempo suficiente para descer até o ponto mais profundo sem equipamento mágico. Lá dentro está o Tridente em um altar que claramente foi construído para um tridente inteiro. A câmara não tem guarda. Poseidon, quando perguntado por que não guarda o item, respondeu: "Quem consegue chegar lá sem morrer merece tentar carregá-lo."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Uma vez por semana, Poseidon pode exigir um favor do portador. O favor é sempre proporcional — nunca pede algo impossível ou moralmente inaceacceptable. Mas também nunca é conveniente. Recusar é possível. Recusar tem consequências que Poseidon implementa com a mesma ausência de drama com que o mar afunda navios.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">O LIVRO SEM TÍTULO DE HADES</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Um livro de capa preta sem nenhuma inscrição externa. As páginas internas contêm nomes — milhares deles, em letras minúsculas, em ordem que ninguém conseguiu identificar como alfabética, cronológica ou qualquer outro sistema reconhecível.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Todo nome neste livro pertence a alguém que já morreu. O problema é que alguns desses nomes ainda estão sendo escritos."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Hades criou este livro como backup do seu sistema principal de registros do Submundo — uma cópia de campo para situações onde o acesso ao arquivo central não fosse possível. Perdeu-o durante uma das raras ocasiões em que saiu do Submundo pessoalmente, em circunstâncias que descreve apenas como "uma sequência de eventos administrativamente inconvenientes." Nunca o recuperou porque localizar um livro no mundo dos vivos é, segundo sua própria avaliação, um uso de recursos desproporcional ao problema.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Ele tem um backup do backup. Mas este livro ainda funciona, o que o torna extraordinariamente perigoso nas mãos erradas.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Registro dos Mortos:</strong> O portador pode escrever o nome de qualquer pessoa que conheça no livro como ação. Em 1d4 horas, uma entrada aparece ao lado do nome contendo: data de morte prevista com margem de erro de uma semana, causa provável e localização aproximada no momento da morte. Esta informação é estatística — baseada no cosmo atual da pessoa — e pode mudar se as circunstâncias mudarem. Usar esta habilidade mais de uma vez por semana faz o livro começar a escrever nomes não solicitados.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Adiamento:</strong> Uma vez por mês, o portador pode riscar um nome do livro que esteja sendo escrito ativamente — indicando morte em andamento. A morte é adiada por 24 horas. Apenas adiada. Hades percebe quando isso acontece e anota. Ele não intervém imediatamente. Mas anota.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Passagem:</strong> Uma vez por descanso longo, o portador pode abrir o livro em uma página em branco e pronunciar o nome de um local que conhece. Uma passagem se abre para esse local, funcional por 1 minuto. A passagem passa pelo Submundo — o que significa que o trajeto dura um segundo mas o portador fica brevemente visível para todos os espectros do caminho. Alguns deles reconhecem o livro.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O Livro está atualmente na posse de um espectro no Érebos — a antecâmara do Submundo — que o encontrou flutuando e o guardou sem entender o que era. Para obtê-lo é necessário entrar no Submundo vivo, localizar o espectro específico entre milhares, convencê-lo a entregar o item, e sair vivo. Hades sabe de tudo isso e deliberadamente não interfere porque quer ver como a situação se resolve. Ele chama isso de "experimento metodológico."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O portador não consegue mentir para mortos — incluindo espectros, fantasmas e qualquer manifestação de falecidos. Eles simplesmente sabem. Isso é mais complicado do que parece em um mundo onde o Submundo tem fronteiras porosas.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">O ESCUDO DE NINGUÉM</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Escudo redondo de metal que não pertence a nenhuma liga conhecida — nem frio nem quente ao toque, cor que muda com a luz mas nunca é claramente nenhuma cor específica. No centro, uma inscrição em língua que nenhum acadêmico de Troia conseguiu identificar.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Os estudiosos de Troia catalogaram 847 línguas antigas. Esta não é nenhuma delas. Isso, por si só, deveria dizer algo sobre a origem do escudo."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Desconhecida. Completamente, genuinamente desconhecida — e não no sentido de "as informações foram perdidas" mas no sentido de que parece ter existido antes que houvesse alguém para registrar sua criação. Aparece em registros históricos de continentes diferentes em épocas que não se sobrepõem, sempre descrito de forma idêntica, sempre sem portador permanente, sempre deixado para trás em circunstâncias que os relatos descrevem como "o portador foi embora mas o escudo ficou, como se tivesse decidido."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Juréia, quando consultada, disse que o escudo "cheira a anterior" — o que seus seguidores interpretaram como confirmação de origem pré-olímpica e ela mesma nunca esclareceu.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Negação Absoluta:</strong> O portador pode usar reação para negar completamente um ataque ou efeito mágico direcionado a ele uma vez por rodada. O ataque simplesmente não acontece — não é desviado, não é absorvido, não é resistido. É negado. Após usar esta habilidade, o portador não pode usar reações até o início do seu próximo turno.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Espelho de Intenção:</strong> Ataques que o portador bloquear com o escudo revelam ao portador a intenção do atacante no momento do ataque — não pensamentos completos, mas a emoção e motivação central do golpe. Isso é mais perturbador do que útil em combate mas extraordinariamente valioso em contextos de investigação.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Território Neutro:</strong> Uma vez por dia, o portador pode cravar o escudo no chão e declarar uma área de 6 metros de raio como Território Neutro por 10 minutos. Dentro dessa área nenhuma criatura consegue atacar outra — não por impedimento físico, mas por uma compulsão que contorna até mesmo criaturas sem intelecto. O efeito termina se o portador atacar alguém dentro da área.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O Escudo aparece. Não há outro método documentado. Aparece em lugares onde foi necessário e ninguém o trouxe — numa ruína após uma batalha, numa câmara que estava trancada, numa margem de rio sem rastro de quem o deixou. O mestre decide quando e onde o Escudo considera que alguém precisa dele. Tentar buscá-lo ativamente produz resultados nulos em todos os registros históricos.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O portador gradualmente para de conseguir tomar partido em conflitos que não o envolvem diretamente. Não é incapacidade — é uma perspectiva crescente que mostra todos os lados de qualquer situação com igual clareza, tornando escolhas parciais progressivamente mais difíceis. Em termos mecânicos: após 30 dias com o escudo, o portador tem desvantagem em testes de Persuasão usados para influenciar outros em direção a uma posição específica — porque genuinamente não consegue mais ser totalmente convincente sobre coisas que vê de todos os ângulos.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">A FLAUTA DE OSSOS DE HERMES</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Flauta feita de osso branco polido — de qual criatura é o osso, nenhum estudioso confirmou. Produz som mesmo quando não há ar suficiente para isso.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Hermes diz que a perdeu. Hermes diz muitas coisas."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Hermes a criou como ferramenta de comunicação de longo alcance — uma forma de enviar mensagens que contornasse os limites físicos normais. Com o tempo, a flauta acumulou cosmo suficiente de todas as conversas que facilitou para desenvolver capacidades além da intenção original. Hermes a "perdeu" em um contexto que ele descreve de formas diferentes para pessoas diferentes, o que é ou inconsistência de memória ou consistência de estratégia — com Hermes, a distinção é sempre relevante.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Mensagem Sem Fronteiras:</strong> O portador pode tocar a flauta e direcionar uma mensagem de até 50 palavras para qualquer pessoa que conheça pelo nome, independentemente de distância, plano de existência ou barreiras mágicas. A pessoa recebe a mensagem como se ouvisse a voz do portador ao lado do ouvido. A mensagem não pode ser interceptada. Pode ser ignorada.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Canção do Esquecimento:</strong> Uma vez por descanso longo, o portador pode tocar uma sequência específica aprendida com a flauta. Todas as criaturas em raio de 15 metros que puderem ouvir devem fazer teste de Sabedoria CD 19. As que falharem esquecem os últimos 10 minutos de memória. As que passarem ficam com leve desorientação por 1 rodada mas mantêm as memórias. A flauta não ensina a sequência automaticamente — o portador precisa descobri-la por conta própria ou encontrar alguém que a conheça.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Idioma Universal:</strong> O portador entende e é entendido em qualquer língua, dialeto ou forma de comunicação enquanto a flauta estiver em sua posse — incluindo línguas mortas, línguas de criaturas e, ocasionalmente, o que animais tentam comunicar, o que é menos útil do que parece.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Hermes propõe uma troca. Sempre uma troca. O problema é que ele propõe a troca de formas que parecem espontâneas e informais — numa conversa casual, num encontro aparentemente acidental. O que ele pede em troca varia completamente por portador e é sempre algo que a pessoa específica pode dar mas que custa algo real. Ninguém relatou que Hermes pediu algo impossível. Todos relataram que o que ele pediu foi exatamente a coisa que preferiria não dar.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Hermes sabe de cada mensagem enviada pela flauta. Não o conteúdo completo — mas sabe que foi enviada, para quem, e a emoção geral do remetente no momento. Ele nunca usa isso para interferir. Mas coleciona a informação com a mesma naturalidade com que respira.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">O CASCO DE AO-GUI</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Um fragmento de casco — aproximadamente do tamanho de uma mão espalmada — de textura que alterna entre pedra e osso dependendo de como é tocado. Emite calor constante no inverno e frescor constante no verão, sempre na temperatura exata de que o portador precisa.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Este fragmento se desprendeu espontaneamente. Ao menos é o que dizem. Ninguém estava presente para confirmar. Ao-Gui certamente não comentou."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Em algum momento — os registros orientais indicam há aproximadamente duzentos anos, os registros de Troia indicam período diferente, e os guerreiros da Tartaruga Celestial recusam-se a dar datas por razões religiosas — um fragmento do casco de Ao-Gui se desprendeu espontaneamente da região do Istmo do Pescoço Celestial e foi encontrado por Mestre Shen-Kai, o Guardião do Equilíbrio. Ele o carregou por décadas sem jamais usá-lo ofensivamente. Quando decidiu que havia chegado a hora de passá-lo adiante, simplesmente o deixou no centro do Istmo e foi embora. Quem o encontrou a seguir é matéria de debate.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Arte do Casco Primordial:</strong> O portador ganha acesso pleno à Arte do Casco Espiritual de Ao-Gui independentemente de origem ou treinamento. Recebe +4 em todos os testes de Fortitude, resistência a dano físico de 5 pontos, e imunidade a efeitos de temperatura extrema. Diferente dos nativos da Tartaruga Celestial, o portador não perde acesso a armaduras divinas — os dois poderes coexistem de forma única e que os guerreiros orientais consideram teologicamente perturbadora.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Equilíbrio Forçado:</strong> Uma vez por descanso longo, o portador pode tocar o fragmento e declarar Equilíbrio numa área de 30 metros de raio. Por 3 rodadas, nenhuma criatura na área pode morrer — atingir 0 pontos de vida a deixa inconsciente mas estável. O efeito vale para todos igualmente — aliados e inimigos. Ao fim das 3 rodadas, todas as criaturas que estavam em 0 pontos voltam ao estado em que estariam sem a intervenção.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Memória da Tartaruga:</strong> O portador pode meditar por 1 hora segurando o fragmento para receber orientação sobre uma decisão específica. A orientação chega como sensação — não como palavras — e indica qual caminho causa menos desequilíbrio ao mundo como sistema. Não necessariamente o melhor resultado para o portador. O melhor resultado para o equilíbrio. São raramente a mesma coisa.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O fragmento está no Istmo do Pescoço Celestial — o corredor entre o domínio do gelo e do fogo da Tartaruga Celestial. Para chegar lá é necessário atravessar território de um dos dois domínios sem ser detido por suas legiões, chegar ao Istmo sem que a travessia cause dano suficiente para fazer o coração de Ao-Gui pulsar, e então encontrar o fragmento — que não está em nenhum lugar fixo, mas onde o Istmo decidiu colocá-lo para o visitante específico daquele dia.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O portador não pode mais ignorar desequilíbrios sistêmicos que presencia. Não é compulsão de corrigi-los — é incapacidade de não percebê-los, o que torna descanso genuíno progressivamente mais difícil em um mundo que tem tantos. Em termos mecânicos, o portador tem desvantagem em testes de Percepção em ambientes pacíficos porque parte da atenção está sempre mapeando o que está errado por baixo da superfície.
        </p>
    </div>
    <div class="cosmos-card p-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">O ESPELHO DE GEISA (Ligado a Geisa)</h3>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            <strong style="color:var(--gold-light);">Item:</strong> Espelho de mão de bronze polido que mostra reflexos com um segundo de atraso — e o reflexo que mostra nem sempre é o seu.
        </p>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--silver); font-style:italic; margin-bottom:1.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(255,215,0,0.3);">
            "Geisa diz que o espelho mostra a verdade. O que ela não diz é que a verdade que ele mostra é a sua, não a de quem está olhando."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Origem</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            O único artefato que seu criador admite ter criado e que ao mesmo tempo nega ser artefato. Geisa insiste que é apenas um espelho bem polido. Que o atraso no reflexo é imperfeição de fabricação. Que o fato de às vezes mostrar outras pessoas é fenômeno óptico. Que as pessoas que olharam nele por tempo demais e mudaram de vida completamente depois foram coincidências. A consistência com que ela nega torna a negação o argumento mais fraco do mundo.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O Espelho saiu das mãos de Geisa em uma das perseguições ao seu culto em Atenas — entregue a um seguidor de confiança para proteção, nunca devolvido quando o perigo passou. Geisa nunca buscou ativamente sua recuperação. Isso ou significa que não se importa ou que prefere que ele esteja em circulação, e com Geisa a distinção importa muito.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Lendárias</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Reflexo Verdadeiro:</strong> Como ação, o portador pode mostrar o espelho a uma criatura disposta ou sem perceber. A criatura vê seu próprio reflexo com um segundo de atraso — mas o reflexo mostra como ela realmente age em vez de como acredita que age. Criaturas que falhem num teste de Sabedoria CD 20 ficam Atordoadas por 1 rodada pelo choque do reconhecimento. Criaturas que passem ganham clareza: +2 em todos os testes pelo resto da cena.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Leitura de Persona:</strong> O portador pode gastar 1 minuto observando uma criatura através do espelho sem que ela perceba. Ao final, o mestre revela a motivação central desta criatura, seu maior medo e uma mentira que ela acredita sobre si mesma. Esta informação é sempre precisa. Usá-la de forma cruel tem consequências que o espelho implementa de maneiras que o portador não controla.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Ilusão Perfeita:</strong> Uma vez por dia, o portador pode projetar através do espelho uma ilusão completa de qualquer pessoa que já se olhou nele. A ilusão é auditiva e visual, dura até 10 minutos e é indistinguível do original para criaturas que falhem no teste de Investigação CD 22. O portador controla o que a ilusão diz e faz, mas não pode fazê-la dizer mentiras que a pessoa original nunca diria — o espelho corrige automaticamente para o que aquela pessoa realmente falaria na situação.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Como Obter</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O Espelho está atualmente no Culto Secreto de Geisa em Atenas — guardado por seguidores que sabem exatamente o que têm e que não o entregarão por nenhum valor monetário. Para obtê-lo é necessário ou provar ao culto que o portador tem uso legítimo para ele segundo os critérios de Geisa — o que exige uma conversa com a própria, que concede audiências de forma imprevisível — ou roubá-lo, o que vários tentaram e que resultou em situações que os envolvidos preferem não detalhar.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O portador não consegue mais enganar a si mesmo. Completamente. Sobre nenhum assunto. Toda racionalização, toda negação, toda narrativa conveniente que o portador construiria sobre suas próprias ações simplesmente não funciona mais internamente. O portador ainda pode mentir para outros. Mas sabe, em tempo real, que está mentindo e por quê. Isso é mais debilitante do que parece para a maioria das pessoas.
        </p>
    </div>
</div>
<div class="max-w-2xl mx-auto px-4 ">
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">⚡ A ESPADA DE ZEUS</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Arma
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Forjada por Hefestos como presente de casamento para Zeus. O deus a recebeu, agradeceu com o entusiasmo de quem ganha meia de presente de natal e a deixou cair no mundo mortal em algum momento que nem ele mesmo lembra direito. Hefestos ficou sabendo. Nunca perdoou completamente.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            A espada é larga, pesada e emite faíscas elétricas constantes que não machucam o portador mas tornam o disfarce praticamente impossível. Não existe forma de carregá-la discretamente.
        </p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li><strong style="color:var(--gold-light);">Tipo:</strong> Espada longa</li>
            <li><strong style="color:var(--gold-light);">Dano base:</strong> 2d6 + modificador de Força</li>
            <li><strong style="color:var(--gold-light);">Bônus de ataque:</strong> +5 nas jogadas de ataque</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Potência de Zeus:</strong> Todo dano causado pelo portador — seja pela espada, por técnicas de cosmo ou qualquer outra fonte — tem os dados de dano sempre maximizados. Um 3d8 resulta sempre em 24 antes dos modificadores.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Relâmpago Divino:</strong> Uma vez por rodada como ação livre, o portador pode adicionar 2d6 de dano elétrico ao ataque. Este dano adicional também é maximizado pela Potência de Zeus.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Autoridade do Olimpo:</strong> Criaturas com menos de 10 Dados de Vida que forem atingidas pela espada devem fazer Vontade CD 22 ou ficam Amedrontadas por 1d4 rodadas.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Imunidade Elétrica:</strong> O portador é completamente imune a dano elétrico de qualquer fonte.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Zeus sabe onde a espada está em todo momento. Ele não a reivindica — mas ocasionalmente manda Hermes com um recado inconveniente sobre como o portador está a usando. Esses recados chegam nos momentos mais inoportunos e nunca são solicitados.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🧪 POÇÃO DE COSMO</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Item de Mercado Popular — Consumível
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            Líquido azulado com leve brilho que pulsa ao ser agitado. Produzido por alquimistas licenciados pelo Santuário com cristais condutores processados. O item mais reencomendado por cavaleiros em missão longa.
        </p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Efeito:</strong> Recupera +1d8 de Cosmo Energia imediatamente ao ser consumida.</li>
            <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Uso:</strong> Ação padrão.</li>
            <li><strong style="color:var(--gold-light);">Preço:</strong> 2.000 dbo — Mercado Popular</li>
        </ul>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🧪 POÇÃO DE ARMADURA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Item de Mercado Popular — Consumível
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            Frasco espesso contendo sangue coagulado de animais místicos — proporções e espécies variam por fabricante mas o efeito é consistente. Deve ser derramado diretamente sobre a armadura danificada enquanto o portador a veste.
        </p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Efeito:</strong> Recupera 2d6 pontos de dano estrutural da armadura.</li>
            <li style="margin-bottom:0.5rem;"><strong style="color:var(--gold-light);">Uso:</strong> Ação padrão. Deve ser aplicada na armadura — não funciona se a armadura estiver fora do corpo do portador.</li>
            <li><strong style="color:var(--gold-light);">Preço:</strong> 5.000 dbo — Mercado Popular</li>
        </ul>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🧪 POÇÃO DA VIDA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Item de Mercado Popular — Consumível
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1rem;">
            A poção mais comum do mundo Greco Romano. Vendida em praticamente qualquer banca, farmácia ou mercado ambulante. Existem três versões com qualidade e preço crescentes.
        </p>
        <div style="margin-bottom:1rem;">
            <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">Versão Base</h4>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">Líquido verde-claro. Recupera 1d8 PV. <em>500 dbo</em></p>
        </div>
        <div style="margin-bottom:1rem;">
            <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">Versão Aprimorada</h4>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">Líquido verde-escuro com consistência levemente viscosa. Recupera 2d8 PV. <em>1.000 dbo</em></p>
        </div>
        <div style="margin-bottom:1rem;">
            <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem;">Versão Completa</h4>
            <p style="font-size:1rem; line-height:1.6; color:var(--silver);">Frasco dourado lacrado com cera do Santuário. Recupera todos os PV do portador independentemente do total. <em>5.000 dbo</em></p>
        </div>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:1rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.5rem;">
            <strong style="color:var(--gold-light);">Uso de todas as versões:</strong> Ação padrão.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🛡️ ESCURO AEGIS</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Escudo
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Um escudo de bronze negro com o rosto de uma Medusa entalhado em alto relevo no centro. Os olhos da Medusa são pedras preciosas de cor indefinida que mudam dependendo da luz — ou do humor do escudo, como os portadores mais antigos preferem descrever.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            A origem do escudo é disputada. Alguns acadêmicos de Troia afirmam que foi forjado com fragmentos do original Égide de Atena. Atena, quando consultada, respondeu que a afirmação era "interessante" com aquele tom específico que seus cavaleiros aprenderam a temer.
        </p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li><strong style="color:var(--gold-light);">Bônus de CA:</strong> +6</li>
            <li><strong style="color:var(--gold-light);">Bônus de Escudo:</strong> Conta como escudo pesado para fins de proficiência.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Olhar da Medusa:</strong> Uma vez por turno como ação padrão, o portador pode erguer o escudo em direção a um alvo que consiga vê-lo. O alvo faz Fortitude CD 20. Se falhar: fica Petrificado permanentemente. Se passar: fica Paralisado por 1 rodada pelo choque do olhar. Criaturas cegas são imunes a este efeito.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Remoção da Petrificação:</strong> A maldição da petrificação só pode ser removida por um cavaleiro com habilidade específica de remoção de maldições ou por magia de nível equivalente a Quebrar Encantamento com CD de conjuração 25.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Reflexo do Aegis:</strong> Se um inimigo usar uma habilidade de olhar ou efeito visual contra o portador, o portador pode usar reação para fazer o Aegis refletir o efeito de volta. O atacante faz o mesmo teste de salvamento que o portador faria.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O escudo tem memória. Cada petrificação causada por ele é registrada de alguma forma nos relevos do bronze — novas expressões aparecem sutilmente no rosto da Medusa. Portadores que olharem com atenção suficiente eventualmente percebem que algumas das expressões parecem familiares.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">💍 ANEL DO JOEL</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Acessório
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Um anel que qualquer joalheiro de respeito descartaria imediatamente — metal barato, pedra opaca de cor indefinida, acabamento irregular como se tivesse sido feito às pressas ou por alguém que nunca fez um anel antes. Cadê Joel, quando perguntado se foi ele quem o fez, respondeu que não lembrava. Isso não é necessariamente uma negativa.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Invisibilidade do Joel:</strong> Uma vez por dia como ação padrão, o portador fica completamente invisível por um número de rodadas igual à metade do seu nível arredondada para cima. Durante a invisibilidade: não emite som de nenhuma fonte, sua presença cósmica não pode ser detectada por nenhum meio e deixa rastros físicos apenas em superfícies muito macias como areia fina ou neve.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Teste do Retorno:</strong> Ao fim das rodadas de invisibilidade, o portador faz Vontade CD 15. Se falhar: perde permanentemente 1 ponto de Sabedoria e 1 ponto de Inteligência. Se passar: nenhum efeito.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Sussurro de Joel:</strong> Enquanto invisível, o portador pode falar normalmente sem quebrar o efeito — apenas ele não produz som. Pode comunicar-se apenas por toque ou por escrita.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Portadores que acumularem 5 ou mais falhas no Teste do Retorno começam a esquecer detalhes progressivos de suas próprias vidas — nomes de aliados, localizações de cidades visitadas, eventos recentes. O mestre decide o que é esquecido e quando.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🔱 LANÇA DE ERENILDO</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Arma
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Erenildo foi o Deus do Sol anterior ao panteão atual — uma divindade esquecida cujo nome sobreviveu apenas em textos acadêmicos de Troia e em inscrições na região da Cabeça da Ilha do Sol Vermelho. Sua lança sobreviveu a ele. O calor que ela carrega não é o calor suave de um dia de verão — é o calor do sol escaldante do deserto da Cabeça em seu pior dia, concentrado em um único ponto de metal.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Segurar a lança sem cosmo suficiente causa queimaduras. Cavaleiros sem afinidade elemental de fogo percebem que a lança está sempre quente demais para o conforto mas não quente o suficiente para ferir — como se testasse constantemente se você merece carregá-la.
        </p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li><strong style="color:var(--gold-light);">Tipo:</strong> Lança longa</li>
            <li><strong style="color:var(--gold-light);">Dano base:</strong> 3d8 + 6 — dano sem redução de nenhuma fonte</li>
            <li><strong style="color:var(--gold-light);">Bônus de ataque:</strong> +4 nas jogadas de ataque</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Calor do Deserto:</strong> Todo dano causado por técnicas de cosmo baseadas no elemento fogo pelo portador é dobrado. Isso inclui técnicas próprias, técnicas de pergaminhos e técnicas de itens usados pelo portador.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Chama de Erenildo:</strong> Uma vez por dia como ação padrão, o portador pode ativar a memória solar da lança. Por 3 rodadas todos os ataques com a lança causam dano adicional de 2d8 de fogo sem redução e criaturas atingidas ficam Em Chamas — sofrendo 1d6 de dano de fogo no início de cada turno até apagarem o fogo com uma ação padrão.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Luz Antiga:</strong> Em escuridão total o portador pode acender a lança como ação livre — ela ilumina 20m de raio com luz solar real. Criaturas com vulnerabilidade à luz solar sofrem penalidades normais nessa área.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Memória Solar:</strong> O portador é imune a dano de calor e fogo de qualquer fonte não-lendária.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            A lança reconhece portadores que abandonam o elemento fogo. Se o portador passar mais de 7 dias sem usar nenhuma técnica de fogo, a lança começa a esquentar progressivamente até se tornar dolorosa de carregar — não causando dano, mas impondo -2 em todos os testes físicos pela desconforto constante. Volta ao normal quando o portador usa fogo novamente.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🌀 A VOZ DE JURÉIA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Acessório (Amuleto)
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Um amuleto de aparência impossível — o material central parece sólido quando você não está olhando diretamente e levemente translúcido quando está. A corrente que o sustenta tem um nó que ninguém conseguiu desfazer e que claramente não deveria funcionar estruturalmente mas funciona.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Juréia não confirma ter criado este amuleto. Também não nega. Quando pressionada respondeu: "A pergunta pressupõe que criação requer intenção. Isso é uma suposição muito otimista sobre a natureza da realidade."
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Voz do Inexplicável:</strong> Uma vez por dia como ação padrão, o portador fala com a autoridade de Juréia por 1 minuto. Durante esse período qualquer afirmação feita pelo portador — verdadeira ou falsa — soa como verdade absoluta e inquestionável para todas as criaturas que ouvirem e que falharem em Vontade CD 21. Criaturas afetadas não questionam o que ouviram por 1 hora.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Campo do Inexplicável:</strong> Passivo. Uma vez por descanso longo, quando o portador for alvo de um efeito mágico ou de cosmo, pode declarar o efeito como "inexplicável" como reação. O efeito não é resistido nem bloqueado — simplesmente não acontece por razão nenhuma. O mestre descreve o não-acontecimento de forma coerente com o mundo. Funciona uma vez por descanso longo.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Percepção do Bizarro:</strong> Passivo. O portador detecta automaticamente fenômenos sobrenaturais, portais dimensionais e anomalias cósmicas em raio de 30m sem precisar de teste.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O portador gradualmente para de conseguir aceitar explicações simples para qualquer coisa. Todo evento, por mais mundano que seja, começa a parecer potencialmente significativo. Em termos mecânicos: após 30 dias com o amuleto o portador tem desvantagem em testes de Conhecimento para identificar fenômenos normais — porque genuinamente não consegue mais descartar a possibilidade de que nada seja normal.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">📜 OS ENSINAMENTOS DE DAO SHAN KASHODAN</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Grimório
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Um livro fino de páginas feitas de casca de árvore processada, escrito em uma língua que não existe em nenhum catálogo acadêmico de Troia. O título na capa é o único trecho legível — e mesmo ele só pode ser lido por quem já ouviu o nome Dao Shan Kashodan pelo menos uma vez.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Dao Shan Kashodan foi o mestre fundador de uma escola de Karate tão secreta que o nome da escola também é segredo — referida apenas como "aquela escola" por praticantes que sabem da existência mas não tiveram acesso. Os Ensinamentos são o único registro físico do método completo.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Leitura dos Ensinamentos:</strong> Requer 7 dias de estudo ininterrupto fora de combate. Após completar a leitura o portador aprende permanentemente as Três Formas do Karate Secreto — três técnicas de combate desarmado únicas cujos efeitos o mestre define baseado no histórico e estilo do personagem. Essas técnicas não podem ser aprendidas por nenhum outro meio.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Transmissão:</strong> O portador pode ensinar as Três Formas a outro personagem — processo que leva 30 dias de treinamento intensivo. O ensinado aprende as técnicas permanentemente. O ensinador não as perde. Dao Shan Kashodan acreditava que conhecimento que não se transmite é conhecimento desperdiçado.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Postura do Mestre:</strong> Passivo. Enquanto o portador carrega o grimório, recebe +2 em todas as jogadas de ataque desarmado e +2 na CA quando não usa armadura ou usa armadura leve.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Legado:</strong> Se o portador morrer carregando o grimório, as Três Formas que ele aprendeu são acrescentadas ao texto como um novo capítulo — legíveis por futuros portadores que completarem a Leitura dos Ensinamentos.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O grimório exige do portador uma prática diária de pelo menos 30 minutos de treinamento físico. Dias sem prática acumulam — após 3 dias consecutivos sem treino o portador perde temporariamente 1 ponto de Destreza por dia de inatividade até retomar a prática. Os pontos retornam ao ritmo de 1 por dia de treino retomado.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">📖 O MAMASUTRA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Grimório
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Formalmente intitulado Decreto Absoluto de Geisa — Edição Completa e Sem Cortes.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Geisa escreveu este grimório como simbulo máximo do seu ensinamento numa época em que seu culto era mais proibitivo em Atenas. Enquanto o Santuário escrevia leis e doutrinas militares, ela escreveu um manual completo e explicitamente detalhado sobre como usar o corpo, como mamar, como usar o desejo e a sedução como instrumentos de poder absoluto. O texto é simultaneamente um tratado filosófico sobre motivação humana, putaria escancarada e um guia prático tão direto que os acadêmicos de Troia que tiveram acesso a cópias parciais classificaram o conteúdo como "pedagogicamente agressivo."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            O nome Mamasutra é uma referência direta ao Kamasutra — texto sagrado de ensinamentos sobre o ato sexual oriundo das tradições orientais da Tartaruga Celestial. Geisa conhecia o texto original. Considerou-o incompleto. O Mamasutra é sua resposta — mais abrangente, mais direto e com ilustrações que os seguidores descrevem como "esclarecedoras" e que o Santuário descreve como "motivo de confisco imediato."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Apesar dos termos escatológicos, da putaria descarada nas palavras e dos muitos conhecimentos sexuais que ela aborda em seu livro. Quem tem uma mente mais aberta, vai conseguir entender ensinamentos que vão muito além do que este manual aparenta exclarecer.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            A premissa central do grimório é simples: todo ser vivo quer algo que envolve outro ser vivo. Quem entende isso controla tudo o mais. O sexo parece ser o tema do livro mas não é! O texto é o exemplo mais honesto que Geisa encontrou para ilustrar como o desejo funciona como alavanca universal de poder.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O cadeado do grimório se abre apenas para quem não tem vergonha do que está prestes a ler.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Leitura do Mamasutra:</strong> 3 dias de estudo sem interrupção. O portador recebe +3 permanente em Diplomacia, Blefar e Intimidação. Adicionalmente recebe a habilidade passiva Leitura de Desejo — detecta automaticamente a motivação emocional e o desejo primário de qualquer criatura com quem interagir por mais de 1 minuto.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Sedução Absoluta:</strong> Uma vez por dia como ação padrão. O alvo faz Vontade CD 20. Se falhar: torna-se completamente Fascinado pelo portador por 1 hora — responde honestamente a até três perguntas, não ataca o portador e considera qualquer proposta do portador como razoável durante o período.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Técnica da Exaustão:</strong> Uma vez por combate como ação padrão. O portador usa linguagem corporal, toque ou palavras específicas do grimório para esgotar mentalmente um alvo. O alvo faz Vontade CD 19 ou perde sua próxima ação completamente — paralisado não por magia mas por uma confusão de impulsos que o grimório chama de "o problema de querer demais ao mesmo tempo."</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Decreto da Mama:</strong> Uma vez por semana. Todas as criaturas em raio de 10m fazem Vontade CD 23 ou param completamente por 2 rodadas — compelidas a ouvir o que vem a seguir como se fosse a voz da própria Geisa.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O portador começa a perceber o desejo de todos ao redor de forma permanente e involuntária — uma consciência constante e não solicitada do que cada pessoa quer de cada outra pessoa em qualquer ambiente social. Em festas, mercados e reuniões isso é exaustivo. O portador tem -2 em testes de Percepção em ambientes sociais movimentados porque há informação demais chegando ao mesmo tempo.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🧭 A BÚCETULA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Ferramenta
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            A bússola pessoal de Elisza Sanches, Rainha das Amazonas da Fenda do Biquíni.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            A história do nome começa com a tradição das Amazonas de capturar homens para fins de servidão sexual e reprodução. Elisza desenvolveu ao longo dos anos um método próprio de seleção — em vez de capturar qualquer homem de merda que cruzasse o território da ilha, ela identificava especificamente os mais "úteis" para os propósitos da tribo. Com o tempo essa habilidade de rastrear e localizar o alvo certo no momento certo foi incorporada a uma bússola que ela mandou forjar especialmente.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            O nome foi dado pelas próprias Amazonas com a lógica direta que as define: a bússola aponta para o que a tribo precisa encontrar, e o que a tribo mais frequentemente precisava encontrar era o parceiro reprodutor ideal. O instrumento foi batizado em homenagem à anatomia feminina — símbolo central da cultura Amazon e da missão reprodutiva da tribo — combinado com bússola. A Búcetula. O instrumento que aponta para o que você precisa.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Os homens capturados por Elisza usando esta bússola raramente entendiam por que foram escolhidos especificamente entre tantos outros. A bússola sabia. Elisza confiava na bússola.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            A agulha é feita de osso de criatura marinha e aponta não para o norte — mas para o que o portador mais precisa no momento, com uma interpretação do termo "precisa" que varia conforme o contexto e que surpreende os portadores com uma consistência perturbadora.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Aponta pro que Precisa:</strong> Passivo. A agulha indica sempre a direção do que o portador mais necessita no momento — podendo ser um inimigo, um aliado em perigo, uma saída, um item ou, ocasionalmente, uma pessoa específica. A interpretação é da bússola, não do portador.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Rastreamento de Alvo:</strong> Uma vez por dia. Calibrada para pessoa específica conhecida pelo nome e aparência. Por 24h rastreia o alvo sem limite de distância. Barreiras físicas não bloqueiam. Ocultação mágica exige Conjuração CD 20 para funcionar.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Instinto de Caça:</strong> Passivo. O portador nunca é surpreendido — a bússola vibra antes de emboscadas concedendo iniciativa normal.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Seleção Natural:</strong> Uma vez por dia como ação livre. A bússola avalia todas as criaturas em raio de 100m e indica a mais "adequada" para o objetivo atual do portador — seja combate, negociação, fuga ou qualquer outra necessidade. O mestre revela qual criatura foi indicada e por quê.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Elisza envia Amazonas periodicamente para recuperar a bússola a cada 1d4 meses. Adicionalmente, a bússola tem o hábito de apontar para situações romanticamente inconvenientes em momentos estrategicamente péssimos — o que as Amazonas consideram uma funcionalidade e os demais portadores consideram um problema de design.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">💦 O SUOR DOS NEGÕES</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Consumível Permanente (uso único)
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Um frasco de vidro negro opaco contendo um líquido escuro e denso que não parece líquido quando parado — só quando agitado. Produzido na Ilha do Sol Vermelho através de um processo ritual que os nativos da região da Cabeça realizam durante o solstício de verão envolvendo os guerreiros mais resistentes da ilha em uma sessão de treinamento de duração não especificada nos registros.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Os acadêmicos de Troia tentaram analisar a substância quimicamente. Os instrumentos quebraram. Eles catalogaram o resultado como "analiticamente inconveniente" e arquivaram o caso.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Aplicação:</strong> Deve ser derramado sobre o corpo do portador — não ingerido — durante um ritual de 1 hora que inclui exercício físico intenso. Se interrompido antes de completar a hora o frasco se esvazia sem efeito.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Pele Forjada:</strong> Após o ritual completado, o portador ganha permanentemente Redução de Dano 3/— . Isso significa que todo dano físico recebido é reduzido em 3 pontos independentemente da fonte — sem exceção de material ou magia.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Resistência da Cabeça:</strong> O portador ganha permanentemente +4 em todos os testes de Fortitude contra calor extremo, exaustão física e efeitos ambientais hostis.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Corpo Temperado:</strong> O portador ganha permanentemente +2 na Constituição. Esse bônus conta como bônus de aprimoramento.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Limite de Uso:</strong> Apenas um frasco funciona por portador. Usar um segundo frasco no mesmo portador não causa efeito adicional — o líquido simplesmente evapora ao tocar a pele já temperada.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Não há custo contínuo — os efeitos são permanentes e não requerem manutenção. Porém os guerreiros da Ilha do Sol Vermelho que produzem o frasco consideram seu uso por estrangeiros uma questão de honra. O portador pode receber desafios ocasionais de guerreiros da ilha que querem verificar se o estrangeiro merecia o que recebeu.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🏴‍☠️ TAPA-OLHO DO CAPITÃO MIHALK</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Acessório
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Um tapa-olho de couro enegrecido com costuras de fio dourado e um símbolo marinho gravado na parte externa. Pertenceu ao Capitão Mihalk — figura histórica do mundo Greco Romano cujos registros em Troia ocupam três volumes inteiros de façanhas marítimas, crimes de alto mar e pelo menos duas guerras pessoais contra Aquamen que os historiadores classificam como "juridicamente confusas."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O que está do lado debaixo do tapa-olho é desconhecido. Mihalk nunca o retirou em público. Os relatos de pessoas que afirmam ter visto variam tanto que os acadêmicos desistiram de catalogar.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Olho que Tudo Vê:</strong> O olho coberto pelo tapa-olho desenvolve visão alternativa que o olho normal não possui. O portador enxerga através de névoa, escuridão mágica e ilusões visuais automaticamente — como se essas condições não existissem. Invisibilidade é detectada como contorno levemente visível.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Mira do Capitão:</strong> +3 em todas as jogadas de ataque à distância. Ataques à distância do portador não sofrem penalidade por cobertura parcial.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Leitura de Mar:</strong> Passivo. O portador detecta automaticamente mudanças climáticas marítimas com 1 hora de antecedência e nunca se perde em ambiente aquático ou costeiro.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Evil eye:</strong> O portador do tapa-olho rece uma tecnica que funciona somente enquanto ele estiver na posse deste item. Ele pode abrir o tapa-olho para cima e seu olho irá emitir uma energia vermelha concentrada que disparará um raio fatal. O raio tem alcance de 21m e seu dano é de 20d6 sem redução de dano pela armadura. Para acertar o alvo voc~e precisa fazer uma jogada de ataque baseado na sua destreza.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O olho coberto começa a ver coisas mesmo quando o tapa-olho está no lugar — não claramente, mas como sombras e formas que o portador não pediu para ver. Portadores com Sabedoria abaixo de 14 têm 20% de chance por semana de acordar de noite convictos de que viram algo importante. O que viram o mestre decide. Pode ou não ser real.
        </p>
    </div>
</div>
<div class="max-w-2xl mx-auto px-4">
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🍷 MONJARO</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Acessório
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Uma tornozeleira de couro grosso com um pingente de uva dourada — símbolo inequívoco de Baco. Pertenceu originalmente à Tribo dos Manjadores de Rola, um grupo de devotos extremos de Baco que habitavam as bordas da Fenda do Biquíni e que levavam os rituais bacanais do deus a níveis que até os nativos da Fenda consideravam "um pouco demais."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            A tribo foi dispersada há gerações por motivos que os registros de Troia descrevem diplomaticamente como "excesso de devoção ritual." A tornozeleira é o único artefato que sobrou deles — impregnada com décadas de cosmo bacanal concentrado de uma intensidade que objetos normais não conseguem sustentar sem se desintegrar.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Baco, quando perguntado sobre a tribo, fica em silêncio por um momento e depois muda de assunto oferecendo bebida. Isso é considerado confirmação implícita de envolvimento.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Resistência do Devoto:</strong> Passivo. O portador é imune a efeitos de embriaguez, venenos ingeridos e exaustão por excesso de atividade física ou social. O corpo simplesmente absorve e processa tudo.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Frenesi de Baco:</strong> Uma vez por dia como ação livre. Por 3 rodadas o portador entra em estado de frenesi bacanal — +4 em Força e Constituição, +2 em jogadas de ataque, imune a efeitos de medo e dor. Após o frenesi terminar o portador fica Fatigado por 10 minutos mas não pode ser reduzido abaixo desse estado por mais frenesi no mesmo dia.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Presença Bacanal:</strong> Passivo. Em qualquer ambiente social o portador irradia uma energia que torna outros naturalmente mais relaxados e abertos. +3 em Diplomacia e Blefar em interações sociais informais. NPCs neutros começam interações como Amigáveis em vez de Indiferentes.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Oferenda de Baco:</strong> Uma vez por semana. O portador pode compartilhar qualquer bebida com até quatro aliados tocando a tornozeleira no frasco. A bebida recebe propriedades de Néctar de Olimpo Diluído independentemente do que era originalmente — efeito de 2d8 PV e remoção de condição leve para cada um que beber.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Baco acompanha a tornozeleira com afeto. Uma vez por semana aparece em sonho do portador para uma conversa que invariavelmente termina com um convite para algo que o portador provavelmente não deveria aceitar mas que soa razoável no contexto onírico. Os sonhos são vívidos. As propostas são variadas. A palavra não funciona — mas Baco não insiste. Apenas registra para a próxima semana.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">🧭 PIRÓCOLA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Ferramenta
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Um estudioso anônimo da Fenda do Biquíni — identificado apenas como "J.L., acadêmico independente e entusiasta prático" nos registros — passou anos analisando a Búcetula de Elisza Sanches à distância após ouvi-la descrita por marinheiros. Sua conclusão foi que o princípio cósmico por trás do artefato era reversível e que a ausência de um equivalente masculino era uma lacuna injusta no panteão de artefatos do mundo.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Levou seis anos para criar a Pirócola. O nome segue a mesma lógica direta da Búcetula — combinação do termo coloquial masculino com bússola — e J.L. afirmou em seus registros pessoais que ficou orgulhoso da consistência terminológica, o que diz muito sobre suas prioridades acadêmicas.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            A agulha da Pirócola é feita de coral vermelho extraído do fundo do Lago de Ceta e aponta não para o norte — mas para a mulher mais "adequada" no raio de percepção do portador, com critérios de adequação que J.L. afirma terem sido calibrados "empiricamente ao longo de extenso período de testes de campo."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            Elisza Sanches, quando soube da existência do artefato, ficou em silêncio por tempo suficiente para que todos ao redor ficassem com medo. Depois disse apenas: "Interessante." Ninguém soube interpretar o tom.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Aponta pro que Quer:</strong> Passivo. A agulha indica a direção da mulher mais "adequada" ao portador em raio de 500m — interpretação da bússola baseada em compatibilidade de cosmo, não necessariamente intenção do portador. Em ambientes sem mulheres a agulha gira em círculos com uma energia que os portadores descrevem como "julgadora."</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Rastreamento Invertido:</strong> Uma vez por dia. Calibrada para pessoa específica conhecida. Por 24h rastreia o alvo sem limite de distância. Funciona identicamente à Búcetula mas na direção oposta.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Senso de Oportunidade:</strong> Passivo. A bússola vibra de forma específica quando uma mulher nas proximidades está receptiva a interação social — não romanticamente necessariamente, mas aberta a conversa. +2 em Diplomacia com o alvo indicado.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Contra-Rastreamento:</strong> Se a Búcetula de Elisza estiver rastreando o portador, a Pirócola detecta isso imediatamente e indica a direção das Amazonas que se aproximam. Os dois artefatos se reconhecem mutuamente — quando estão no mesmo raio de 100m ambas as agulhas apontam uma para a outra e vibram com frequências diferentes que seus respectivos portadores aprendem a temer.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            A Pirócola tem uma falha de calibração que J.L. documentou mas não conseguiu corrigir antes de "precisar de uma pausa no projeto" — uma vez por semana a bússola indica um alvo completamente inadequado para qualquer propósito com a mesma confiança que indica os demais. J.L. chamou isso de "erro de margem aceitável." Os portadores têm outras palavras para descrever o fenômeno.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">⚔️ A ARTE DA GUERRA</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Grimório
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Escrito por Ares durante um período de paz forçada que ele descreve como "os piores quarenta anos da minha existência."
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Com nada para fazer e raiva suficiente para reescrever o universo, Ares passou quatro décadas documentando tudo que aprendeu sobre guerra em milênios de existência. O resultado é um grimório que os acadêmicos de Troia consideram o texto militar mais completo já produzido — e que Atena considera "tecnicamente correto mas filosoficamente irresponsável," o que é a crítica mais gentil que ela já fez a algo de Ares.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            O texto não tem subtítulos nem seções organizadas — Ares escreveu em fluxo contínuo na ordem que os pensamentos vieram, o que significa que técnicas de infantaria dividem parágrafo com observações pessoais sobre o caráter dos deuses olímpicos que os envolvidos preferiam que não tivessem sido escritas. Hermes leu o capítulo sobre si mesmo e disse que estava "razoavelmente preciso." Zeus não comentou o capítulo sobre Zeus.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem;">
            O grimório termina abruptamente no meio de uma frase — o período de paz acabou e Ares foi embora sem concluir. A frase incompleta é tema de debate acadêmico intenso. Ninguém sabe o que viria depois. Ares diz que não lembra.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades:</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Leitura da Arte da Guerra:</strong> 10 dias de estudo. O portador recebe permanentemente +2 em Iniciativa, +2 em jogadas de ataque em combate corpo a corpo e a habilidade passiva Leitura de Campo — no início de cada combate o portador identifica automaticamente o inimigo mais perigoso, o inimigo mais fraco e a melhor posição tática disponível no terreno.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Táticas de Ares:</strong> Uma vez por combate como ação livre. O portador coordena aliados em raio de 15m. Todos os aliados que puderem ouvi-lo recebem +2 nas jogadas de ataque e +2 na CA por 3 rodadas. Ares chamou essa técnica de "o mínimo que guerreiros competentes deveriam fazer naturalmente" nas notas marginais.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Fúria Calculada:</strong> Uma vez por dia como ação livre. Por 1 minuto o portador entra em estado de guerra plena — +4 em Força, +2 em jogadas de dano, imune a efeitos de medo e imune a penalidades de condições físicas leves como Abalado ou Fatigado. Diferente de frenesi selvagem, o portador mantém raciocínio tático completo durante o estado.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Conhecimento do Inimigo:</strong> Uma vez por descanso longo. Após observar um inimigo por 1 rodada completa, o portador identifica automaticamente: total de Dados de Vida aproximado, maior fraqueza de combate visível e se o inimigo já lutou antes — indicado pela leitura de postura e cicatrizes que o grimório ensina a interpretar.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Último Capítulo:</strong> A frase incompleta no final do grimório. Uma vez na vida do portador — e apenas uma vez — ele pode invocar o que Ares teria escrito a seguir. O efeito é determinado pelo mestre baseado na situação específica mas sempre representa a intervenção tática mais necessária naquele momento exato. Ares sente quando isso acontece. Aparece no combate seguinte para ver quem ousou invocar a conclusão que ele mesmo não escreveu.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar:</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            Ares sabe onde o grimório está e monitora quem o usa — não com hostilidade, mas com o interesse específico de alguém avaliando se você merece o que está lendo. Ocasionalmente aparece pessoalmente para observar o portador em combate sem se identificar. Se o portador lutar de forma que Ares considera indigna do grimório — covarde, desonesta em excesso ou cruel sem propósito — o texto de uma página aleatória desaparece permanentemente. Se o portador lutar de forma que Ares considera exemplar, uma nota marginal nova aparece no grimório com um comentário de Ares. Os portadores que colecionaram mais notas marginais são tratados com respeito involuntário por guerreiros que reconhecem a caligrafia.
        </p>
    </div>
    <div class="cosmos-card p-6 mb-6">
        <h3 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem;">📜PRETONOMICON</h3>
        <p style="font-size:0.95rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            <strong style="color:var(--gold-light);">Tipo:</strong> Artefato Épico — Grimório Maldito
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Antes da Ilha do Sol Vermelho ser o território de guerreiros resistentes que é hoje, ela foi dominada por uma facção conhecida apenas como os Preteiros — homens de cosmo corrompido que desenvolveram uma filosofia simples e devastadora: o mal não é um desvio da natureza humana. É a expressão mais honesta dela.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Os Preteiros foram destruídos de dentro para fora quando o próprio cosmo que cultivavam os consumiu completamente. A ilha os esqueceu. O vulcão de petróleo guardou o que sobrou. O Pretonomicon é esse resto — um grimório encadernado em material que não é couro nem metal nem pedra, escrito em tinta que absorve luz em vez de refletir.
        </p>
        <strong style="color:var(--gold-light);">Leitura do Pretonomicon:</strong>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Abrir o grimório exige Vontade CD 20. Falhar significa que o grimório se fecha e não pode ser reaberto pelo mesmo portador por 30 dias.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            A leitura completa leva 14 dias. Durante esse período o portador faz Fortitude CD 20 por dia. Acumular 3 falhas antes de completar a leitura significa morte instantânea — o cosmo do grimório rejeita e consome o portador de dentro para fora.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Portadores de alinhamento bom e pessoas de pele branca têm desvantagem em todos os testes diários de leitura. O grimório foi escrito pelos Preteiros, aqueles que foram os primeiros pretos. Se a pessoa tiver desvantagem, o teste de fortitude passa a ser 30.
        </p>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem;">
            Ao completar a leitura o portador torna-se Maligno permanentemente e irreversivelmente — independentemente do alinhamento anterior. Isso não pode ser desfeito por nenhuma magia, ritual ou intervenção divina conhecida. O portador não sente que perdeu algo. Sente que finalmente entendeu algo. Se a pessoa que completou a leitura era branca, o grimório a torna de pele negra. A partir deste momento ela se torna um ser negro.
        </p>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Habilidades Permanentes</h4>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; list-style-type: none; padding-left: 0;">
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Corpo dos Preteiros:</strong> +4 permanente em Força e +4 permanente em Constituição. Alterações físicas reais e irreversíveis — não contam como bônus mágico para acumulação.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Resistência Corrompida:</strong> Redução de Dano 5/bem. O portador reduz em 5 pontos todo dano causado por fontes de alinhamento bom — cavaleiros de Atena, magias sagradas e intervenções divinas olímpicas.
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Técnicas dos Preteiros</strong>: O portador aprende permanentemente três técnicas de cosmo corrompido que não existem em nenhum outro lugar do mundo. O mestre define as técnicas baseado no estilo de combate do personagem.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Visão Corrompida:</strong> Passivo. Visão no escuro total. Detecta automaticamente alinhamento de criaturas em raio de 10m. Não pode ser surpreendido por criaturas malignas.</li>
            <li style="margin-bottom:0.75rem; border-left: 2px solid rgba(255,255,255,0.1); padding-left: 0.75rem;"><strong style="color:var(--gold-light);">Toque da Corrupção:</strong> Uma vez por dia como ação padrão. O portador toca uma criatura — ataque de toque contra CA do alvo. Se acertar: o alvo faz Vontade CD 23. Se falhar: inicia processo de corrupção. A cada amanhecer seguinte o alvo repete o teste. Após 3 falhas acumuladas a corrupção é completa — o alvo torna-se Maligno permanentemente e sua cor de pele muda para um tom escuro que marca visivelmente o corrompido para quem souber o que significa. Criaturas já malignas são imunes.</li>
        </ul>
        <h4 style="color:var(--gold-light); font-size:1rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Custo de Carregar</h4>
        <p style="font-size:1rem; line-height:1.6; color:var(--silver);">
            O grimório permanece com o portador após a leitura como objeto físico — outros que tentarem lê-lo passam pelo mesmo processo. O portador começa a receber memórias dos Preteiros durante o sono — não pesadelos, mas recordações de uma civilização que o portador não viveu mas que começa a sentir como própria. Após 60 dias o portador fala a língua dos Preteiros fluentemente. Nenhum portador documentado registrou o que acontece depois dos 60 dias.       
        </p>
    </div>
</div>
`;