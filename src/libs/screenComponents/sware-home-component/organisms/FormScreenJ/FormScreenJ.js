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
import SimpleButton from '../../../../atoms/ButtonA/ButtonA';

const FormScreenJ = () => {
    return (
        <View style={CssJ.container}>
                <View style={FormScreenJstyles.boxInput}>
                <InputJ
                Boxname="User Name "
                iconName = "fax"
                inputText = "Card Number" />
                <InputJ
                 Boxname="Card Holder Name"
                iconName = "person"
                inputText = "Cardholder Name" />
                <InputJ
                 Boxname="Contact"
                iconName = "call"
                inputText = "Contact No" />
                <View style={{alignItems: "center"}}>
                <SimpleButton
                 title="Submit"
                />
                </View>
                
                {/* <PasswordInputJ/>
                <DropdownJ />
                <CheckboxJ/>
                <ButtonJ/> */}
                </View>
        </View>
    );
};

export default FormScreenJ;