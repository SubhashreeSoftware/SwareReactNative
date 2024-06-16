import React, { useState }  from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

const TextInputExample = () => {
  const [email, setEmail] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Enter your email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;