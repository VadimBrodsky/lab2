import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main';

render(<Main />, document.getElementById('root'));
registerServiceWorker();
