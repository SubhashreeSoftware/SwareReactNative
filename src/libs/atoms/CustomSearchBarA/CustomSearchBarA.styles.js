import { StyleSheet } from 'react-native';
import { Border, Color, Padding, Margin, FontSize } from '../../../../GlobalStyles';

const CustomSearhBarAstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.gray100,
        borderRadius: Border.br_5xs,
        paddingVertical: Padding.p_7xs,
        paddingHorizontal: Padding.p_3xs,
        marginHorizontal: Margin.m_6xs,
        width: '95%',
        // marginTop: 8,
      },
      input: {
        flex: 1,
        height: 40,
        fontSize: FontSize.size_lg,
        color: '#333',
      },
      filterButton: {
        padding: Padding.p_5xs,
      },
    }); 

export default CustomSearhBarAstyles;