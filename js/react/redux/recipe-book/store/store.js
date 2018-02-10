import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import logMiddleware from '../middleware/log';

const initialState = {
  recipes: [
    {
      name: 'Omlette',
    },
  ],
  ingredients: [
    {
      recipe: 'Omlette',
      name: 'Egg',
      quantity: 2,
    }
  ],
};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(logMiddleware)
);
