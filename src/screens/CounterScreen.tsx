import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {...state, count: state.count + action.payload};
    case 'decrease':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const increaseCounter = () => {
    dispatch({type: 'increase', payload: 1});
  };
  const decreaseCounter = () => {
    dispatch({type: 'decrease', payload: 1});
  };
  return (
    <View style={styles.screen}>
      <Button title={'Increase'} onPress={increaseCounter} />
      <Button title={'Decrease'} onPress={decreaseCounter} />
      <Text>Counter: {state.count}</Text>
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
