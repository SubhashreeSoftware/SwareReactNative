
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ButtonAstyles from './ButtonA.styles';

const SimpleButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[ButtonAstyles.button, style]} onPress={onPress}>
      <Text style={[ButtonAstyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
