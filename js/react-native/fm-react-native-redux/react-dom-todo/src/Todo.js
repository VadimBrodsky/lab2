import React, { Component } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export class Todo extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: this.state.todos.concat([{
        id: this.state.todos.length,
        text: todo,
        complete: false,
      }])
    })
  };

  completeTodo(todoId) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === Number(todoId)) {
          todo.complete = true;
        }
        return todo;
      })
    })
  };

  render() {
    return (
      <div style={{padding: '2em', margin: '2em'}}>
        <TodoInput onAdd={this.addTodo} />
        <TodoList todos={this.state.todos} onComplete={this.completeTodo} />
      </div>
    );
  }
}
