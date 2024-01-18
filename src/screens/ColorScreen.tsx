import * as React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import ColorBox from '../components/ColorBox.tsx';
import {randomgRGB} from '../utils/utils.ts';
import {useReducer} from 'react';

interface IState {
  colors: string[];
}
interface IAction {
  type: string;
  payload: string;
}
const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'add':
      return {...state, colors: [...state.colors, action.payload]};
    case 'reset':
      return {...state, colors: []};
    default:
      return state;
  }
};

const ColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, {colors: []});

  const addColor = () => {
    dispatch({type: 'add', payload: randomgRGB()});
  };

  const resetColors = () => {
    dispatch({type: 'reset', payload: ''});
  };

  return (
    <View style={styles.screen}>
      <Button title={'Add Color'} onPress={addColor} />
      <Button title={'Reset Colors'} onPress={resetColors} />
      <FlatList
        data={state.colors}
        renderItem={({item: color}) => {
          return <ColorBox color={color} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
});

export default ColorScreen;
