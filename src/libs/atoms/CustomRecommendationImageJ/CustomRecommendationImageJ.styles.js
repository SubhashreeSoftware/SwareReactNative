import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const CustomRecommendationImageJstyles = StyleSheet.create({
   
  item: {
    backgroundColor: 'whitesmoke',
    padding: 7,
    marginVertical: 5,
    marginHorizontal: 3,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 20,
    marginTop: 20,
  },


  overlay: {
    position: 'absolute',
    backgroundColor: 'whitesmoke', 
    padding: 8,
    paddingRight: 15,
    marginTop: 30,
    marginLeft: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },

  ratingText: {
    color: '#007bff',
    fontSize: 13,
    fontWeight: "bold"
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
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
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 25,
  },
  dollar: {
    color: '#007bff',
    fontSize: 20,
    fontWeight: "bold"
  },
  night:{
    paddingTop: 5,
    fontSize: 12,
    color: "gray"
  },
  heart: {
    height: 40,
    width: 45,
    marginLeft: 27,
    marginTop: -10,
  
  },
     
});


export default CustomRecommendationImageJstyles;