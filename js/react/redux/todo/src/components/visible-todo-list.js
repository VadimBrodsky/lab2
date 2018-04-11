import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from './todo-list';

const mapStateToProps = (state) => {
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

  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch({
      type: 'TOGGLE_TODO',
      id,
    })
  };
}

// connect generates the container component and
// applies props to the presentational component
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

/*
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

  todoClickHandler = (id) => {
    const { store } = this.context;

    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={this.getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={this.todoClickHandler}
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object,
};
*/

export default VisibleTodoList;
