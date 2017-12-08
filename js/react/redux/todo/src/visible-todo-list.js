import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from './todo-list';

class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getVisibleTodos = (todos, filter) => {
    switch(filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={
          this.getVisibleTodos(state.todos, state.visibilityFilter)
        }
        onTodoClick={id => store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })}
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object,
};

export default VisibleTodoList;
