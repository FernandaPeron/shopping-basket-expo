import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Text from '../../../components/Text';
import { getInitialSafeArea } from 'expo/build/environment/getInitialSafeArea';

export default function Header({ basket }) {
  const { width, height } = Image.resolveAssetSource(basket.headerImage);
  const imageHeight = height / width * Dimensions.get('screen').width;
  return (
    <>
      <Image
        source={basket.headerImage}
        style={[styles.image, { height: imageHeight }]}
      />
      <Text style={styles.title}>
        Basket Details
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: getInitialSafeArea().top,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
