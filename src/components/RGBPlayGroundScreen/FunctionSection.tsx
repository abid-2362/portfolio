import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const FunctionSection = ({title, onIncrease, onDecrease}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.textStyle}>{title}</Text>
      <Button title={`Increase ${title}`} onPress={onIncrease} />
      <Button title={`Decrease ${title}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  section: {
    marginBottom: 15,
  },
});

export default FunctionSection;
