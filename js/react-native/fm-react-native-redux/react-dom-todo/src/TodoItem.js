import React, { Component } from 'react';

export class TodoItem extends Component {
  handleComplete(e) {
    this.props.onComplete(e.target.parentElement.id);
  }

  render() {
    if (this.props.data.complete) {
      return (
        <li id={this.props.data.id}>
          <del>
            {this.props.data.text}
          </del>
        </li>
      );
    } else {
      return (
        <li id={this.props.data.id}>
          {this.props.data.text}
          &nbsp; <button onClick={this.handleComplete.bind(this)}>Done</button>
        </li>
      );
    }
  }
}
