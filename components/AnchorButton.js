import { CHECKIN_COLOR } from '../constants/Common';
import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class AnchorButton extends React.Component {
  render() {
    const { onPress, text } = this.props;

    return (
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>      
    );
  }
}

AnchorButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: CHECKIN_COLOR,
    flexDirection: 'column',
    height: 0.08 * height,
    justifyContent: 'center',
    width: width
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: '500'
  }  
});
