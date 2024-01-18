import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import FunctionSection from '../components/RGBPlayGroundScreen/FunctionSection.tsx';
import ColorBox from '../components/ColorBox.tsx';
import {useReducer} from 'react';

const CHANGE_VALUE = 15;

interface IState {
  red: number;
  green: number;
  blue: number;
}

interface IAction {
  type: 'red' | 'green' | 'blue';
  payload: number;
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};

    case 'green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};

    case 'blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};

    default:
      return state;
  }
};

const RGBPlayGroundScreen = () => {
  const [state, dispatch]: [IState, React.Dispatch<IAction>] = useReducer(
    reducer,
    {
      red: 0,
      green: 0,
      blue: 0,
    },
  );

  return (
    <View style={styles.screen}>
      <FunctionSection
        amount={state.red}
        title={'Red'}
        onIncrease={() => {
          dispatch({type: 'red', payload: CHANGE_VALUE});
        }}
        onDecrease={() => {
          dispatch({type: 'red', payload: -1 * CHANGE_VALUE});
        }}
      />
      <FunctionSection
        title={'Green'}
        amount={state.green}
        onIncrease={() => {
          dispatch({type: 'green', payload: CHANGE_VALUE});
        }}
        onDecrease={() => {
          dispatch({type: 'green', payload: -1 * CHANGE_VALUE});
        }}
      />
      <FunctionSection
        title={'Blue'}
        amount={state.blue}
        onIncrease={() => {
          dispatch({type: 'blue', payload: CHANGE_VALUE});
        }}
        onDecrease={() => {
          dispatch({type: 'blue', payload: -1 * CHANGE_VALUE});
        }}
      />

      <ColorBox color={`rgb(${state.red}, ${state.green}, ${state.blue})`} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default RGBPlayGroundScreen;
