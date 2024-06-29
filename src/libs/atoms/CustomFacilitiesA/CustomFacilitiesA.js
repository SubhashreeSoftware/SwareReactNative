import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomFacilitiesAstyles from './CustomFacilitiesA.styles';
import { useNavigation } from '@react-navigation/native';
import CssA from '../CommonCss/CssA';

const CustomFacilitiesA = ({ facilities, onPress, onPress1 }) => {
  const navigation = useNavigation();

  return (
    <View style={CssA.container}>
      <View style={CustomFacilitiesAstyles.facilitiesContainer}>
        {facilities.map((facility, index) => (
          <View style={CustomFacilitiesAstyles.facility}>
            <TouchableOpacity
              key={index}
              // onPress={() => onPress && onPress(facility.name)} 
              onPress={() => navigation.navigate(facility.onPress)}
              style={{}}
            >
              <Image source={facility.icon} style={CustomFacilitiesAstyles.icon} />
              <Text style={CustomFacilitiesAstyles.facilityText}>{facility.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CustomFacilitiesA;
