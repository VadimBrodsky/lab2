import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(logger));
let nextTodoId = 0;

const FilterLink = ({ filter, children }) => {
  return (
    <a href="#"
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        });
      }}
    >
      {children}
    </a>
  );
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

const TodoApp = ({ todos, visibilityFilter }) => {
  let input;
  const visibleTodos = getVisibleTodos(
    todos,
    visibilityFilter,
  );

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
        {visibleTodos.map(todo =>
          <li
            key={todo.id}
            onClick={() => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id,
              });
            }}
            style={{
              textDecoration: todo.completed ?
              'line-through' :
              'none',
            }}
          >
            {todo.text}
          </li>
        )}
      </ul>
      <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL'>All</FilterLink>
        {' '}
        <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
        {' '}
        <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      </p>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

