import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { restaurantColors } from '../../theme/restaurantColors.ts';

type RestaurantBackgroundProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};
const RestaurantBackground = ({ children, backgroundColor = undefined }: RestaurantBackgroundProps) => (
  <View style={[styles.screen, backgroundColor ? { backgroundColor: backgroundColor } : {}]}>{children}</View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // width: '100%',
    // borderColor: 'orange',
    // borderWidth: 5,
    backgroundColor: restaurantColors.background,
    // backgroundColor: restaurantColors.text.headingSecondary,
  },
});

export default RestaurantBackground;
