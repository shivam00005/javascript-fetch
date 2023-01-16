import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



for (let i = 0; i < data.pokemon.length; i++) {

  let div = document.createElement("div");
  div.className = "card";
  let inner = document.createElement("div");
  inner.className = "inner";
  let backpage = document.createElement("div");
  backpage.className = "backpage";
  let next_evolution = document.createElement("div");
  next_evolution.className = 'next-evolution';
  let prev_evolution = document.createElement("div");
  prev_evolution.className = "prev-evolution";


  inner.innerHTML = `
    <div class = 'card-front'>

    <div class='front-inner-text'>
    <h3>Rank: ${data.pokemon[i].num}</h3>
    <h3 class='name'> ${data.pokemon[i].name}</h3>
    </div>

      <img src ="${data.pokemon[i].img}">
    </div>`

  backpage.innerHTML = `
    <div class = 'content'>  
     <h2>${data.pokemon[i].name} Information</h2>
      <h3>Type: ${data.pokemon[i].type}</h3>
      <h3>Height: ${data.pokemon[i].height}</h3>
      <h3>Weight: ${data.pokemon[i].weight}</h3>
      <h3>Candy: ${data.pokemon[i].candy}</h3>
      <h3>Candy Count: ${data.pokemon[i].candy_count}</h3>
      <h3>Egg: ${data.pokemon[i].egg}</h3>
      <h3>Spawn Chance: ${data.pokemon[i].spawn_chance}</h3>
      <h3>Avg Spawn: ${data.pokemon[i].spawn_time}</h3>
      <h3>Multiplayer: ${data.pokemon[i].multipliers}</h3>
      <p>Weakness: ${data.pokemon[i].weaknesses}</p>
 </div>
      
`;



  if (data.pokemon[i].hasOwnProperty('next_evolution')) {

    for (let j = 0; j < data.pokemon[i].next_evolution.length; j++) {


      next_evolution.innerHTML += `
      <h3> Next Evolution</h3>
      <h3>Rank: ${data.pokemon[i].next_evolution[j].num}</h3>
      <h3>Name: ${data.pokemon[i].next_evolution[j].name}</h3>
  `;

    }
    backpage.appendChild(next_evolution);
  }
  if (data.pokemon[i].hasOwnProperty('prev_evolution')) {
    for (let j = 0; j < data.pokemon[i].prev_evolution.length; j++) {

      prev_evolution.innerHTML += `
      <h3> Prev Evolution</h3>
      <h3>Rank: ${data.pokemon[i].prev_evolution[j].num}</h3>
      <h3>Name: ${data.pokemon[i].prev_evolution[j].name}</h3>
  `;

    }
    backpage.appendChild(prev_evolution);
  }



  output.appendChild(div);
  div.appendChild(inner)
  inner.appendChild(backpage);

}


const strong_pokemon = document.getElementById('strong_pokemon');
const weak_pokemon = document.getElementById('weak_pokemon');
const tallest_pokemon = document.getElementById('tallest_pokemon');
const heavy_pokemon = document.getElementById('heavy_pokemon');



let weight = [];
let height = [];
let weak = [];

let maxWeight = [];
let maxHeight = [];
let weakest = [];
let strongest = [];

for (let k = 0; k < data.pokemon.length; k++) {

  weight[k] = data.pokemon[k].weight.replace(" kg", '');
  height[k] = data.pokemon[k].height.replace(" m", '');
  weak[k] = data.pokemon[k].weaknesses.length;


}

