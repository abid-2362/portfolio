/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import CounterScreen from '../screens/CounterScreen.tsx';
import ColorScreen from '../screens/ColorScreen.tsx';
import RGBPlayGroundScreen from '../screens/RGBPlayGroundScreen.tsx';
import TextScreen from '../screens/TextScreen.tsx';
import BoxScreen from '../screens/BoxScreen.tsx';
import { HomeNavigatorParamsList } from '../types/types.ts';
import CoffeeShopNavigator from './CoffeeShopNavigator.tsx';
import RestaurantNavigator from './RestaurantNavigator.tsx';

const Stack = createNativeStackNavigator<HomeNavigatorParamsList>();

function HomeNavigator(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Counter'} component={CounterScreen} />
        <Stack.Screen name={'Color'} component={ColorScreen} />
        <Stack.Screen name={'RGBPlayGround'} component={RGBPlayGroundScreen} />
        <Stack.Screen name={'Text'} component={TextScreen} options={{ title: 'Text Demo' }} />
        <Stack.Screen name={'BoxScreen'} component={BoxScreen} options={{ title: 'Box Model in React Native' }} />
        <Stack.Screen
          name={'CoffeeShopNavigator'}
          component={CoffeeShopNavigator}
          options={{ title: 'Coffee Shop', headerShown: false }}
        />
        <Stack.Screen
          name={'RestaurantNavigator'}
          component={RestaurantNavigator}
          options={{ title: 'Restaurant', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigator;
