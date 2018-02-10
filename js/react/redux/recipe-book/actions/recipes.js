import { ADD_RECIPE } from '../constants/action-types';

const addRecipe = (name) => ({
  type: ADD_RECIPE,
  name,
});

export { addRecipe };
