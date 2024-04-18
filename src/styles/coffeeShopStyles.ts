import { StyleSheet } from 'react-native';
import { fonts } from '../theme/fonts.ts';
import { coffeeShopColors } from '../theme/coffeeShopColors.ts';

const coffeeShopStyles = StyleSheet.create({
  titleText: {
    color: coffeeShopColors.text.headingSecondary,
    fontFamily: fonts.heading,
    // fontSize: 18,
  },
  bodyText: {
    fontFamily: fonts.body,
    color: coffeeShopColors.text.heading,
    // fontSize: 16,
  },
});

export default coffeeShopStyles;
