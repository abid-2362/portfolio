import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BoxScreen = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Box Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 20,
    padding: 20,
  },
});

export default BoxScreen;
