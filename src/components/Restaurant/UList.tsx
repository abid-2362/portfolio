import * as React from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { Text } from 'react-native-paper';
import Spacer from '../Spacer.tsx';
import Row from '../common/Row.tsx';
import { space } from '../../theme/spacing.ts';

type UListProps = {
  label?: string;
  list: string[];
  labelStyle?: StyleProp<TextStyle>;
};
const UList = ({ label = '', list, labelStyle = {} }: UListProps) => (
  <View>
    <Text variant={'titleLarge'} style={labelStyle}>
      {label ? label : null}
    </Text>
    <Spacer position={'bottom'} size={'medium'} />
    <Row justifyContent={'flex-start'} wrap={true}>
      {list.map((ingredient, index) => {
        return (
          <Row key={`${index + 1}-${ingredient}`} style={styles.item}>
            <Text style={styles.bullet}>•</Text>
            <Text variant={'bodyLarge'} style={styles.ingredient}>
              {ingredient}
            </Text>
          </Row>
        );
      })}
    </Row>
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: space[4],
  },
  bullet: {
    fontSize: 16,
  },
  ingredient: {
    marginLeft: space[1],
  },
  item: { marginRight: 10 },
});

export default UList;
