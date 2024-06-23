import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const CustomButtonJstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        
      },
      button: {
        height: 46,
        width: 90,
        borderRadius: 25,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
    
      },
      buttonTwo: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#007bff',
        marginHorizontal: 3, 
      },
     
      buttonText: {
        color: 'white',
        fontSize: 15,
        paddingLeft: 10,
      },
      buttonTexttwo: {
        color: '#007bff',
        fontSize: 15,
      },
      image: {
        height:20,
        width: 20,
        // marginRight: 5,
      }
     
});


export default CustomButtonJstyles;