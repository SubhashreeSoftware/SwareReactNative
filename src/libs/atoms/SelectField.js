import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});

const SelectField = ({ options, defaultValue, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value); 
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option.value} style={styles.radioButton}>
          <RadioButton.Android
            value={option.value}
            status={selectedValue === option.value ? 'checked' : 'unchecked'}
            onPress={() => handleSelect(option.value)}
            color="#007BFF"
          />
          <Text style={styles.radioLabel}>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default SelectField;
