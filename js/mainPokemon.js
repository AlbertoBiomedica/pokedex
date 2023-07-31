// Declaración de variables
const contenedorPokemons = document.getElementById("contenedorPokemons");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const searchP = document.getElementById("searchP");
const datoP = document.getElementById("datoP");
const resetP = document.getElementById("resetP");
const formSearchP = document.getElementById("formSearchP");
const btnNavegacion = document.getElementById("btnNavegacion");

const idPokemon = document.getElementById("idPokemon");
const namePokemon = document.getElementById("namePokemon");
const imgPokemon = document.getElementById("imgPokemon");
const naturalezaP = document.getElementById("naturalezaP");
const estadistica1 = document.getElementById("estadistica1");
const estadistica2 = document.getElementById("estadistica2");
const habilidadP = document.getElementById("habilidadP");
const movimientoP = document.getElementById("movimientoP");


let limit = 11;
let offset = 1;

// Invocaciones de funciones
// ********************************************************
var pokemon = new Pokemon(idPokemon,naturalezaP, estadistica1, estadistica2, habilidadP, namePokemon, imgPokemon,contenedorPokemons, movimientoP,btnNavegacion, formSearchP);
pokemon.grupoPokemons(offset, limit);
// *********************************************************

// Eventos 
searchP.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(datoP.value)
    const busquedaP = datoP.value.toLowerCase();

    switch (busquedaP) {
        case "hierba":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "grass");
            break;
        case "hada":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "fairy");
            break;
        case "fuego":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "fire");
            break;
        case "agua":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "water");
            break
        case "insecto":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "bug");
            break;
        case "veneno":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "poison");
            break;
        case "volador":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "flying");
            break
        case "electrico":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "electric");
            break
        case "normal":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "normal");
            break
        case "hielo":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "ice");
            break
        case "roca":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "rock");
            break
        case "psiquico":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "psychic");
            break
        case "fantasma":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "ghost");
            break
        case "tierra":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "ground");
            break
        case "dragon":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "dragon");
            break
        case "metal":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "steel");
            break
        case "pelea":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "fighting");
            break
        case "oscuro":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "dark");
            break
        case "sombra":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "shadow");
            break
        case "desconocido":
            pokemon.removeChildNodes(contenedorPokemons);
            pokemon.filtradoTipos(1010, "unknown");
            break
        default:
            const pokemons = pokemon.traerPokemon(busquedaP);
            console.log(pokemons)
            pokemons.then(datos => {
                pokemon.removeChildNodes(contenedorPokemons)
                pokemon.crearCardPokemon(datos);
                btnNavegacion.style.display = "none";
                formSearchP.reset();
            });
            break;
    }

})

resetP.addEventListener("click", (event) => {
    event.preventDefault();
    pokemon.removeChildNodes(contenedorPokemons);
    pokemon.grupoPokemons(offset, limit);
    btnNavegacion.style.display = "block";
})
// Paginación
// ******************************************************
previous.addEventListener("click", () => {
    if (offset != 1) {
        offset -= 12;
        pokemon.removeChildNodes(contenedorPokemons);
        pokemon.grupoPokemons(offset, limit);
    }
});

next.addEventListener("click", () => {
    offset += 12;
    pokemon.removeChildNodes(contenedorPokemons);
    pokemon.grupoPokemons(offset, limit);
});
// *********************************************************
