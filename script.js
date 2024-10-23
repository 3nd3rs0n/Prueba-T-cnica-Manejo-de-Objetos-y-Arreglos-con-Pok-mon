const entrenadores = [
    {
        nombre: "Entrenador 1",
        equipo: [
            { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
            { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
            { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
            { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
            { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
            { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 2",
        equipo: [
            { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
            { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
            { nombre: "Meganium", nivel: 33, tipo: "Planta" },
            { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
            { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
            { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 3",
        equipo: [
            { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
            { nombre: "Swampert", nivel: 37, tipo: "Agua" },
            { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
            { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
            { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
            { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 4",
        equipo: [
            { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
            { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
            { nombre: "Torterra", nivel: 44, tipo: "Planta" },
            { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
            { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
            { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 5",
        equipo: [
            { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
            { nombre: "Samurott", nivel: 49, tipo: "Agua" },
            { nombre: "Serperior", nivel: 50, tipo: "Planta" },
            { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
            { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
            { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
        ]
    }
];

//ejercicio 1
function obtenerPokemonExtremos(entrenadores) {
    let pokemonMayorNivel = null;
    let pokemonMenorNivel = null;

    entrenadores.forEach(entrenador => {
        entrenador.equipo.forEach(pokemon => {
            if (!pokemonMayorNivel || pokemon.nivel > pokemonMayorNivel.nivel) {
                pokemonMayorNivel = pokemon;
            }
            if (!pokemonMenorNivel || pokemon.nivel < pokemonMenorNivel.nivel) {
                pokemonMenorNivel = pokemon;
            }
        });
    });

    return {
        pokemonMayorNivel,
        pokemonMenorNivel
    };
}

const extremos = obtenerPokemonExtremos(entrenadores);
console.log("Pokemon con mayor nivel:", extremos.pokemonMayorNivel);
console.log("Pokemon con menor nivel:", extremos.pokemonMenorNivel);


// ejercicio 2
entrenadores.forEach(entrenador => {
    entrenador.equipo.forEach(pokemon => {
        console.log(`Nombre: ${pokemon.nombre}`);
    });
});


//ejercicio 3
function tipoConMayorPromedio(entrenadores) {
    const tipos = {};

    // Recorrer los entrenadores y sus equipos
    entrenadores.forEach(entrenador => {
        entrenador.equipo.forEach(pokemon => {
            const { tipo, nivel } = pokemon;

            // Si el tipo no está en el objeto `tipos`, lo inicializamos
            if (!tipos[tipo]) {
                tipos[tipo] = { sumaNiveles: 0, cantidad: 0 };
            }

            // Sumamos el nivel del Pokémon al tipo correspondiente
            tipos[tipo].sumaNiveles += nivel;
            tipos[tipo].cantidad += 1;
        });
    });

    // Encontrar el tipo con mayor promedio
    let tipoMayorPromedio = null;
    let mayorPromedio = 0;

    for (const tipo in tipos) {
        const promedio = tipos[tipo].sumaNiveles / tipos[tipo].cantidad;

        if (promedio > mayorPromedio) {
            mayorPromedio = promedio;
            tipoMayorPromedio = tipo;
        }
    }

    return tipoMayorPromedio;
}

// Ejemplo de uso
const tipoMayor = tipoConMayorPromedio(entrenadores);
console.log(`El tipo con mayor promedio de nivel es: ${tipoMayor}`);


