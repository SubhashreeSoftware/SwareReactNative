import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin } from '../../../../../../GlobalStyles';

const PropertiesAstyles = StyleSheet.create({
    card: {
        backgroundColor: Color.white,
        padding: 20,
        marginVertical: Margin.m_3xs,
        marginHorizontal: Margin.m_xl,
        borderRadius: Border.br_3xs,
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      title: {
        fontSize:  FontSize.size_xl,
        fontWeight: 'bold',
      },
      content: {
        fontSize: FontSize.size_base,
        marginTop:  Margin.m_3xs,
      },
});


export default PropertiesAstyles;