import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import FormScreenA from './FormScreenA/FormScreenA';
import FormScreenJ from './FormScreenJ/FormScreenJ';
import CardScreenA from './CardScreenA/CardScreenA';
import CamCardA from './CamCardA/CamCardA';
import PropertiesA from './PropertiesA/PropertiesA';
import FlatListA from './FlatListA/FlatListA';
import CardscreenJ from './CardScreenJ/CardscreenJ';
import FlatlistJ from './FlatlistJ/FlatlistJ';
import CustomGalleryJ from '../../../atoms/CustomGalleryJ/CustomGalleryJ';
import CustomButtonJ from '../../../atoms/CustomButtonJ/CustomButtonJ';
import CustomRecommendationImageJ from '../../../atoms/CustomRecommendationImageJ/CustomRecommendationImageJ';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

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
    <View style={styles.scrollContainer}>
      <ScrollView>
       {/* <FormScreenA />
         <CardScreenA />
        <CamCardA />
        <FormScreenJ />
        <CardscreenJ />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
        <FlatlistJ /> */}
        <CustomGalleryJ/>
        <CustomButtonJ
        image1={require('../../../../../assets/correct.png')}
        title1="Card"
        onPress={() => { navigation.navigate('TestScreen') }}
        image2={require('../../../../../assets/house.png')}
        image3={require('../../../../../assets/villa.png')}
        image4={require('../../../../../assets/apartment.png')}
        title2="House"
        title3="Villa"
        title4="Apartment"
        />
        <CustomRecommendationImageJ/>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    marginBottom: 16,
  },
});

export default HomeScreen;