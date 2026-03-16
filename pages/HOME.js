const HOME = `
<style>

.hero-section{
margin-top:-20px;
height:75vh;
background:url("img/bg.jpeg") center/cover no-repeat;
position:relative;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
overflow:hidden;
}

/* overlay escuro + luz central */

.hero-overlay{
position:absolute;
inset:0;
background:
radial-gradient(circle at center, rgba(200,168,75,0.25) 0%, rgba(0,0,0,0.85) 100%),
linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.8));
backdrop-filter: blur(1px);
}

/* container */

.hero-content{
position:relative;
max-width:850px;
padding:40px 30px;
z-index:2;
}

/* título */

.hero-title{
font-family:'Cinzel Decorative',serif;
font-size:3.4rem;
letter-spacing:0.08em;
color:var(--gold);
margin-bottom:22px;
text-shadow:
0 0 12px rgba(200,168,75,0.7),
0 0 35px rgba(200,168,75,0.35),
0 2px 6px rgba(0,0,0,0.9);
}

@media(max-width:400px) {
	.hero-title {
		font-size:2.1rem;
	}
	.hero-text {
		font-size:1rem!important;
	}
}
/* linha dourada */

.hero-divider{
width:120px;
height:2px;
margin:0 auto 26px auto;
background:linear-gradient(90deg, transparent, var(--gold), transparent);
}

/* texto */

.hero-text{
font-family:'Crimson Pro',serif;
font-size:1.3rem;
line-height:1.9;
color:var(--silver);
text-shadow:0 2px 4px rgba(0,0,0,0.85);
max-width:720px;
margin:auto;
}

/* sections */

.home-section{
max-width:900px;
margin:60px auto;
padding:0 20px;
}

.home-title{
font-family:'Cinzel',serif;
color:var(--gold);
font-size:1.8rem;
margin-bottom:20px;
letter-spacing:0.06em;
}

.home-text{
font-family:'Crimson Pro',serif;
color:var(--silver);
line-height:1.8;
margin-bottom:16px;
text-align: justify;
}

/* mapa */

.map-container{
text-align:center;
margin-top:30px;
display: flex;
flex-direction: column;
align-items: center;
}

.world-map{
width:100%;
max-width:1000px;
border-radius:8px;
box-shadow:0 10px 40px rgba(0,0,0,0.8);
}

.map-switch-btn{
margin-top:20px;
padding:10px 22px;
background:var(--gold);
border:none;
cursor:pointer;
font-family:'Cinzel',serif;
letter-spacing:0.05em;
font-weight:bold;
transition:0.25s;
text-shadow: 1px 1px 1px #000;
}

.map-switch-btn:hover{
transform:translateY(-2px);
box-shadow:0 4px 14px rgba(200,168,75,0.6);
}

</style>


<section class="hero-section">

<div class="hero-overlay"></div>

<div class="hero-content">

<h1 class="hero-title">Greco Romano RPG</h1>

<div class="hero-divider"></div>

<p class="hero-text">
Um universo inspirado em Cavaleiros do Zodíaco, misturado com mitologia
greco-romana e um cenário medieval repleto de batalhas cósmicas.
Armaduras lendárias, deuses antigos e cavaleiros improváveis
compartilham um mundo onde o poder do Cosmo decide o destino das lendas.
</p>

</div>

</section>


<section class="home-section">

<h2 class="home-title">Sobre o RPG</h2>

<p class="home-text">
Greco Romano RPG é um sistema baseado no d20 que recria o universo
dos Cavaleiros em um cenário medieval alternativo. Armaduras,
templos, deuses e batalhas cósmicas fazem parte do mundo,
mas sem a obrigação de seguir fielmente o anime original.
</p>

<p class="home-text">
O cenário mistura elementos clássicos de Cavaleiros do Zodíaco
com ideias absurdas e cômicas. Cavaleiros podem surgir de
lugares improváveis, continentes perdidos ou civilizações
submersas governadas por deuses antigos.
</p>

</section>


<section class="home-section">

<h2 class="home-title">Mapa do Mundo</h2>

<p class="home-text">
Explore os territórios onde cavaleiros treinam, enfrentam deuses
e despertam o poder do Cosmo.
</p>

<div class="map-container">

<img id="worldMap" src="img/m2.jpg" class="world-map">

<button class="toggle-map-btn" style="display: flex;" data-mode="native" onclick="toggleHomeMap()">
	<span>Trocar versão do mapa</span>
</button>

</div>

</section>

<script>

let homeMapVersion = 1;

function toggleHomeMap(){

const map = document.getElementById("worldMap");
if(!map) return;

if(homeMapVersion === 1){
map.src = "img/m2.jpg";
homeMapVersion = 2;
}else{
map.src = "img/m1.jpg";
homeMapVersion = 1;
}

}

</script>
`;