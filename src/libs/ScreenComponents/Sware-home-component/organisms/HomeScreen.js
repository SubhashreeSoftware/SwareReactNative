import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonJ from '../../../Atoms/ButtonJ';
import InputJ from '../../../Atoms/InputJ';
import DropdownJ from '../../../Atoms/DropdownJ';
import ImageComJ from '../../../Atoms/ImageComJ';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageComJ />
            <View style={styles.box}>
                <InputJ />
                <DropdownJ />
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
    box: {
        width: '90%',
        height: 550,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 10,
        elevation: 5,  
        marginBottom: 50,
        paddingHorizontal: 20,

    },
    text: {
        fontSize: 20,
        marginTop: 60,
        color: '#f08080',

    },
});
export default HomeScreen;