import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../../../GlobalStyles";

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
        borderRadius: 50,
        elevation: 5,
        paddingHorizontal: 20,
        marginTop: 30,
        backgroundColor: '#e5e4e2',

    },
    localImage: {
        width: 320,
        height: 320,
        transform: [{ rotate: '350deg' }],
        marginTop: 55,
    },
    portable: {
        color: '#a9a9a9',
        fontSize: 20,
        marginTop: 30,
    },
    divoom: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginTop: 10,
    },
    dollar: {
        height: 27,
        width: 27,
       marginTop: 16,
        
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        marginTop: 13,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        paddingLeft: 10,
    },
});


export default CardscreenJstyles;