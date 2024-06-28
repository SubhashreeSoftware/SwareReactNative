import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const CustomFilterButtonJstyles = StyleSheet.create({
    
      button: {
        paddingHorizontal: 17,
        paddingVertical: 9,
        borderRadius: Border.br_6xl,
        backgroundColor: Color.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Color.primarycolor,
        marginHorizontal: 3, 
        marginTop: Margin. m_3xs,
        marginBottom: Margin. m_3xs,
      },

      buttonActive: {
        paddingHorizontal: 17,
        paddingVertical: 9,
        borderRadius: Border.br_6xl,
        backgroundColor: Color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Color.primarycolor,
        marginHorizontal: 3, 
        marginTop: Margin. m_3xs,
        marginBottom: Margin. m_3xs,
      },
      
      buttonText: {
        color: Color.primarycolor,
        fontSize: FontSize.size_mini,
        paddingLeft: Padding.p_8xs,

      },
      buttonTextActive: {
        color: Color.white,
        fontSize: FontSize.size_mini,
        paddingLeft: Padding.p_8xs,

      },


      image: {
        height:20,
        width: 20,
      },
     
});


export default CustomFilterButtonJstyles;