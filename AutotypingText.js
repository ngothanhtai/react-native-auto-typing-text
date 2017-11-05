import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import HiddenText from './HiddenText';
import PropTypes from 'prop-types';

export default class AutotypingText extends Component {

  static defaultProps = {
    text: '',
    charMovingTime: '50',
    delay: 0,
    style: {
      color: 'black',
      fontSize: 14
    },
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    charMovingTime: PropTypes.number.isRequired,
    style: PropTypes.object,
    onComplete: PropTypes.func,
    delay: PropTypes.number,
  };

  typingIntervalId = 0;
  delayTimeoutId = 0;
  constructor(props){
    super(props);
    this.state = {
      textShow: '',
    };
  }

  componentWillUnmount() {
    clearInterval(this.typingIntervalId);
    clearTimeout(this.delayTimeoutId);
  }

  _onResult = (text) => {
    const { delay } = this.props;
    clearTimeout(this.delayTimeoutId);
    this.delayTimeoutId = setTimeout(() => {
      this.startTyping(text);
    }, delay);
  };

  startTyping(text) {
    const {charMovingTime, onComplete} = this.props;
    if(text === '') {
      return;
    }
    let textShow = '';
    let counter = 0;
    let len = text.length;

    clearInterval(this.typingIntervalId);
    this.typingIntervalId = setInterval(
      () => {
        textShow += text[counter];
        this.setState({textShow: textShow});

        counter++;
        if(counter >= len) {
          clearInterval(this.typingIntervalId);
          if(onComplete) {
            onComplete();
          }
        }
      }, parseInt(charMovingTime)
    );
  }

  render() {
    let textShow = this.state.textShow;
    return (
      <View style={[styles.flex1]}>
        <Text { ...this.props }>
          {textShow}
        </Text>

        <HiddenText
          { ...this.props }
          onResult={this._onResult}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  }
});
