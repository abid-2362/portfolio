import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantParamsList } from '../types/types.ts';
import RestaurantHomeScreen from '../screens/Restaurant/RestaurantHomeScreen.tsx';
import ProductDetailsPage from '../screens/Restaurant/ProductDetailsPage.tsx';
import RestaurantFullScreenProduct from '../screens/Restaurant/RestaurantFullScreenProduct.tsx';
import RestaurantCartScreen from '../screens/Restaurant/RestaurantCartScreen.tsx';
import { CartProvider } from '../context/CartContext.ts';

const Stack = createNativeStackNavigator<RestaurantParamsList>();

type TeaUINavigatorProps = {};
const CoffeeShopNavigator = ({}: TeaUINavigatorProps) => (
  <CartProvider>
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Home'} component={RestaurantHomeScreen} />
      <Stack.Screen name={'Details'} component={ProductDetailsPage} />
      <Stack.Screen
        name={'FullScreenProduct'}
        component={RestaurantFullScreenProduct}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={'Cart'}
        component={RestaurantCartScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  </CartProvider>
);

export default CoffeeShopNavigator;
