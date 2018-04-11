import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Provider from './provider';

import TodoApp from './components/app';
import { loadState, saveState } from './localstorage';
import throttle from 'lodash/throttle';
import './index.css';

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(logger)
);

store.subscribe(
  // throttle persistance for performance
  throttle(() => saveState({
    todos: store.getState().todos,
  }), 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
