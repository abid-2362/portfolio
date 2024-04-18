import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface RowProps {
  children: ReactNode;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = ({ children, alignItems = 'center', justifyContent = 'flex-start', style }) => {
  return <View style={[styles.row, { alignItems, justifyContent }, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default Row;
