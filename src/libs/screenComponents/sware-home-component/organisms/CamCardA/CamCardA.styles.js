import { StyleSheet } from 'react-native';
import CssA from '../../../../atoms/CommonCss/CSSA';

const CamCardAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      card: {
        backgroundColor: '#f0f4f8',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '90%',
        height: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 70,
        bottom: 20,
        paddingHorizontal: 20,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    price: {
        fontSize: 22,
        color: '#333',
        textAlign: 'left',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 16,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
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