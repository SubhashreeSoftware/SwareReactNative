import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const DropdownJstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      picker: {
        height: 50,
        width: 90,
        color: '#e5e4e2',
      },
      appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      title: {
        fontSize: 18,
        marginBottom: 10,
        
      },
      input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 25,
        paddingHorizontal: 10,
        borderColor: '#e5e4e2',
        alignItems: 'center',
        height: 60,
        width: 90,
        marginLeft: 5,
      },
});


export default DropdownJstyles;