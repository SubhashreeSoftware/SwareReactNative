import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormScreenA from './FormScreenA';
import FormScreenJ from './FormScreenJ';
import CardScreenA from './CardScreenA';
import CamCardA from './CamCardA';
import CardscreenJ from './CardscreenJ';

const HomeScreen = () => {
  return (
    <View style={styles.scrollContainer}>
<ScrollView>
      {/* <FormScreenA />
      <CardScreenA />
      <CamCardA />
      <FormScreenJ />
      <CardscreenJ /> */}
    </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
