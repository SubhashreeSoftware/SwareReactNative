import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const DropdownAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      pickerContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        overflow: 'hidden',
      },
      picker: {
        height: 50,
        width: '100%',
      },
      selectedValueText: {
        marginTop: 16,
        fontSize: 16,
      },
});


export default DropdownAstyles;