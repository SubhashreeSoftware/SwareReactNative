import { StyleSheet } from 'react-native';
import { Color } from '../../../../GlobalStyles';

const CustomFeatureAstyles = StyleSheet.create({
  featuredContainer: {
    marginVertical: 20,
  },
  listContainer: {
    paddingLeft: 15,
  },
  cardContainer: {
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    width: 250,
    height: '10%',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: Color.yellow,
    fontSize: 14,
    marginRight: 3,
  },
  rating: {
    color: '#1C72FB',
    fontWeight: 'bold',
    fontSize: 14,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },
  location: {
    fontSize: 14,
    color: '#f2f2f2',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
    // marginTop: 5, 
  },
  price: {
    fontSize: 16,
    color: Color.white,
    flex: 1,  
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
    }); 

export default CustomFeatureAstyles;