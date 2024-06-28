import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import FormScreenA from './FormScreenA/FormScreenA';
import CardScreenA from './CardScreenA/CardScreenA';
import CamCardA from './CamCardA/CamCardA';
import PropertiesA from './PropertiesA/PropertiesA';
import FlatListA from './FlatListA/FlatListA';
import CustomFeatureA from '../../../atoms/CustomFeatureA/CustomFeatureA';
import CustomFacilitiesA from '../../../atoms/CustomFacilitiesA/CustomFacilitiesA';
import CustomSearchBarA from '../../../atoms/CustomSearchBarA/CustomSearchBarA';
import FormScreenJ from './FormScreenJ/FormScreenJ';

// Profile image and bell icon for Header@A
const profileImage = require('../../../../../assets/brookly.png');
const bellIcon = require('../../../../../assets/notification.png');

// Practise section
import CardscreenJ from './CardScreenJ/CardscreenJ';
import FlatlistJ from './FlatlistJ/FlatlistJ';
import CustomGalleryJ from '../../../atoms/CustomGalleryJ/CustomGalleryJ';
import CustomButtonJ from '../../../atoms/CustomButtonJ/CustomButtonJ';
import CustomRecommendationImageJ from '../../../atoms/CustomRecommendationImageJ/CustomRecommendationImageJ';
import { useNavigation } from '@react-navigation/native';
import Header2A from '../../../atoms/Header2A/Header2A';
import ProfileHeaderJ from '../../../atoms/ProfileHeaderJ/ProfileHeaderJ';
import CustomFilterJ from '../../../atoms/CustomFilterJ/CustomFilterJ';

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
    // { id: 'formJ', component: <FormScreenJ /> },
  ];


  // Rendered feature cards
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.component}
    </View>
  );

  //Feature cards

  const properties = [
    {
      id: '1',
      name: 'Modernica Apartments',
      location: 'New York, US',
      price: '$29 / Night',
      rating: 4.8,
      backgroundImage: require('../../../../../assets/Image1.jpg'),
    },
    {
      id: '2',
      name: 'Meridian Suites',
      location: 'Paris, France',
      price: '$32 / night',
      rating: 4.6,
      backgroundImage: require('../../../../../assets/Image2.jpg'),
    },
    {
      id: '3',
      name: 'Oceanview Villas',
      location: 'Malibu, US',
      price: '$45 / night',
      rating: 4.9,
      backgroundImage: require('../../../../../assets/Image3.jpg'),
    },
    {
      id: '4',
      name: 'Sunset Retreat',
      location: 'Santorini, Greece',
      price: '$50 / night',
      rating: 4.7,
      backgroundImage: require('../../../../../assets/Image4.jpg'),
    },
    {
      id: '5',
      name: 'Cityscape Condo',
      location: 'Tokyo, Japan',
      price: '$40 / night',
      rating: 4.5,
      backgroundImage: require('../../../../../assets/Image5.jpg'),
    },
  ];

  // Facilities section
  const facilities = [
    { name: 'First Card', icon: require('../../../../../assets/car-parking.png') },
    { name: 'FlatList', icon: require('../../../../../assets/swim.png') },
    { name: 'Form', icon: require('../../../../../assets/dumbbell.png') },
    { name: 'E-receipt', icon: require('../../../../../assets/cutlery.png') },
    { name: 'Help Center', icon: require('../../../../../assets/connection.png') },
    { name: 'Pet Center', icon: require('../../../../../assets/welfare.png') },
    { name: 'Sport Center', icon: require('../../../../../assets/exercise.png') },
    { name: 'Laundry', icon: require('../../../../../assets/laundry-machine.png') },
  ];

  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image source={profileImage} style={styles.profileImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Good Morning 👋</Text>
            <Text style={styles.nameText}>Andrew Ainsley</Text>
          </View>
          <View style={styles.bellIconContainer}>
            <Image source={bellIcon} style={styles.bellIcon} />
          </View>
        </View>
        <CustomSearchBarA />
        <Header2A title1="Arpita's Featured" title2="See All" />
        <CustomFeatureA properties={properties} />
        <Header2A title1="Arpita's Components" title2="" />
        <CustomFacilitiesA facilities={facilities} />
        <Header2A title1="Gallery" title2="See All" />
        <CustomGalleryJ />
        <Header2A title1="Our Recommendation" title2="See All" />
        <CustomButtonJ
          image1={require('../../../../../assets/CustomButtonJ/correct.png')}
          title1="Card"
          onPress1={() => { navigation.navigate('CardscreenJ') }}
          image2={require('../../../../../assets/CustomButtonJ/house.png')}
          title2="flatlist"
          onPress2={() => { navigation.navigate('FlatlistJ') }}

          title3="Review"
          image3={require('../../../../../assets/CustomButtonJ/villa.png')}
          onPress3={() => { navigation.navigate('ReviewScreenJ') }}


          image4={require('../../../../../assets/CustomButtonJ/apartment.png')}
          title4="Apartment"
          onPress4={() => { navigation.navigate('FormScreenJ') }}

        />

        <CustomRecommendationImageJ />
       
       
        <CustomFilterJ/>
        
        {/* <FormScreenA />
    <CardScreenA />
    <CamCardA />
    <FormScreenJ />
    <CardscreenJ/>
    <FlatLists
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
    <FlatlistJ/> */}
      </ScrollView>
    </View>

  );
};

//Styles for Homescreen

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flexGrow: 1,
  },
  itemContainer: {
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 14,
    color: '#888',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bellIconContainer: {
    marginLeft: 10,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
 
});

export default HomeScreen;