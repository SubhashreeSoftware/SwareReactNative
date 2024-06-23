import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomSearhBarAstyles from './CustomSearchBarA.styles';

const CustomSearchBarA = () => {
  return (
    <View style={CustomSearhBarAstyles.container}>
      <TextInput
        style={CustomSearhBarAstyles.input}
        placeholder="Search"
      />
      <TouchableOpacity style={CustomSearhBarAstyles.filterButton}>
        <Icon name="filter-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSearchBarA;