for (let k = 0; k < data.pokemon.length; k++) {
  let div = document.createElement("div");
  div.className = "card";
  let inner = document.createElement("div");
  inner.className = "inner";
  let backpage = document.createElement("div");
  backpage.className = "backpage";

  if (data.pokemon[k].weaknesses.length == Math.min(...weak)) {
    strongest[k] = data.pokemon[k].weaknesses.length;

    inner.innerHTML = `
    <div class = 'card-front strongest'>

    <div class='front-inner-text'>
    <h3>Rank: ${data.pokemon[k].num}</h3>
    <h3 class='name'> ${data.pokemon[k].name}</h3>
    </div>

      <img src ="${data.pokemon[k].img}">
    </div>`

    backpage.innerHTML = `
    <div class = 'content strongest'>  
     <h2>${data.pokemon[k].name} Information</h2>
      <h3>Type: ${data.pokemon[k].type}</h3>
      <h3>Height: ${data.pokemon[k].height}</h3>
      <h3>Weight: ${data.pokemon[k].weight}</h3>
      <h3>Candy: ${data.pokemon[k].candy}</h3>
      <h3>Candy Count: ${data.pokemon[k].candy_count}</h3>
      <h3>Egg: ${data.pokemon[k].egg}</h3>
      <h3>Spawn Chance: ${data.pokemon[k].spawn_chance}</h3>
      <h3>Avg Spawn: ${data.pokemon[k].spawn_time}</h3>
      <h3>Multiplayer: ${data.pokemon[k].multipliers}</h3>
      <p>Weakness: ${data.pokemon[k].weaknesses}</p>
 </div>
      
    `
    inner.appendChild(backpage);
    div.appendChild(inner);
    strong_pokemon.appendChild(div);

  }
  if (data.pokemon[k].weaknesses.length == Math.max(...weak)) {
    let div = document.createElement("div");
    div.className = "card";
    let inner = document.createElement("div");
    inner.className = "inner";
    let backpage = document.createElement("div");
    backpage.className = "backpage";
    weakest[k] = data.pokemon[k].weaknesses.length;
    inner.innerHTML = `
    <div class = 'card-front weak'>

    <div class='front-inner-text'>
    <h3>Rank: ${data.pokemon[k].num}</h3>
    <h3 class='name'> ${data.pokemon[k].name}</h3>
    </div>

      <img src ="${data.pokemon[k].img}">
    </div>`

    backpage.innerHTML = `
    <div class = 'content weak'>  
     <h2>${data.pokemon[k].name} Information</h2>
      <h3>Type: ${data.pokemon[k].type}</h3>
      <h3>Height: ${data.pokemon[k].height}</h3>
      <h3>Weight: ${data.pokemon[k].weight}</h3>
      <h3>Candy: ${data.pokemon[k].candy}</h3>
      <h3>Candy Count: ${data.pokemon[k].candy_count}</h3>
      <h3>Egg: ${data.pokemon[k].egg}</h3>
      <h3>Spawn Chance: ${data.pokemon[k].spawn_chance}</h3>
      <h3>Avg Spawn: ${data.pokemon[k].spawn_time}</h3>
      <h3>Multiplayer: ${data.pokemon[k].multipliers}</h3>
      <p>Weakness: ${data.pokemon[k].weaknesses}</p>
 </div>
      
    `
    inner.appendChild(backpage);
    div.appendChild(inner);
    weak_pokemon.appendChild(div);

  }

  if (data.pokemon[k].height.replace(" m", '') == Math.max(...height)) {
    maxHeight[k] = data.pokemon[k].height.replace(" m", '');

    let div = document.createElement("div");
    div.className = "card";
    let inner = document.createElement("div");
    inner.className = "inner";
    let backpage = document.createElement("div");
    backpage.className = "backpage";
    weakest[k] = data.pokemon[k].weaknesses.length;
    inner.innerHTML = `
    <div class = 'card-front tall'>

    <div class='front-inner-text'>
    <h3>Rank: ${data.pokemon[k].num}</h3>
    <h3 class='name'> ${data.pokemon[k].name}</h3>
    </div>

      <img src ="${data.pokemon[k].img}">
    </div>`

    backpage.innerHTML = `
    <div class = 'content tall'>  
     <h2>${data.pokemon[k].name} Information</h2>
      <h3>Type: ${data.pokemon[k].type}</h3>
      <h3>Height: ${data.pokemon[k].height}</h3>
      <h3>Weight: ${data.pokemon[k].weight}</h3>
      <h3>Candy: ${data.pokemon[k].candy}</h3>
      <h3>Candy Count: ${data.pokemon[k].candy_count}</h3>
      <h3>Egg: ${data.pokemon[k].egg}</h3>
      <h3>Spawn Chance: ${data.pokemon[k].spawn_chance}</h3>
      <h3>Avg Spawn: ${data.pokemon[k].spawn_time}</h3>
      <h3>Multiplayer: ${data.pokemon[k].multipliers}</h3>
      <p>Weakness: ${data.pokemon[k].weaknesses}</p>
 </div>
      
    `
    inner.appendChild(backpage);
    div.appendChild(inner);
    tallest_pokemon.appendChild(div);

  }
  if (data.pokemon[k].weight.replace(" kg", '') == Math.max(...weight)) {
    maxWeight[k] = data.pokemon[k].weight.replace(" kg", '');
    let div = document.createElement("div");
    div.className = "card";
    let inner = document.createElement("div");
    inner.className = "inner";
    let backpage = document.createElement("div");
    backpage.className = "backpage";
    weakest[k] = data.pokemon[k].weaknesses.length;
    inner.innerHTML = `
    <div class = 'card-front heavy'>

    <div class='front-inner-text'>
    <h3>Rank: ${data.pokemon[k].num}</h3>
    <h3 class='name'> ${data.pokemon[k].name}</h3>
    </div>

      <img src ="${data.pokemon[k].img}">
    </div>`

    backpage.innerHTML = `
    <div class = 'content heavy'>  
     <h2>${data.pokemon[k].name} Information</h2>
      <h3>Type: ${data.pokemon[k].type}</h3>
      <h3>Height: ${data.pokemon[k].height}</h3>
      <h3>Weight: ${data.pokemon[k].weight}</h3>
      <h3>Candy: ${data.pokemon[k].candy}</h3>
      <h3>Candy Count: ${data.pokemon[k].candy_count}</h3>
      <h3>Egg: ${data.pokemon[k].egg}</h3>
      <h3>Spawn Chance: ${data.pokemon[k].spawn_chance}</h3>
      <h3>Avg Spawn: ${data.pokemon[k].spawn_time}</h3>
      <h3>Multiplayer: ${data.pokemon[k].multipliers}</h3>
      <p>Weakness: ${data.pokemon[k].weaknesses}</p>
 </div>
      
    `
    inner.appendChild(backpage);
    div.appendChild(inner);
    heavy_pokemon.appendChild(div);

  }


}

let totalWeight = 0;
let totalHeight = 0;
for (let k = 0; k < data.pokemon.length; k++) {

  totalWeight += parseInt(data.pokemon[k].weight.replace(" kg", ''));
  totalHeight += parseInt(data.pokemon[k].height.replace(" m", ''));

}

console.log(totalWeight)
let averageHeight = totalHeight / data.pokemon.length;
let minHeight = Math.min(...height);
let heightMax = Math.max(...height);

let averageWeight = totalWeight / data.pokemon.length;;
let minWeight = Math.min(...weight);
let macWeight = Math.max(...weight);



document.getElementById('statistics').innerHTML = `

<div class=" heightstatistics">
<h1>Height Statistic</h1>
<h3> Average Height = ${averageHeight} </h3>
<h3> Minimum Height = ${minHeight} </h3>
<h3> Maximum Height = ${heightMax} </h3>
</div>


`;


