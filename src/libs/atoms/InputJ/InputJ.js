import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputJstyles from './InputJ.styles';
import CssJ from '../CommonCss/CssJ';
import { LinearGradient } from 'expo-linear-gradient';



const InputJ = ({ inputText, iconName, Boxname }) => {

  return (
   
      <View style={{paddingVertical:5}}>
        <Text style={InputJstyles.Boxname}>{Boxname}</Text>
        <View style={CssJ.inputContainer}>

            <LinearGradient
              colors={['#FFFFFF' , '#FFF2C1']}
              style={InputJstyles.iconBackground}
            >
              <Icon color="#E8A905" name={iconName} size={15} />
              </LinearGradient>
         
          <TextInput
            style={CssJ.input}
            placeholder={inputText}
            placeholderTextColor="#888"
            keyboardType="name"
            selectionColor="#ffd11a"
          />
        </View>

      </View>
   
  );
};



export default InputJ;