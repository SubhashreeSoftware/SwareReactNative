import { View, TextInput, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputJstyles from './InputJ.styles';
import CssJ from '../CommonCss/CssJ';

const InputJ = ({inputText, iconName}) => {
  
  return (
    <View>
      <View style={InputJstyles.box}>
        <View style={CssJ.inputContainer}>
        <Icon name={iconName} size={20} color="#e5e4e2" style={CssJ.icon} />
          <TextInput
            style={CssJ.input}
            placeholder={inputText}
            placeholderTextColor="#e5e4e2" 
            keyboardType="name"
          />
        </View>
        
        </View>
    </View>
  );
};



export default InputJ;