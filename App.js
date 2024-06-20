import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RouterHub from './src/apps/RouterHub/RouterHub';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RouterHub />
    </>
  );
}
