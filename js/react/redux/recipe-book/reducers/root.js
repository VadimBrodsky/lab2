import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';
import apiReducer from './api';

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  serverStatus: apiReducer,
});
