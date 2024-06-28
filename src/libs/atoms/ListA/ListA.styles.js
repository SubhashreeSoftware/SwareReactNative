import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../../../../GlobalStyles'; // Ensure this import is correct

const ListAStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Padding.p_5xl,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
    marginVertical: Margin.m_5xs, 
  },
  contactImage: {
    width: 24,
    height: 24,
    marginRight: Margin.m_3xs,
  },
  contactText: {
    fontSize: FontSize.size_base,
    color: Color.black,
  },
});

export default ListAStyles;
