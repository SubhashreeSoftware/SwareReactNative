import { StyleSheet } from 'react-native';
import { Border, Color, FontFamily, Padding } from "../../../../GlobalStyles";

const ButtonJstyles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        height: 55,
        width: 280,
        borderRadius: Border.br_5xl,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
      },
      buttonTwo: {
        height: 55,
        width: 280,
        borderRadius: Border.br_5xl, // Half of the height and width to make it round
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        borderWidth:1,
        borderColor: '#e5e4e2',
      },
    
      buttonText: {
        color: 'white',
        fontSize: FontFamily.size_base,
        fontWeight: 'bold',
      },
      buttonTexttwo: {
        color: 'black',
        fontSize: FontFamily.size_base,
        fontWeight: 'bold',
      },
});


export default ButtonJstyles;