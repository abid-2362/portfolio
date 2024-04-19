import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Card, Divider, Text } from 'react-native-paper';
import { coffeeShopColors } from '../../theme/coffeeShopColors.ts';
import { space } from '../../theme/spacing.ts';

import { RestaurantParamsList } from '../../types/types.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import useImageSize from '../../hooks/CoffeeShop/useImageSize.ts';
import { RestaurantProduct } from '../../types/Restaurant/RestaurantProduct.ts';
import restaurantStyles from '../../styles/restaurantStyles.ts';
import Row from '../common/Row.tsx';
import Icon, { Icons } from '../common/Icons.tsx';
import Spacer from '../Spacer.tsx';
import { restaurantColors } from '../../theme/restaurantColors.ts';

type RestaurantSingleProductProps = {
  product: RestaurantProduct;
};
const RestaurantSingleProduct = ({ product }: RestaurantSingleProductProps) => {
  const navigation: NavigationProp<RestaurantParamsList> = useNavigation();

  const navigationHandler = () => {
    navigation.navigate('Details', {
      product: product,
    });
  };

  return (
    <>
      <View style={styles.productContainer}>
        <TouchableOpacity onPress={navigationHandler}>
          <Row>
            <View>
              <Image source={product.image} style={[styles.image]} />
            </View>
            <View style={[styles.textContainer]}>
              <Text variant={'titleMedium'} style={restaurantStyles.titleText} numberOfLines={1}>
                {product.name}
              </Text>
              <Text variant={'bodyMedium'} style={restaurantStyles.bodyText} numberOfLines={4}>
                {product.description}
              </Text>

              <Spacer size={'small'} position={'top'} />
              <Row justifyContent={'space-between'}>
                <Row>
                  <Icon type={Icons.Ionicons} name={'time-outline'} color={restaurantColors.text.headingSecondary} />
                  <Spacer size={'small'} position={'right'} />
                  <Text variant={'bodySmall'} style={[restaurantStyles.bodyText, restaurantStyles.textSecondary]}>
                    {product.preparation_time}
                  </Text>
                </Row>

                <Row>
                  <Icon
                    type={Icons.MaterialCommunityIcons}
                    name={'fire'}
                    color={restaurantColors.text.headingSecondary}
                  />
                  {/*<Spacer size={'small'} position={'right'} />*/}
                  <Text variant={'bodySmall'} style={[restaurantStyles.bodyText, restaurantStyles.textSecondary]}>
                    {product.nutrition_info.calories}
                  </Text>
                </Row>

                <Row>
                  {/*<Icon type={Icons.Entypo} name={'price-tag'} color={restaurantColors.text.headingSecondary} />*/}
                  {/*<Spacer size={'small'} position={'right'} />*/}

                  <View style={styles.priceContainer}>
                    <Text variant={'bodySmall'} style={[styles.priceText, restaurantStyles.buttonText]}>
                      ${product.price}
                    </Text>
                  </View>
                  {/*</View>*/}
                </Row>
              </Row>
            </View>
          </Row>
        </TouchableOpacity>
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
    // borderWidth: 0.5,
    // borderColor: restaurantColors.button.bg,

    // shadowColor: 'black', // Set shadow color
    // shadowOffset: { width: 0, height: 0 }, // Set shadow offset
    // shadowOpacity: 0.2, // Set shadow opacity
    // shadowRadius: 3, // Set shadow radius
  },
  textContainer: {
    flex: 1,
    padding: space[2],
    alignSelf: 'flex-start',
  },
  titleText: {
    color: coffeeShopColors.text.headingSecondary,
  },
  bodyText: {
    color: coffeeShopColors.text.bodyText,
  },
  image: { width: 150, height: 150, objectFit: 'cover', borderRadius: 10 },
  priceContainer: {
    backgroundColor: restaurantColors.button.bg,
    paddingVertical: space[1],
    paddingHorizontal: space[2],
    borderRadius: 10,
  },
  priceText: {
    // fontSize: 14,
  },
});

export default RestaurantSingleProduct;
