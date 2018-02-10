import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
});
