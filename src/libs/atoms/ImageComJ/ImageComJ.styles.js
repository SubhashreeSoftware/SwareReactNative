import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";

const ImageComJstyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width:325,
       height:45
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    
      },
      text: {
        fontSize: 24,
        color: '#adff2f',
        marginBottom: 35,
      },
});


export default ImageComJstyles;