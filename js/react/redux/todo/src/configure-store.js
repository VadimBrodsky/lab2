import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localstorage';
import reducers from './reducers';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState, applyMiddleware(logger));

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

  return store;
};

export default configureStore;
