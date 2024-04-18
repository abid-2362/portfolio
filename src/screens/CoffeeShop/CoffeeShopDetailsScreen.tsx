import * as React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import coffeeShopStyles from '../../styles/coffeeShopStyles.ts';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CoffeeShopParamsList } from '../../types/types.ts';
import { Button, IconButton, Text } from 'react-native-paper';
import useImageSize from '../../hooks/CoffeeShop/useImageSize.ts';
import CoffeeShopBackground from '../../components/CoffeeShop/CoffeeShopBackground.tsx';
import Spacer from '../../components/Spacer.tsx';
import { coffeeShopColors } from '../../theme/coffeeShopColors.ts';
import { space } from '../../theme/spacing.ts';
import { BackIcon, ShareIcon } from '../../components/common/Icons.tsx';
import Row from '../../components/common/Row.tsx';
import { CoffeeProduct } from '../../types/CoffeeShop/CoffeeProduct.ts';

type HeaderBarProps = {
  product: CoffeeProduct;
};
const HeaderBar = ({ product }: HeaderBarProps) => {
  const navigation: NavigationProp<CoffeeShopParamsList> = useNavigation();
  return (
    <Row justifyContent={'space-between'}>
      <IconButton icon={BackIcon} onPress={navigation.goBack} />
      <Text variant={'titleLarge'} style={coffeeShopStyles.titleText}>
        {product.title}
      </Text>
      <IconButton icon={ShareIcon} onPress={navigation.goBack} />
    </Row>
  );
};
type CofeeShopDetailsScreenProps = {};
const CoffeeShopDetailsScreen = ({}: CofeeShopDetailsScreenProps) => {
  const route: RouteProp<CoffeeShopParamsList, 'Details'> = useRoute();
  const { product } = route.params;

  const { imageSize } = useImageSize(product.image);

  return (
    <CoffeeShopBackground>
      <ScrollView style={styles.productContainer}>
        <HeaderBar product={product} />
        <View>
          <Image source={product.image} style={[{ width: imageSize.width, height: imageSize.height }]} />
        </View>
        <View style={styles.textContainer}>
          <Animated.View entering={FadeInLeft.delay(300)}>
            <Spacer size={'large'} />
            <Text variant={'headlineLarge'} style={coffeeShopStyles.titleText}>
              {product.title}
            </Text>
            <Spacer size={'large'} />
            <Text variant={'headlineMedium'} style={[coffeeShopStyles.bodyText, { textAlign: 'justify' }]}>
              {product.description}
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInLeft.delay(500)}>
            <Spacer size={'xl'} position={'top'} />
            <Text variant={'headlineLarge'} style={coffeeShopStyles.titleText}>
              Another Headline
            </Text>
            <Spacer size={'large'} />
            <Text variant={'headlineMedium'} style={[coffeeShopStyles.bodyText, { textAlign: 'justify' }]}>
              {product.description}
            </Text>
          </Animated.View>

          <Spacer size={'xl'} />
          <Animated.View entering={FadeInLeft.delay(500)}>
            <Button
              mode={'contained'}
              buttonColor={coffeeShopColors.button.bg}
              textColor={coffeeShopColors.button.text}
              style={{ paddingVertical: space[1] }}
              labelStyle={{ fontSize: 14, fontWeight: 'bold' }}>
              Order for $9.99
            </Button>
          </Animated.View>
          <Spacer size={'xl'} />
        </View>
      </ScrollView>
    </CoffeeShopBackground>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textContainer: {
    padding: 30,
  },
});

export default CoffeeShopDetailsScreen;
