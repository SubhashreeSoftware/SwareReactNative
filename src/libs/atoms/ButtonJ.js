import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonJ = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
       <View style={styles.button}>
        <Text style={styles.buttonText}>{title}Next</Text>
      </View>   
      <View style={styles.buttonTwo}>
        <Text style={styles.buttonTexttwo}>{title}Back</Text>
      </View>    
    </TouchableOpacity>
  );
};

const App = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <RoundButton onPress={handlePress} title="Click Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 55,
    width: 280,
    borderRadius: 25, // Half of the height and width to make it round
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  buttonTwo: {
    height: 55,
    width: 280,
    borderRadius: 25, // Half of the height and width to make it round
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    borderWidth:1,
    borderColor: '#e5e4e2',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTexttwo: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonJ;
