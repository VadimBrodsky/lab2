import { combineReducers } from 'redux';
import todo from './todo';

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

const todos = combineReducers({ byId, idsByFilter });
export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map((id) => state.byId[id]);
};

// selector, relies on the shape of the current state
// exports that start with get, prepare the data to be displayed by the UI
// select something from the current state

/* not practial to get all of the todos from the server
const getAllTodos = (state) => state.allIds.map((id) => state.byId[id]);
*/

/* will not need to filter on the client
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);

  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter((t) => t.completed);
    case 'active':
      return allTodos.filter((t) => !t.completed);
  }
};
*/
