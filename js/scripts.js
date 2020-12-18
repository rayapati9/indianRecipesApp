let pokemonRepository = (function() {
  let pokemonList = [];
  //api to get list of pokeman and their details
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    let pokemonList = document.querySelector('.list-group');
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('group-list-item')
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-secondary', 'btn-block');
    button.setAttribute('data-target', '#pokedexmodal');
    button.setAttribute('data-toggle', 'modal');
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
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  //By load details function, we are loading the details and seperating them
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  //showDetails function is for to show the pokemon when we open the modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  //creates a modal
  function showModal(text) {
    //define title and body of modal
    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerText = text.name;

    let modalBody = document.querySelector('.modal-body');
    modalBody.innerText = '';

    //define image and heights of pokemon
    let imageElement = document.createElement('img');
    imageElement.classList.add('imagesize');
    imageElement.src = text.imageUrl;

    let heightElement = document.createElement('p');
    heightElement.classList.add('height');
    heightElement.innerText = 'Height: ' + text.height;


    modalBody.append(imageElement);
    modalBody.append(heightElement);
  }


  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal
  };
})();
//foreach loop will help to display every pokemon
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  });
});
