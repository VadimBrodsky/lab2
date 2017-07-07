import React from 'react';
import Todo from './src/Todo';
import { HTTPExample } from './src/httpExample';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;

