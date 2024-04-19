import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import useImageSize from '../../hooks/CoffeeShop/useImageSize.ts';
import { RestaurantParamsList } from '../../types/types.ts';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import RestaurantBackground from '../../components/Restaurant/Background.tsx';
import Icon, { Icons } from '../../components/common/Icons.tsx';
import { restaurantColors } from '../../theme/restaurantColors.ts';
import { space } from '../../theme/spacing.ts';
import BottomSpacer from '../../components/common/BottomSpacer.tsx';
import Row from '../../components/common/Row.tsx';
import restaurantStyles from '../../styles/restaurantStyles.ts';
import PreperationTime from '../../components/Restaurant/PreperationTime.tsx';
import UList from '../../components/Restaurant/UList.tsx';
import NutritionInfo from '../../components/Restaurant/NutritionInfo.tsx';
import Animated, { FadeInDown, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const initialDelay = 1000;
const BackIcon = () => <Icon type={Icons.Ionicons} name={'chevron-back'} color={restaurantColors.button.text} />;

type ProductDetailsPageProps = {};
const ProductDetailsPage = ({}: ProductDetailsPageProps) => {
  const navigation: NavigationProp<RestaurantParamsList> = useNavigation();
  const route: RouteProp<RestaurantParamsList, 'Details'> = useRoute();
  const { product } = route.params;
  const { imageSize } = useImageSize(product.image);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(imageSize.width),
      height: withTiming(imageSize.height, { duration: initialDelay }),
    };
  });

  if (imageSize.width < 1) {
    return null;
  }

  return (
    <RestaurantBackground>
      <View style={styles.backIconContainer}>
        <IconButton icon={BackIcon} onPress={navigation.goBack} style={styles.iconButton} />
      </View>
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View>
          {imageSize.width > 1 ? (
            <Animated.Image source={product.image} style={[styles.imageStyles, animatedStyles]} />
          ) : null}
        </View>
        <View style={styles.mainAreaContainer}>
          <Animated.View entering={FadeInDown.delay(initialDelay + 100)} style={styles.section}>
            <Row justifyContent={'space-between'} wrap={true}>
              <Text variant={'titleLarge'} style={styles.productName}>
                {product.name}
              </Text>
              <Text style={{ alignSelf: 'flex-end', marginBottom: 4 }}>{product.serving_size}</Text>
            </Row>

            <Row justifyContent={'space-between'}>
              <PreperationTime preparation_time={product.preparation_time} />
              <Text variant={'titleLarge'} style={styles.productPrice}>
                ${product.price}
              </Text>
            </Row>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(initialDelay + 200)} style={styles.section}>
            <Text variant={'bodyLarge'}>{product.description}</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(initialDelay + 400)} style={styles.section}>
            <UList label={'Ingredients'} list={product.ingredients} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(initialDelay + 500)} style={styles.section}>
            <UList label={'Allergen Info'} labelStyle={restaurantStyles.textSecondary} list={product.allergen_info} />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(initialDelay + 600)} style={styles.section}>
            <NutritionInfo nutritionInfo={product.nutrition_info} />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(initialDelay + 700)} style={styles.section}>
            <Text variant={'titleLarge'}>Special Instructions</Text>
            <Text variant={'bodyLarge'}>{product.special_instructions}</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(initialDelay + 800)}>
            <Button mode={'contained'} buttonColor={restaurantColors.button.bg}>
              Order for ${product.price}
            </Button>
          </Animated.View>
        </View>
        <BottomSpacer />
      </ScrollView>
    </RestaurantBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backIconContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999,
    // backgroundColor: 'white',
  },
  iconButton: {
    backgroundColor: restaurantColors.button.bg,
  },
  mainAreaContainer: {
    padding: space[4],
    backgroundColor: restaurantColors.background,
    position: 'relative',
    // top: -10,
    borderRadius: space[2],
  },
  section: {
    marginBottom: space[4],
  },
  productName: {
    fontWeight: '900',
  },
  productPrice: {
    color: restaurantColors.text.headingSecondary,
    fontWeight: '900',
    textAlign: 'right',
  },
  ingredient: {
    marginLeft: space[2],
  },
  bullet: {
    fontSize: 16,
    // marginRight: space[2],
  },
  ninfo: {
    color: restaurantColors.text.headingSecondary,
    fontWeight: 'bold',
  },
  imageStyles: {
    width: '100%',
    // aspectRatio: 16 / 9,
  },
});

export default ProductDetailsPage;
