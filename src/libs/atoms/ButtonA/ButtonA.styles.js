import { StyleSheet } from 'react-native';
import { Color, FontSize, Margin, Padding } from '../../../../GlobalStyles';

const ButtonAstyles = StyleSheet.create({
  button: {
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.primaryBlue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Margin.m_xl,
  },
  text: {
    color: Color.white,
    fontSize: FontSize.size_base,
  },
});


export default ButtonAstyles;