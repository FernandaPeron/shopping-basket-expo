import React  from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import { getInitialSafeArea } from 'expo/build/environment/getInitialSafeArea';

import header from '../assets/images/header.png';
const { width, height } = Image.resolveAssetSource(header);

export default function Basket() {
  return (
    <View style={styles.wrapper}>
      <Image
        source={header}
        style={styles.header}
      />
      <Text style={styles.title}>
        Basket Details
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  header: {
    width: '100%',
    height: height / width * Dimensions.get('screen').width,
    resizeMode: 'contain',
    marginTop: -getInitialSafeArea().top
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: 0,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
});
