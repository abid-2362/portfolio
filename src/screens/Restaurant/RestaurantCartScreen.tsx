import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import RestaurantCartSingleProduct from '../../components/Restaurant/RestaurantCartSingleProduct.tsx';
import restaurantProducts from '../../api/restaurant/products.ts';
import Background from '../../components/Restaurant/Background.tsx';
import _random from 'lodash/random';
import BottomSpacer from '../../components/common/BottomSpacer.tsx';
import Decimal from 'decimal.js';
import { RestaurantCartItem } from '../../types/Restaurant/RestaurantProduct.ts';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.ts';

type FooterComponentProps = {
  cartItems: RestaurantCartItem[];
};
const FooterComponent = ({ cartItems }: FooterComponentProps) => {
  const total = cartItems.reduce(
    (sum: Decimal, item) => sum.plus(new Decimal(item.qty).mul(item.price)),
    new Decimal(0),
  );
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerButtonContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Total: {Number(total)}</Text>
        </TouchableOpacity>
      </View>
      <BottomSpacer />
    </View>
  );
};

type CartScreenProps = {};
const RestaurantCartScreen = ({}: CartScreenProps) => {
  // const cartProducts = restaurantProducts.slice(0, 4);
  // const cartItems: RestaurantCartItem[] = cartProducts.map(prod => ({ ...prod, qty: _random(1, 4) }));
  const { state: cartItems } = useContext(CartContext);
  return (
    <Background showCart={false}>
      <View style={styles.screen}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <RestaurantCartSingleProduct product={item} />}
          ListFooterComponent={() => <FooterComponent cartItems={cartItems} />}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default RestaurantCartScreen;
