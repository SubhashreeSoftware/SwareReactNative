import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropertiesAstyles from './PropertiesA.styles';


const PropertiesA = (props) => {
  return (
    <View style={PropertiesAstyles.card}>
      <Text style={PropertiesAstyles.title}>{props.title}</Text>
      <Text style={PropertiesAstyles.content}>{props.content}</Text>
    </View>
  );
};


export default PropertiesA;
