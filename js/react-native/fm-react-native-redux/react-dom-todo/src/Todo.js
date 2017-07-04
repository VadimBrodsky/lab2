import React, { Component } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    console.log(todo);

    this.setState({
      todos: this.state.todos.concat([todo])
    })
  };

  render() {
    return (
      <div>
        <TodoInput onAdd={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
