// Dropdown.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import FileDropdownJstyles from './FilterDropdownJ.styles';
const FilterDropdownJ = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={FileDropdownJstyles.container}>
      <Text style={FileDropdownJstyles.label}></Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: 'New York, United States', value: 'New York, United States' },
          { label: 'India', value: 'India' },
          { label: 'Australia', value: 'Australia' },
        ]}
        style={pickerSelectStyles}
        value={selectedValue}
      />
      <Text style={FileDropdownJstyles.selectedText}>Selected: {selectedValue}</Text>
    </View>
  );
};



const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default FilterDropdownJ;
