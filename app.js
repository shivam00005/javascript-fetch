import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



for (let i = 0; i < data.pokemon.length; i++) {

  let div = document.createElement("div");
  let next_evolution = document.createElement("div");
  let prev_evolution = document.createElement("div");
  div.className = "card";


  div.innerHTML = `
    <div class = 'image'>
      <img src ="${data.pokemon[i].img}">
    </div>
    <div class = 'content'>  
      <h3>Rank: ${data.pokemon[i].num}</h3>
      <h3>Name: ${data.pokemon[i].name}</h3>
      <h3>Type: ${data.pokemon[i].type}</h3>
      <h3>Height: ${data.pokemon[i].height}</h3>
      <h3>Weight: ${data.pokemon[i].weight}</h3>
      <h3>Candy: ${data.pokemon[i].candy}</h3>
      <h3>Candy Count: ${data.pokemon[i].candy_count}</h3>
      <h3>Egg: ${data.pokemon[i].egg}</h3>
      <h3>Spawn Chance: ${data.pokemon[i].spawn_chance}</h3>
      <h3>Avg Spawn: ${data.pokemon[i].spawn_time}</h3>
      <h3>Multiplayer: ${data.pokemon[i].multipliers}</h3>
      <h3>Weakness: ${data.pokemon[i].weaknesses}</h3>
 </div>
      
`;



  if (data.pokemon[i].hasOwnProperty('next_evolution')) {

    for (let j = 0; j < data.pokemon[i].next_evolution.length; j++) {


      next_evolution.innerHTML += `
      <h3> Next Evolution</h3>
      <h3>Rank: ${data.pokemon[i].next_evolution[j].num}</h3>
      <h3>Name: ${data.pokemon[i].next_evolution[j].name}</h3>
  `;
      div.appendChild(next_evolution);

    }
  } else if (data.pokemon[i].hasOwnProperty('prev_evolution')) {
    for (let j = 0; j < data.pokemon[i].prev_evolution.length; j++) {

      prev_evolution.innerHTML += `
      <h3> Prev Evolution</h3>
      <h3>Rank: ${data.pokemon[i].prev_evolution[j].num}</h3>
      <h3>Name: ${data.pokemon[i].prev_evolution[j].name}</h3>
  `;

      div.appendChild(prev_evolution);
    }
  }



  output.appendChild(div);

}

