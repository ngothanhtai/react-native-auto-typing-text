import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import AutotypingText from '../components/AutotypingText';

class MainScreen extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'powderblue',
        paddingTop: 30,
        paddingLeft: 10,
      }}
      >
        <AutotypingText
          text={`Not all fonts have a variant for each of the numeric values, in that case the closest .... In order to use this feature, you must give the view a width and a height . ... In React Native, we are more strict about it: you must wrap all the text nodes inside ... The style inheritance is only encoded inside of the native`}
          charMovingTime={50}
          style={{
            fontSize: 20,
            color: 'red',
            backgroundColor: 'blue'
          }}
          onComplete={() => { console.log('done'); }}
        />
      </View>
    );
  }

}

export default MainScreen;
