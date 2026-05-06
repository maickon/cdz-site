const TALENTS = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Talentos Especiais</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="page-search mb-4"></div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); font-style:italic; text-align:center;">
        Estes são talentos novos e exclusivos para o RPG Greco Romano.
      </p>
    </div>

    <div class="cosmos-card p-6">
      
      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ELEVAÇÃO CÓSMICA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Manipular cosmo 5 graduações.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O cavaleiro está com seu cosmo base em +3 pts, normalmente antes de se iniciar um combate o cavaleiro começa com seu cosmo pela metade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ELEVAÇÃO CÓSMICA APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Manipular cosmo 10 graduações e elevação cósmica.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O cavaleiro está com seu cosmo base em +6 pts ao invés de +3. Este talento substitui a sua versão anterior. Normalmente antes de se iniciar um combate o cavaleiro começa com seu cosmo pela metade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COSMO ADICIONAL [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Ter cosmo 20 ou maior e 5 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Adicione um bônus inerente de +2 ao seu cosmo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Especial:</strong> Este talento pode ser adquirido várias vezes, e a cada vez que for adquirido some +2 a sua reserva de cosmo geral.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALISTA TÉCNICO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O cavaleiro se especializa em uma técnica especial de tal forma que sua familiaridade chega a reduzir seu custo.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Uma técnica escolhida.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> -2 no custo de cosmo da técnica escolhida. Este talento pode ser escolhido diversas vezes seus efeitos se acumulam somente para a técnica escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE FERRO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 12 e Ataque desarmado aprimorado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d4 ao seu dano desarmado.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE BRONZE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 14, Punhos de ferro.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d6 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE PRATA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 16, Punhos de bronze, BBA +5.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d8 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE OURO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 18, Punhos de prata, BBA +10.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d10 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE DIAMANTE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 20, Punhos de ouro, BBA+15.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d12 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE ADAMANTE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 22, Punhos de diamante, BBA+20.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d20 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE PLATINA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 22, Punhos de adamante.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d20+10 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS DE TITÃ [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Força 22, Punhos de platina.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Adicione 1d20+20 ao seu dano desarmado. Este dado substitui o dado de dano desarmado anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PROTEÇÃO DO DEUS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +2 na CA permanentemente, este bônus não cai sob nenhuma condição normal, exceto a vontade do próprio deus.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PROTEGIDO DOS DEUSES [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Alguém olha por você, pois lhe acha especial.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +1 nos testes de resistência.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">GRAÇA DA SORTE [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Carisma 14 ou maior.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando você tirar 1 no dado, terá uma nova chance de rolagem.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">GRAÇA DA SORTE APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Carisma 16 ou maior e graça da sorte.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Você ganha uma chance adicional podendo repetir até duas rolagens de falha naturais consecutivas, no caso um 1 no dado. Este talento substitui o anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">GRAÇA DA SORTE MAIOR [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Carisma 20 ou maior e Graça da sorte aprimorada.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Não existe falha crítica para você, quando tirar 1 no dado, você soma ao seu bônus normalmente como se estivesse tirando 2 ou mais. Rolagem de dados fracassadas terão até três chances adicionais. Este talento substitui o anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DURO DE MATAR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">Você já deveria estar morto. O corpo não responde, a visão escurece, a vida escapa… mas o Cosmo dentro de você não aceita o fim. Guiado pela lembrança de sua causa, pelos gritos de quem você deve proteger ou pela misericórdia dos deuses, você queima o que resta de sua essência e volta a lutar.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Tolerância, Explosão cósmica aprimorada.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.5rem; font-style:italic;"><strong>Uso:</strong> Apenas 1 vez por combate e um número máximo de vezes por dia igual ao modificador de Carisma (mínimo 1).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Quando o personagem chegar a 0 pontos de vida ou menos, em vez de cair imediatamente, ele pode invocar seu Cosmo como ação livre, mesmo inconsciente. Faça um teste de Vontade (CD Igual ao dano excedente que o levou abaixo de 0).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Se for bem-sucedido:</strong></p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-bottom:0.5rem;">
          <li>O personagem se levanta imediatamente, mesmo que estivesse inconsciente.</li>
          <li>Recupera pontos de vida iguais a metade de seu nível + seu modificador de Carisma (mínimo 1).</li>
          <li>Entra em estado de Cosmo Ardente com a cosmo energia no máximo até o fim do próximo turno, recebendo +2 em jogadas de ataque e testes de resistência.</li>
        </ul>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Após o fim desse turno heroico, o personagem sofre exaustão cósmica:</strong></p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle;">
          <li>Sofre –2 em testes de ataque, resistência e perícias, não pode usar novamente este talento até o término do combate.</li>
          <li>Se cair abaixo de 0 pontos de vida novamente no mesmo combate, não pode fazer novo teste: cai imediatamente.</li>
        </ul>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CONHECIMENTO CÓSMICO APRENDIZ [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você treinou e conhece bem a fundo os segredos e poderes da cosmo energia.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 10 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +3 de bônus na perícia Manipular cosmo.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CONHECIMENTO CÓSMICO INTERMEDIÁRIO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você treinou muito e conhece bem a fundo os segredos e poderes da cosmo energia tendo facilidade de manipulá-la com melhores performances.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +5 de bônus na perícia Manipular cosmo. Este bônus substitui o bônus anterior oferecido pelo talento conhecimento cósmico aprendiz.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CONHECIMENTO CÓSMICO MESTRE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você treinou ao nível máximo e se tornou mestre, sabe exatamente como manipular esta energia para se curar ou causar dano e destruir objetos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +7 de bônus na perícia Manipular cosmo. Este bônus substitui o bônus anterior oferecido pelo talento conhecimento cósmico intermediário.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EXPLOSÃO CÓSMICA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 10 graduações em Manipular cosmo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Com um teste bem sucedido de vontade (CD = seu cosmo total), lhe permite queimar o seu cosmo ao máximo. Desta forma seu cosmo estará no máximo e sofrerá uma redução de 3 pontos de cosmo por rodada.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Observação:</strong> Após ser bem-sucedido usando este talento, seu cosmo só diminuirá até chegar a 0. Quando ele chegar a zero, seu cosmo voltará a aumentar normalmente durante um combate.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EXPLOSÃO CÓSMICA APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 15 graduações em Manipular cosmo e explosão cósmica.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> A CD é reduzida pela metade, ou seja, metade do seu cosmo total. Quando o seu cosmo chegar ao máximo através desta explosão, ele sofrerá redução de 3 pontos de cosmo por rodada até que alcance ¼ de seu total de cosmo. Este talento pode ser usado quantas vezes o cavaleiro desejar porém, a cada explosão a CD é aumentada em 10. Explodir o cosmo é uma ação livre e não consome ataques de oportunidades.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid #ff4500; background:rgba(255,69,0,0.02); padding-left: 1rem; margin-bottom: 1.5rem; padding-top: 0.5rem; padding-bottom: 0.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EXCLAMATION! [Geral/Especial]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem; font-style:italic;">Você é capaz de sintonizar sua energia vital com outros companheiros de fé para gerar uma explosão de poder proibida, disparada em nome da divindade que vocês servem.</p>
        
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem;"><strong>Pré-requisito:</strong> Nível 12+, Manipular Cosmo 15 graduações, talento "Explosão Cósmica".</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem;"><strong>Condição de Ativação:</strong> É necessário um grupo de no mínimo 3 cavaleiros que possuam este talento, sigam o mesmo Deus e vistam armaduras da mesma categoria (ex: todos de Bronze, todos de Prata ou todos de Ouro).</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem;"><strong>Custo de Ação:</strong> Todos os participantes devem utilizar uma Ação Especial (Tipo: Completa) no mesmo turno. A iniciativa do grupo passa a ser a do cavaleiro mais lento entre os três para que o golpe ocorra simultaneamente.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.75rem;"><strong>Custo de Cosmo:</strong> Cada cavaleiro deve pagar 20 pontos de Cosmo (ou o máximo que possuírem, caso tenham menos que 20, entrando em exaustão cósmica após o golpe).</p>
        
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefícios e Efeito:</strong></p>
        <ol style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; margin-bottom:0.75rem;">
          <li style="margin-bottom:0.25rem;"><strong>Dano de Escala Big Bang:</strong> O dano base é calculado como se fosse uma técnica de RANK 9 (d20 por nível do cavaleiro de maior nível no grupo).</li>
          <li style="margin-bottom:0.25rem;"><strong>Soma de Potencial:</strong> Ao dano final, soma-se a metade da reserva de Cosmo atual de TODOS os participantes combinados (seguindo a regra de bônus de dano passivo).</li>
          <li style="margin-bottom:0.25rem;"><strong>Multiplicador de Hierarquia:</strong> O dano total (Dados + Bônus de Cosmo) é multiplicado pelo Multiplicador de Armadura da categoria que o trio compartilha (Bronze x1, Prata x2, Ouro x3, etc.).</li>
          <li><strong>Impacto Inevitável:</strong> O alvo não tem direito a testes de esquiva ou reflexos (CA de toque), mas pode tentar uma Ação de Contragolpe se também estiver em um grupo de 3 cavaleiros preparando uma Exclamação oposta.</li>
        </ol>
        
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa; font-style:italic;"><strong>Exemplo Narrativo no Estilo:</strong> Se três cavaleiros de ouro que servem ao deus Baco usarem a técnica, ela se chamaria "Exclamação de Baco". O mestre deve descrever não apenas a explosão galáctica, mas possivelmente um rastro de vinho estelar que pulveriza os átomos do inimigo.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM TÉCNICA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Aumenta a CD de sua técnica escolhida em +2.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM TÉCNICA APRIMORADA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Foco em técnica.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Substituindo o talento anterior (foco em técnica), este concede um bônus de +4 na sua CD para a técnica escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SEXTO SENTIDO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 3° nível de cavaleiro, Sabedoria 12.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;">Desperta a percepção extrassensorial, permitindo ao cavaleiro sentir o fluxo do Cosmo, prever movimentos inimigos através da intuição e manipular a energia em nível atômico.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> +2 nos testes de resistência e CD (classe de dificuldade das técnicas), +2 na CA (deflexão), +2 no bônus de ataque, coloca carisma na CA e nos testes de resistência (como bônus de sorte), sua recarga de cosmo aumenta em +1 por rodada.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Especial:</strong> Permite que um cavaleiro continue lutando mesmo após perder a visão, audição ou outros sentidos físicos, guiando-se apenas pela percepção da energia do oponente.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SÉTIMO SENTIDO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 12° nível de cavaleiro, Sabedoria 14.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;">Representa o domínio absoluto sobre o Cosmo, permitindo ao cavaleiro alcançar a velocidade da luz e lutar em perfeita harmonia com o universo, transcendendo os limites humanos e as leis da física.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +3 em Ataques, CA, CD de Técnicas e Testes de Resistência. Soma Inteligência na Iniciativa e recebe +3 de Recuperação de Cosmo por rodada e seu deslocamento é dobrado e o cavaleiro não sofre mais ataques de oportunidade.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Superação:</strong> Como uma ação padrão, você pode gastar pontos de Cosmo para recuperar sua vida. Para cada 1 ponto de Cosmo gasto, você cura uma quantidade de PV igual ao seu Modificador de Carisma (mínimo 1). Você pode converter até o seu Nível de Cavaleiro em pontos de Cosmo por vez durante um combate. Além disso, você percebe criaturas no Plano Astral.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);">Para efeitos visuais, em vez de correr, o Cavaleiro pode se "teletransportar" (mecanicamente) para qualquer lugar do campo de batalha dentro do alcance dele, sem provocar ataques de oportunidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">OITAVO SENTIDO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> 17° nível de cavaleiro, Sabedoria 16.</p>
        <p style="font-size:1rem; margin-bottom:10px; margin-bottom:10px; line-height:1.6; color:var(--silver);">O cavaleiro desperta a oitava consciência (ARAYASHIKI), transcendendo a dualidade entre vida e morte. Ele se torna capaz de transitar pelo submundo mantendo sua consciência e autonomia total.</p>
        <p style="font-size:1rem; margin-bottom:10px; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +4 em Ataques, CA, CD e Resistências. Sua taxa de recuperação de Cosmo por rodada é dobrada. Seus ataques causam dano pleno em Deuses e entidades transcendentais, ignorando imunidades divinas. Ele tem imunidade a Cegueira, Surdez e Atordoado. Percebe o ambiente pela alma. Pode gastar uma ação de movimento para transitar entre planos que conhece ou já visitou e ignora Invisibilidade ou Camuflagem inimiga. Se reduzido a 0 PV, pode realizar um teste de Sabedoria (CD 20) para continuar agindo por 1 rodada por ponto de bônus de Sabedoria.</p>
        <p style="font-size:1rem; margin-bottom:10px; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Transcendência:</strong> Imunidade a efeitos de morte instantânea e habilidades que afetem a alma. Pode entrar e sair de planos espirituais livremente.</p>
        <p style="font-size:1rem; margin-bottom:10px; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Imortalidade Funcional:</strong> O cavaleiro não sofre mais penalidades por envelhecimento, é imune a doenças mundanas, venenos e não precisa mais respirar, comer ou dormir para sobreviver, embora ainda possa fazê-lo se desejar.</p>
        <p style="font-size:1rem; margin-bottom:10px; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Morte Física:</strong> Se reduzido a 0 PV ou menos por meios convencionais, seu corpo físico é destruído, mas você não morre. Você "desperta" imediatamente no Plano Espiritual (Meikai) com todos os seus recursos, Cosmo e Armadura intactos para continuar a luta lá </p>
        <p style="font-size:1rem; margin-bottom:10px; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Morte Definitiva:</strong> O personagem só tem um fim explicado (morte permanente) se sua vontade for quebrada, se for derrotado novamente enquanto já estiver no Plano Espiritual, ou se sofrer danos catastróficos causados por Poderes ou Armas Divinas, que têm a capacidade de aniquilar a alma.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">INICIATIVA DE CAVALEIRO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Destreza 13 ou maior.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Você ganha +3 em suas jogadas de iniciativa. Este talento é acumulativo com iniciativa aprimorada.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">APTIDÃO PARA CAVALEIRO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é habilidoso com tarefas relacionadas à execução de suas técnicas.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de concentração para executar suas técnicas.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE EM TODOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">A velocidade do personagem é tão grande que ele é capaz de golpear os oponentes que estão dentro de seu alcance (deslocamento) usando incríveis golpes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 16, Int 13, Acrobacia 9 graduações, Especialização em Combate, Esquiva, Mobilidade, bônus base de ataque +12.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Complementando a manobra de ação [Ação de Ataque Geral]. Quando seu personagem usar esta ação combinado com este talento, ele poderá desferir um número de ataques adicionais em cada oponente equivalento ao seu modificador de destreza usando o seu pior bônus. O personagem não pode percorrer mais do que o seu deslocamento padrão. Além disso ele não sofre ataques de oportunidade ao sair da área ameaçada de um oponente para atacar outro oponente. O bônus adicional de ataques concedido pela destreza é somado a quantidade de ataques que o personagem é capaz de fazer no turno. Então se ele consegue realizar 2 ataque e tem +3 de modificador de destreza, ele consegue realizar até 5 ataque neste turno usando esta manobra. <br> OBSERVAÇÃO: Quando utiliza um Ataque em todos, o personagem perde qualquer bônus ou ataques adicionais concedidos por outros talentos ou habilidades (como o talento Trespassar ou a técnicas de velocidade).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE EM TODOS APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Os seus golpes agora são tão precisos que você praticamente nunca erra.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 20, Int 14, Ataque em todos.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem utilizar este talento, todos os seus ataque terão o melhor bônus. Este bônus é fixo e nunca cairá. Além disso ele não é mais limitado pelo seu deslocamento, podendo realizar ataques a qualquer oponente que esteja dentro de seu raio de visão dentro do campo de batalha.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESTENDER TÉCNICA [Efeito]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode executar técnicas mais duradouras.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Uma técnica estendida tem o dobro da duração normal. As técnicas com duração “Concentração”, “Instantânea” ou “Permanente” não são afetadas por este talento. Uma técnica estendida ocupa o lugar de uma técnica de um nível superior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">POTENCIALIZAR INVOCAÇÃO [Efeito]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">As criaturas invocadas pelo conjurador são mais poderosas que o normal.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Uma técnica escolhida com habilidade de invocar criaturas.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> As criaturas conjuradas pelo seu personagem através da sua técnica escolhida recebem +4 de bônus de aprimoramento em Força e Constituição enquanto a técnica permanecer ativa.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">MAXIMIZAR TÉCNICA [Efeito]</h3>

        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">
          O cavaleiro é capaz de liberar sua técnica em sua forma mais poderosa possível.
        </p>

        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;">
          <strong>Pré-requisito:</strong> Técnica que utilize rolagens de dados.
        </p>

        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          <strong>Benefício:</strong> Ao utilizar este talento em uma técnica baseada em rolagem de dados, todas as rolagens são consideradas como 
          <strong>resultado máximo</strong>. Uma técnica maximizada passa a custar <strong>o dobro do custo total de Cosmo</strong>.
        </p>

        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);">
          Este aumento de custo pode <strong>acumular</strong> com outros talentos ou efeitos que também aumentem o custo de Cosmo. 
          O cálculo sempre é feito a partir do <strong>custo base da técnica</strong>, aplicando cada modificador de custo de forma 
          <strong>sequencial e cumulativa</strong> até chegar ao custo final de Cosmo.
        </p>
      </div>


      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">POTENCIALIZAR TÉCNICA [Efeito]</h3>

        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">
          O cavaleiro canaliza uma quantidade muito maior de Cosmo em sua técnica, ampliando drasticamente o poder do ataque.
        </p>

        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;">
          <strong>Pré-requisito:</strong> Técnica que cause dano.
        </p>

        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">
          <strong>Benefício:</strong> O <strong>dano total da técnica é dobrado</strong>. Porém, o <strong>custo total de Cosmo</strong> para utilizar 
          essa técnica também é <strong>dobrado</strong>.
        </p>

        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);">
          Caso esta técnica seja utilizada em conjunto com outros talentos ou efeitos que aumentem o custo de Cosmo (como 
          <strong>Maximizar Técnica</strong>), os aumentos de custo são <strong>acumulativos</strong>. 
          Primeiro calcula-se o <strong>custo base da técnica</strong> e, em seguida, cada modificador de custo é aplicado 
          de forma <strong>sequencial</strong> até determinar o custo final de Cosmo.
        </p>
      </div>

      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.2rem; letter-spacing:0.1em; border-bottom: 1px solid rgba(255,215,0,0.3); padding-bottom: 0.5rem; margin-top: 2.5rem; margin-bottom:1.5rem;">
        Talentos Modificados <span style="font-size:0.85rem; color:#aaa; text-transform:none; letter-spacing:normal;">(Ajustados para cavaleiros)</span>
      </h2>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">EVASÃO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Reflexos base 3.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O cavaleiro é capaz de evitar ataques de técnicas incomuns por meio de sua agilidade extraordinária. Sempre que o cavaleiro se tornar alvo de um ataque que permita um teste de resistência de Reflexos para reduzir o dano à metade ele não sofrerá nenhum dano se obtiver sucesso no teste de resistência. Um cavaleiro indefeso (inconsciente, paralisado ou imobilizado) não recebe os benefícios dessa habilidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM ARMA [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> BBA 1 ou maior.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +1 nas jogadas de ataque com a arma escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM ARMA APRIMORADO [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> BBA 6 ou maior e foco em arma.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +2 nas jogadas de ataque com a arma escolhida. Este talento substitui o foco anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FOCO EM ARMA MAIOR [Geral]</h3>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> BBA 12 ou maior e foco em arma aprimorado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> +3 nas jogadas de ataque com a arma escolhida e mais 1 no dano. Este talento substitui o foco anterior.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ACUIDADE COM ARMA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é especialmente habilidoso para utilizar armas que se beneficiam mais da Destreza do que da Força.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Bônus base de ataque +1.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem estiver usando uma arma leve, um sabre, chicote ou corrente com cravos apropriados para uma criatura do seu tamanho, ele pode considerar o modificador de Destreza no lugar do modificador de Força nas jogadas de ataque corporal. A penalidade de armadura do escudo do personagem (se houver) também se aplica nesta jogada de ataque. As armas naturais sempre são consideradas armas leves.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">AFINIDADE COM ANIMAIS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem se relaciona bem com animais.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Adestrar Animais e Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">AGARRAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para agarrar seus oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 13, Ataque Desarmado Aprimorado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem não provoca um ataque de oportunidade quando realiza o ataque de toque inicial da manobra Agarrar. Ele também recebe +4 de bônus em todos os testes de Agarrar, não importa quem iniciou a manobra.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, o personagem provocaria um ataque de oportunidade ao realizar o ataque de toque inicial da manobra Agarrar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ÁGIL [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é particularmente flexível e esguio.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Equilíbrio e Arte da Fuga.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">APANHAR OBJETOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem consegue apanhar projéteis atirados contra ele em pleno ar, como flechas, virotes, lanças e outros projéteis e armas de arremesso.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 15, Desviar Objetos, Ataque Desarmado Aprimorado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando usar o talento Desviar Objetos, o personagem será capaz de apanhar a arma (ou projétil) em vez de apenas desviá-la. As armas de arremesso, como lanças e machados, podem ser imediatamente arremessadas contra o atacante original (mesmo que não seja o turno do personagem) ou mantidas para utilização posterior.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><em>É necessário ter, pelo menos, uma mão livre (sem segurar nada) para usar esse talento.</em></p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE ATORDOANTE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe atingir oponentes em áreas vulneráveis.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Sab 16, Ataque Desarmado Aprimorado, bônus base de ataque +8.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> O jogador precisa declarar que seu personagem está usando esse talento antes de realizar a jogada de ataque (logo, um fracasso na jogada desperdiçará a tentativa). Um oponente atingido por um ataque desarmado atordoante deve realizar um teste de resistência de Fortitude (CD 10 + metade do nível do atacante + modificador de Sab), além de sofrer o dano normalmente. Caso fracasse, o alvo ficará atordoado durante 1 rodada completa (até o final da próxima ação do personagem).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);">Um personagem atordoado não consegue agir, perde qualquer bônus de Destreza na CA e sofre -2 de penalidade na CA. É possível desferir um ataque atordoante uma vez por dia a cada quatro níveis de personagem, mas somente uma vez por rodada. Os constructos, limos, plantas, mortos-vivos, criaturas incorpóreas e criaturas imunes a sucessos decisivos não podem ser atordoadas.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE DESARMADO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para combater desarmado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Considera-se que seu personagem está armado mesmo quando ele está desarmado – ou seja, os oponentes armados não podem realizar ataques de oportunidade quando ele atacar com as mãos vazias. Entretanto, seu personagem ainda poderá desferir um ataque de oportunidade quando alguém desarmado tentar atacá-lo. Além disso, o personagem é capaz de causar dano letal ou dano por contusão usando seus ataques desarmados.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, os personagens que usam ataques desarmados sofrem todas as penalidades padrão (incluindo ataques de oportunidade) e causa apenas dano por contusão.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE PODEROSO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de realizar ataques corporais excepcionalmente poderosos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 16.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Durante a ação de seu personagem, mas antes de realizar as jogadas de ataque, é possível subtrair um valor específico de cada jogada de ataque e adicioná-lo a suas jogadas de dano. Esse valor não pode exceder seu bônus base de ataque. As alterações no ataque e no dano continuam válidas até seu próximo turno, inclusive para ataques de oportunidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE PODEROSO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem aprende a concentrar ainda mais força bruta em seus golpes, ultrapassando seus limites anteriores.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 18, Ataque Poderoso, bônus base de ataque +6.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando usar Ataque Poderoso, para cada –1 aplicado na jogada de ataque, o personagem recebe +3 de dano se estiver usando uma arma de duas mãos, +2 de dano com arma de uma mão ou arma leve. O valor máximo que pode ser subtraído das jogadas de ataque agora é seu bônus base de ataque +2.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATAQUE PODEROSO SUPREMO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem atinge um nível brutal de domínio sobre sua força, sacrificando completamente a precisão por carnificina absoluta.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 20, Ataque Poderoso Aprimorado, bônus base de ataque +11.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando usar Ataque Poderoso, para cada –1 aplicado na jogada de ataque, o personagem recebe +4 de dano com arma de duas mãos, +3 de dano com arma de uma mão ou arma leve. Agora o valor máximo que pode ser subtraído das jogadas de ataque é seu bônus base de ataque +4.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATLÉTICO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem talento para façanhas atléticas.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Escalar e Natação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ATROPELAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para derrubar seus oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 18, Ataque Poderoso.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando seu personagem realizar uma tentativa de Atropelar um adversário, a vítima será incapaz de evitar o atacante. Ele também receberá +4 de bônus no teste de Força para derrubar esse oponente.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem este talento, a vítima da manobra Atropelar pode escolher evitar ou bloquear o atacante.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">AUTOSSUFICIENTE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode tomar conta de si mesmo durante situações difíceis e em ambientes áridos.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Cura e Sobrevivência.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">BLOQUEIO AMBIDESTRO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Seu estilo de combate com duas armas privilegia a defesa e o ataque.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 15, Combater com Duas Armas.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Enquanto estiver brandindo uma arma dupla ou combatendo com duas armas (exceto armas naturais e ataques desarmados), seu personagem recebe +1 de bônus de escudo na CA. Quando estiver combatendo defensivamente ou usando a ação de defesa total, esse bônus de escudo aumenta para +2.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COMBATER COM DUAS ARMAS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode combater com uma arma em cada mão; ele é capaz de desferir um ataque adicional por rodada com a segunda arma.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 15.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> As penalidades para combater com duas armas são reduzidas. A penalidade da mão hábil diminui em 2 pontos e da mão inábil diminui em 6 pontos.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Veja Combater com Duas Armas e a Tabela 8-10: Penalidades para Combate com Duas Armas [livro do jogador].</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COMBATER COM DUAS ARMAS APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é um especialista em combate com duas armas.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 17, Combater com Duas Armas, bônus base de ataque +6.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Além do ataque adicional realizado em função da segunda arma na mão inábil, o personagem recebe um segundo ataque com a mesma arma, mas sofre -5 de penalidade (veja a Tabela 8-10 [livro do jogador]).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, o personagem realiza apenas um ataque adicional com a arma da mão inábil.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">COMBATER COM DUAS ARMAS MAIOR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é um mestre no combate com duas armas.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 19, Combater com Duas Armas Aprimorado, Combater com Duas Armas, bônus base de ataque +11.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem é capaz de realizar um terceiro ataque com a mão inábil, mas sofre -10 de penalidade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">CORRIDA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é mais rápido que o normal.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando estiver correndo, seu personagem percorre cinco vezes seu deslocamento normal.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Um personagem percorre quatro vezes seu deslocamento.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DEDOS LÉPIDOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem facilidade em manipular objetos pequenos e delicados.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Operar Mecanismo e Abrir Fechaduras.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DESARME APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como desarmar oponentes em combate corporal.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 13, Especialização em Combate.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem não provoca um ataque de oportunidade quando tenta desarmar um oponente e este adversário também não conseguiu desarmá-lo caso fracasse. O personagem recebe +4 de bônus no teste de ataque resistido para desarmar o alvo.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Consulte as regras normais para desarme.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DESVIAR OBJETOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode desviar flechas, virotes de besta, lanças ou outras armas de disparo ou arremesso.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Ataque Desarmado Aprimorado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> É necessário que o personagem tenha pelo menos uma mão livre (sem segurar nada) para usar esse talento. Uma vez por rodada, quando o personagem normalmente seria atingido por uma arma de ataque à distância, ele será capaz de desviá-la sem sofrer qualquer dano. Ele precisa estar ciente do ataque e não pode estar surpreso. Desviar um objeto não é considerado uma ação. É impossível defletir as armas de ataque à distância incomuns (como as rochas arremessadas pelos gigantes ou os ataques gerados por técnicas).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">DILIGENTE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Sua perspicácia é capaz de encontrar detalhes que escapam aos demais.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Avaliação e Decifrar Escrita.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS TITÂNICOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você canaliza força bruta de modo tão intenso que seus golpes desarmados se tornam equivalentes ao impacto de uma arma de duas mãos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 24, Ataque Desarmado Aprimorado, bônus base de ataque +4.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seus ataques desarmados passam a ser tratados como arma pesada de duas mãos para todos os efeitos que dependam do tipo de empunhadura da arma, incluindo talentos, manobras marciais e multiplicadores de dano baseados em força.</p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-bottom:0.5rem;">
          <li>Você aplica 1,5x seu modificador de Força ao dano dos seus ataques desarmados.</li>
          <li>Se usar talentos como Ataque Poderoso, usa o valor para arma de duas mãos.</li>
          <li>Seu ataque desarmado é tratado como arma de duas mãos para empurrar, quebrar objetos, golpes de aríete, e demais situações definidas pelo mestre.</li>
        </ul>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;">Não é possível usar seus “punhos titânicos” com um escudo ou qualquer objeto segurado na outra mão que exija ações de ataque, pois exige postura corporal total e foco na força bruta.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Ataques desarmados não são tratados como arma de duas mãos.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PUNHOS TITÂNICOS APRIMORADOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você ultrapassa o limite físico do impacto corporal, tornando seus ataques desarmados equivalentes a verdadeiras armas de destruição bruta. O corpo range, as juntas imploram misericórdia, e ainda assim você avança.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 28, Punhos Titânicos, Ataque Desarmado Aprimorado, bônus base de ataque +9.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seus ataques desarmados continuam sendo tratados como arma pesada de duas mãos, mas agora seus golpes provocam impacto extremo, permitindo multiplicadores de força ainda maiores e efeitos brutais. Você recebe:</p>
        <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:circle; margin-bottom:0.5rem;">
          <li><strong>Multiplicador de Força aumentado:</strong> Você passa a aplicar 2x seu modificador de Força ao dano dos ataques desarmados.</li>
          <li><strong>Sinergia com Ataque Poderoso:</strong> Quando usar Ataque Poderoso (ou equivalente), utilize o valor de dano para arma de duas mãos, mas acrescente +1 de dano adicional por ponto de ataque sacrificado. <em>(Exemplo: se normalmente dá +3 por –1; você passa a dar +4 por –1)</em>.</li>
          <li><strong>Impacto Brutal:</strong> Ao acertar um crítico com ataque desarmado, a criatura atingida deve ser bem-sucedida em um teste de Fortitude (CD = 10 + 1/2 do seu nível + seu mod. de Força) ou fica atordoada por 1 rodada.</li>
        </ul>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ENCONTRÃO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como forçar seus oponentes a recuar.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 14 e Ataque Poderoso.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem usar a manobra Encontrão, ele não provocará um ataque de oportunidade do defensor. Ele também recebe +4 de bônus no teste resistido de Força para empurrar o alvo.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALIZAÇÃO EM ARMA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma em que o personagem já tenha o talento Foco em Arma. É possível selecionar ataque desarmado ou a manobra Agarrar para a aplicação desse talento. O personagem causa dano adicional com a arma escolhida.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar a Arma escolhida, Foco em Arma, 4° nível de guerreiro.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> O personagem recebe +2 de bônus no dano causado usando a arma escolhida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Seus efeitos não são cumulativos. Sempre que escolher esse talento, ele se aplica a uma arma diferente.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALIZAÇÃO EM ARMA MAIOR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma em que o personagem já tenha o talento Especialização em Arma. É possível selecionar ataque desarmado ou a manobra Agarrar para a aplicação desse talento. O personagem causa dano excepcional com a arma escolhida.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar a Arma escolhida, Foco em Arma Maior, Foco em Arma, Especialização em Arma, 12° nível.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> O personagem recebe +2 de bônus no dano causado usando a arma escolhida. Este bônus se acumula com quaisquer outros bônus de dano, incluindo o dano adicional de Especialização em Arma.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Seus efeitos são cumulativos. Sempre que escolher esse talento, ele se aplica a arma escolhida.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESPECIALIZAÇÃO EM COMBATE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para utilizar sua perícia em combate na defesa e no ataque com a mesma eficiência.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 13.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando seu personagem utilizar a ação de ataque ou ataque total num combate corporal, será capaz de designar entre -1 e -5 de penalidade nas jogadas de ataque e acrescentar o valor inverso como um bônus de esquiva na Classe de Armadura (limitado a +5). Esse valor não pode exceder seu bônus base de ataque. As alterações nas jogadas de ataque continuam válidas até seu próximo turno, inclusive para ataques de oportunidade.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Um personagem sem este talento é capaz de lutar defensivamente quando utiliza a ação de ataque ou ataque total, sofrendo -4 de penalidade em suas jogadas de ataque e recebendo +2 de bônus de esquiva na CA.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESQUIVA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é muito hábil para se esquivar de golpes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Durante sua ação, o personagem seleciona um oponente, recebendo +2 de bônus de esquiva na Classe de Armadura contra os ataques provenientes dele. É possível escolher um adversário diferente a cada rodada. Qualquer condição que faça o personagem perder seu bônus de Destreza na Classe de Armadura (se houver) também eliminará os bônus de esquiva.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESQUIVA APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem desenvolveu sua esquiva para se esquivar de golpes de vários oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 16 e Esquiva.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O bônus de esquiva passa a ser +3. E quando utilizar a esquiva, o personagem poderá escolher uma quantidade de alvos igual ao seu modificador de destreza para se beneficiar deste talento.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">ESQUIVA SUPREMA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem desenvolveu sua esquiva no nível da perfeição.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 21 e Esquiva Aprimorada.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> O bônus de esquiva passa a ser +4. A quantidade máxima de alvos da esquiva continua sendo o seu modificador de destreza. Além disso, quando utilizar da manobra "Esquivar do Golpe" em combate, você não recebe mais a penalidade de -6 na CA. </p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FINTAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como distrair a atenção dos seus adversários em combate.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 13, Especialização em Combate.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem pode realizar o teste de Blefar para fintar em combate usando uma ação de movimento.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FORTITUDE MAIOR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é mais resistente que o normal.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de resistência de Fortitude.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">FRAUDULENTO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como encobrir a verdade.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Disfarces e Falsificação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">IMOBILIZAÇÃO APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para mobilizar seus oponentes com segurança e ainda realizar um ataque.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Int 14, Especialização em Combate.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Enquanto estiver desarmado, seu personagem não provoca um ataque de oportunidade para imobilizar um adversário. Ele também recebe +4 de bônus nos seus testes resistidos de Força para a manobra imobilização. Quando o personagem imobilizar um adversário num combate corporal, ele poderá deferir imediatamente um ataque contra esse oponente, como se não tivesse usado seu ataque para iniciar a manobra.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Quando está desarmado, o personagem provoca um ataque de oportunidade caso queira mobilizar um adversário.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">INICIATIVA APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode reagir mais rapidamente que o normal numa luta.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +4 de bônus nos testes de Iniciativa.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">INVESTIGADOR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como descobrir informações.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Obter Informação e Procurar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">LUTAR ÀS CEGAS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado em combate corporal, mesmo sem enxergar seus oponentes.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Em qualquer combate corporal, sempre que seu personagem não atingir um adversário devido à camuflagem, ele poderá realizar novamente a jogada de porcentagem. Um atacante invisível não recebe nenhum bônus para atingir seu personagem em um combate corporal (logo, você não perde seu bônus de Destreza na CA e o atacante não recebe +2 de bônus em função da invisibilidade). No entanto, os bônus da criatura invisível ainda se aplicam para ataques à distância.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);">Quando o personagem não conseguir enxergar, sofrerá apenas metade da penalidade no deslocamento. Geralmente, a escuridão e a baixa visibilidade reduzem o deslocamento para três quartos do normal, em vez de metade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">MOBILIDADE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para se esquivar entre os oponentes e evitar golpes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Esquiva.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +4 de bônus de esquiva na Classe de Armadura contra os ataques de oportunidade provocados quando ele entra ou sai de uma área ameaçada. Qualquer condição que faça o personagem perder seu bônus de Destreza na Classe de Armadura (se houver) também eliminará os bônus de esquiva.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">NEGOCIADOR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como influenciar as atitudes alheias.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Diplomacia e Sentir Motivação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PERSUASIVO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe como usar as palavras e a linguagem corporal.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Blefar e Intimidação.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">PRONTIDÃO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem sentidos aguçados.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Ouvir e Observar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">REFLEXOS DE COMBATE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de reagir rápida e repetidamente contra os oponentes que baixam a própria guarda.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando os oponentes se descuidam e baixam a guarda, o personagem poderá realizar uma quantidade de ataques de oportunidade equivalente ao seu modificador de Destreza. <em>(Ex: Um personagem com Destreza 15 teria um total de 3 ataques de oportunidade na mesma rodada)</em>. No entanto, somente é possível executar um ataque de oportunidade em cada situação capaz de provocá-los. Com esse talento, ele conseguirá realizar ataques de oportunidade mesmo quando estiver surpreso.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, um personagem somente consegue realizar um ataque de oportunidade a cada rodada e não será capaz de desferi-los enquanto estiver surpreso.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">REFLEXOS RÁPIDOS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem tem reflexos mais rápidos que o normal.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Reflexos.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SAQUE RÁPIDO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de sacar suas armas com uma velocidade estonteante.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Bônus base de ataque +1.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem pode sacar uma arma usando uma ação livre, em vez de uma ação de movimento. Ele é capaz de sacar uma arma oculta usando uma ação de movimento. Um personagem com este talento consegue utilizar sua quantidade normal de ataques com armas de arremesso quando escolhe uma ação de ataque total.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SEPARAR APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para atacar as armas e escudos dos adversários, entre outros objetos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 14 e Ataque Poderoso.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem atacar um objeto empunhado ou carregado por um adversário, ele não provoca um ataque de oportunidade. Seu personagem também recebe +4 de bônus em todas as jogadas de ataque contra objetos que seu adversário estiver empunhando ou carregando.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SORRATEIRO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Você tem um talento notável para evitar ser notado.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de Esconder-se e Furtividade.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">SUCESSO DECISIVO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma. O personagem consegue desferir golpes mais precisos com a arma selecionada.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar a Arma, bônus base de ataque +8.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando estiver usando a arma escolhida, sua margem de ameaça será dobrada. <em>(Por exemplo, a margem de ameaça da espada longa é 19-20; com o talento será 17-20)</em>.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir este talento diversas vezes. Seus efeitos não se acumulam. Sempre que escolher esse talento, ele se aplica a uma arma diferente. Esse talento não se acumula com qualquer técnica que aumente a margem de ameaça de uma arma.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO CERTEIRO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe realizar disparos com mais exatidão quando seu alvo está mais próximo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +1 de bônus nas jogadas de ataque e dano com armas de ataque à distância contra alvos num raio de 9 m.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO EM MOVIMENTO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é extremamente habilidoso em técnicas de combate com armas de ataque à distância.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 14, Esquiva, Mobilidade, Tiro Certeiro, bônus base de ataque +4.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Quando seu personagem executar uma ação de ataque simples com uma arma de ataque a distância, ele poderá se deslocar antes e depois do ataque, a menos que a distância total percorrida seja maior que seu deslocamento. Para as armas de arremesso, o incremento de distância é dobrado.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO MÚLTIPLO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de disparar várias flechas simultaneamente contra um alvo próximo.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 18, Tiro Certeiro, Tiro Rápido, bônus base de ataque +6.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Usando uma ação padrão, seu personagem é capaz de disparar duas flechas em um oponente num raio de 9 m. Os disparos utilizam a mesma jogada de ataque (com -4 de penalidade). A cada cinco pontos de bônus base de ataque superior a +6, o personagem consegue disparar uma flecha adicional (limitado a quatro disparos com BBA +16). Cada flecha além da segunda impõe -2 de penalidade cumulativa na jogada.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O dano baseado na precisão (como ataque furtivo) é aplicado uma única vez. Num sucesso decisivo, somente a primeira flecha terá o dano multiplicado.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO PRECISO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para mirar e disparar no momento e locais exatos.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Tiro Certeiro.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem é capaz de usar armas de ataque à distância contra oponentes engajados em combate corporal sem sofrer a penalidade padrão (-4).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO PRECISO APRIMORADO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Seus ataques à distância ignoram a cobertura e a camuflagem.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 20, Tiro Certeiro, Tiro Preciso, bônus base de ataque +11.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Os ataques à distância realizados pelo seu personagem ignoram o bônus na CA concedido por qualquer nível de cobertura inferior a total e qualquer chance de falha garantida pela camuflagem (exceto total).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Sem esse talento, atirar num alvo agarrado requer determinar aleatoriamente quem foi atingido.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TIRO RÁPIDO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem pode usar armas de ataque à distância com velocidade excepcional.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Des 13, Tiro Certeiro.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe um ataque adicional com uma arma de ataque a distância. O disparo considera o bônus base de ataque mais elevado, mas cada disparo (inclusive o adicional) sofre -2 de penalidade. Esse talento só pode ser utilizado durante uma ação de ataque total.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TOLERÂNCIA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de executar incríveis façanhas de resistência.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem recebe +4 de bônus em testes de Natação (para evitar dano por contusão), Constituição (corridas, evitar dano de marcha forçada, inanição/desidratação, prender respiração) e Fortitude (evitar dano de frio/calor extremo e asfixia). Além disso, ele consegue dormir usando armaduras leves ou médias sem ficar fatigado.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Quando um personagem sem esse talento dormir usando armaduras médias ou pesadas, ele ficará fatigado no dia seguinte.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TRESPASSAR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é capaz de realizar outro ataque corporal depois de um golpe eficiente.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 14, Ataque Poderoso.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Num combate corporal, quando seu personagem causar dano suficiente para derrubar uma criatura (reduzindo seus PV a 0 ou matando-a), ele poderá executar um ataque corporal extra contra outra criatura dentro do seu alcance. Não é possível caminhar antes de realizar este ataque adicional. O personagem pode usar essa habilidade somente uma vez por rodada.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">TRESPASSAR MAIOR [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem brande uma arma com muita eficiência e consegue atacar diversas vezes quando derrubar seus oponentes.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> For 15, Trespassar, Ataque Poderoso, bônus base de ataque +4.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Similar a Trespassar, mas não há limite para a quantidade de ataques adicionais por rodada.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMA COMUM [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma comum, como arco longo. O personagem sabe combater com a arma selecionada. Use esse talento para aumentar a lista de armas que o personagem sabe usar (a relação das armas que o personagem sabe utilizar consta na descrição da sua classe).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem ataca normalmente com a arma escolhida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa; margin-bottom:0.25rem;"><strong>Normal:</strong> Um personagem empunhando uma arma que não saiba usar sofre -4 de penalidade nas jogadas de ataque.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Sempre que o escolher, ele se aplica a outra arma comum.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMAS EXÓTICAS [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">Escolha um tipo de arma exótica, como mangual atroz ou shuriken. O personagem sabe combater com a arma selecionada.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Bônus base de ataque +1 (e For 14 para espada bastarda e machado de guerra).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem ataca normalmente com a arma escolhida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa; margin-bottom:0.25rem;"><strong>Normal:</strong> Um personagem empunhando uma arma que não saiba usar sofre -4 de penalidade nas jogadas de ataque.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode adquirir esse talento diversas vezes. Sempre que o escolher, ele se aplica a outra arma exótica. Esse talento, quando aplicado à espada bastarda e ao machado de guerra, terá o pré-requisito adicional For 14.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMAS SIMPLES [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe usar todas as variedades de armas simples em combate.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem ataca normalmente com qualquer arma simples.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Um personagem empunhando uma arma que não saiba usar sofre –4 de penalidade nas jogadas de ataque.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMADURA (LEVE) [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para usar armaduras.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Quando estiver usando qualquer armadura leve, a penalidade de armadura do equipamento somente afetará os testes de Equilíbrio, Escalar, Arte da Fuga, Esconder-se, Saltar, Furtividade, Prestidigitação e Acrobacia.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Se o personagem utiliza uma armadura, mas não recebeu treinamento adequado, ele sofrerá a penalidade desta armadura nas jogadas de ataque e nos testes de perícia que exijam movimentos, inclusive Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMADURA (MÉDIA) [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para usar armaduras médias.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar Armadura (leve).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Veja Usar Armadura (leve).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Veja Usar Armadura (leve).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ARMADURA (PESADA) [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem foi treinado para usar armaduras pesadas.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar Armadura (leve), Usar Armadura (média).</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Veja Usar Armadura (leve).</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Veja Usar Armadura (leve).</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ESCUDO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe usar escudos pequenos e grandes, assim como o broquel.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem é capaz de usar escudos e sofrerá somente as penalidades padrão.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Se o personagem utiliza um escudo, mas não recebeu treinamento adequado, ele sofrerá a penalidade de armadura do escudo nas jogadas de ataque e nos testes de perícia que exijam movimentos, inclusive Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">USAR ESCUDO DE CORPO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem sabe usar escudos de corpo.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Usar Escudo.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.5rem;"><strong>Benefício:</strong> Seu personagem é capaz de usar escudos de corpo e sofrerá somente as penalidades padrão.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Normal:</strong> Se o personagem utiliza um escudo, mas não recebeu treinamento adequado, ele sofrerá a penalidade de armadura do escudo nas jogadas de ataque e nos testes de perícia que exijam movimentos, inclusive Cavalgar.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">VITALIDADE [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem é mais vigoroso que o normal.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Con 16.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seu personagem recebe +10 pontos de vida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode escolher este talento diversas vezes. Seus efeitos se acumulam.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem; margin-bottom: 1.5rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">VITALIDADE APRIMORADA [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">O personagem aprimorou o seu vigor a um nível sobrenatural.</p>
        <p style="font-size:0.9rem; color:#aaa; margin-bottom:0.25rem; font-style:italic;"><strong>Pré-requisito:</strong> Vitalidade, Con 18.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;"><strong>Benefício:</strong> Seu personagem recebe +20 pontos de vida.</p>
        <p style="font-size:0.9rem; line-height:1.6; color:#aaa;"><strong>Especial:</strong> O personagem pode escolher este talento diversas vezes. Seus efeitos se acumulam.</p>
      </div>

      <div class="talent-item" style="border-left: 2px solid rgba(255,215,0,0.3); padding-left: 1rem;">
        <h3 style="color:var(--gold-light); font-size:1.1rem; margin-bottom:0.25rem;">VONTADE DE FERRO [Geral]</h3>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver); margin-bottom:0.25rem;">A vontade do personagem é muito superior ao normal.</p>
        <p style="font-size:1rem; margin-bottom:10px; line-height:1.6; color:var(--silver);"><strong>Benefício:</strong> Seu personagem recebe +2 de bônus em todos os testes de resistência de Vontade.</p>
      </div>
    </div>
</div>
`;