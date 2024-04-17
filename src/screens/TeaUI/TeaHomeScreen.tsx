import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type TeaHomeScreenProps = {};
const TeaHomeScreen = ({}: TeaHomeScreenProps) => (
  <View style={styles.screen}>
    <Text>Tea Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TeaHomeScreen;
