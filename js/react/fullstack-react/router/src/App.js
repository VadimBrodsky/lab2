import React, { Component } from 'react';
import { Route, Link } from './mini-router';
import { Atlantic, Pacific } from './pages';

class App extends Component {
  /* Using Mini Router
  The App component will need to listen for changes
  componentDidMount() {
    history.listen(() => this.forceUpdate());
  }
  render() {
    return (
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
    );
  }
  */
}

export default App;
