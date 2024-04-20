import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { restaurantColors } from '../../theme/restaurantColors.ts';
import { FAB } from 'react-native-paper';
import { RestaurantParamsList } from '../../types/types.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CartIcon } from './RestaurantIcons.tsx';

type RestaurantBackgroundProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  showCart?: boolean;
};
const RestaurantBackground = ({
  children,
  backgroundColor = undefined,
  showCart = true,
}: RestaurantBackgroundProps) => {
  const navigation: NavigationProp<RestaurantParamsList> = useNavigation();
  const cartHandler = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={[styles.screen, backgroundColor ? { backgroundColor: backgroundColor } : {}]}>
      {children}
      {showCart && <FAB icon={CartIcon} onPress={cartHandler} style={styles.cartFab} />}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // width: '100%',
    // borderColor: 'orange',
    // borderWidth: 5,
    backgroundColor: restaurantColors.background,
    // backgroundColor: restaurantColors.text.headingSecondary,
  },
  cartFab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: restaurantColors.button.bg,
  },
});

export default RestaurantBackground;
