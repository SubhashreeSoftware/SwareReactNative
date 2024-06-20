import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FormScreenA from './FormScreenA';
import FormScreenJ from './FormScreenJ';
import CardScreenA from './CardScreenA';
import CamCardA from './CamCardA';
import PropertiesA from './PropertiesA';
import FlatListA from './FlatListA';

const HomeScreen = () => {
  const data = [
    { id: 'formA', component: <FormScreenA /> },
    { id: 'cardA', component: <CardScreenA /> },
    { id: 'camCardA', component: <CamCardA /> },
    { id: 'propertiesTheme', component: <PropertiesA title="Theme" content="Theme plays the main role in designing." /> },
    { id: 'propertiesColor', component: <PropertiesA title="Color" content="Makes things attractive." /> },
    { id: 'propertiesImages', component: <PropertiesA title="Images" content="Makes people emotionally involved." /> },
    { id: 'flatListA', component: <FlatListA /> },
    { id: 'formJ', component: <FormScreenJ /> },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.component}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
});

export default HomeScreen;
