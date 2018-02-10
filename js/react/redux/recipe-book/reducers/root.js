const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return recipes.concat({ name: action.name });
  }
  return recipes;
};

const ingredientsReducer = (ingredients = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity,
      };
      return ingredients.concat(newIngredient)
  }
  return ingredients;
};

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action),
  });
};

export default rootReducer;
