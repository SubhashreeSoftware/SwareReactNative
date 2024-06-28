import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../../../GlobalStyles";

const FlatlistJstyles = StyleSheet.create({
    
      item: {
        backgroundColor: 'whitesmoke',
        padding: Padding.p_3xs,
        marginVertical: Margin. m_5xs,
        marginHorizontal: Margin.m_3xs,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Border.br_xl,
      },
      image: {
        width: 65,
        height: 65,
        borderRadius: Border.br_4xs,
        backgroundColor: Color.whitesmoke_100
        
      },
      title: {
        fontSize: FontSize. size_lg,
        fontWeight: "bold",
        paddingLeft: Padding.p_3xs,
      },
      header: {
        fontWeight: "bold",
        fontSize: FontSize.size_5xs,
        paddingLeft: Padding.p_xl,
        paddingTop: Padding.p_3xs,
        paddingBottom: Padding.p_8xs,
      },
      titleitem :{
        flexDirection: 'column',
      },
      subtitle:{
        color: '#696969',
        fontSize: FontSize.size_sm,
        paddingLeft: Padding.p_3xs,
      },
      time: {
        paddingBottom: 45,
       justifyContent: "flex-end",
       alignItems: "flex-end"
      },
});


export default FlatlistJstyles;