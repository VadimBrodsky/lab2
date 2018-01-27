import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

render(<p>hello</p>, document.getElementById('root'));
registerServiceWorker();
