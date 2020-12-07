let pokemonList = [{
    name: 'Balbasaur',
    types: ['grass', 'poison'],
    height: 0.7
  },
  {
    name: 'Pidgeottlo',
    types: ['flying','normal'],
    height: 1.6
  },
  {
    name: 'Slowpoke',
    types: ['psychic', 'water'],
    height: 1.2
  },
  {
    name: 'Yamma',
    types: ['bug', 'flying'],
    height: 1.2

  }
];
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + ' - wowww this is big one!')
  } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')')
  }
  document.write("<br/>", "<br/>");
}
