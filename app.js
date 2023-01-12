import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");



for (let i = 0; i < data.pokemon.length; i++) {

    let div = document.createElement("div");
    div.className = "card";


    div.innerHTML = `<h2>${data.pokemon[i].id}</h2>
    <img src="${data.pokemon[i].img}"/>`

    output.appendChild(div);
}

