import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers);

const TodoApp = () => {
  return <h1>hello</h1>
};

const render = () => {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

