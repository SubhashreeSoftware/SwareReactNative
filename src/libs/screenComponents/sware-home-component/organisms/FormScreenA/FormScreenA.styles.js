import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const FormScreenAstyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      screenText: {
        fontSize: 24,
        marginBottom: 20,
      },
      formContainer: {
        width: '100%',
        padding: 20,
        borderWidth: 2,
        borderColor: '#007BFF',
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
});


export default FormScreenAstyles;