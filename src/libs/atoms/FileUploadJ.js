import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const FileUploadJ = () => {
  const [fileUri, setFileUri] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const selectFile = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setFileUri(response.assets[0].uri);
      }
    });
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    });

    axios.post('YOUR_SERVER_URL', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setUploadStatus('Upload successful');
      console.log('Response:', response.data);
    })
    .catch(error => {
      setUploadStatus('Upload failed');
      console.log('Error:', error);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Select Resume" onPress={selectFile} />
      {fileUri && (
        <>
          <Image source={{ uri: fileUri }} style={styles.image} />
          <Button title="Upload File" onPress={uploadFile} />
        </>
      )}
      {uploadStatus && <Text>{uploadStatus}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default FileUploadJ;
