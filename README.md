# react-native-auto-typing-text

This is a library which create auto typing text effect.

## Install
```
npm install --save react-native-auto-typing-text
```

## Toturial
Let's take a look at a simple example.

```js
import React, { Component } from 'react';
import { View } from 'react-native';
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
      }}
      >
        <AutotypingText
          text={`Not all fonts have a variant for each of the numeric values, in that case the closest .... In order to use this feature, you must give the view a width and a height . ... In React Native, we are more strict about it: you must wrap all the text nodes inside ... The style inheritance is only encoded inside of the native`}
          charMovingTime={50}
          style={{
            fontSize: 20,
            color: 'black',
            backgroundColor: 'grey'
          }}
          onComplete={() => { console.log('done'); }}
        />
      </View>
    );
  }

}
```

```text``` string to run effect.
```charMovingTime``` delay time to play a character.
```style``` apply all style of ```Text``` component.


## Walkthrough

![Video Walkthrough](walkthrough.gif)
