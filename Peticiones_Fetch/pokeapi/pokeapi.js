
let currentPokemonId = 1;

async function fetchPokemon(event, id) {
    if (event) event.preventDefault();
    
    const pokemonName = id ? id : document.getElementById('search').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (response.ok) {
        const pokemonData = await response.json();
        currentPokemonId = pokemonData.id;
        displayPokemonInfo(pokemonData);
    } else {
        alert('Pokémon no encontrado');
    }
}

function displayPokemonInfo(data) {
    const spriteDiv = document.getElementById('sprite');
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    const evolutionsDiv = document.getElementById('evolutions');

    // Limpiar las pantallas antes de añadir nueva información
    spriteDiv.innerHTML = '';
    pokemonInfoDiv.innerHTML = '';
    evolutionsDiv.innerHTML = '';

    // Mostrar sprite del Pokémon
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    spriteDiv.appendChild(img);

    // Mostrar información básica del Pokémon
    const info = `
        <h2>${data.name.toUpperCase()}</h2>
        <p>Index: ${data.id}</p>
        <p>Health: ${data.stats[0].base_stat} / Defense: ${data.stats[2].base_stat} / Special Defense: ${data.stats[4].base_stat}</p>
        <p>Attack: ${data.stats[1].base_stat} / Special Attack: ${data.stats[3].base_stat} / Speed: ${data.stats[5].base_stat}</p>
    `;
    pokemonInfoDiv.innerHTML = info;

    // Obtener y mostrar evoluciones y habilidades
    fetch(data.species.url)
        .then(response => response.json())
        .then(speciesData => {
            return fetch(speciesData.evolution_chain.url);
        })
        .then(response => response.json())
        .then(evolutionData => {
            displayEvolutions(evolutionData.chain);
        });

    // Mostrar habilidades
    const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
    const abilitiesInfo = `<p>Abilities: ${abilities}</p>`;
    evolutionsDiv.innerHTML = abilitiesInfo;
}

function displayEvolutions(chain) {
    const evolutionsDiv = document.getElementById('evolutions');
    
    let current = chain;
    while (current) {
        const evolutionName = current.species.name;

        fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionName}`)
            .then(response => response.json())
            .then(evolutionData => {
                const evolutionContainer = document.createElement('div');
                evolutionContainer.classList.add('evolution');

                const evolutionImg = document.createElement('img');
                evolutionImg.src = evolutionData.sprites.front_default;
                evolutionImg.alt = evolutionName;

                const evolutionNameElement = document.createElement('p');
                evolutionNameElement.innerText = evolutionName.toUpperCase();

                evolutionContainer.appendChild(evolutionImg);
                evolutionContainer.appendChild(evolutionNameElement);
                evolutionsDiv.appendChild(evolutionContainer);
            });

        if (current.evolves_to.length > 0) {
            current = current.evolves_to[0];
        } else {
            current = null;
        }
    }
}

function fetchNextPokemon() {
    fetchPokemon(null, currentPokemonId + 1);
}

function fetchPreviousPokemon() {
    fetchPokemon(null, currentPokemonId - 1);
}

document.getElementById('searchbar').addEventListener('submit', (event) => fetchPokemon(event, null));
document.getElementById('arriba').addEventListener('click', fetchNextPokemon);
document.getElementById('abajo').addEventListener('click', fetchPreviousPokemon);
document.getElementById('derecha').addEventListener('click', fetchNextPokemon);
document.getElementById('izquierda').addEventListener('click', fetchPreviousPokemon);

