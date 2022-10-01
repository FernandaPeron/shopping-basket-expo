import React  from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Details from './components/Details';

import basket from '../../mocks/basket';
import Text from '../../components/Text';
import ItemsList from './components/ItemsList';


export default function Basket() {
  return (
    <ScrollView>
      <Header basket={basket}/>
      <View style={styles.body}>
        <Details basket={basket}/>
        <Text style={styles.itemsTitle}>Items</Text>
        <ItemsList items={basket.items}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemsTitle: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  body: {
    padding: 16,
  }
})
