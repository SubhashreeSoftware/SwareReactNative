import { View, StyleSheet, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import RNPickerSelect from 'react-native-picker-select';

import React, { useState } from 'react';


const Dropdown = () => {
  const [value, setValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');


  const radio_props = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 },
    { label: 'Other', value: 2 },

  ];

  return (
    <View>
        <View>
          <RadioForm style={styles.radioContainer}
            radio_props={radio_props}
            initial={0}
            onPress={(value) => setValue(value)}
            buttonSize={10}
            buttonOuterSize={20}
            buttonColor='black'
            labelColor='black'


          />
        </View>

        <View>
          <Text style={styles.label}>Select ur Country:</Text>
          <RNPickerSelect 
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: 'India', value: 'India' },
              { label: 'Afghanistan', value: 'Afghanistan' },
              { label: 'Andorra', value: 'Andorra' },
            ]}
            value={selectedValue}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  radioContainer: {
    marginRight: 140,
    

  },
  label:{
     marginRight: 100,
     marginTop : 20
  },
  
});

export default Dropdown;