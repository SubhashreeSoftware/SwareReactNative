import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputJ = () => {
  
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#deb887" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            keyboardType="name"

          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#add8e6" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#9370db" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="number"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#9370db" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contact"
            keyboardType="number"
          />
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
 
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#b0c4de',
    backgroundColor: '#f5fffa',
    alignItems: 'center',
    height: 40,
    width: 250,
    marginTop: 0,
  },
  
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: 900,
  },
  
  
});

export default InputJ;