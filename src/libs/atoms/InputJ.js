import { View, TextInput, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputJ = ({inputText, iconName}) => {
  
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.inputContainer}>
        <Icon name={iconName} size={20} color="#e5e4e2" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={inputText}
            placeholderTextColor="#e5e4e2" 
            keyboardType="name"
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
    borderRadius: 20,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderColor: '#e5e4e2',
    alignItems: 'center',
    height: 50,
    width: 280,
  },
  
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: 900,
    paddingLeft: 20,
  },
  
  
});

export default InputJ;