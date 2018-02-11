import { ADD_RECIPE, SET_RECIPES, API } from '../constants/action-types';

const addRecipe = (name) => ({
  type: ADD_RECIPE,
  name,
});

const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
});

const fetchRecipes = () => ({
  type: API,
  payload: {
    url: 'db.json',
    success: SET_RECIPES,
  }
});

export { addRecipe, setRecipes, fetchRecipes };
