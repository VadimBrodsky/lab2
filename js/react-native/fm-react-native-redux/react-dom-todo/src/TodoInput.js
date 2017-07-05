import React, { Component } from 'react';

export class TodoInput extends Component {
  constructor() {
    super();
    this.state = { input: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleAdd() {
    const input = this.state.input;
    if (input.trim() !== '') {
      this.props.onAdd(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter Todo" onChange={this.handleInput} value={this.state.input} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
