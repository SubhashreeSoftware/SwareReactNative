import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import TextAreaAstyles from './TextAreaA.styles';

const TextAreaA = () => {
  const [text, setText] = useState('');

  return (
    <View style={TextAreaAstyles.container}>
      <TextInput
        style={TextAreaAstyles.textarea}
        onChangeText={setText}
        value={text}
        placeholder="Enter your text here..."
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

export default TextAreaA;
