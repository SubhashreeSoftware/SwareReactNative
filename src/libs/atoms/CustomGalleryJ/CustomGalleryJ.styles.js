import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const CustomGalleryJstyles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        // alignItems: 'center',
        paddingHorizontal: Padding.p_3xs,
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: Margin.m_8xs,
        marginBottom: Margin.m_3xs,
        borderRadius: Border.br_4xs,
    },
    chairimage: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        // marginTop: 20,
        borderRadius: Border.br_4xs,
       
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Color.white,
        fontSize: FontSize.size_lg,
        
    },
    imageBackground: {
        width: 100,
        height: 100, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: Border.br_4xs,
        overflow: 'hidden', 
        // marginTop: 20,
        marginHorizontal: Border.br_8xs,
      },
     
});


export default CustomGalleryJstyles;