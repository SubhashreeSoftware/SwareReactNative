import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const InputAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
      },
});


export default InputAstyles;