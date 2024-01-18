import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useState} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return state + action.payload;
    case 'decrease':
      return state - action.payload;
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.screen}>
      <Button title={'Increase'} onPress={increaseCounter} />
      <Button title={'Decrease'} onPress={decreaseCounter} />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default CounterScreen;
