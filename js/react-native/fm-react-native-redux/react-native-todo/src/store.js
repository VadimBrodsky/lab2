import { createStore } from 'redux';
import { reducer } from './reduers';

export const store = createStore(reducer);
