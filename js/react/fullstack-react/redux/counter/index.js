const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
};

const createStore = (reducer) => {
  let state = 0;

  const getState = () => (state);
  const dispatch = (action) => {
    state = reducer(state, action);
  }

  return {
    getState,
    dispatch,
  };
};

module.exports = {
  reducer,
  createStore,
};
