import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../../../GlobalStyles";

const FormScreenJstyles = StyleSheet.create({
    boxInput:{
        width: 320,
        height: 650,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Border.br_xl,
        elevation: 5,  
        paddingHorizontal: Padding.p_xl,
        marginTop: Margin.m_3xs,
        backgroundColor: Color.white,

    },
    text: {
        fontSize: FontSize.size_5xl,
        marginTop: FontSize.size_xl,
        color: '#f08080',

    },
});


export default FormScreenJstyles;