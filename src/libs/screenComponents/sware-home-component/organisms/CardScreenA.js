import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBoxA from '../../../atoms/CheckboxA/CheckboxA';

const CardScreenA = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCardInfo, setSaveCardInfo] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        placeholder="CARD NUMBER"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        value={cardHolderName}
        onChangeText={setCardHolderName}
        placeholder="CARDHOLDER'S NAME"
        placeholderTextColor="#999"
      />
      <View style={styles.row}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={expiryMonth}
            style={styles.picker}
            onValueChange={(itemValue) => setExpiryMonth(itemValue)}
          >
            <Picker.Item label="MM" value="" />
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={expiryYear}
            style={styles.picker}
            onValueChange={(itemValue) => setExpiryYear(itemValue)}
          >
            <Picker.Item label="YYYY" value="" />
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2025" value="2025" />
          </Picker>
      
        </View>
        <TextInput
          style={[styles.input, styles.cvvInput]}
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
          placeholder="CVV"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <CheckBoxA
        label="Save credit card information"
        checked={saveCardInfo}
        onChange={() => setSaveCardInfo(!saveCardInfo)}
      />

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  pickerContainer: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  cvvInput: {
    flex: 1,
    marginLeft: 10,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  backButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  backButtonText: {
    fontSize: 20,
    color: '#007BFF',
  },
});

export default CardScreenA;
