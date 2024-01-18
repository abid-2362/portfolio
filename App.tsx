/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CounterScreen from './src/screens/CounterScreen.tsx';
import ColorScreen from './src/screens/ColorScreen.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
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
      <Stack.Navigator initialRouteName={'Color'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Counter'} component={CounterScreen} />
        <Stack.Screen name={'Color'} component={ColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
