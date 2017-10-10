import React, { Component } from 'react';
import { reducer, createStore } from './mini-redux';

const initialState = { messages: [] };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

export default App;
