import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigator: NavigationProp<any> = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button
        title={'Counter Demo'}
        onPress={() => navigator.navigate('Counter')}
      />

      <Button
        title={'Color Demo'}
        onPress={() => navigator.navigate('Color')}
      />

      <Button
        title={'RGB Playground Demo'}
        onPress={() => navigator.navigate('RGBPlayGround')}
      />

      <Button
        title={'Text Field Demo'}
        onPress={() => navigator.navigate('Text')}
      />

      <Button
        title={'Box Demo'}
        onPress={() => navigator.navigate('BoxScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
