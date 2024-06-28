import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const DropdownJstyles = StyleSheet.create({
   
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
        fontSize: FontSize.size_lg,
        marginBottom: Margin.m_3xs,
        
      },
      input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: Border.br_xl,
        marginBottom:  Margin.m_5xl,
        paddingHorizontal: Padding.p_3xs,
        borderColor: '#e5e4e2',
        alignItems: 'center',
        height: 60,
        width: 90,
        marginLeft: Margin.m_8xs,
      },
});


export default DropdownJstyles;