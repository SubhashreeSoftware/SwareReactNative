import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const ImageComJ = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/bg-img.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.text}>React Native Form </Text>
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
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 695,
    width: 355,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color:'#f08080'
  },
});

export default ImageComJ;