import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const CustomButtonJstyles = StyleSheet.create({
    
      button: {
        height: 43,
        width: 90,
        borderRadius: Border.br_6xl,
        backgroundColor: Color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: Margin.m_3xs,
      },
      buttonTwo: {
        backgroundColor: Color.white,
        borderWidth: 2,
        borderColor: Color.primarycolor,
        marginHorizontal: 3, 
      },
      buttonThree: {
       width: 120,
      },
     
      buttonText: {
        color: Color.white,
        fontSize: FontSize.size_mini,
        paddingLeft: Padding.p_8xs,
      },
      buttonTexttwo: {
        color: Color.primarycolor,
        fontSize: FontSize.size_mini,
        paddingLeft: Padding.p_8xs,

      },
      image: {
        height:20,
        width: 20,
        
      }
     
});


export default CustomButtonJstyles;