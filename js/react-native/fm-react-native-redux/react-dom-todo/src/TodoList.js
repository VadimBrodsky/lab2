import React, { Component } from 'react';

export class TodoList extends Component {
  render() {
    const list = [];
    this.props.todos.forEach((todo, i) => {
      list.push(<li key={i} id={i}>{todo}</li>);
    })
    return(
      <ul>
        {list}
      </ul>
    );
  }
}
