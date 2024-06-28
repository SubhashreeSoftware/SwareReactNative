import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../../../GlobalStyles";

const CardscreenJstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    boxInput: {
        width: "90%",
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: Border.br_31xl,
        elevation: 5,
        paddingHorizontal: Padding.p_xl,
        marginTop: Margin.m_11xl,
        backgroundColor: '#e5e4e2',

    },
    localImage: {
        width: 320,
        height: 320,
        transform: [{ rotate: '350deg' }],
        marginTop: Margin.m_36xl,
    },
    portable: {
        color: '#a9a9a9',
        fontSize: FontSize.size_xl,
        marginTop: Margin.m_11xl,
    },
    divoom: {
        fontWeight: 'bold',
        fontSize: FontSize.size_4xs,
        color:Color.black,
        marginTop: Margin.m_3xs,
    },
    dollar: {
        height: 27,
        width: 27,
       marginTop: Margin.m_base,
        
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        marginTop: Margin.m_smi,
        fontWeight: 'bold',
        fontSize: FontSize.size_5xl,
        color: Color.black,
        paddingLeft: Padding.p_3xs,
    },
});


export default CardscreenJstyles;