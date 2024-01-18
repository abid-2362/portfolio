import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

interface IFunctionSectionProps {
  title: string;
  onIncrease: () => void;
  onDecrease: () => void;
  amount: number;
}
const FunctionSection = ({
  title,
  onIncrease,
  onDecrease,
  amount,
}: IFunctionSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.textStyle}>
        {title}: {amount}
      </Text>
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
