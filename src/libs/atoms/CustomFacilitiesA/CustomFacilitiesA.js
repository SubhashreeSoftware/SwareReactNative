import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomFacilitiesAstyles from './CustomFacilitiesA.styles'; 
import CssA from '../CommonCss/CSSA';

const CustomFacilitiesA = ({ facilities }) => {
  return (
    <View style={CssA.container}>
      <View style={CustomFacilitiesAstyles.facilitiesContainer}>
        {facilities.map((facility, index) => (
          <View key={index} style={CustomFacilitiesAstyles.facility}>

            <Image source={facility.icon} style={CustomFacilitiesAstyles.icon} />
            <Text style={CustomFacilitiesAstyles.facilityText}>{facility.name}</Text>
            
          </View>
        ))}
      </View>
    </View>
  );
};

export default CustomFacilitiesA;
