import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ModalA from '../../../../atoms/ModalA/ModalA';
import SimpleButton from '../../../../atoms/ButtonA/ButtonA';
import CardA from '../../../../atoms/CardA/CardA';
import EReceiptScreenStyles from './EReceiptScreen.styles';
import CardAStyle from '../../../../atoms/CardA/CardA.styles'; // Import CardAStyle

export default function EReceiptScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={EReceiptScreenStyles.container}>
      <View style={CardAStyle.container}>
        <CardA handleOpenModal={handleOpenModal} />
      </View>
      <SimpleButton 
        title="Post" 
        onPress={handleOpenModal} 
        buttonStyle={EReceiptScreenStyles.button} 
        textStyle={EReceiptScreenStyles.buttonText} 
      />
      <ModalA modalVisible={modalVisible} handleCloseModal={handleCloseModal} />
    </View>
  );
}
