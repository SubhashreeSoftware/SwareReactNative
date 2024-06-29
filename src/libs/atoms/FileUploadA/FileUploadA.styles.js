import { StyleSheet } from 'react-native';
import { Color, Margin, Padding, Border } from '../../../../GlobalStyles';

const FileUploadAstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Padding.p_xl,
    marginVertical: Margin.m_3xs,
    width: '100%',
  },
  buttonContainer: {
    marginVertical: Margin.m_3xs,  
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: Margin.m_xl,
    borderRadius: Border.br_3xs,
  },
});

export default FileUploadAstyles;
