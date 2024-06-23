import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckboxJstyles from './CheckboxJ.styles';

const CheckboxJ = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={CheckboxJstyles.checkboxContainer}>
      <View style={[CheckboxJstyles.checkbox, isChecked && CheckboxJstyles.checkedCheckbox]}>
        {isChecked && <Text style={CheckboxJstyles.checkmark}>✓</Text>}
      </View>
      <Text style={CheckboxJstyles.label}>Save credit card information</Text>
    </TouchableOpacity>
  );
};


export default CheckboxJ;
