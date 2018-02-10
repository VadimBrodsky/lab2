import store from './store/store';
import { addRecipe, fetchRecipes } from './actions/recipes';
import { addIngredient } from './actions/ingredients';
import loadUI from './ui/jquery';

// store.dispatch(addRecipe('Pancake'));
// store.dispatch(addIngredient('Pancake', 'Eggs', 3));

window.store = store;
loadUI();

setTimeout(() => store.dispatch(fetchRecipes()), 1000);

