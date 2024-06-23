import { StyleSheet } from 'react-native';

const ImageUploadAstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Color.white,
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

