import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Spacer from '../components/Spacer.tsx';
import { HomeNavigatorParamsList } from '../types/types.ts';

const HomeScreen = () => {
  const navigator: NavigationProp<HomeNavigatorParamsList> = useNavigation();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentStyles}>
      <View style={styles.viewStyle}>
        <Text variant={'bodyLarge'} style={styles.centerText}>
          Home Screen
        </Text>
        <Button style={styles.button} mode={'contained'} onPress={() => navigator.navigate('Counter')}>
          Counter Demo
        </Button>

        <Button style={styles.button} mode={'contained'} onPress={() => navigator.navigate('Color')}>
          Color Demo
        </Button>

        <Button style={styles.button} mode={'contained'} onPress={() => navigator.navigate('RGBPlayGround')}>
          RGB Playground Demo
        </Button>

        <Button style={styles.button} mode={'contained'} onPress={() => navigator.navigate('Text')}>
          Text Field Demo
        </Button>

        <Button style={styles.button} mode={'contained'} onPress={() => navigator.navigate('BoxScreen')}>
          Box Demo
        </Button>

        <Spacer>
          <Divider bold={true} />
        </Spacer>
        <Text variant={'bodyLarge'} style={styles.centerText}>
          Style
        </Text>
        <Button
          style={styles.button}
          mode={'contained'}
          onPress={() => navigator.navigate('CoffeeShopNavigator', { screen: 'Home' })}>
          Coffee Shop
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    // borderColor: 'orange',
    // borderWidth: 5,
  },
  contentStyles: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'blue',
    // borderWidth: 5,
  },
  button: {
    marginBottom: 5,
  },
  viewStyle: {
    width: '100%',
    flex: 1,
    padding: 5,
  },
  centerText: {
    textAlign: 'center',
  },
});

export default HomeScreen;
