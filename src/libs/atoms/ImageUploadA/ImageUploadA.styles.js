import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const ImageUploadAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      backgroundImage: {
        width: '100%', 
        height: 300, 
        resizeMode: 'cover', 
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        color: '#adff2f',
        marginBottom: 35,
      },
});


export default ImageUploadAstyles;

