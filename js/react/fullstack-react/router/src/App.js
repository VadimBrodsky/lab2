import React from 'react';
import { Atlantic, Pacific, BlackSea } from './pages';
// import { Router, Route, Link } from './mini-router';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

/* Mini Router
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
        <li>
          <Link to='/black-sea'>
            <code>/black-sea</code>
          </Link>
        </li>
      </ul>

      <hr />

      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      <Route path='/black-sea' component={BlackSea} />
    </div>
  </Router>
);
*/

// React Router
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
        <li>
          <Link to='/black-sea'>
            <code>/black-sea</code>
          </Link>
        </li>
      </ul>

      <hr />

      <Route path='/' render={() => (
        <h3>Welcome! Select a body of saline water above.</h3>
      )} />
      <Route path='/atlantic/ocean' render={() => (
        <div>
          <h3>Atlantic Ocean - Again!</h3>
          <p>Also known as "The Pond."</p>
        </div>
        )} />
      <Route path='/atlantic' component={Atlantic} />
      <Route path='/pacific' component={Pacific} />
      <Route path='/black-sea' component={BlackSea} />
    </div>
  </Router>
);

export default App;
