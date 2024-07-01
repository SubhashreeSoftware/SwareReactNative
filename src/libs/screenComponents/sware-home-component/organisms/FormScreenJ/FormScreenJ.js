import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonJ from '../../../../atoms/ButtonJ/ButtonJ';
import CheckboxJ from '../../../../atoms/CheckboxJ/CheckboxJ';
import DropdownJ from '../../../../atoms/DropdownJ/DropdownJ';
import InputJ from '../../../../atoms/InputJ/InputJ';
import PasswordInputJ from '../../../../atoms/PasswordInputJ/PasswordInputJ';
import { Border, Color } from "../../../../../../GlobalStyles"
import CssJ from '../../../../atoms/CommonCss/CssJ';
import FormScreenJstyles from './FormScreenJ.styles';

const FormScreenJ = () => {
    return (
        <View style={CssJ.container}>
                <View style={FormScreenJstyles.boxInput}>
                <InputJ
                Boxname="User Name "
                iconName = "fax"
                inputText = "CARD NUMBER" />
                <InputJ
                 Boxname="Card Holder Name"
                iconName = "person"
                inputText = "CARDHOLDER'S NAME" />
                <InputJ
                 Boxname="Contact"
                iconName = "call"
                inputText = "CONTACT NO" />
                
                {/* <PasswordInputJ/>
                <DropdownJ />
                <CheckboxJ/> */}
                {/* <ButtonJ/> */}
                </View>
        </View>
    );
};

export default FormScreenJ;