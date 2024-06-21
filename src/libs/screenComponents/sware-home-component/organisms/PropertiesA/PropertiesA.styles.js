import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const PropertiesAstyles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      content: {
        fontSize: 16,
        marginTop: 10,
      },
});


export default PropertiesAstyles;