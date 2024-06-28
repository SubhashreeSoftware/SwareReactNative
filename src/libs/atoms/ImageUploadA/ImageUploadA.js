import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import ImageUploadAstyles from './ImageUploadA.styles';

const ImageUploadA = () => {
  return (
    <View style={ImageUploadAstyles.container}>
      <ImageBackground 
        source={require('../../../../assets/Home/images.jpg')} 
        style={ImageUploadAstyles.backgroundImage}
      >
        <View style={ImageUploadAstyles.content}>
          {/* Additional content can be added here if needed */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageUploadA;
