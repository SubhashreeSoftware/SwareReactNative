import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {LinearGradient } from 'expo-linear-gradient';
import ButtonAstyles from './ButtonA.styles';

const SimpleButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[ButtonAstyles.button, style]} onPress={onPress}>
      <LinearGradient
        colors={['#ffd11a','#cc2900']} 
        style={ButtonAstyles.gradient}
        start={{ x: 0, y: 0 }} // Start at the left
        end={{ x: 1, y: 0 }} 
      >
        <Text style={[ButtonAstyles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SimpleButton;