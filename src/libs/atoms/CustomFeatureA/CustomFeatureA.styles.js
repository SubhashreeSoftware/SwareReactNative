import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../../../../GlobalStyles';

const CustomFeatureAstyles = StyleSheet.create({
  featuredContainer: {
    marginVertical: Margin.m_3xs,
  },
  listContainer: {
    paddingLeft: Padding.p_mini,
  },
  cardContainer: {
    marginRight: Margin.m_mini,
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
    width: 250,
    height: 300,
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
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_8xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: Color.yellow,
    fontSize: FontSize.size_sm,
    marginRight: Margin.m_10xs,
  },
  rating: {
    color: '#1C72FB',
    fontWeight: 'bold',
    fontSize: FontSize.size_sm,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  infoContainer: {
    padding: Padding.p_3xs,
  },
  name: {
    fontSize:FontSize.size_xl,
    fontWeight: 'bold',
    color: Color.white,
  },
  location: {
    fontSize: FontSize.size_sm,
    color: '#f2f2f2',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
  },
  price: {
    fontSize: FontSize.size_base,
    color: Color.white,
    flex: 1,  
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginLeft: Margin.m_8xs,
  },
    }); 

export default CustomFeatureAstyles;