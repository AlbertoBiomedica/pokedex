class Pokemon {

    constructor(idPokemon,naturalezaP, estadistica1, estadistica2, habilidadP, namePokemon, imgPokemon,contenedorPokemons, movimientoP,btnNavegacion, formSearchP) {
        this.idPokemon_ = idPokemon;
        this.naturalezaP_ = naturalezaP;
        this.estadistica1_ = estadistica1;
        this.estadistica2_ = estadistica2;
        this.habilidadP_ = habilidadP;
        this.namePokemon_ = namePokemon;
        this.imgPokemon_ = imgPokemon;
        this.contenedorPokemons_ = contenedorPokemons;
        this.movimientoP_ = movimientoP;
        this.btnNavegacion_ = btnNavegacion;
        this.formSearchP_ = formSearchP;

    }

    get IdPokemon() {
        return this.idPokemon_;
    }
    set IdPokemon(dato) {
        return this.idPokemon_ = dato;
    }

    get NaturalezaP() {
        return this.naturalezaP_;
    }
    set NaturalezaP(dato) {
        return this.naturalezaP_ = dato;
    }

    get HabilidadP() {
        return this.habilidadP_;
    }
    set HabilidadP(dato) {
        return this.habilidadP_ = dato;
    }

    get Estadistica1() {
        return this.estadistica1_;
    }
    set Estadistica1(dato) {
        return this.estadistica1_ = dato;
    }

    get Estadistica2() {
        return this.estadistica2_;
    }
    set Estadistica2(dato) {
        return this.estadistica2_ = dato;
    }

    get NamePokemon() {
        return this.namePokemon_;
    }
    set NamePokemon(dato) {
        return this.namePokemon_ = dato;
    }

    get ImgPokemon() {
        return this.imgPokemon_;
    }
    set ImgPokemon(dato) {
        return this.imgPokemon_ = dato;
    }
    get ContenedorPokemons() {
        return this.contenedorPokemons_;
    }
    set ContenedorPokemons(dato) {
        return this.contenedorPokemons_ = dato;
    }

    get MovimientoP() {
        return this.movimientoP_;
    }
    set MovimientoP(dato) {
        return this.movimientoP_ = dato;
    }

    get BtnNavegacion() {
        return this.btnNavegacion_;
    }
    set BtnNavegacion(dato) {
        return this.btnNavegacion_ = dato;
    }

    get FormSearchP() {
        return this.formSearchP_;
    }
    set FormSearchP(dato) {
        return this.formSearchP_ = dato;
    }

    // Funciones para traer los pokemones 
    // ************************************************************************
    traerPokemones(dato) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${dato}/`)
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                this.crearCardPokemon(datos)
            }).catch((error) => {
                console.log(error)
            });

    }
    traerPokemon(dato) {
        const pokemon =
            fetch(`https://pokeapi.co/api/v2/pokemon/${dato}/`)
                .then((respuesta) => respuesta.json())
                .then((datos) => datos);
        return pokemon;
    }

    grupoPokemons(offset, limit) {
        for (let i = offset; i <= offset + limit; i++) {
            this.traerPokemones(i);
        }
    }
    // *************************************************************************

    // Funcion para clasificar los pokemones por su naturaleza
    tipoPokemon(tipo) {
        let color;
        switch (tipo) {
            case "grass":
                tipo = "Hierba";
                color = "4A9681";
                break;
            case "fairy":
                tipo = "Hada";
                color = "FB0B95";
                break;
            case "fire":
                tipo = "Fuego";
                color = "FF675C"
                break
            case "water":
                tipo = "Agua";
                color = "0596C7"
                break
            case "bug":
                tipo = "Insecto";
                color = "A2FAA3"
                break;
            case "poison":
                tipo = "Veneno";
                color = "795663";
                break;
            case "flying":
                tipo = "Volador";
                color = "7AE7C7";
                break
            case "electric":
                tipo = "Electrico";
                color = "FFEA70";
                break
            case "normal":
                tipo = "Normal";
                color = "B09398";
                break
            case "ice":
                tipo = "Hielo";
                color = "AFEAFD";
                break
            case "rock":
                tipo = "Roca";
                color = "999799";
                break
            case "psychic":
                tipo = "Psiquico";
                color = "FFC6D9";
                break
            case "ghost":
                tipo = "Fantasma";
                color = "561D25";
                break
            case "ground":
                tipo = "Tierra";
                color = "D2B074";
                break
            case "dragon":
                tipo = "Dragon";
                color = "DA627D";
                break
            case "steel":
                tipo = "Metal";
                color = "1D8A99";
                break
            case "fighting":
                tipo = "Pelea";
                color = "2F2F2F";
                break
            case "dark":
                tipo = "Oscuro";
                color = "000000";
                break
            case "shadow":
                tipo = "Sombra";
                color = "C0C0C0";
                break
            case "unknown":
                tipo = "Desconocido";
                color = "2A1A1F";
                break
            default:
                tipo = "No encontrado";
                color = "2A1A1F";
                break;
        }
        return { tipo_: tipo, color_: color };
    }
    // ********************************************************
    // Crear las card de cada pokemon
    // ************************************************************************
    crearCardPokemon(pokemon) {

        let naturalezaPokemon = [];
        let tipo;
        for (let i = 0; i < pokemon.types.length; i++) {
            tipo = this.tipoPokemon(pokemon.types[i].type.name);
            naturalezaPokemon.push(tipo);
        }

        const cardPokemon = document.createElement("div");

        cardPokemon.innerHTML =
            `
        <div class="card cardPokemon">
        <img src="${pokemon.sprites.front_default}" id= "img${pokemon.id}" class="card-img-top" alt="${pokemon.name}">
        <div class="card-body">
            <h4 class="card-title">${pokemon.name}</h4>
            <h5 class="card-text">#${pokemon.id.toString().padStart(3, 0)}</h5>
            <div id=${pokemon.id}>
                
            </div>
            <button class="btn btn-primary" onclick="desplegarDatoPokemon('${pokemon.id}')" data-toggle="modal" data-target="#modalPokemon">Ver más</button>
        </div>
    </div>
    `;
        this.ContenedorPokemons.appendChild(cardPokemon);

        const tiposNaturaleza_ = document.getElementById(pokemon.id);
        const colorTipo = document.getElementById(`img${pokemon.id}`);
        colorTipo.style.borderRadius = "50%"

        tiposNaturaleza_.style.display = "flex";
        tiposNaturaleza_.style.alignContent = "center";
        tiposNaturaleza_.style.justifyContent = "center";
        naturalezaPokemon.forEach(element => {
            const tipoTexto = document.createElement("div");
            tipoTexto.style.fontSize = "1em";
            tipoTexto.style.padding = "5px";
            tipoTexto.style.margin = "10px 5px";
            tipoTexto.style.color = `#${element.color_}`
            tipoTexto.textContent = element.tipo_;
            colorTipo.style.backgroundColor = `#${element.color_}`
            colorTipo.style.backgroundImage = ` 
        url('data:image/svg+xml,<%3Fxml version="1.0" standalone="no"%3F><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="%23FFFF" d="M44.6,-38C60.5,-28.7,77.9,-14.4,80.5,2.6C83,19.5,70.7,38.9,54.8,51C38.9,63.1,19.5,67.8,0.6,67.2C-18.3,66.6,-36.6,60.8,-48.2,48.7C-59.8,36.6,-64.7,18.3,-65.9,-1.2C-67.1,-20.6,-64.5,-41.3,-52.9,-50.5C-41.3,-59.8,-20.6,-57.6,-3.1,-54.4C14.4,-51.3,28.7,-47.2,44.6,-38Z" transform="translate(100 100)" /></svg>')
        `
            tiposNaturaleza_.appendChild(tipoTexto);
        });

    }

    // Funcion para desplegar los datos en el modal
    // ******************************************************
    desplegarDatoPokemon(dato) {
        this.NaturalezaP.innerHTML = "";
        this.Estadistica1.innerHTML = "";
        this.Estadistica2.innerHTML = "";
        this.HabilidadP.innerHTML = "";
        this.NamePokemon.style.textTransform = "uppercase";
        this.NamePokemon.style.fontWeight = "bold";
        this.ImgPokemon.style.width = "12rem";

        const pokemon = this.traerPokemon(dato);
        pokemon.then(datos => {
            this.IdPokemon.innerHTML = `#${datos.id}`;
            this.NamePokemon.innerHTML = datos.name;
            this.ImgPokemon.src = datos.sprites.front_default;

            let naturalezaPokemonE = [];
            let tipo;
            for (i = 0; i < datos.types.length; i++) {
                tipo = this.tipoPokemon(datos.types[i].type.name);
                naturalezaPokemonE.push(tipo);
            }

            this.NaturalezaP.style.display = "flex";
            this.NaturalezaP.style.alignContent = "center";
            this.NaturalezaP.style.justifyContent = "center";
            this.NaturalezaPokemonE.forEach(element => {
                const tipoTexto = document.createElement("div");
                tipoTexto.style.fontSize = "1em";
                tipoTexto.style.padding = "5px";
                tipoTexto.style.margin = "10px 5px";
                tipoTexto.style.color = `#${element.color_}`;
                tipoTexto.textContent = element.tipo_;
                this.ImgPokemon.style.backgroundImage = ` 
        url('data:image/svg+xml,<%3Fxml version="1.0" standalone="no"%3F><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="%23${element.color_}" d="M44.6,-38C60.5,-28.7,77.9,-14.4,80.5,2.6C83,19.5,70.7,38.9,54.8,51C38.9,63.1,19.5,67.8,0.6,67.2C-18.3,66.6,-36.6,60.8,-48.2,48.7C-59.8,36.6,-64.7,18.3,-65.9,-1.2C-67.1,-20.6,-64.5,-41.3,-52.9,-50.5C-41.3,-59.8,-20.6,-57.6,-3.1,-54.4C14.4,-51.3,28.7,-47.2,44.6,-38Z" transform="translate(100 100)" /></svg>')
        `
                this.NaturalezaP.appendChild(tipoTexto);
            });

            let estadisticaP = [];
            for (let i = 0; i < datos.stats.length; i++) {
                let baseStat = datos.stats[i].base_stat;
                let nameStat = datos.stats[i].stat.name;
                estadisticaP.push({ nameStat_: nameStat, baseStat_: baseStat });
            }

            for (let i = 0; i < estadisticaP.length; i++) {
                let stat1 = document.createElement("div");
                let stat2 = document.createElement("div");

                if (i < 3) {
                    stat1.innerHTML = `
                <p>${this.nombrarEstadisticas(estadisticaP[i].nameStat_)}: <span>${estadisticaP[i].baseStat_}</span></p>
                <div class="progress" role="progressbar" aria-label="Basic example"
                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: ${estadisticaP[i].baseStat_}%"></div>
                </div>
            `
                }
                if (i >= 3) {
                    stat2.innerHTML = `
                <p>${this.nombrarEstadisticas(estadisticaP[i].nameStat_)}: <span>${estadisticaP[i].baseStat_}</span></p>
                <div class="progress" role="progressbar" aria-label="Basic example"
                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: ${estadisticaP[i].baseStat_}%"></div>
                </div>
            `
                }

                this.Estadistica1.appendChild(stat1);
                this.Estadistica2.appendChild(stat2);
            }

            for (let i = 0; i < datos.abilities.length; i++) {
                const habilidadPU = document.createElement("div");
                habilidadPU.innerHTML = `
            
            <p>${datos.abilities[i].ability.name}</p>
            `;
                this.HabilidadP.appendChild(habilidadPU);
            }

            for (let i = 0; i <= 5; i++) {
                const movimientoPU = document.createElement("div");
                movimientoPU.innerHTML = `
            <p>${datos.moves[i].move.name}</p>
            `;
                this.MovimientoP.appendChild(movimientoPU);
            }


        });

    }
    // *****************************************************

    // Funcion para extraer las estadisticas
    nombrarEstadisticas(dato) {
        switch (dato) {
            case "hp":
                dato = "HP";
                break;
            case "attack":
                dato = "Ataque";
                break;
            case "defense":
                dato = "Defensa";
                break;
            case "special-attack":
                dato = "Ataque especial";
                break;
            case "speed":
                dato = "Velocidad";
                break;
            case "special-defense":
                dato = "Defensa especial";
                break;
            default:
                dato = "No existe";
                break
        }
        return dato;
    }
    // *******************************************************
    // Funcion para filtra los pokemones por filtros determinados
    // **********************************************************
    filtradoTipos(limite, tipo) {
        let pokemones = [];
        for (let i = 1; i <= limite; i++) {
            pokemones.push(this.traerPokemon(i).then(dato => {
                return dato;
            }))
        }

        for (let i = 0; i < pokemones.length; i++) {
            pokemones[i].then((dato) => {
                for (let j = 0; j < dato.types.length; j++) {
                    if (dato.types[j].type.name === tipo) {
                        this.crearCardPokemon(dato);
                        this.BtnNavegacion.style.display = "none";
                        this.FormSearchP.reset();
                    }
                }
            })
        }
    }
    // ***********************************************************
    // ****************************************************
    removeChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}