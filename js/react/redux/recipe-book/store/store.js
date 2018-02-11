import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import logMiddleware from '../middleware/log';
import apiMiddleware from '../middleware/api';

export default createStore(
  rootReducer,
  applyMiddleware(logMiddleware, apiMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
