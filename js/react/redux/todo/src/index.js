import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(logger));
let nextTodoId = 0;

const TodoApp = ({ todos }) => {
  let input;

  return (
    <div>
      <input ref={node => {input = node}} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++,
        });
        input.value = '';
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

