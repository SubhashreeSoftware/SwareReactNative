import { StyleSheet } from 'react-native';
import { FontSize, Margin, Padding } from '../../../../../../GlobalStyles';

const FlatListAstyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginVertical: '50%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Padding.p_xl,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: Margin.m_base,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.size_base,
    fontWeight: 'bold',
  },
  description: {
    fontSize: FontSize.size_sm,
    color: '#666',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: FontSize.size_base,
    fontWeight: 'bold',
  },
  date: {
    fontSize: FontSize.size_sm,
    color: '#666',
  },
});

export default FlatListAstyles;
