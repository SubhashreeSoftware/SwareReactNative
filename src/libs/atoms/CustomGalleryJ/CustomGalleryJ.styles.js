import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const CustomGalleryJstyles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        marginTop: 20,
        borderRadius: 15,
    },
    chairimage: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: 'red',
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 17,
        
    },
    imageBackground: {
        width: 100,
        height: 100, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        overflow: 'hidden', 
        marginTop: 20,
        marginHorizontal: 5,
      },
     
});


export default CustomGalleryJstyles;