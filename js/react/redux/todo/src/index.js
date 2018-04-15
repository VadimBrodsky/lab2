import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './configure-store';
import { fetchTodos } from './api';
import './index.css';

fetchTodos('all').then((todos) => console.log(todos));

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
