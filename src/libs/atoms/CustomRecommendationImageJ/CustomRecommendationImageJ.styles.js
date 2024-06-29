import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const CustomRecommendationImageJstyles = StyleSheet.create({
   
  item: {
    backgroundColor: Color.whitesmoke_100,
    padding: Padding.p_6xs,
    marginVertical: Margin.m_8xs,
    marginHorizontal: Margin.m_10xs,
    alignItems: 'center',
    borderRadius: Border.br_xl,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },

  image: {
    width: 160,
    height: 160,
    borderRadius:  Border.br_xl,
    marginTop: Margin.m_xl,
  },


  overlay: {
    position: 'absolute',
    backgroundColor: Color.whitesmoke_100, 
    padding: Padding.p_5xs,
    paddingRight: Padding.p_mini,
    marginTop: Margin.m_11xl,
    marginLeft: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Border.br_xl,
  },

  ratingText: {
    color: Color.primarycolor,
    fontSize: FontSize.size_smi,
    fontWeight: "bold"
  },
  title: {
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    fontSize: FontSize.size_lg,
    fontWeight: "bold"
  },
  subtitle: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 12,
    color: "gray"
  },
  footer: {
    flexDirection: 'row',
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: 25,
  },
  dollar: {
    color: Color.primarycolor,
    fontSize: FontSize. size_xl,
    fontWeight: "bold"
  },
  night:{
    paddingTop: Padding.p_8xs,
    fontSize: FontSize.size_xs,
    color: Color.gray999
  },
  heart: {
    height: 40,
    width: 45,
    marginLeft: 27,
    marginTop: -10,
  
  },
     
});


export default CustomRecommendationImageJstyles;