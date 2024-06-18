import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const TextInputExample = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
