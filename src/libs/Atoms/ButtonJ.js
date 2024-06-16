import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ButtonJ = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 7,
    borderColor: '#dda0dd',
    borderRadius: 15,
    backgroundColor: '#87cefa',
    marginTop: 30,

  },
});
export default ButtonJ; 