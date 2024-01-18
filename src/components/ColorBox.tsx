import * as React from 'react';
import {StyleSheet, View} from 'react-native';

const ColorBox = ({color}: {color: string}) => (
  <View style={styles.screen}>
    <View style={{...styles.box, backgroundColor: color}} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});

export default ColorBox;
