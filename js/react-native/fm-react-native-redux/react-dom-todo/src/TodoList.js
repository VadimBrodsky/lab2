import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends Component {
  render() {
    return(
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem data={todo} key={todo.id} onComplete={this.props.onComplete}/>
        ))}
      </ul>
    );
  }
}
