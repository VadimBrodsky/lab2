import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      newTodo: '',
    };
  }

  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handlePress() {
    const todo = [...this.state.todo, this.state.newTodo];
    this.setState({ todo, newTodo: '' });
  }

  render() {
    return (
      <View>
        <TextInput style={{height: 40}} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />

        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Create</Text>
        </TouchableOpacity>

        <View>
          {this.state.todo.map((todo, i) => <Text key={i}>{todo}</Text>)}
        </View>
      </View>
    );
  }
}
