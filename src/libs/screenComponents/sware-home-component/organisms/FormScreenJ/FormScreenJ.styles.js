import { StyleSheet } from 'react-native';
import { Border, Color, Padding } from "../../../../../../GlobalStyles";

const FormScreenJstyles = StyleSheet.create({
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


export default FormScreenJstyles;