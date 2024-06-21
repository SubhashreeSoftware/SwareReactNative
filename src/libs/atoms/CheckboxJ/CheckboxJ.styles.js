import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const CheckboxJstyles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      checkbox: {
        height: 20,
        width: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:10,
      },
      checkedCheckbox: {
        backgroundColor: 'white',
      },
      checkmark: {
        color: '#007AFF',
        fontSize: 11,
        fontWeight: 'bold',
      },
      label: {
        fontSize: 16,
        color: '#007AFF',
        marginRight: 30,
      },
});


export default CheckboxJstyles;