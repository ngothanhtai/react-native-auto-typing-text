/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainScreen from './app/screens/MainScreen';

export default class CharactersSlider extends Component {
  render() {
    return (
      <View style={{
          flex: 1
      }}
      >
        <MainScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('CharactersSlider', () => CharactersSlider);
