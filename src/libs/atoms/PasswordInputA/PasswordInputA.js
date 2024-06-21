import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PasswordInputAstyles from './PasswordInputA.styles';
import CssA from '../CommonCss/CssA';
import TextInputExample from '../inputA';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={CssA.container}>
      <View style={PasswordInputAstyles.inputContainer}>
        <Text style={PasswordInputAstyles.label}>Password:</Text>
        <View style={PasswordInputAstyles.passwordContainer}>
          <TextInput
            style={PasswordInputAstyles.input}
            placeholder="Enter your password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TextInputExample
          inputtext="Enter your password"
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordInput;
