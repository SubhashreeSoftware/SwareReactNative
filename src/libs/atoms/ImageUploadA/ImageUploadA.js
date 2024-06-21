import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ImageUploadAstyles from './ImageUploadA.styles';

const ImageUploadA = () => {
  return (
    <View style={ImageUploadAstyles.container}>
      <ImageBackground source={require('../../../../assets/images.jpg')} style={ImageUploadAstyles.backgroundImage}>
        <View style={ImageUploadAstyles.content}>
        </View>
      </ImageBackground>
    </View>
  );
};


export default ImageUploadA;
