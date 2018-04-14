import React from 'react';
import Provider from '../provider';
import TodoApp from './app';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;