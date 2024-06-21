import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import PasswordInputJstyles from './PasswordInputJ.styles';
import CssJ from '../CommonCss/CssJ';

const PasswordInputJ = ({ placeholder }) => {
    const [password, setPassword] = useState('');

    return (
        <View style={CssJ.inputContainer}>
            <Icon name="lock" size={20} color="#e5e4e2" style={CssJ.icon} />

            <TextInput
                style={CssJ.input}
                placeholder={placeholder || 'ENTER PASSWORD'}
                placeholderTextColor="#e5e4e2" 
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    
   
});

export default PasswordInputJ;
