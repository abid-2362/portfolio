import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CoffeeShopParamsList } from '../types/types.ts';
import TeaHomeScreen from '../screens/TeaUI/TeaHomeScreen.tsx';

const Stack = createNativeStackNavigator<CoffeeShopParamsList>();

type TeaUINavigatorProps = {};
const CoffeeShopNavigator = ({}: TeaUINavigatorProps) => (
  <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={'Home'} component={TeaHomeScreen} />
  </Stack.Navigator>
);

export default CoffeeShopNavigator;
