import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class Scroll extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>Scolling down</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>React Native</Text>
      </ScrollView>
    );
  }
}
