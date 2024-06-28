import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropdownJstyles from './DropdownJ.styles';
import CssJ from '../CommonCss/CssJ';
const generateRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const days = generateRange(1, 31);
const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];
const years = generateRange(1900, new Date().getFullYear());

const DropdownJ = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedMonth, setSelectedMonth] = useState(months[0].value);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <View style={CssJ.container}>
      <View style={DropdownJstyles.input}> 
        <Picker
          selectedValue={selectedDay}
          style={DropdownJstyles.picker}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
        >
          {days.map((day) => (
            
            <Picker.Item key={day} label={String(day)} value={day}  />
          ))}
        </Picker>
      </View>
      <View style={DropdownJstyles.input}> 
      <Picker
        selectedValue={selectedMonth}
        style={DropdownJstyles.picker}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {months.map((month) => (
          <Picker.Item key={month.value} label={month.label} value={month.value} />
        ))}
      </Picker>
      </View>
      <View style={DropdownJstyles.input}> 
      <Picker
        selectedValue={selectedYear}
        style={DropdownJstyles.picker}
        onValueChange={(itemValue) => setSelectedYear(itemValue)}
      >
        {years.map((year) => (
          <Picker.Item key={year} label={String(year)} value={year} />
        ))}
      </Picker>
      </View>
    </View>
  );
};

export default DropdownJ;
