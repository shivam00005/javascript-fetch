import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



for (let i = 0; i < data.pokemon.length; i++) {

    let div = document.createElement("div");
    div.className = "card";


    div.innerHTML = `
    <div class = image>
      <img src ="${data.pokemon[i].img}">
    </div>
    <div class = content>
    
      <h3>${data.pokemon[i].num}</h3>
      <h3>Name: ${data.pokemon[i].name}</h3>
      <h3>${data.pokemon[i].type}</h3>
      <h3>${data.pokemon[i].height}</h3>
      <h3>${data.pokemon[i].weight}</h3>
      <h3>${data.pokemon[i].candy}</h3>
      <h3>${data.pokemon[i].candy_count}</h3>
      <h3>${data.pokemon[i].egg}</h3>
      <h3>${data.pokemon[i].spawn_chance}</h3>
      <h3>${data.pokemon[i].spawn_time}</h3>
      <h3>${data.pokemon[i].multipliers}</h3>
      <h3>${data.pokemon[i].weaknesses}</h3>
      <h3>${data.pokemon[i].next_evolution.length}</h3>
`

// need work here
    for (let j = 0; j <= 1; j++) {
        `
      <h3>${data.pokemon[i].next_evolution[j]}</h3>
      <h3>${data.pokemon[i].next_evolution[j]}</h3>
`
    }
// need work here

    `   
          
         
</div>
      
 `

    output.appendChild(div);
}

