import { StyleSheet } from 'react-native';
import { Border, FontSize, Padding, Margin } from '../../../../GlobalStyles';

const SelectFieldAstyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom:  Margin.m_3xs,
    padding:  Padding.p_3xs,
    backgroundColor: 'white',
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontSize: FontSize.size_base,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:  Margin.m_3xs,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    flex: 1,
    marginRight:  Margin.m_3xs,
  },
});

export default SelectFieldAstyles;
