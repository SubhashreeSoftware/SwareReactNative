import { StyleSheet } from 'react-native';

const CheckboxAstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Color.white,
      },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
      },
      checked: {
        backgroundColor: '#007BFF', 
      },
      innerChecked: {
        width: 12,
        height: 12,
        backgroundColor: '#FFF', 
        borderRadius: 2,
      },
      label: {
        marginLeft: 8,
        fontSize: 20,
        color: '#007BFF',
      },
});


export default CheckboxAstyles;