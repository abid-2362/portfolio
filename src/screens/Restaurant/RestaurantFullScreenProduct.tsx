import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RestaurantParamsList } from '../../types/types.ts';
import useImageSize from '../../hooks/CoffeeShop/useImageSize.ts';
import Animated, { FadeInDown, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import BackButton from '../../components/Restaurant/BackButton.tsx';
import RestaurantBackground from '../../components/Restaurant/Background.tsx';
import { space } from '../../theme/spacing.ts';

const initialDelay = 1000;
type RestaurantFullScreenProductProps = {};
const RestaurantFullScreenProduct = ({}: RestaurantFullScreenProductProps) => {
  const route: RouteProp<RestaurantParamsList, 'FullScreenProduct'> = useRoute();
  const { product } = route.params;
  const { imageSize, screenSize } = useImageSize(product.image);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(screenSize.width),
      height: withTiming(screenSize.height, { duration: initialDelay }),
    };
  });

  if (imageSize.width < 1) {
    return null;
  }

  return (
    <RestaurantBackground>
      <View style={styles.screen}>
        <BackButton />
        <Animated.Image source={product.image} style={[styles.imageStyles, animatedStyles]} />
        <Animated.View
          entering={FadeInDown.delay(initialDelay + 200)}
          style={[styles.titleContainer, { width: screenSize.width - space[2] * 2 }]}>
          <Text style={styles.productName} variant={'headlineLarge'}>
            {product.name}
          </Text>
        </Animated.View>
      </View>
    </RestaurantBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    objectFit: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: space[2],
    padding: space[2],
  },
  productName: {
    textAlign: 'center',
  },
});

export default RestaurantFullScreenProduct;
