import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { restaurantColors } from '../../theme/restaurantColors.ts';

type RestaurantBackgroundProps = {
  children: React.ReactNode;
};
const RestaurantBackground = ({ children }: RestaurantBackgroundProps) => <View style={styles.screen}>{children}</View>;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // width: '100%',
    // borderColor: 'orange',
    // borderWidth: 5,
    backgroundColor: restaurantColors.background,
  },
});

export default RestaurantBackground;
