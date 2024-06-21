import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonJstyles from './ButtonJ.styles';
import CssJ from '../CommonCss/CssJ';

const ButtonJ = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonJstyles.buttonContainer}>
       <View style={ButtonJstyles.button}>
        <Text style={ButtonJstyles.buttonText}>{title}Next</Text>
      </View>   
      <View style={ButtonJstyles.buttonTwo}>
        <Text style={ButtonJstyles.buttonTexttwo}>{title}Back</Text>
      </View>    
    </TouchableOpacity>
  );
};

const App = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={CssJ.container}>
      <RoundButton onPress={handlePress} title="Click Me" />
    </View>
  );
};


export default ButtonJ;
