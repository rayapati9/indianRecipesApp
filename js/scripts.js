let pokemonRepository = (function() {
  let repository = [{
      name: "Balbasaur",
      types: ["grass", "poison"],
      height: 0.7
    },
    {
      name: "Pidgeottlo",
      types: ["flying", "normal"],
      height: 1.6
    },
    {
      name: "Slowpoke",
      types: ["psychic", "water"],
      height: 1.2
    },
    {
      name: "Yamma",
      types: ["bug", "flying"],
      height: 1.2
    }
  ];
  //to add a new pokemon to repository.
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }



  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('selected');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

//adding new pokemon
pokemonRepository.add({
  name: 'pikachu',
  types: ['electric'],
  height: 0.3
});
console.log(pokemonRepository.getAll());

//foreach loop will help to display every pokemon
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
