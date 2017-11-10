import uuid from 'uuid';

export const reducer = (state, action) => {
  if (action.type === 'ADD_MESSAGE') {
    const newMessage = {
      text: action.text,
      timestamp: Date.now(),
      id: uuid.v4(),
    };
    return {
      messages: state.messages.concat(newMessage)
    };
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: state.messages.filter((m) => (
        m.id !== action.id
      ))
    };
  } else {
    return state;
  }
};

export const createStore = (reducer, initialState) => {
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
