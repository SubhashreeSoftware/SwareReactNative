import { StyleSheet } from 'react-native';
import { Color, FontSize, Padding, Margin } from '../../../../GlobalStyles';

const ButtonAstyles = StyleSheet.create({
  button: {
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Margin.m_xl,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 200,    
    height: 50, 
  },
  text: {
    color: Color.white,
    fontSize: FontSize.size_base,
  },
});

export default ButtonAstyles;
