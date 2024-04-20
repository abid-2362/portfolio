import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import Icon, { Icons } from '../common/Icons.tsx';
import { restaurantColors } from '../../theme/restaurantColors.ts';

type RestaurantIconsProps = {};
export const CartIcon = ({}: RestaurantIconsProps) => (
  <Icon type={Icons.Ionicons} name={'cart'} color={restaurantColors.button.text} />
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
