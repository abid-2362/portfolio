import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RestaurantBackground from '../../components/Restaurant/Background.tsx';
import restaurantProducts from '../../api/restaurant/products.ts';
import RestaurantSingleProduct from '../../components/Restaurant/RestaurantSingleProduct.tsx';
import { space } from '../../theme/spacing.ts';
import Row from '../../components/common/Row.tsx';
import { Text } from 'react-native-paper';

type RestaurantHomeScreenProps = {};
const RestaurantHomeScreen = ({}: RestaurantHomeScreenProps) => (
  <RestaurantBackground>
    <View>
      <Row justifyContent={'center'}>
        <Text variant={'headlineLarge'} style={styles.heading}>
          Tasty Fusion Kitchen
        </Text>
      </Row>
    </View>
    <View style={styles.screen}>
      <FlatList
        data={restaurantProducts}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <RestaurantSingleProduct product={item} />}
      />
    </View>
  </RestaurantBackground>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: space[2],
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: { fontWeight: '200', fontStyle: 'italic' },
});

export default RestaurantHomeScreen;
