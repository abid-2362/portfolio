import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RestaurantParamsList } from '../../types/types.ts';
import { restaurantColors } from '../../theme/restaurantColors.ts';
import ProductBackIcon from './ProductBackIcon.tsx';

type BackButtonProps = {};
const BackButton = ({}: BackButtonProps) => {
  const navigation: NavigationProp<RestaurantParamsList> = useNavigation();
  return (
    <View style={styles.backIconContainer}>
      <IconButton icon={ProductBackIcon} onPress={navigation.goBack} style={styles.iconButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  backIconContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    // backgroundColor: 'white',
  },
  iconButton: {
    backgroundColor: restaurantColors.button.bg,
  },
});

export default BackButton;
