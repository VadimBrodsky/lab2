import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  componentWillMount() {
    fetch('http://localhost:5000/todos', {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(todos => this.setState({todos}));
  }

  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handlePress() {
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      body: JSON.stringify(
      {
        name: this.state.newTodo,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(todo => {
        const todos = [todo, ...this.state.todos];
        this.setState({ todos, newTodo: '' });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='Enter ToDo' value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />

          <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View style={styles.todo} key={i}>
              <Text style={styles.todoText}>{todo.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    fontSize: 24,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  todoText: {
    fontSize: 24,
  }
});
