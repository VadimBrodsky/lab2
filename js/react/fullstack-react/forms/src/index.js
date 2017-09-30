import React from 'react';
import ReactDOM from 'react-dom';

import BasicButton from './basic-button';
import BasicInput from './basic-input';

const Page = () => {
  return (
    <div>
      <BasicButton />
      <BasicInput />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'));
