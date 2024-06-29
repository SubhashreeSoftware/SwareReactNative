import { StyleSheet } from 'react-native';
import { Color, FontSize, Margin, Padding } from '../../../../GlobalStyles';

const ModalAstyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: Padding.p_11xl,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: FontSize.size_xl,
    fontWeight: 'bold',
    marginBottom: Margin.m_3xs,
  },
  modalTitleBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
    width: '100%',
    marginBottom: Margin.m_3xs,
  },
  modalSubtitle: {
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    marginBottom: Margin.m_3xs,
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_xl,
    marginTop: Margin.m_7xs,
  },
  star: {
    marginHorizontal: Margin.m_8xs, 
  },
  starContainerBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
    width: '100%',
    marginTop: Margin.m_3xs,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: Margin.m_xl,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Padding.p_sm,
    paddingHorizontal: 50,
    borderRadius: 28,
    backgroundColor: Color.primaryBlue,
    marginHorizontal: Margin.m_8xs,
  },
  buttonText: {
    color: '#fff',
    fontSize: FontSize.size_base,
  },
  maybeLaterButton: {
    backgroundColor: '#D6E6FF',
  },
  maybeLaterButtonText: {
    color: Color.primaryBlue,
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: Margin.m_3xs,
  },
});

export default ModalAstyles;
