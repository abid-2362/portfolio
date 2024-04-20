import * as React from 'react';
import { IconButton, Modal, Portal, Provider, Text } from 'react-native-paper';
import { RestaurantProduct } from '../../types/Restaurant/RestaurantProduct.ts';
import { StyleSheet } from 'react-native';
import { BackIcon } from '../common/Icons.tsx';

type RestaurantProductDetailsModalProps = {
  visible: boolean;
  product: RestaurantProduct;
  hideModal: () => void;
};
const RestaurantProductDetailsModal = ({ visible, product, hideModal }: RestaurantProductDetailsModalProps) => {
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          dismissableBackButton={true}
          style={styles.modal}
          contentContainerStyle={styles.containerStyle}>
          <IconButton icon={BackIcon} onPress={hideModal} />
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 5,
    zIndex: 99,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});

export default RestaurantProductDetailsModal;
