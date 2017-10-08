import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='ui text container'>
        <h2 className='ui dividing header'>Which body of water?</h2>

        <ul>
          <li>
            <a href='/atlantic'>
              <code>/atlantic</code>
            </a>
          </li>
          <li>
            <a href='/pacific'>
              <code>/pacific</code>
            </a>
          </li>
        </ul>

        <hr />
      </div>
    );
  }
}

export default App;
