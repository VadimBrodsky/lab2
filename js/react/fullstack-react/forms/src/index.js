import React from 'react';
import ReactDOM from 'react-dom';
import BasicButton from './basic-button';
import BasicInput from './basic-input';
import 'purecss/build/pure-min.css'


const Page = () => {
  return (
    <div style={{ padding: '1em' }}>
      <BasicButton />
      <BasicInput />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'));
