import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import CustomButtonJstyles from './CustomButtonJ.styles';

const CustomButtonJ = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={CustomButtonJstyles.container}>
      <View style={CustomButtonJstyles.button}>
        <Image
          source={require('../../../../assets/correct.png')}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonText}>{title}All</Text>
      </View>

      <View style={CustomButtonJstyles.buttonTwo}>
      <Image
          source={require('../../../../assets/house.png')}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonTexttwo}>{title} House</Text>
      </View>

      <View style={CustomButtonJstyles.buttonTwo}>
        <Image
          source={require('../../../../assets/villa.png')}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonTexttwo}>{title}Villa</Text>
      </View>

      <View style={CustomButtonJstyles.buttonTwo}>
        <Image
          source={require('../../../../assets/apartment.png')}
          style={CustomButtonJstyles.image}
        />
        <Text style={CustomButtonJstyles.buttonTexttwo}>{title}Apartment</Text>
      </View>
    </TouchableOpacity>
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
