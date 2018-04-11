import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Provider from './provider';

import TodoApp from './components/app';
import './index.css';

const initialState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }]
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger)
);

console.log('initial state: ', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
