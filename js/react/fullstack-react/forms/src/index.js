import React from 'react';
import ReactDOM from 'react-dom';

import BasicButton from './basic-button';

const Page = () => {
  return (
    <div>
      <BasicButton />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'));
