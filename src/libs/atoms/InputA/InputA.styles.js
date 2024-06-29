import { StyleSheet } from 'react-native';
import { Border, FontSize, Margin, Padding } from '../../../../GlobalStyles';

const InputAstyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Margin.m_xl,
  },
  label: {
    fontSize: FontSize.size_base,
    marginBottom: Margin.m_5xs,
  },
  input: {
    height: 40,
    borderWidth: Border.br_11xs,
    borderColor: 'gray',
    padding: Padding.p_3xs,
  },
});

export default InputAstyles;
