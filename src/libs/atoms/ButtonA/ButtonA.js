import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import ButtonAstyles from './ButtonA.styles';

const SimpleButton = () => {
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };

  return (
    <View style={ButtonAstyles.container}>
      <Button
        title="Submit"
        onPress={handlePress}
      />
    </View>
  );
};

export default SimpleButton;
