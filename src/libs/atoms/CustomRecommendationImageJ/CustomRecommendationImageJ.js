import React from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import CustomRecommendationImageJstyles from './CustomRecommendationImageJ.styles';

const images = [
  {
    id: '1',
    src: require('../../../../assets/lucky.jpg'),
    rating: 4.8,
    title: 'Lucky Lake \nApartments',
    subtitle: 'Beijing, China',
    dollar: '$32',
    night: ' /night',
  },
  {
    id: '2',
    src: require('../../../../assets/HomeAway.jpg'),
    rating: 4.6,
    title: 'Alpha Housing \nHome',
    subtitle: 'New Delhi, India',
    dollar: '$29',
    night: ' /night',
  },
  {
    id: '3',
    src: require('../../../../assets/tranquil.jpg'),
    title: 'Tranquil Tavern \nApartments',
    rating: 4.7,
    subtitle: 'New York, US',
    dollar: '$35',
    night: ' /night',
  },
  {
    id: '4',
    src: require('../../../../assets/tropicana.webp'),
    title: 'Tropicana Del \nNorte',
    rating: 4.9,
    subtitle: 'Tokyo, Japan',
    dollar: '$47',
    night: ' /night',
  },
  {
    id: '4',
    src: require('../../../../assets/raid.jpg'),
    title: 'Secluded Beach \nHouse',
    rating: 4.8,
    subtitle: 'Maui, Hawaii',
    dollar: '$35',
    night: ' /night',
  },
  {
    id: '4',
    src: require('../../../../assets/riadimage.jpg'),
    title: 'Historic City \nMansion',
    rating: 4.7,
    subtitle: 'Paris, France',
    dollar: '$32',
    night: ' /night',
  },
  {
    id: '4',
    src: require('../../../../assets/altair.jpg'),
    title: 'Serenity Forest \nCabin',
    rating: 4.7,
    subtitle: 'Black forest, Germany',
    dollar: '$32',
    night: ' /night',
  },
  {
    id: '4',
    src: require('../../../../assets/scenic.jpg'),
    title: 'Scenic Mountain \nlodge',
    rating: 4.8,
    subtitle: 'Banff, Canada',
    dollar: '$38',
    night: ' /night',
  },
  // Add more images here
];

const numColumns = 2; // Set the number of columns to 2

const CustomRecommendationImageJ = () => {
  return (
    <FlatList
      data={images}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={CustomRecommendationImageJstyles.item}>
          <View style={CustomRecommendationImageJstyles.imageContainer}>
            <Image source={item.src} style={CustomRecommendationImageJstyles.image} />
            <View style={CustomRecommendationImageJstyles.overlay}>
              <Text style={CustomRecommendationImageJstyles.ratingText}>⭐  {item.rating}</Text>
            </View>
          </View>
          <Text style={CustomRecommendationImageJstyles.title}>{item.title}</Text>
          <Text style={CustomRecommendationImageJstyles.subtitle}>{item.subtitle}</Text>
          <View style={CustomRecommendationImageJstyles.footer}>
            <Text style={CustomRecommendationImageJstyles.dollar}>{item.dollar}</Text>
            <Text style={CustomRecommendationImageJstyles.night}>{item.night}</Text>
            <Image source={require('../../../../assets/blueherart.png')} style={CustomRecommendationImageJstyles.heart} />
          </View>
        </View>
      )}
      numColumns={numColumns}
      contentContainerStyle={CustomRecommendationImageJstyles.container}
    />
  );
};




export default CustomRecommendationImageJ;
