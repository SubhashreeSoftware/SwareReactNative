import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const CustomFilterJstyles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      openButton: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        height: height / 1.2,
        backgroundColor: 'white',
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        
        padding: 20,
    
    },
    modalContent: {
        width: '100%',
    },
    Filter: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 135,
    },
    Category: {
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: 'red',
        borderRadius: 5,
    },
});

export default CustomFilterJstyles;