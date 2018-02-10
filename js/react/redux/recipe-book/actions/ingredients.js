import { ADD_INGREDIENT } from '../constants/action-types';

const addIngredient = (recipe, name, quantity) => ({
  type: ADD_INGREDIENT,
  recipe,
  name,
  quantity,
});

export { addIngredient };
