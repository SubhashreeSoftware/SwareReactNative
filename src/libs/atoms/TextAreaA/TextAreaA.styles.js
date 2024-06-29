import { StyleSheet } from 'react-native';
import { Border, Color, Padding, Margin } from '../../../../GlobalStyles';

const TextAreaAstyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom:  Margin.m_3xs,
  },
  textarea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    padding:  Padding.p_3xs,
    backgroundColor: Color.white,
    textAlignVertical: 'top',
    color: Color.black,
  },
});

export default TextAreaAstyles;
