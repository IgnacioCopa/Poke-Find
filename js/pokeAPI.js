let nombre;
let url;

window.onload = function() {

    document.getElementById("button-addon2").addEventListener("click",submit_name);
}

function submit_name(){
    document.getElementById("info").style="block";

    nombre= document.getElementById("name").value;

    url= `https://pokeapi.co/api/v2/pokemon/${nombre}/`
    console.log(url);


fetch(url)
.then(response => response.json())
.then(data => {

    let pokename = document.getElementById("poke_name");
    let poke = document.getElementById("poke_api");
    let poke1 = document.getElementById("poke_api1");
    let poke2 = document.getElementById("poke_api2");
    let poke3 = document.getElementById("poke_api3");

    //inner html permite usar etiquetas de html
    poke.innerHTML = `
    <img src= "${data.sprites.front_default}" class="container-fluid" style="image-rendering: pixelated;" "></img>`

    
    //movimientos
    let moves;
    data.moves.forEach(element => {

        if(moves==null){
            moves=element.move.name;
        }
        else if(moves!=null){
            moves+= `, ${element.move.name}`;
        }
        
            
    });

    pokename.innerHTML=`<p class="text-capitalize text-center" style="font-size: 50px";>${data.name}</p>`
    
    poke1.innerHTML =`
    <p class="text-capitalize" style="font-size: 35px;  width: 100%";>EXP: ${data.base_experience}</p>
    <p class="text-capitalize" style="font-size: 35px;  width: 100%";>Height: ${data.height}</p>
    <p class="text-capitalize" style="font-size: 35px;  width: 100%";>HP: ${data.stats[0].base_stat}</p>
    <p class="text-capitalize" style="font-size: 35px;  width: 100%";>ATK: ${data.stats[1].base_stat}</p>
    <p class="text-capitalize" style="font-size: 35px;  width: 100%";>SPEED: ${data.stats[4].base_stat}</p>
    `

    poke2.innerHTML =`    
    <p class="text-capitalize" style="font-size: 35px; width: 100%";>SPC-ATK: ${data.stats[3].base_stat}</p>
    <p class="text-capitalize" style="font-size: 35px; width: 100%";>SPC-DEF: ${data.stats[4].base_stat}</p>
    <p class="text-capitalize" style="font-size: 35px; width: 100%";>HAB-1: ${data.abilities[0].ability.name}</p>
    <p class="text-capitalize" style="font-size: 35px; width: 100%";>HAB-2: ${data.abilities[1].ability.name}</p>
    
    `

    poke3.innerHTML =`
    <p class="text-capitalize" style="font-size: 35px; margin-left: 5%;";>Moves:</p>
    <p class="text-capitalize " style="font-size: 15px; margin: 0 5%;";>${moves}</p>

    `



    console.log(data);
})
.catch(err=>console.log(err));

}
//stats del pokemon------------------------------------------>

/*
fetch(url3)
.then(response => response.json())
.then(data => {

    let poke = document.getElementById("poke_api");

    //inner html permite usar etiquetas de html
    poke.innerHTML = `<img></img>` 


    console.log(data);
})
.catch(err=>console.log(err));*/

