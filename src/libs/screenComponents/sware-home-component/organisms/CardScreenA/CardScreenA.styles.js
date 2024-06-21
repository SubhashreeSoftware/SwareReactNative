import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const CardScreenAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
      },
      pickerContainer: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
      },
      picker: {
        height: 50,
        width: '100%',
      },
      cvvInput: {
        flex: 1,
        marginLeft: 10,
      },
      nextButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      nextButtonText: {
        color: '#fff',
        fontSize: 20,
      },
      backButton: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
      },
      backButtonText: {
        fontSize: 20,
        color: '#007BFF',
      },
});


export default CardScreenAstyles;