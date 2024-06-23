import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomFacilitiesAstyles from './CustomFacilitiesA.styles'; 

const CustomFacilitiesA = ({ facilities }) => {
  return (
    <View style={CustomFacilitiesAstyles.container}>
      <Text style={CustomFacilitiesAstyles.headerText}>Facilities</Text>
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
