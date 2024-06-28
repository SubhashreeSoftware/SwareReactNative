import { StyleSheet } from 'react-native';
import { Border, Color, Margin, Padding, FontSize } from '../../../../../../GlobalStyles';


const FormScreenAstyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Padding.p_base,
  },
  screenText: {
    fontSize: FontSize.size_5xl,
    marginBottom: Margin.m_xl,
  },
  formContainer: {
    width: '100%',
    padding: Padding.p_xl,
    borderWidth: Border.br_11xs,
    borderColor: '#007BFF',
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default FormScreenAstyles;
