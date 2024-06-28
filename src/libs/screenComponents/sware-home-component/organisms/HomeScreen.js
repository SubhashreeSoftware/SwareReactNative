import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import FormScreenA from './FormScreenA/FormScreenA';
import CardScreenA from './CardScreenA/CardScreenA';
import CamCardA from './CamCardA/CamCardA';
import PropertiesA from './PropertiesA/PropertiesA';
import FlatListA from './FlatListA/FlatListA'; // Import FlatListA component
import CustomFeatureA from '../../../atoms/CustomFeatureA/CustomFeatureA';
import CustomFacilitiesA from '../../../atoms/CustomFacilitiesA/CustomFacilitiesA';
import CustomSearchBarA from '../../../atoms/CustomSearchBarA/CustomSearchBarA';
import { useNavigation } from '@react-navigation/native';
import Header2A from '../../../atoms/Header2A/Header2A';
import FormScreenJ from './FormScreenJ/FormScreenJ';
import ProfileHeaderJ from '../../../atoms/ProfileHeaderJ/ProfileHeaderJ';
import CustomFilterJ from '../../../atoms/CustomFilterJ/CustomFilterJ';
import CardscreenJ from './CardScreenJ/CardscreenJ';
import FlatlistJ from './FlatlistJ/FlatlistJ';
import CustomGalleryJ from '../../../atoms/CustomGalleryJ/CustomGalleryJ';
import CustomButtonJ from '../../../atoms/CustomButtonJ/CustomButtonJ';
import CustomRecommendationImageJ from '../../../atoms/CustomRecommendationImageJ/CustomRecommendationImageJ';

// Profile image and bell icon for Header@A
const profileImage = require('../../../../../assets/brookly.png');
const bellIcon = require('../../../../../assets/Header/notification.png');


const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Data array for FlatList
  const data = [
    { id: 'formA', component: <FormScreenA /> },
    { id: 'cardA', component: <CardScreenA /> },
    { id: 'camCardA', component: <CamCardA /> },
    { id: 'propertiesTheme', component: <PropertiesA title="Theme" content="Theme plays the main role in designing." /> },
    { id: 'propertiesColor', component: <PropertiesA title="Color" content="Makes things attractive." /> },
    { id: 'propertiesImages', component: <PropertiesA title="Images" content="Makes people emotionally involved." /> },
    { id: 'flatListA', component: <FlatListA /> }, // Add FlatListA component here
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.component}
    </View>
  );

  // Feature cards data
  const properties = [
    {
      id: 'img1',
      name: 'Modernica Apartments',
      location: 'New York, US',
      price: '$29 / Night',
      rating: 4.8,
      backgroundImage: require('../../../../../assets/Features/Image1.jpg'),
    },
    {
      id: 'img2',
      name: 'Meridian Suites',
      location: 'Paris, France',
      price: '$32 / night',
      rating: 4.6,
      backgroundImage: require('../../../../../assets/Features/Image2.jpg'),
    },
    {
      id: 'img3',
      name: 'Oceanview Villas',
      location: 'Malibu, US',
      price: '$45 / night',
      rating: 4.9,
      backgroundImage: require('../../../../../assets/Features/Image3.jpg'),
    },
    {
      id: 'img4',
      name: 'Sunset Retreat',
      location: 'Santorini, Greece',
      price: '$50 / night',
      rating: 4.7,
      backgroundImage: require('../../../../../assets/Features/Image4.jpg'),
    },
    {
      id: 'img5',
      name: 'Cityscape Condo',
      location: 'Tokyo, Japan',
      price: '$40 / night',
      rating: 4.5,
      backgroundImage: require('../../../../../assets/Features/Image5.jpg'),
    },
  ];

  // Facilities section data
  const facilities = [
    {
      name: 'First Card',
      icon: require('../../../../../assets/Facilities/parked-car.png'),
      onPress: 'FirstCardScreen'
    },
    {
      name: 'FlatList',
      icon: require('../../../../../assets/Facilities/swim.png'),
      onPress: 'FlatListScreen'
    },
    { name: 'Form', 
      icon: require('../../../../../assets/Facilities/weightlifting.png'),
      onPress: 'FormScreenA'
     },
    {
      name: 'E-receipt',
      icon: require('../../../../../assets/Facilities/serving-dish.png'),
      onPress: 'EReceiptScreen'
    },
    { name: 'Help Center', 
      icon: require('../../../../../assets/Facilities/wifi-signal.png'),
      onPress: 'HelpCenterScreen'
     },
    { name: 'Pet Center', icon: require('../../../../../assets/Facilities/animals.png') },
    { name: 'Sport Center', icon: require('../../../../../assets/Facilities/tennis.png') },
    { name: 'Laundry', icon: require('../../../../../assets/Facilities/washing-machine.png') },
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
        

      </ScrollView>
    </View>

  );
};

// Styles for HomeScreen
const styles = StyleSheet.create({
  scrollContainer: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
