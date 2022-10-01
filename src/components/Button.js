import React from 'react';
import Text from './Text';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({ style, onPress, children, title }) {
  return (
    <TouchableOpacity
      style={[style, styles.button]}
      onPress={onPress}
    >
      {children || <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  }
})
