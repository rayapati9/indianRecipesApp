let pokemonRepository = (function() {
  let pokemonList = [];
  //api to get list of pokeman and their details
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //cteating a global variable to create a model
  let pokemonContainer = document.querySelector('#pokemon-container');

  //to add a new pokemon to repository.
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  //this function helps to add list of buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
  }

  //By using the load list function, we are fetching the URL and seperating the name and details
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  //By load details function, we are loading the details and seperating them
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  //showDetails function is for to show the pokemon when we open the modal
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showPokemon(pokemon);
    });
  }

  //showpokemon function is for what to be in the modal.
  function showPokemon(pokemon) {
    pokemonContainer.innerHTML = '';
    let pokemonModal = document.createElement('div');
    pokemonModal.classList.add('pokemon-class');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('button-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hidePokemon);

    let tittleElement = document.createElement('h1');
    tittleElement.innerText = pokemon.name;

    let contentHeight = document.createElement('p');
    contentHeight.innerText = 'Height:' + pokemon.height;

    let imageElement = document.createElement('img');
    imageElement.classList.add('modal-image');
    imageElement.src = pokemon.imageUrl;

    pokemonModal.appendChild(closeButtonElement);
    pokemonModal.appendChild(tittleElement);
    pokemonModal.appendChild(contentHeight);
    pokemonModal.appendChild(imageElement);
    pokemonContainer.appendChild(pokemonModal);


    pokemonContainer.classList.add('is-visible');
  }

  //to hide the pokemon
  function hidePokemon() {
    pokemonContainer.classList.remove('is-visible');
  }

  //hide pokemon when escape key pressed
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pokemonContainer.classList.contains('is-visible')) {
      hidePokemon();
    }
  });

  pokemonContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === pokemonContainer) {
      hidePokemon();

    }
  });

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails
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
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  });
});
