import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import InputA from '../../../../atoms/InputA/InputA';
import TextAreaA from '../../../../atoms/TextAreaA/TextAreaA';
import SimpleButton from '../../../../atoms/ButtonA/ButtonA';
import PasswordInputA from '../../../../atoms/PasswordInputA/PasswordInputA';
import DropdownA from '../../../../atoms/DropdownA/DropdownA';
import ImageUploadA from '../../../../atoms/ImageUploadA/ImageUploadA';
import CheckboxA from '../../../../atoms/CheckboxA/CheckboxA';
import FileUploadA from '../../../../atoms/FileUploadA/FileUploadA';
import SelectFieldA from '../../../../atoms/SelectFieldA/SelectFieldA';
import FormScreenAstyles from './FormScreenA.styles';

export default function FormScreenA() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const dropdownOptions = [
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'C++', value: 'c++' },
  ];

  return (
    <ScrollView contentContainerStyle={FormScreenAstyles.scrollContainer}>
      <Text style={FormScreenAstyles.screenText}>Form Page</Text>
      <View style={FormScreenAstyles.formContainer}>
        <InputA />
        <PasswordInputA />
        <SelectFieldA />
        <DropdownA options={dropdownOptions} onSelect={handleSelect} selectedValue={selectedValue} />
        <FileUploadA />
        <ImageUploadA />
        <TextAreaA />
        <CheckboxA
          label="Check me"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <SimpleButton title="Submit" onPress={() => { console.log("Button Pressed") }} />
      </View>
    </ScrollView>
  );
}
