import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import CustomFilterButtonJstyles from './CustomFilterBottonJ.styles';
import CssJ from '../CommonCss/CssJ';

const CustomFilterButtonJ = ({ onPress, filterButtons  }) => {


 const [clickedId, setClickId] = useState(0)

 const handleClick = (item, id) =>{
  setClickId(id)
 }

  return (
    <ScrollView
    horizontal
    >
    
    {filterButtons.map((filterButton, index) => (
      <TouchableOpacity onPress={(item) => handleClick(item,index)} style={CssJ.container}>
          <View key={index} style={[
            index === clickedId ? CustomFilterButtonJstyles.buttonActive : CustomFilterButtonJstyles.button
          ]}>
            <Image source={filterButton.icon} style={CustomFilterButtonJstyles.image} />
            <Text 
            style={index === clickedId ? CustomFilterButtonJstyles.buttonTextActive : CustomFilterButtonJstyles.buttonText }
            >
              {filterButton.name}</Text>
            
          </View>
          </TouchableOpacity>
        ))}

    
      
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



export default CustomFilterButtonJ;
