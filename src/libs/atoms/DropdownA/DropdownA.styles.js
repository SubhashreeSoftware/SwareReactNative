import { StyleSheet } from 'react-native';
import { Color, Margin, Padding, FontSize, Border } from '../../../../GlobalStyles';

const DropdownAstyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Margin.m_3xs,
    padding: Padding.p_3xs,
    borderWidth: Border.br_11xs,
    borderColor: '#ccc',
    borderRadius: Border.br_8xs,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: FontSize.size_base,
    marginBottom: Margin.m_5xs,
    fontWeight: 'bold',
    color: '#333',
  },
  pickerContainer: {
    borderWidth: Border.br_11xs,
    borderColor: 'gray',
    borderRadius: Border.br_8xs,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  selectedValueText: {
    marginTop: Margin.m_base,
    fontSize: FontSize.size_base,
  },
});

export default DropdownAstyles;
