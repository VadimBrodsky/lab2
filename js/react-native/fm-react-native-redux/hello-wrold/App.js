import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Bananas';
import LotsOfGreetings from './Greeting';
import LotsOfBlinks from './Blink';
import LotsOfStyles from './LotsofStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';

export default class HelloWorldApp extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Hello React Native!</Text>
      //   <Bananas />
      //   <LotsOfGreetings />
      //   <LotsOfBlinks />
      //   <LotsOfStyles />
      //   <FixedDimensionsBasics />
      // </View>
      <FlexDimensionsBasics />
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
