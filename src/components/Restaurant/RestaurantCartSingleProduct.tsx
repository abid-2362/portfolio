import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Divider, IconButton, Text } from 'react-native-paper';
import { coffeeShopColors } from '../../theme/coffeeShopColors.ts';
import { space } from '../../theme/spacing.ts';

import { RestaurantParamsList } from '../../types/types.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RestaurantCartItem, RestaurantProduct } from '../../types/Restaurant/RestaurantProduct.ts';
import restaurantStyles from '../../styles/restaurantStyles.ts';
import { restaurantColors } from '../../theme/restaurantColors.ts';
import Row from '../common/Row.tsx';
import { useState } from 'react';
import Decimal from 'decimal.js';

type RestaurantCartSingleProductProps = {
  product: RestaurantCartItem;
};
const RestaurantCartSingleProduct = ({ product }: RestaurantCartSingleProductProps) => {
  const [quantity, setQuantity] = useState<number>(product.qty);
  const navigation: NavigationProp<RestaurantParamsList> = useNavigation();

  const navigationHandler = () => {
    navigation.navigate('Details', {
      product: product,
    });
  };

  const increaseQty = () => {
    // cartItem.qty += 1;
    setQuantity(q => q + 1);
  };
  const decreaseQty = () => {
    setQuantity(q => (q - 1 < 0 ? 0 : q - 1));
  };

  return (
    <>
      <View style={styles.productContainer}>
        <TouchableOpacity onPress={navigationHandler}>
          <View>
            <View>
              <Image source={product.image} style={[styles.image]} />
              <View style={[styles.textContainer]}>
                <Text variant={'titleMedium'} style={[restaurantStyles.titleText, styles.titleText]} numberOfLines={1}>
                  {product.name}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/*Item metadata*/}
        <View style={styles.metaDataContainer}>
          <Row justifyContent={'space-between'}>
            <Text>${product.price}</Text>
            <View style={styles.qtyContainer}>
              <Row justifyContent={'space-between'}>
                <IconButton
                  icon={'minus'}
                  onPress={decreaseQty}
                  iconColor={restaurantColors.button.text}
                  containerColor={restaurantColors.button.bg}
                  style={{ borderRadius: 5 }}
                  size={12}
                />
                <Text>{quantity}</Text>
                <IconButton
                  style={{ borderRadius: 5 }}
                  icon={'plus'}
                  size={12}
                  onPress={increaseQty}
                  iconColor={restaurantColors.button.text}
                  containerColor={restaurantColors.button.bg}
                />
              </Row>
            </View>
            <Row justifyContent={'flex-end'} style={{ width: 80 }}>
              <Text>${Number(new Decimal(product.price).mul(quantity))}</Text>
            </Row>
          </Row>
        </View>

        {/*<Row justifyContent={'flex-end'}>
          <View style={styles.qtyContainer}>
            <Row justifyContent={'space-between'}>
              <IconButton
                icon={'minus'}
                onPress={decreaseQty}
                iconColor={restaurantColors.button.text}
                containerColor={restaurantColors.button.bg}
                style={{ borderRadius: 5 }}
                size={12}
              />
              <Text>{quantity}</Text>
              <IconButton
                style={{ borderRadius: 5 }}
                icon={'plus'}
                size={12}
                onPress={increaseQty}
                iconColor={restaurantColors.button.text}
                containerColor={restaurantColors.button.bg}
              />
            </Row>
          </View>
        </Row>*/}
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginVertical: space[2],
    padding: space[2],
    backgroundColor: restaurantColors.background,
    borderRadius: 0,
  },
  textContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: space[3],
    alignSelf: 'flex-start',
    borderColor: 'orange',
    borderWidth: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 10,
    // backgroundColor: restaurantColors.button.bg,
    backgroundColor: 'rgba(243, 156, 41, 0.8)',
  },
  titleText: {
    textAlign: 'center',
    color: coffeeShopColors.text.headingSecondary,
  },
  image: { width: '100%', height: 350, objectFit: 'cover', borderRadius: 10 },
  metaDataContainer: {
    paddingTop: space[3],
    paddingHorizontal: space[3],
  },
  qtyContainer: {},
});

export default RestaurantCartSingleProduct;
