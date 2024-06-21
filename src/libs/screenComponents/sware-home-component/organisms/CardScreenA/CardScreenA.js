import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBoxA from '../../../atoms/CheckboxA/CheckboxA';
import CardScreenAstyles from './CardScreenA.styles';

const CardScreenA = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCardInfo, setSaveCardInfo] = useState(false);

  return (
    <View style={CardScreenAstyles.container}>
      <TextInput
        style={CardScreenAstyles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        placeholder="CARD NUMBER"
        placeholderTextColor="#999"
      />
      <TextInput
        style={CardScreenAstyles.input}
        value={cardHolderName}
        onChangeText={setCardHolderName}
        placeholder="CARDHOLDER'S NAME"
        placeholderTextColor="#999"
      />
      <View style={CardScreenAstyles.row}>
        <View style={CardScreenAstyles.pickerContainer}>
          <Picker
            selectedValue={expiryMonth}
            style={CardScreenAstyles.picker}
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
        <View style={CardScreenAstyles.pickerContainer}>
          <Picker
            selectedValue={expiryYear}
            style={CardScreenAstyles.picker}
            onValueChange={(itemValue) => setExpiryYear(itemValue)}
          >
            <Picker.Item label="YYYY" value="" />
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2025" value="2025" />
          </Picker>
      
        </View>
        <TextInput
          style={[CardScreenAstyles.input, CardScreenAstyles.cvvInput]}
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

      <TouchableOpacity style={CardScreenAstyles.nextButton}>
        <Text style={CardScreenAstyles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={CardScreenAstyles.backButton}>
        <Text style={CardScreenAstyles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CardScreenA;
