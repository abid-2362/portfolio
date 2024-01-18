import * as React from 'react';
import {StyleSheet, View} from 'react-native';

const BoxScreen = () => (
  <View style={styles.parentStyle}>
    <View style={[styles.boxStyle, styles.viewStyle1]} />
    <View style={[styles.boxStyle, styles.viewStyle2]} />
    <View style={[styles.boxStyle, styles.viewStyle3]} />
  </View>
);

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxStyle: {
    height: 50,
    width: 50,
  },
  viewStyle1: {
    backgroundColor: 'red',
  },
  viewStyle2: {
    backgroundColor: 'green',
    top: 50,
  },
  viewStyle3: {
    backgroundColor: 'purple',
  },
});

export default BoxScreen;
