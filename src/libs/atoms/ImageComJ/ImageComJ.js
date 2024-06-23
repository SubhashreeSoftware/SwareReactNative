import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ImageComJstyles from './ImageComJ.styles';

const ImageComJ = () => {
  return (
    <View style={ImageComJstyles.container}>
      <ImageBackground source={require('../../../assets/bg-img.jpg')} style={ImageComJstyles.backgroundImage}>
        <View style={ImageComJstyles.content}>
          <Text style={ImageComJstyles.text}>React-Native Form</Text>
        </View>
      </ImageBackground>
    </View>
  );
};



export default ImageComJ;
