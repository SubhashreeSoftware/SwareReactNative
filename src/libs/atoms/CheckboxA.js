import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckboxA = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.innerChecked} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  checked: {
    backgroundColor: '#007BFF', 
  },
  innerChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#FFF', 
    borderRadius: 2,
  },
  label: {
    marginLeft: 8,
    fontSize: 20,
    color: '#007BFF',
  },
});

export default CheckboxA;
