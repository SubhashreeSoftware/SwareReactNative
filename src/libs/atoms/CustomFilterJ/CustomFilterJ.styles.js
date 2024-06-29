import { StyleSheet } from "react-native";
import { Color } from '../../../../GlobalStyles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    openButton: {
      padding: 14,
      backgroundColor: Color.primaryBlue,
      borderRadius: 5,
      marginVertical: 14,
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
      height:  '80%',
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


  export default styles;