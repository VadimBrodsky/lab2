import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(logger));
let nextTodoId = 0;

const FilterLink = ({ filter, children, currentFilter }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }

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
  const visibleTodos = getVisibleTodos( todos, visibilityFilter);

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
        &nbsp;
        <FilterLink
          filter='SHOW_ALL'
          currentFilter={visibilityFilter}
        >
          All
        </FilterLink>
        &nbsp;
        <FilterLink
          filter='SHOW_ACTIVE'
          currentFilter={visibilityFilter}
        >
          Active
        </FilterLink>
        &nbsp;
        <FilterLink
          filter='SHOW_COMPLETED'
          currentFilter={visibilityFilter}
        >
          Completed
        </FilterLink>
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

