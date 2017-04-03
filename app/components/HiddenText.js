/**
 * Created by tai on 4/3/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class HiddenText extends Component {
  constructor(props) {
    super(props);
    const { text } = this.props;
    this.state = {
      fullText: text,
      hiddenText: '',
    }
  }

  componentDidMount() {
    this.handleText();
  }

  async handleText() {
    const { onResult } = this.props;
    const { fullText } = this.state;
    const { height: heightOnALine } = await this.measureView(this.refs.hiddenText, 'A');

    let fullTextReadyToUse = fullText.replace(/\n/g, ' \n ');;
    const words = fullTextReadyToUse.split(' ');
    let tempArr = [];
    let lines = [];
    for(const word of words) {
      tempArr.push(word);
      const textToTest = tempArr.join(' ');
      const { width, height } = await this.measureView(this.refs.hiddenText, textToTest);
      if(height > heightOnALine) {
        delete tempArr.pop();
        lines.push(tempArr.join(' '));
        tempArr = [word];
      }
    }

    lines.push(tempArr.join(' '));

    if(onResult) {
      console.log('lines', lines);
      onResult(lines.join(`\n`));
    }
  }

  async measureView(textComp, textToTest) {
    return new Promise((resolve) => {
      this.setState({
        hiddenText: textToTest
      }, () => {
        setTimeout(() => {
          textComp.measure((a, b, width, height, px, py) => {
            resolve({
              width, height,
            });
          });
        }, 0);
      });
    });
  }

  render() {
    const {style} = this.props;
    return (
      <Text
        ref={'hiddenText'}
        style={{
          ...style,
          position: 'absolute',
          top: -1000, left: -1000
        }}
        onLayout={(e) => {
          {/*console.log('e', e.nativeEvent.layout);*/}
        }}
      >
        {this.state.hiddenText}
      </Text>
    )
  }
}