import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type BottomSpacerProps = {};
const BottomSpacer = ({}: BottomSpacerProps) => <View style={styles.bottomSpacer} />;

const styles = StyleSheet.create({
  bottomSpacer: { paddingBottom: 80 },
});

export default BottomSpacer;
