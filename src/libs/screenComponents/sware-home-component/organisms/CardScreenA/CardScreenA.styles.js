import { StyleSheet } from 'react-native';
import { Border, FontSize, Margin, Padding } from '../../../../../../GlobalStyles';

const CardScreenAstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Color.white,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: Padding.p_mini,
        marginBottom: Margin.m_3xs,
        borderRadius: Border.br_8xs,
        backgroundColor: '#f9f9f9',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: Margin.m_3xs,
      },
      pickerContainer: {
        flex: 1,
        marginRight: Margin.m_3xs,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: Border.br_8xs,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
      },
      picker: {
        height: 50,
        width: '100%',
      },
      cvvInput: {
        flex: 1,
        marginLeft: Margin.m_3xs,
      },
      nextButton: {
        backgroundColor: '#007BFF',
        padding: Padding.p_mini,
        borderRadius: Border.br_8xs,
        alignItems: 'center',
        marginBottom: Margin.m_3xs,
      },
      nextButtonText: {
        color: '#fff',
        fontSize: FontSize.size_xl,
      },
      backButton: {
        padding: Padding.p_mini,
        borderRadius: Border.br_8xs,
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
      },
      backButtonText: {
        fontSize: FontSize.size_xl,
        color: '#007BFF',
      },
});


export default CardScreenAstyles;