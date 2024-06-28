import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../../../../GlobalStyles';

const Header2Astyles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: Padding.p_base,
    // backgroundColor: '#fff',
    borderRadius: Border.br_5xs,
    marginBottom: Margin.m_base,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
  },
  actionText: {
    fontSize: FontSize.size_base,
    color: '#1C72FB',
  },
});


export default Header2Astyles;