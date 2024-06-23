import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header2Astyles from './Header2A.styles';

const Header2A = ({ title1, title2 }) => {
  return (
    <View style={Header2Astyles.headerContainer}>
      <Text style={Header2Astyles.title}>{title1}</Text>
      <Text style={Header2Astyles.actionText}>{title2}</Text>
    </View>
  );
};
export default Header2A;
