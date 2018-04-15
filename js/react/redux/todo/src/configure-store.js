import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import throttle from 'lodash/throttle';
// import { loadState, saveState } from './localstorage';
import reducers from './reducers';

const addLogginToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  // replaced by server side storage
  // const persistedState = loadState();

  const store = createStore(
    reducers,
    // persistedState,
    devToolsEnhancer(),
    // composeWithDevTools(applyMiddleware(logger)),
  );

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLogginToDispatch(store);
  }

  /* replaced by server side storage
  store.subscribe(
    // throttle persistance for performance
    throttle(
      () =>
        saveState({
          todos: store.getState().todos,
        }),
      1000,
    ),
  );
  */

  return store;
};

export default configureStore;
