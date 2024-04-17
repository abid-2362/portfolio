import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { theme } from '../theme';

type SpacerProps = {
  size?: 'small' | 'medium' | 'large';
  position?: 'top' | 'left' | 'right' | 'bottom' | 'all' | 'horizontal' | 'vertical';
  children?: React.ReactNode;
};

const Spacer: React.FC<SpacerProps> = ({ size = 'medium', position = 'bottom', children }) => {
  const getSpacerStyle = (): ViewStyle => {
    let spacerStyle: ViewStyle = {};

    switch (position) {
      case 'top':
        spacerStyle = { marginTop: getSize(size) };
        break;
      case 'left':
        spacerStyle = { marginLeft: getSize(size) };
        break;
      case 'right':
        spacerStyle = { marginRight: getSize(size) };
        break;
      case 'bottom':
        spacerStyle = { marginBottom: getSize(size) };
        break;

      case 'vertical':
        spacerStyle = { marginBottom: getSize(size), marginTop: getSize(size) };
        break;

      case 'horizontal':
        spacerStyle = { marginLeft: getSize(size), marginRight: getSize(size) };
        break;

      case 'all':
        spacerStyle = { margin: getSize(size) };
        break;

      default:
        spacerStyle = { margin: getSize(size) };
        break;
    }

    return spacerStyle;
  };

  const getSize = (spaceSize: 'small' | 'medium' | 'large'): number => {
    switch (spaceSize) {
      case 'small':
        return theme.space[1];
      case 'medium':
        return theme.space[2];
      case 'large':
        return theme.space[3];
      default:
        return theme.space[1];
    }
  };

  return <View style={[styles.spacer, getSpacerStyle()]}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    // Spacer styles can be customized here
  },
});

export default Spacer;
