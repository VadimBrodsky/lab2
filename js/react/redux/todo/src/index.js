import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import reducers from './reducers';
import VisibleTodoList from './visible-todo-list';
import AddTodo from './add-todo';
import Footer from './footer';

const store = createStore(reducers, applyMiddleware(logger));

const TodoApp = () => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
