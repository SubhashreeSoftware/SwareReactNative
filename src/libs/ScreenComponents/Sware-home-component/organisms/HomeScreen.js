import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonCom from '../../../Atoms/ButtonCom';
import Input from '../../../Atoms/Input';
import Dropdown from '../../../Atoms/Dropdown';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            
                <Text style={styles.text}>React native Form</Text>
                <View style={styles.box}>
                <Input />                
                <Dropdown/>
                <ButtonCom />
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
    box: {
        width: '90%',
        height: 550,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#fdf5e6',
        marginBottom: 100,
        marginTop:30,
        paddingHorizontal: 20,

    },
    text: {
        fontSize: 20,
        marginTop: 60,
        color: '#f08080',

    },
});
export default HomeScreen;