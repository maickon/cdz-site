const CHARACTER_CREATE = `
<div class="max-w-2xl mx-auto px-4 py-10">
    <div class="text-center mb-8">
      <div class="section-subtitle text-xs mb-3">Grimório dos Cavaleiros</div>
      <h1 class="section-title text-2xl md:text-3xl mb-4">Criação de Personagem</h1>
      <div class="gold-rule mb-6"></div>
    </div>

    <div class="page-search mb-4"></div>
  
    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Introdução: Criando um Cavaleiro
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Criar um Cavaleiro Greco Romano é o primeiro passo para entrar em um mundo de comédia, cosmo e caos. Durante a criação, você definirá o conceito do personagem, seus atributos, técnicas, talentos e sua história.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Siga as etapas do processo para construir seu herói (ou anti-herói) e prepará-lo para enfrentar os desafios deste universo.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-top:1rem; padding-left:1.5rem; list-style-type:square;">
        <li><strong style="color:var(--gold-light);">Conceito e Origem:</strong> Defina quem é seu personagem e de onde ele veio.</li>
        <li><strong style="color:var(--gold-light);">Atributos:</strong> Role os valores de habilidades como Força e Destreza.</li>
        <li><strong style="color:var(--gold-light);">Técnicas Iniciais:</strong> Escolha as primeiras técnicas do cavaleiro.</li>
        <li><strong style="color:var(--gold-light);">Talentos:</strong> Selecione o talento inicial.</li>
        <li><strong style="color:var(--gold-light);">Classe:</strong> Revise os benefícios e progressão do Cavaleiro.</li>
        <li><strong style="color:var(--gold-light);">Detalhes Finais:</strong> Defina nome, aparência e história.</li>
      </ul>
    </div>


    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Passo 1: Conceito e Origem
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Antes de rolar dados, defina o conceito do seu personagem. Pense em sua origem, no lugar de onde veio e qual divindade ele serve (ou afirma servir). Esses elementos ajudam a moldar sua personalidade e papel no mundo Greco Romano.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Para estruturar melhor o personagem, descreva alguns aspectos importantes de sua personalidade:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
        <li><strong style="color:var(--gold-light);">Medo:</strong> O que mais assusta o personagem.</li>
        <li><strong style="color:var(--gold-light);">Defeito:</strong> Seu principal ponto fraco.</li>
        <li><strong style="color:var(--gold-light);">Virtude:</strong> A qualidade mais marcante.</li>
        <li><strong style="color:var(--gold-light);">Objetivos:</strong> O que motiva suas ações.</li>
        <li><strong style="color:var(--gold-light);">Segredos:</strong> Algo que ele esconderia a qualquer custo.</li>
        <li><strong style="color:var(--gold-light);">O que o irrita:</strong> Situações que fazem perder a paciência.</li>
        <li><strong style="color:var(--gold-light);">Manias:</strong> Hábitos ou comportamentos recorrentes.</li>
      </ul>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-top:1rem;">
        Esses elementos ajudam a dar vida ao personagem e servem como base para interpretação durante o jogo.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">
        Passo 1.1: Escolhendo sua Origem
      </h2>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        A região onde seu personagem nasceu influencia suas habilidades e experiência de vida. Cada território do mundo Greco Romano concede um <strong style="color:var(--gold-light);">Talento Regional</strong>.
      </p>

      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Escolha <strong style="color:var(--gold-light);">apenas um (1)</strong> talento com base no local de origem do seu personagem.
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); padding-left:1.5rem; list-style-type:square;">
        
        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Sofista de Atenas (Continente Greco):</strong>
          +2 em <em>Diplomacia</em> e <em>Sentir Motivação</em>.
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Rato de Biblioteca de Troia (Continente Romano):</strong>
          +2 em <em>Conhecimento</em> (qualquer) e <em>Decifrar Escrita</em>.
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Gingado Malandro (Ilha do Sol Vermelho):</strong>
          +2 em <em>Acrobacia</em> e <em>Salto Impulsionado / Gingado</em>.
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Fígado de Aço (Fenda do Biquíni):</strong>
          +2 em <em>Fortitude</em> e <em>Blefar</em>.
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Mão Leve do Pântano (Velho Oeste):</strong>
          +2 em <em>Furtividade</em> e <em>Prestidigitação</em> (ou <em>Abrir Fechaduras</em>, a critério do Mestre).
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Grito de Guerra Bárbaro (Boca do PapaKru):</strong>
          +2 em <em>Intimidação</em> e <em>Sobrevivência</em>.
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Narinas Calejadas (Ku):</strong>
          +2 em <em>Fortitude</em> e <em>Esconder-se</em> (especialmente em pântanos).
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Cara de Psicopata (Refúgio do Mal):</strong>
          +2 em <em>Blefar</em> e <em>Sentir Motivação</em>.
        </li>

        <li style="margin-bottom:0.4rem;">
          <strong style="color:var(--gold-light);">Contato Imediato (Zona Oculta):</strong>
          +2 em <em>Observar</em> e <em>Intuir Direção</em>.
        </li>

        <li>
          <strong style="color:var(--gold-light);">Casca Grossa (Tartaruga Invertida):</strong>
          Escolha <em>Frio</em> ou <em>Calor</em>. Receba +2 em <em>Sobrevivência</em> e <em>Fortitude</em> contra esse elemento.
        </li>

      </ul>

    </div>

    <div class="cosmos-card p-6 mb-6 pulse-glow">
      <div class="corner-ornament corner-tl"></div><div class="corner-ornament corner-tr"></div>
      <div class="corner-ornament corner-bl"></div><div class="corner-ornament corner-br"></div>
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passos 2: Atributos</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
          Em nosso RPG, todos os personagens criados pelos jogadores são humanos. O jogador deve apenas descrever a aparência do seu personagem, sua história e rolar os dados de habilidades.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Os jogadores rolam <strong style="color:var(--gold-light);">4d6</strong> para cada habilidade (Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma). Descarte o dado de menor valor e some os outros três.
      </p>
      <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--gold-light); padding:1rem; margin-top:1rem; margin-bottom:1rem;">
        <p style="font-size:1rem; color:var(--silver);">
          O valor mínimo que uma habilidade pode ter é <strong style="color:var(--gold-light);">12</strong>. Rolagens com um resultado menor do que doze são descartadas e o jogador deve fazer uma nova rolagem para aquela habilidade.
        </p>
      </div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Esta regra reflete que cada indivíduo que conseguiu se tornar um cavaleiro é acima da média, e que pessoas comuns não têm chances de ingressar nessa ordem sagrada.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 3: Técnicas Iniciais</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:0.75rem;">
        Todo cavaleiro começa com algumas técnicas básicas que aprendeu em seu treinamento (ou que inventou na hora). Você começa o jogo com um número de técnicas de <strong style="color:var(--gold-light);">RANK 1</strong> igual a:
      </p>
      <div style="text-align:center; padding:1rem; border:1px solid rgba(255,215,0,0.2); border-radius:4px; margin-bottom:1rem; color:var(--gold-light); font-family:'Cinzel',serif;">
        1 + seu modificador de Inteligência
      </div>
      <p style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:0.75rem; font-style:italic;">
        (Exemplo: Se você tem Inteligência 14, seu modificador é +2. Você começa com 1 + 2 = 3 técnicas de RANK 1).
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        Estas técnicas iniciais <strong style="color:var(--gold-light);">não custam</strong> Pontos de Experiência (XP) para serem criadas. Você deve criá-las usando o “Gerador de Técnicas” (Capítulo 3).
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 4: Talentos Iniciais</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver);">
        No Nível 1, o Cavaleiro recebe <strong style="color:var(--gold-light);">3 talentos</strong>: um da Classe, um por sua experiência antes de se tornar cavaleiro e um concedido por sua armadura. Os talentos podem ser escolhidos das listas de “Talentos Especiais para Cavaleiros” ou “Talentos Modificados” (Capítulo 2), desde que os pré-requisitos sejam atendidos.
      </p>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1rem; letter-spacing:0.1em; margin-bottom:0.75rem;">Passo 5: A Classe Cavaleiro</h2>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1rem;">
        Os Cavaleiros são guerreiros lendários, inspirados pelas antigas tradições dos seus Deuses e pelo poder cósmico que permeia o universo. Essa classe representa a conexão profunda entre o indivíduo e as forças cósmicas, permitindo que desencadeiem habilidades impressionantes e manifestem a energia das estrelas em batalha.
      </p>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--silver); margin-bottom:1.5rem;">
        Todo cavaleiro pertence a uma única classe que dita o seu avanço. Entenda as colunas da tabela de progressão:
      </p>

      <ul style="font-size:1rem; line-height:1.6; color:var(--silver); margin-bottom:1.5rem; padding-left:1.5rem; list-style-type:square;">
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">XP / Lv:</strong> Pontos de experiência necessários e o Nível atual.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Cosmo:</strong> Pontos de cosmo ganhos conforme avança de nível.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Dano:</strong> O dano do ataque desarmado do cavaleiro.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">BBA:</strong> Bônus Base de Ataque.</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">FORT, VONT, REFL:</strong> Testes de resistência base (Fortitude, Vontade, Reflexos).</li>
        <li style="margin-bottom:0.25rem;"><strong style="color:var(--gold-light);">Talento:</strong> Talentos ou Sentidos adicionais despertados.</li>
        <li><strong style="color:var(--gold-light);">Desl:</strong> O deslocamento base (em metros).</li>
      </ul>

      <div style="overflow-x: auto;">
        <table style="width: 100%; text-align: center; border-collapse: collapse; color: var(--silver); font-size: 0.85rem; white-space: nowrap;">
          <thead>
            <tr style="border-bottom: 2px solid var(--gold-light); color: var(--gold-light);">
              <th style="padding: 0.5rem;">XP</th>
              <th style="padding: 0.5rem;">Lv</th>
              <th style="padding: 0.5rem;">Cosmo</th>
              <th style="padding: 0.5rem;">Dano</th>
              <th style="padding: 0.5rem;">BBA</th>
              <th style="padding: 0.5rem;">FORT</th>
              <th style="padding: 0.5rem;">VONT</th>
              <th style="padding: 0.5rem;">REFL</th>
              <th style="padding: 0.5rem;">Talento</th>
              <th style="padding: 0.5rem;">Desl.</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>0</td><td>1</td><td>1</td><td>d6</td><td>1</td><td>2</td><td>2</td><td>2</td><td>1.Tal</td><td>9</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>1.000</td><td>2</td><td>2</td><td>d6</td><td>2</td><td>3</td><td>3</td><td>3</td><td>1.Tal</td><td>12</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>3.000</td><td>3</td><td>3</td><td>d6</td><td>3</td><td>3</td><td>3</td><td>3</td><td>-</td><td>15</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>6.000</td><td>4</td><td>4</td><td>d6</td><td>4</td><td>4</td><td>4</td><td>4</td><td>1.Tal</td><td>18</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>10.000</td><td>5</td><td>5</td><td>d8</td><td>5/1</td><td>4</td><td>4</td><td>4</td><td>-</td><td>22</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>15.000</td><td>6</td><td>7</td><td>d8</td><td>6/2</td><td>5</td><td>5</td><td>5</td><td>1.Tal</td><td>26</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>21.000</td><td>7</td><td>9</td><td>d8</td><td>7/3</td><td>5</td><td>5</td><td>5</td><td>6º Sentido</td><td>30</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>28.000</td><td>8</td><td>11</td><td>d8</td><td>8/4</td><td>6</td><td>6</td><td>6</td><td>1.Tal</td><td>34</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>36.000</td><td>9</td><td>13</td><td>d10</td><td>9/5/1</td><td>6</td><td>6</td><td>6</td><td>-</td><td>39</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>45.000</td><td>10</td><td>15</td><td>d10</td><td>10/6/2</td><td>7</td><td>7</td><td>7</td><td>1.Tal</td><td>44</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>55.000</td><td>11</td><td>18</td><td>d10</td><td>11/7/3</td><td>7</td><td>7</td><td>7</td><td>-</td><td>49</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>66.000</td><td>12</td><td>21</td><td>d10</td><td>12/8/4</td><td>8</td><td>8</td><td>8</td><td>1.Tal</td><td>53</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>78.000</td><td>13</td><td>24</td><td>d12</td><td>13/9/5/1</td><td>8</td><td>8</td><td>8</td><td>7º Sentido</td><td>58</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>91.000</td><td>14</td><td>27</td><td>d12</td><td>14/10/6/2</td><td>9</td><td>9</td><td>9</td><td>1.Tal</td><td>63</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>105.000</td><td>15</td><td>30</td><td>d12</td><td>15/11/7/3</td><td>9</td><td>9</td><td>9</td><td>-</td><td>68</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>120.000</td><td>16</td><td>34</td><td>d12</td><td>16/12/8/4</td><td>10</td><td>10</td><td>10</td><td>1.Tal</td><td>73</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>136.000</td><td>17</td><td>38</td><td>d20</td><td>17/13/9/5/1</td><td>10</td><td>10</td><td>10</td><td>-</td><td>80</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>153.000</td><td>18</td><td>42</td><td>d20</td><td>18/14/10/6/2</td><td>11</td><td>11</td><td>11</td><td>1.Tal, 8º Sentido</td><td>90</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>171.000</td><td>19</td><td>46</td><td>d20</td><td>19/15/11/7/3</td><td>11</td><td>11</td><td>11</td><td>-</td><td>100</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>190.000</td><td>20</td><td>50</td><td>d20</td><td>20/16/12/8/4</td><td>12</td><td>12</td><td>12</td><td>1.Tal</td><td>110</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>210.000</td><td>21</td><td>55</td><td>2d10</td><td>+1</td><td>12</td><td>12</td><td>12</td><td>-</td><td>130</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>231.000</td><td>22</td><td>60</td><td>2d10</td><td>+1</td><td>13</td><td>13</td><td>13</td><td>1.Tal</td><td>150</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td>243.000</td><td>23</td><td>65</td><td>2d10</td><td>+1</td><td>13</td><td>13</td><td>13</td><td>-</td><td>170</td></tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);"><td>287.000</td><td>24</td><td>70</td><td>2d10</td><td>+1</td><td>14</td><td>14</td><td>14</td><td>1.Tal</td><td>190</td></tr>
            <tr><td>312.000</td><td>25</td><td>75</td><td>2d10</td><td>+1</td><td>14</td><td>14</td><td>14</td><td>-</td><td>220</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="cosmos-card p-6 mb-6">
      <h2 style="font-family:'Cinzel',serif; color:var(--gold-light); font-size:1.1rem; letter-spacing:0.15em; margin-bottom:1rem; border-bottom: 1px solid rgba(255,215,0,0.2); padding-bottom: 0.5rem;">
        PASSO 6: A ASCENSÃO DO COSMO
      </h2>
      
      <p style="font-size:1.05rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Elevação de Atributos</strong>: Ao transcender seus limites e avançar de nível, o Cavaleiro refina sua essência. Você recebe <strong style="color:#fff;">+1 ponto</strong> para distribuir permanentemente em qualquer um de seus Atributos Base, refletindo o amadurecimento físico e mental de seu treinamento.
      </p>
      
      <p style="font-size:1.05rem; line-height:1.7; color:var(--silver); margin-bottom:1rem;">
        <strong style="color:var(--gold-light);">Desenvolvimento de Técnicas</strong>: A experiência adquirida em batalha permite o despertar de novos milagres. O XP excedente — aquele que ultrapassa o necessário para subir de nível — é convertido em uma <strong style="color:#fff;">Reserva de Cosmo-XP</strong>. Estes pontos devem ser investidos para desbloquear, aprimorar ou dominar novas Técnicas de Combate.
      </p>
      
      <p style="font-size:1.05rem; line-height:1.7; color:var(--silver);">
        <strong style="color:var(--gold-light);">Progressão de Classe</strong>: Consulte a <strong style="color:#fff;">Tabela de Classe do Cavaleiro</strong> para atualizar seus novos bônus de combate. Certifique-se de ajustar seus valores de Cosmo Máximo, Bônus Base de Ataque (BBA), Testes de Resistência e Deslocamento, garantindo que sua ficha reflita seu novo patamar de poder.
      </p>
    </div>

</div>
`;