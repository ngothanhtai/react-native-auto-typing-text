import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class AutotypingText extends Component {

  constructor(props){
    super(props);
    this.state = {textShow: ''};
    const {text, charMovingTime, onComplete} = this.props;
    if(text === '') {
      return;
    }

    let textShow = '';

    let counter = 0;
    let len = text.length;

    let interval = setInterval(
      () => {
        textShow += text[counter];
        this.setState({textShow: textShow});

        counter++;
        if(counter >= len) {
          clearInterval(interval);
          if(onComplete) {
            onComplete();
          }
        }
      }, parseInt(charMovingTime)
    );
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    const {style} = this.props;
    let textShow = this.state.textShow;
    return (
      <View style={{
          flex: 1
      }}
      >
        <Text style={{
          ...style
        }}
        >
          {textShow}
        </Text>
      </View>
    );
  }

}

AutotypingText.defaultProps = {
  text: 'Autotyping text demo',
  charMovingTime: '50',
  style: {
    color: 'black',
    fontSize: 14
  },
};

AutotypingText.propTypes = {
  text: React.PropTypes.string,
  charMovingTime: React.PropTypes.number,
  style: React.PropTypes.object,
  onComplete: React.PropTypes.func,
};

export default AutotypingText;
