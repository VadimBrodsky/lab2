import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducers from './reducers';
import VisibleTodoList from './visible-todo-list';
import AddTodo from './add-todo';
import Footer from './footer';
// import Provider from './provider';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
