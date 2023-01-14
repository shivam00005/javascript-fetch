import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



for (let i = 0; i < data.pokemon.length; i++) {

  let div = document.createElement("div");
  div.className = "card";
  let inner = document.createElement("div");
  inner.className = "inner";
  let next_evolution = document.createElement("div");
  next_evolution.className = 'next-evolution';
  let prev_evolution = document.createElement("div");
  prev_evolution.className = "prev-evolution";
  let backpage = document.createElement("div");
  backpage.className = "backpage";


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

