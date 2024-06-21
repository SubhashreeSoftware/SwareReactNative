import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TextInputExample from '../../../atoms/InputA/InputA';
import TextareaExample from '../../../atoms/TextAreaA/TextAreaA';
import SimpleButton from '../../../atoms/ButtonA/ButtonA';
import PasswordInput from '../../../atoms/PasswordInputA/PasswordInputA';
import DropdownA from '../../../atoms/DropdownA/DropdownA';
import ImageUploadA from '../../../atoms/ImageUploadA/ImageUploadA';
import CheckboxA from '../../../atoms/CheckboxA/CheckboxA';
import FileUploadA from '../../../atoms/FileUploadA/FileUploadA';
import SelectFieldA from '../../../atoms/SelectFieldA/SelectFieldA';
import FormScreenAstyles from './FormScreenA.styles';

const FormScreenA = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <ScrollView contentContainerStyle={FormScreenAstyles.scrollContainer}>
      <Text style={FormScreenAstyles.screenText}>Form Page</Text>
      <View style={FormScreenAstyles.formContainer}>
        <TextInputExample />
        <PasswordInput />
        <SelectFieldA 
          options={dropdownOptions} 
          defaultValue={selectedValue} 
          onSelect={handleSelect} 
        />
        <DropdownA />
        <FileUploadA />
        <ImageUploadA />
        <TextareaExample />
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

const dropdownOptions = [
  { label: 'Male', value: 'option1' },
  { label: 'Female', value: 'option2' },
  { label: 'Other', value: 'option3' },
];


export default FormScreenA;
