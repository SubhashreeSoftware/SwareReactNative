import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import CustomButtonJstyles from './CustomButtonJ.styles';
import CssJ from '../CommonCss/CssJ';

const CustomButtonJ = ({ onPress1, onPress2, onPress3,onPress4, image1,image2,image3,image4, title1,title2,title3,title4 }) => {
  return (
    <ScrollView
    horizontal
    >

    <TouchableOpacity onPress={onPress1} style={CssJ.container}>
      <View style={CustomButtonJstyles.button}>
        <Image
          source={image1}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonText}>{title1}</Text>
      </View>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={onPress2} style={CssJ.container}>
      <View style={[CustomButtonJstyles.button,CustomButtonJstyles.buttonTwo]}>
      <Image
          source={image2}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonTexttwo}>{title2}</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress3} style={CssJ.container}>
      <View style={[CustomButtonJstyles.button,CustomButtonJstyles.buttonTwo]}>
        <Image
          source={image3}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonTexttwo}>{title3}</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onPress4} style={CssJ.container}>
      <View style={[CustomButtonJstyles.button,CustomButtonJstyles.buttonTwo,CustomButtonJstyles.buttonThree]}>
        <Image
          source={image4}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonTexttwo}>{title4}</Text>
      </View>
      </TouchableOpacity>
      
    </ScrollView>

  );
};

const App = () => {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={CssJ.container}>
      <RoundButton onPress={handlePress} title="Click Me" />
    </View>
  );
};



export default CustomButtonJ;
