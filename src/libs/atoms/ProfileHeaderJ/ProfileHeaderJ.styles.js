import { StyleSheet } from 'react-native';
import { Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const ProfileHeaderJstyles = StyleSheet.create({
  container: {
    padding: 0,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: Padding.p_base,
    marginBottom: Margin.m_mini,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    color: '#000',
    paddingRight: Padding. p_3xs,
    marginTop: Margin.m_3xs,
  },
  imageRight: {
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    height: 20,
    width: 20,
    marginTop: Margin.m_3xs,
  },
  imageleft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 30,
    width: 30,
    marginTop: Margin.m_8xs,
  },
});

export default ProfileHeaderJstyles;