import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from '../../../components/Text';

export default function ItemsList({ items }) {
  const list = items.map((item) => (
    <View style={styles.item} key={item.name}>
      <Image source={item.image} style={styles.image}/>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  ))
  return (
    <>
      {list}
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: '#464646'
  },
});
