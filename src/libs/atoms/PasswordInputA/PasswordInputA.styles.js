import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Padding, Margin } from '../../../../GlobalStyles';

const PasswordInputAstyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom:  Margin.m_3xs,
  },
  inputContainer: {
    marginBottom:  Margin.m_3xs,
  },
  label: {
    marginBottom:  Margin.m_8xs,
    fontSize: FontSize.size_base,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: Padding.p_3xs,
    color: Color.black,
  },
});

export default PasswordInputAstyles;
