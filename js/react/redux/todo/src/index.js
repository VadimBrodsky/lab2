import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import reducers from './reducers';
import TodoList from './todo-list';
import AddTodo from './add-todo';
import Footer from './footer';

const store = createStore(reducers, applyMiddleware(logger));
let nextTodoId = 0;

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

const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo
      onAddClick={text =>
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text,
          })
      }
    />
    <TodoList
      todos={getVisibleTodos( todos, visibilityFilter)}
      onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
      } />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={filter => 
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
          })
      }
    />
  </div>
);

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

