import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonJ from '../../../atoms/ButtonJ';
import DropdownJ from '../../../atoms/DropdownJ';
import ImageComJ from '../../../atoms/ImageComJ'
import InputJ from '../../../atoms/InputJ';
import CheckboxJ from '../../../atoms/CheckboxJ';
import PasswordJ from '../../../atoms/PasswordJ';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
                <View style={styles.boxInput}>
                <InputJ />
                <PasswordJ/>
                <DropdownJ />
                <CheckboxJ/>
                <ButtonJ />
                </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    boxInput:{
        width: 320,
        height: 650,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 20,
        elevation: 5,  
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: 'white',

    },
    text: {
        fontSize: 25,
        marginTop: 20,
        color: '#f08080',

    },
});
export default HomeScreen;