import React, { Fragment } from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const router = (
  <Router>
    <Fragment>
      <Route path="/" component={Main} />
      <Route path="/" exact component={PhotoGrid} />
      <Route path="/view/:postid" exact component={Single} />
    </Fragment>
  </Router>
);

render(router, document.getElementById('root'));
registerServiceWorker();
