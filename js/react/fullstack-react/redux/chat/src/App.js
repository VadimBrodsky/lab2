import React, { Component } from 'react';
import { reducer } from './mini-redux';
import { createStore } from 'redux';

const initialState = { messages: [] };
const store = createStore(reducer, initialState);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const { messages } = store.getState();
    return (
      <div className='ui segment'>
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  }
}

class MessageInput extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      text: this.state.value,
    });
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className='ui input'>
        <input
          onChange={this.onChange}
          value={this.state.value}
          type='text'
        />
        <button
          onClick={this.handleSubmit}
          className='ui primary button'
          type='submit'
        >
          Submit
        </button>
      </div>
    );
  }
}

class MessageView extends Component {
  handleClick = id => {
    store.dispatch({ type: 'DELETE_MESSAGE', id });
  };

  render() {
    const messages = this.props.messages.map((message, index) => (
      <div
        className='comment'
        key={index}
        onClick={() => this.handleClick(message.id)}
      >
        <div className='text'>
          {message.text}
          <span className='metadata'>@{message.timestamp}</span>
        </div>
      </div>
    ));

    return (
      <div className='ui components'>
        {messages}
      </div>
    )
  }
}

export default App;
