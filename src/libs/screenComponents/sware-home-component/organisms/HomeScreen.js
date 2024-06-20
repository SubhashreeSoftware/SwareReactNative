import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormScreenA from './FormScreenA';
import FormScreenJ from './FormScreenJ';
import CardScreenA from './CardScreenA';
import CamCardA from './CamCardA';
import CardscreenJ from './CardscreenJ';
import FlatlistJ from './FlatlistJ';

const HomeScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <FormScreenA />
    <CardScreenA />
    <CamCardA />
    <FormScreenJ />
    <CardscreenJ/>
    <FlatlistJ/>
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
