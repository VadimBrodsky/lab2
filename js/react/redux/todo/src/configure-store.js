import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
// import { loadState, saveState } from './localstorage';
import reducers from './reducers';

const configureStore = () => {
  const middlewares = [promise];

  // replaced by server side storage
  // const persistedState = loadState();

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  // wrapDispathWithMiddlewares(store, middlewares);

  return createStore(
    reducers,
    // persistedState,
    // devToolsEnhancer(),
    // composeWithDevTools(applyMiddleware(logger)),
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

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
};

/* logger middleware
const logger = (store) => (next) => {
  if (!console.group) {
    return next;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};
*/

/* promise middleware
const promise = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};
*/

/* same as applyMiddleware
const wrapDispathWithMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach((middleware) => middleware(store)(store.dispatch));
};
*/

export default configureStore;
