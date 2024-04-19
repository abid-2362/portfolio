import { StyleSheet } from 'react-native';
import { fonts } from '../theme/fonts.ts';
import { restaurantColors } from '../theme/restaurantColors.ts';

const coffeeShopStyles = StyleSheet.create({
  titleText: {
    color: restaurantColors.text.headingSecondary,
    // fontFamily: fonts.heading,
    // fontSize: 18,
  },
  bodyText: {
    // fontFamily: fonts.body,
    color: restaurantColors.text.heading,
    // fontSize: 16,
  },
  buttonText: {
    color: restaurantColors.button.text,
  },
  textSecondary: {
    color: restaurantColors.text.headingSecondary,
  },
});

export default coffeeShopStyles;
