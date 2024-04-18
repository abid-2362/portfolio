import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CoffeeShopParamsList } from '../types/types.ts';
import CoffeeShopHomeScreen from '../screens/CoffeeShop/CoffeeShopHomeScreen.tsx';
import CoffeeShopDetailsScreen from '../screens/CoffeeShop/CoffeeShopDetailsScreen.tsx';

const Stack = createNativeStackNavigator<CoffeeShopParamsList>();

type TeaUINavigatorProps = {};
const CoffeeShopNavigator = ({}: TeaUINavigatorProps) => (
  <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={'Home'} component={CoffeeShopHomeScreen} />
    <Stack.Screen name={'Details'} component={CoffeeShopDetailsScreen} />
  </Stack.Navigator>
);

export default CoffeeShopNavigator;
