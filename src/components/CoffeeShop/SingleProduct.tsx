import * as React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { CoffeeProduct } from '../../types/CoffeeShop/CoffeeProduct.ts';
import { useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { coffeeShopColors } from '../../theme/coffeeShopColors.ts';
import { space } from '../../theme/spacing.ts';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import coffeeShopStyles from '../../styles/coffeeShopStyles.ts';
import { CoffeeShopParamsList } from '../../types/types.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import useImageSize from '../../hooks/CoffeeShop/useImageSize.ts';

type SingleProductProps = {
  product: CoffeeProduct;
};
const SingleProduct = ({ product }: SingleProductProps) => {
  const navigation: NavigationProp<CoffeeShopParamsList> = useNavigation();
  const { imageSize } = useImageSize(product.image);

  const navigationHandler = () => {
    navigation.navigate('Details', {
      product: product,
    });
  };

  return (
    <TouchableOpacity onPress={navigationHandler}>
      <View style={styles.productContainer}>
        <View>
          <Image source={product.image} style={[{ width: imageSize.width, height: imageSize.height }]} />
        </View>
        <View style={styles.textContainer}>
          <Text variant={'titleLarge'} style={coffeeShopStyles.titleText}>
            {product.title}
          </Text>
          <Text variant={'titleLarge'} style={coffeeShopStyles.bodyText} numberOfLines={1}>
            {product.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: space[2],
  },
  textContainer: {
    padding: space[2],
  },
  titleText: {
    color: coffeeShopColors.text.headingSecondary,
  },
  bodyText: {
    color: coffeeShopColors.text.bodyText,
  },
});

export default SingleProduct;
