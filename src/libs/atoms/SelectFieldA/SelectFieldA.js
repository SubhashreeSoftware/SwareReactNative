import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'react-native-check-box';
import SelectFieldAstyles from './SelectFieldA.styles';

const SelectFieldA = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleCheckboxChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={SelectFieldAstyles.container}>
      <Text style={SelectFieldAstyles.label}>
        Select your Gender
      </Text>
      <View style={SelectFieldAstyles.checkboxContainer}>
        <CheckBox
          isChecked={selectedGender === 'male'}
          onClick={() => handleCheckboxChange('male')}
          rightText="Male"
          style={SelectFieldAstyles.checkbox}
        />
        <CheckBox
          isChecked={selectedGender === 'female'}
          onClick={() => handleCheckboxChange('female')}
          rightText="Female"
          style={SelectFieldAstyles.checkbox}
        />
        <CheckBox
          isChecked={selectedGender === 'other'}
          onClick={() => handleCheckboxChange('other')}
          rightText="Other"
          style={SelectFieldAstyles.checkbox}
        />
      </View>
    </View>
  );
};

export default SelectFieldA;
