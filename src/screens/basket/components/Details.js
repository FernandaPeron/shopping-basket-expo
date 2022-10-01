import React from 'react';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { Image, StyleSheet, View } from 'react-native';

export default function Details({ basket }) {
  return (
    <View>
      <Text style={styles.name}>{basket.name}</Text>
      <View style={styles.farmWrapper}>
        <Image source={basket.farmLogo} style={styles.farmLogo}/>
        <Text style={styles.farmName}>{basket.farmName}</Text>
      </View>
      <Text style={styles.description}>{basket.description}</Text>
      <Text style={styles.price}>{basket.price}</Text>

      <Button style={styles.buyButton} title="Buy"/>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginStart: 12,
  },
  farmLogo: {
    width: 32,
    height: 32,
  },
  farmWrapper: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  },
  buyButton: {
    marginTop: 16,
  }
});
