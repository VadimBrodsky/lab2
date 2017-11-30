import React, { Component } from 'react';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

export default App;
