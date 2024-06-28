import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckboxAstyles from './CheckboxA.styles';

const CheckboxA = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity style={CheckboxAstyles.container} onPress={onChange}>
      <View style={[CheckboxAstyles.checkbox, checked && CheckboxAstyles.checked]}>
        {checked && <View style={CheckboxAstyles.innerChecked} />}
      </View>
      <Text style={CheckboxAstyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CheckboxA;
