const reducer = (state, action) => {
  if (action.type === 'ADD_MESSAGE') {
    return { messages: state.messages.concat(action.message) };
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(
          action.index + 1, state.messages.length
        ),
      ],
    };
  } else {
    return state;
  }
};

const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const getState = () => (state);
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  // follows the observer pattern
  const subscribe = listener => listeners.push(listener);

  return {
    getState,
    dispatch,
    subscribe,
  };
};

module.exports = {
  reducer,
  createStore,
};
