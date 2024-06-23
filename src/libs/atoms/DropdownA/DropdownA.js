import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropdownAstyles from './DropdownA.styles';

const DropdownA = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={DropdownAstyles.container}>
      <Text style={DropdownAstyles.label}>Choose a programming language:</Text>
      <View style={DropdownAstyles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={DropdownAstyles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javascript" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="C++" value="c++" />
        </Picker>
      </View>
    </View>
  );
};


export default DropdownA;
