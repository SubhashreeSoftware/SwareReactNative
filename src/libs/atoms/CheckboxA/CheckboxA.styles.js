import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin } from '../../../../GlobalStyles';

const CheckboxAstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Margin.m_3xs,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: Border.br_11xs,
    borderColor: Color.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  checked: {
    backgroundColor: Color.primaryBlue,
  },
  innerChecked: {
    width: 12,
    height: 12,
    backgroundColor: Color.white,
    borderRadius: 2,
  },
  label: {
    marginLeft: Margin.m_5xs,
    fontSize: FontSize.size_base,
    color: '#333',
  },
});

export default CheckboxAstyles;
