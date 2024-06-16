import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TextInputExample from '../../../input';
import SelectField from '../../../SelectField';
import TextareaExample from '../../../TextArea';
import SimpleButton from '../../../Button';

const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.screenText}>Form Page</Text>
      <View style={styles.formContainer}>
        <TextInputExample />
        <SelectField 
          options={dropdownOptions} 
          defaultValue={selectedValue} 
          onSelect={handleSelect} 
        />
        <TextareaExample />
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

export default HomeScreen;
