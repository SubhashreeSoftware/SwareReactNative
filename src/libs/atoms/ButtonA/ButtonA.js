import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {LinearGradient } from 'expo-linear-gradient';
import ButtonAstyles from './ButtonA.styles';
//import { View } from 'react-native-reanimated/lib/typescript/Animated';

const SimpleButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[ButtonAstyles.button, style]} onPress={onPress}>
      <LinearGradient
        colors={['#FFFFFF' , '#FFF2C1']} 
        style={[ButtonAstyles.gradient]}
        start={{ x: 0, y: 0 }} // Start at the left
        end={{ x: 1, y: 0 }} 
      >
        <Text style={[ButtonAstyles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
    // <View>
    // <TouchableOpacity style={[ButtonAstyles.button, style]} onPress={onPress}>
    //   <Text style={[ButtonAstyles.buttonText, textStyle]}>{title}</Text>
    // </TouchableOpacity>
    // </View>
  );
};




export default SimpleButton;