import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from '../common/Row.tsx';
import Icon, { Icons } from '../common/Icons.tsx';
import { restaurantColors } from '../../theme/restaurantColors.ts';
import Spacer from '../Spacer.tsx';
import restaurantStyles from '../../styles/restaurantStyles.ts';
import { Text } from 'react-native-paper';

type PreperationTimeProps = {
  preparation_time: string;
};
const PreperationTime = ({ preparation_time }: PreperationTimeProps) => {
  return (
    <Row>
      <View>
        <Icon type={Icons.Ionicons} name={'time-outline'} color={restaurantColors.text.headingSecondary} />
      </View>
      <Spacer size={'small'} position={'left'} />
      <View>
        <Text variant={'bodySmall'} style={[restaurantStyles.bodyText, restaurantStyles.textSecondary]}>
          {preparation_time}
        </Text>
      </View>
    </Row>
  );
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default PreperationTime;
