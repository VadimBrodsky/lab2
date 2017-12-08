import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import reducers from './reducers';
import VisibleTodoList from './visible-todo-list';
import AddTodo from './add-todo';
import Footer from './footer';

const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);

const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <TodoApp store={store} />,
  document.getElementById('root')
);
