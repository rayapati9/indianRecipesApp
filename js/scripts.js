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

pokemonList.forEach(function(user){
  if (user.height> 1.5){
  document.write(user.name+' (Height:' + user.height +' - wowww this is big one!'+'</br>')
}
else{
  document.write(user.name + ' (Height: ' + user.height + ')'+'<br/>')

}
});
