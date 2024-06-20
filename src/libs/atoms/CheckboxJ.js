import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckboxJ = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>Save credit card information</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
  },
  checkedCheckbox: {
    backgroundColor: 'white',
  },
  checkmark: {
    color: '#007AFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 30,
  },
});

export default CheckboxJ;
