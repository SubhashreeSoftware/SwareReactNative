import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Padding, Margin } from '../../../../../../GlobalStyles';

const HelpCenterScreenstyles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row', 
    marginBottom: Margin.m_xl,
    paddingHorizontal: Padding.p_xl,
  },
  tab: {
    padding: Padding.p_3xs,
    marginHorizontal: Margin.m_41xl,
    borderBottomWidth: Border.br_11xs,
    borderBottomColor: Color.gray100,
    marginHorizontal: Margin.m_41xl, 
  },
  activeTab: {
    borderBottomWidth: Border.br_11xs,
    borderBottomColor: Color.primaryBlue, // Set primary blue color for the active tab
  },
  tabText: {
    fontSize: FontSize.size_lg,
    color: Color.dimgray_100
  },
  activeTabText: {
    color: Color.primaryBlue,
  },
});

export default HelpCenterScreenstyles;
