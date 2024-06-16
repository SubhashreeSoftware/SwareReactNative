import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormScreenA from './FormScreenA';

const HomeScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <FormScreenA />
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
