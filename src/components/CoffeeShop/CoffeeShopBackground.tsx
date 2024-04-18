import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { coffeeShopColors } from '../../theme/coffeeShopColors.ts';

type CoffeeShopBackgroundProps = {
  children: React.ReactNode;
};
const CoffeeShopBackground = ({ children }: CoffeeShopBackgroundProps) => <View style={styles.screen}>{children}</View>;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: coffeeShopColors.background,
  },
});

export default CoffeeShopBackground;
