import React from 'react';
import PropTypes from 'prop-types';

let nextTodoId = 0;

const AddTodo = (props, { store }) => {
  let input;

  return (
    <div>
      <input ref={node => {input = node}} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value,
        });
        input.value = '';
      }}>
      Add Todo
    </button>
  </div>
  );
}

AddTodo.contextTypes = {
  store: PropTypes.object,
}

export default AddTodo;
