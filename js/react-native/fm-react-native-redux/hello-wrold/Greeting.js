import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class lotsOfGreetings extends Componet {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Jon' />
        <Greeting name='Brandon' />
        <Greeting name='Rob' />
      </View>
    );
  }
}
