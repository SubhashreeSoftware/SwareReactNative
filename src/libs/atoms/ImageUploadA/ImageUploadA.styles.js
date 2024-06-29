import { StyleSheet } from 'react-native';
import { Border, Margin } from '../../../../GlobalStyles';

const ImageUploadAstyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Margin.m_3xs,
    borderRadius: Border.br_5xs,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageUploadAstyles;
