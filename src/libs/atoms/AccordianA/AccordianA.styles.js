import { StyleSheet } from 'react-native';
import { Color, FontSize, Margin, Padding } from '../../../../GlobalStyles';

const AccordianAStyles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    borderRadius: 8,
    padding: Padding.p_xl,
    marginVertical: Margin.m_5xs,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
  },

  });
  
  export default AccordianAStyles;