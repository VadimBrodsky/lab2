import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';
import TodoList from './todo-list';

// additional wrapping component that will talk to the api via lifecycle hooks
class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { filter, receiveTodos } = this.props;
    fetchTodos(this.props.filter).then((todos) => receiveTodos(filter, todos));
  };

  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  };
};

// we pass the same id from the click handler to the action creator
// can use a configuration object as a short hand
// { onTodoClick: toggleTodo }
// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick: (id) => dispatch(toggleTodo(id)),
// });

// connect generates the container component and
// applies props to the presentational component
const VisibleTodoListWithRouter = withRouter(
  connect(
    mapStateToProps,
    // mapDispatchToProps,
    // { onTodoClick: toggleTodo, receiveTodos },
    actions,
  )(VisibleTodoList),
);

export default VisibleTodoListWithRouter;

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
