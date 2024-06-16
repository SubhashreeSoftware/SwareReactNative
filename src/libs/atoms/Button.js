import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const SimpleButton = () => {
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Submit"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SimpleButton;
