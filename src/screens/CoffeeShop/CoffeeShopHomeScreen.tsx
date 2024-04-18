import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import coffeeShopProducts from '../../api/coffeeshop/products.ts';
import SingleProduct from '../../components/CoffeeShop/SingleProduct.tsx';
import CoffeeShopBackground from '../../components/CoffeeShop/CoffeeShopBackground.tsx';

type TeaHomeScreenProps = {};
const CoffeeShopHomeScreen = ({}: TeaHomeScreenProps) => (
  <CoffeeShopBackground>
    <View style={styles.screen}>
      <FlatList data={coffeeShopProducts} renderItem={({ item }) => <SingleProduct product={item} />} />
    </View>
  </CoffeeShopBackground>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CoffeeShopHomeScreen;
