import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import PriceRangeJstyles from './PriceRangeJ.styles';
import CssJ from '../CommonCss/CssJ';

const PriceRangeJ = () => {
  const [price, setPrice] = useState(50); // Initial price value

  return (
    <View style={styles.container}>
      <Text style={PriceRangeJstyles.title}>Select Price: ${price}</Text>
      <Slider
        style={PriceRangeJstyles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={price}
        onValueChange={(value) => setPrice(value)}
        minimumTrackTintColor="#007bff"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#007bff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  slider: {
    width: 300,
    height: 40,
    
  },
});

export default PriceRangeJ;
