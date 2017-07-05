import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [1,2,3,4],
      newTodo: '',
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ newTodo: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} onChange={this.handleChange.bind(this)} />
        {this.state.todo.map((todo, i) => <Text key={i}>{todo}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
