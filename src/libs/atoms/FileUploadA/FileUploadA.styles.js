import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const FileUploadAstyles = StyleSheet.create({
    container: {
        ...CssA.container
      },
      image: {
        width: 200,
        height: 200,
        marginVertical: 20,
      },
});


export default FileUploadAstyles;