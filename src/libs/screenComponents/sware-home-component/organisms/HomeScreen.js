import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormScreenA from './FormScreenA';
import FormScreenJ from './FormScreenJ';

const HomeScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <FormScreenA />
    <FormScreenJ />
    </ScrollView>
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
