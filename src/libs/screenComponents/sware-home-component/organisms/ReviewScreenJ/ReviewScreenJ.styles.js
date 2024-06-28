import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../../../GlobalStyles";

const ReviewScreenJstyles = StyleSheet.create({
    item: {
        backgroundColor: Color.whitesmoke_100,
        marginTop: Margin.m_3xs,
    },
    itemContainer: {
        flexDirection: 'row',
      
    },

    image: {
        width: 45,
        height: 45,
        borderRadius: Border.br_31xl,
        //backgroundColor: "orange",

    },
    imageContainer:{
        borderRadius: Border.br_31xl,
        marginTop: Margin.m_5xs,
        marginLeft: Margin. m_3xs,
    },

    name: {
        paddingLeft: Padding.p_smi,
        marginTop: Margin.m_5xl,
        fontWeight: "bold",
        fontSize: FontSize.size_sm,
    },
    overlay: {
        height: 30,
        width: 55,
        borderRadius: Border.br_6xl,
        backgroundColor: Color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: Margin.m_xl,
        backgroundColor: Color.white,
        borderWidth: 2,
        borderColor: '#007bff',
        marginHorizontal: Margin. m_10xs,
        marginLeft: Margin.m_11xl,
    },
    icon: {
        height: 20,
        width: 20,

    },
    review: {
        paddingTop: Padding.p_8xs,
        paddingLeft: Padding.p_mini,
        paddingRight: Padding.p_3xs,
        fontSize: FontSize.size_smi,
    },
    ratingText: {
        paddingRight: Padding.p_8xs,
        color: '#007bff',
        fontWeight: "bold",
    },

    footer: {
        flexDirection: 'row',
        paddingLeft: Padding.p_3xs,
        paddingTop: Padding. p_10xs,
        paddingBottom: Padding. p_8xs,
       
    },
    more: {
        height: 16,
        width: 16,
        marginTop: Margin. m_13xs,
        marginLeft: Margin.m_12xs,

    },
    hearticon: {
        height: 35,
        width: 40,
        marginTop: -5,
    },
    number: {
        paddingLeft: Padding.p_8xs,
        paddingTop: Padding.p_8xs,
        color: "gray",
        fontSize: 13,
        fontWeight: 'bold',
    },
    day: {
        paddingLeft: Padding. p_5xl,
        paddingTop: Padding.p_8xs,
        color: "darkgrey",
        fontSize: FontSize.size_smi,

    },
});

export default ReviewScreenJstyles;