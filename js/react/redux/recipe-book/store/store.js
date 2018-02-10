import { createStore } from 'redux';
import reducer from '../reducers/root';

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

const store = createStore(reducer, initialState);

export default store;
