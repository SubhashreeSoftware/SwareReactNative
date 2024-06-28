import { StyleSheet } from 'react-native';
import { Border, Color, FontFamily, Margin, Padding } from "../../../../GlobalStyles";

const ButtonJstyles = StyleSheet.create({
    buttonContainer: {
        flexDirection:"row"
      },
      button: {
        height: 50,
        width: 155,
        borderRadius: Border. br_6xl,
        backgroundColor: Color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Margin. m_3xs,
        marginLeft: Margin. m_3xs,
      },
      buttonTwo: {
        height: 50,
        width: 155,
        borderRadius: Border. br_6xl, // Half of the height and width to make it round
        backgroundColor: '#e8f4f8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Margin. m_3xs,
       
       
        
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