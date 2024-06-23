import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import SelectFieldAstyles from './SelectFieldA.styles';


const SelectFieldA = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginBottom: 20 }}>
        Select your Hobby
      </Text>

      <CheckBox
        isChecked={isChecked}
        onClick={() => setIsChecked(isChecked)} rightText='' />
    </View>
  );
};



export default SelectFieldA;
