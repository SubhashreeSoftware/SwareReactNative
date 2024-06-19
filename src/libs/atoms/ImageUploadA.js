import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const ImageUploadA = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images.jpg')} style={styles.backgroundImage}>
        <View style={styles.content}>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default ImageUploadA;
