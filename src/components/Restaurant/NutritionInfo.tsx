import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Spacer from '../Spacer.tsx';
import Row from '../common/Row.tsx';
import { Text } from 'react-native-paper';
import { RestaurantNutritionInfo } from '../../types/Restaurant/RestaurantProduct.ts';
import { restaurantColors } from '../../theme/restaurantColors.ts';

type NutritionInfoProps = {
  nutritionInfo: RestaurantNutritionInfo;
};
const NutritionInfo = ({ nutritionInfo }: NutritionInfoProps) => (
  <View>
    <Text variant={'titleLarge'}>Nutrition Info</Text>
    <Spacer position={'bottom'} size={'medium'} />
    <Row justifyContent={'space-between'} wrap={true}>
      <Text variant={'bodyLarge'} style={styles.ninfo}>
        Calories: {nutritionInfo.calories}
      </Text>
      <Text variant={'bodyLarge'} style={styles.ninfo}>
        Fat: {nutritionInfo.fat}
      </Text>
      <Text variant={'bodyLarge'} style={styles.ninfo}>
        Protein: {nutritionInfo.protein}
      </Text>
      <Text variant={'bodyLarge'} style={styles.ninfo}>
        Carbohydrates: {nutritionInfo.carbohydrates}
      </Text>
    </Row>
  </View>
);

const styles = StyleSheet.create({
  ninfo: {
    color: restaurantColors.text.headingSecondary,
    fontWeight: 'bold',
  },
});

export default NutritionInfo;
