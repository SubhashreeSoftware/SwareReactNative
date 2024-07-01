import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const CssJ = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    paddingHorizontal: 20,
  },

  inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        paddingHorizontal: 5,
        borderColor: '#e5e4e2',
        alignItems: 'center',
        height: 45,
        width:"100%"
    },
});


export default CssJ;