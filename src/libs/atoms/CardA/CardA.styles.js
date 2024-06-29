import { StyleSheet } from 'react-native';
import { Color, Margin, Padding } from '../../../../GlobalStyles';

const CardAStyle = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: Padding.p_3xs,
    backgroundColor: Color.ghostwhite,
  },
  barcode: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: Margin.m_xl,
  },
  card: {
    backgroundColor: Color.white,
    borderRadius: 8,
    padding: Padding.p_11xl,
    marginBottom: Margin.m_lg,
    elevation: 2,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Margin.m_3xs,
  },
  transactionIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#666',
  },
  value: {
    color: '#333',
  },
});

export default CardAStyle;
