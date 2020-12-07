let indianRecipesList = [{
    name: 'Biryani',
    mainIngredients: ['meat', 'rice'],
    calories: 350
  },
  {
    name: 'Roti',
    mainIngredients: ['flour', 'water', 'salt'],
    calories: 250
  },
  {
    name: 'Bonda',
    mainIngredients: ['flour', 'oil', 'onion'],
    calories: 270
  },
  {
    name: 'Panner fry',
    mainIngredients: ['panner', 'pepper', 'masala'],
    calories: 300

  }
];
for (let i = 0; i < indianRecipesList.length; i++) {
  if (indianRecipesList[i].calories > 300) {
    document.write(indianRecipesList[i].name + ' (calories: ' + indianRecipesList[i].calories + ')' + ' - More calories!')
  } else {
    document.write(indianRecipesList[i].name + ' (calories: ' + indianRecipesList[i].calories + ')')
  }
  document.write("<br/>", "<br/>");
}
