import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return(
      <View>
        <Text style={styles.red}>Roses are Red</Text>
        <Text style={styles.bigblue}>Violets are Blue</Text>
        <Text style={[styles.bigblue, styles.red]}>Blue then Red</Text>
        <Text style={[styles.red, styles.bigblue]}>Red then Blue</Text>
      </View>
    );
  }
}

// style properties are CamelCase
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
