import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  const clickHandler = () => {
    dispatch(addTodo(input.value)); 
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
