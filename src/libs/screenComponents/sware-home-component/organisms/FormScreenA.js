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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.screenText}>Form Page</Text>
      <View style={styles.formContainer}>
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

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  screenText: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default FormScreenA;
