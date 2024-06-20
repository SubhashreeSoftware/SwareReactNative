import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const PasswordJ = ({ placeholder }) => {
    const [password, setPassword] = useState('');

    return (
        <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#e5e4e2" style={styles.icon} />

            <TextInput
                style={styles.input}
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
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: '#e5e4e2',
        alignItems: 'center',
        height: 50,
        width: 280,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingLeft: 28,

    },
});

export default PasswordJ;
