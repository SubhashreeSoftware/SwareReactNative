import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const ImageComJ = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/bg-img.jpg')} style={styles.backgroundImage}>
        <View style={styles.content}>
          <Text style={styles.text}>React-Native Form</Text>
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

export default ImageComJ;
