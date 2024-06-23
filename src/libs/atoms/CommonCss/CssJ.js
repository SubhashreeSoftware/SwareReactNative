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
    paddingHorizontal: 10,
    paddingLeft: 28,

  },

  icon: {
    marginRight: 10,
  },
  inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: '#e5e4e2',
        alignItems: 'center',
        height: 50,
        width: 280,
    },
});


export default CssJ;