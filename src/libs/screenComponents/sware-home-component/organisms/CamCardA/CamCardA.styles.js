import { StyleSheet } from 'react-native';
import { Color, FontSize, Padding, Margin } from '../../../../../../GlobalStyles';

const CamCardAstyles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: Color.white,
      },
      card: {
        backgroundColor: '#f0f4f8',
        borderRadius: 16,
        padding: Padding.m_xl,
        alignItems: 'center',
        width: '90%',
        height: 400,
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom:  Margin.m_xl,
        borderRadius: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 70,
        bottom: 20,
        paddingHorizontal:  Padding.p_xl,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: FontSize.size_5xl,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    price: {
        fontSize: 22,
        color: '#333',
        textAlign: 'left',
    },
    button: {
        backgroundColor: Color.white,
        borderRadius: 16,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
});


export default CamCardAstyles;