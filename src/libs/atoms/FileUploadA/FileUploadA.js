import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import FileUploadAstyles from './FileUploadA.styles';

const FileUpload = () => {
  const [fileUri, setFileUri] = useState(null);

  const selectFile = async () => {
    const options = {
      mediaType: 'photo', 
      quality: 1, 
    };

    try {
      const response = await new Promise((resolve, reject) => {
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
            resolve(null);
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            reject(response.error);
          } else {
            resolve(response);
          }
        });
      });

      if (response && response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri; 
        setFileUri(uri); 
      }
    } catch (error) {
      console.error('Error selecting file: ', error);
    }
  };

  const uploadFile = async () => {
    if (!fileUri) {
      Alert.alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      type: 'image/jpeg', 
      name: 'photo.jpg',
    });

    try {
      const response = await axios.post('YOUR_UPLOAD_URL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully', response.data);
      Alert.alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
      Alert.alert('Error uploading file');
    }
  };

  return (
    <View style={FileUploadAstyles.container}>
      <Button title="Select File" onPress={selectFile} />
      {fileUri && <Image source={{ uri: fileUri }} style={FileUploadAstyles.image} />}
      <Button title="Upload File" onPress={uploadFile} />
    </View>
  );
};


export default FileUpload;
