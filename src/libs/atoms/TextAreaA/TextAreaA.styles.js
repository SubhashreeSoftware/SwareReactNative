import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const TextAreaAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      textarea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
      },
});


export default TextAreaAstyles;