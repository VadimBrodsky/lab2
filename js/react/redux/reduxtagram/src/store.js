import { createStore, compose } from 'redux';

// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
// Need to change these for RR V4 noop for now
const syncHistoryWithStore = () => {};
const browserHistory = {};

// import root reducer
import rootReducer from './reducers';

// import sample data
import comments from './data/comments';
import posts from './data/posts';

// create an object for default data
const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
