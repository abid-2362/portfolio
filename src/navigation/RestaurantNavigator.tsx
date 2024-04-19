import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantParamsList } from '../types/types.ts';
import RestaurantHomeScreen from '../screens/Restaurant/RestaurantHomeScreen.tsx';
import ProductDetailsPage from '../screens/Restaurant/ProductDetailsPage.tsx';

const Stack = createNativeStackNavigator<RestaurantParamsList>();

type TeaUINavigatorProps = {};
const CoffeeShopNavigator = ({}: TeaUINavigatorProps) => (
  <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={'Home'} component={RestaurantHomeScreen} />
    <Stack.Screen name={'Details'} component={ProductDetailsPage} />
  </Stack.Navigator>
);

export default CoffeeShopNavigator;
