import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface RowProps {
  children: ReactNode;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  border?: boolean;
  wrap?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = ({
  children,
  alignItems = 'center',
  justifyContent = 'flex-start',
  border = false,
  wrap,
  style,
}) => {
  return (
    <View
      style={[
        styles.row,
        wrap ? styles.flexWrap : {},
        { alignItems, justifyContent },
        border ? styles.borderStyle : {},
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  borderStyle: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Row;
