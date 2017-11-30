import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers);
let nextTodoId = 0;

const TodoApp = ({ todos }) => {
  return (
    <div>
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: 'Test',
          id: nextTodoId++,
        });
      }}>
        Add Todo
      </button>
      <ul>
        {todos.map(todo =>
          <li key={todo.id}>
            {todo.text}
          </li>
        )}
      </ul>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

