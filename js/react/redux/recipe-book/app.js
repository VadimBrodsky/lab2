import { createStore } from 'redux';

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
const reducer = (state, action) => state;
const store = createStore(reducer, initialState);

window.store = store;
