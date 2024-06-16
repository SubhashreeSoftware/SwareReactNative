import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextareaExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textarea}
        onChangeText={setText}
        value={text}
        placeholder='Enter your text here...'
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  textarea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },
});

export default TextareaExample;
