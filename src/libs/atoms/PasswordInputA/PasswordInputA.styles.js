import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const PasswordInputAstyles = StyleSheet.create({
      inputContainer: {
        marginBottom: 20,
      },
      label: {
        marginBottom: 8,
        fontSize: 16,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
      },
      input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 8,
      },
});


export default PasswordInputAstyles;