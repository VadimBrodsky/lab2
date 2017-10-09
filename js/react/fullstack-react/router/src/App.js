import React from 'react';
import { Atlantic, Pacific } from './pages';
import { Router, Route, Link } from './mini-router';

const App = () => (
  <Router>
    <div className='ui text container'>
      <h2 className='ui dividing header'>Which body of water?</h2>

      <ul>
        <li>
          <Link to='/atlantic'>
            <code>/atlantic</code>
          </Link>
        </li>
        <li>
          <Link to='/pacific'>
            <code>/pacific</code>
          </Link>
        </li>
      </ul>

      <hr />

      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
    </div>
  </Router>
);

export default App;
