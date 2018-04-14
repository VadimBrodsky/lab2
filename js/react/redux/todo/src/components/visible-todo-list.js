import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import TodoList from './todo-list';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all'),
});

// we pass the same id from the click handler to the action creator
// can use a configuration object as a short hand
// { onTodoClick: toggleTodo }
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
});

// connect generates the container component and
// applies props to the presentational component
const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    // mapDispatchToProps,
    { onTodoClick: toggleTodo },
  )(TodoList),
);

export default VisibleTodoList;

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
