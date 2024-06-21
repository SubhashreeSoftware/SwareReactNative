import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import InputAstyles from './InputA.styles';

const TextInputExample = ({inputtext}) => {
  const [email, setEmail] = useState('');

  return (
    <View style={InputAstyles.container}>
      <Text style={InputAstyles.label}>Email:</Text>
      <TextInput
        style={InputAstyles.input}
        onChangeText={setEmail}
        value={email}
        placeholder={inputtext}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
};


export default TextInputExample;
