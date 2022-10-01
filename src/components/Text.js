import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function AppText({ children, style }) {
  const finalStyle = style?.fontWeight === 'bold' ? styles.textBold : styles.text;
  return (
    <Text style={[style, finalStyle]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
  },
  textBold: {
    fontFamily: "MontserratBold",
  },
})
