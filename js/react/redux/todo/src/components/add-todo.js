import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let nextTodoId = 0;

const AddTodo = ({ dispatch }) => {
  let input;

  const clickHandler = () => {
    dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text: input.value,
    });

    input.value = '';
  };

  return (
    <div>
      <input ref={node => {input = node}} />
      <button onClick={clickHandler}>
      Add Todo
    </button>
  </div>
  );
}

// falsy arguments will pass on dispatch
// and will not subscribe to the store
const AddTodoWithDispatch = connect(
  // null,                     // mapStateToProps
  // dispatch => { dispatch }  // mapDispatchToProps
)(AddTodo);

export default AddTodoWithDispatch;
