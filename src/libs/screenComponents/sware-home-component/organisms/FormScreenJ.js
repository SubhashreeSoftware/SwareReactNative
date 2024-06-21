import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonJ from '../../../atoms/ButtonJ';
import DropdownJ from '../../../atoms/DropdownJ';
import ImageComJ from '../../../atoms/ImageComJ'
import InputJ from '../../../atoms/InputJ';
import CheckboxJ from '../../../atoms/CheckboxJ';
import PasswordJ from '../../../atoms/PasswordJ';
import { Border, Color } from "../../../../../GlobalStyles"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
                <View style={styles.boxInput}>
                <InputJ
                iconName = "fax"
                inputText = "CARD NUMBER" />
                <InputJ
                iconName = "person"
                inputText = "CARDHOLDER'S NAME" />
                <InputJ
                iconName = "call"
                inputText = "CONTACT NO" />
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
        borderRadius: Border.br_xl,
        elevation: 5,  
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: Color.white,

    },
    text: {
        fontSize: 25,
        marginTop: 20,
        color: '#f08080',

    },
});
export default HomeScreen;