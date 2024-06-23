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

export default function FormScreenA()  {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const dropdownOptions = [
    { label: 'Male', value: 'option1' },
    { label: 'Female', value: 'option2' },
    { label: 'Other', value: 'option3' },
  ];
  

  return (
    <ScrollView contentContainerStyle={FormScreenAstyles.scrollContainer}>
      <Text style={FormScreenAstyles.screenText}>Form Page</Text>
      <View style={FormScreenAstyles.formContainer}>
        <InputA />
        <PasswordInputA />
        <SelectFieldA 
          options={dropdownOptions} 
          defaultValue={selectedValue} 
          onSelect={handleSelect} 
        />
        <DropdownA />
        <FileUploadA />
        <ImageUploadA />
        <TextAreaA />
        <CheckboxA
          label="Check me"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <SimpleButton />
      </View>
    </ScrollView>
  );
};



