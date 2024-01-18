import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BoxScreen = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle1}>Child #1</Text>
    <Text style={styles.textStyle2}>Child #2</Text>
    <Text style={styles.textStyle3}>Child #3</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textStyle1: {
    borderWidth: 1,
    borderColor: 'red',
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    flex: 1,
    backgroundColor: 'orange',
    ...StyleSheet.absoluteFillObject,
  },
  textStyle3: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default BoxScreen;
