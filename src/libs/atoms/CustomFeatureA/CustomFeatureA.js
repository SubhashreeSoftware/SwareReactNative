import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomFeatureAstyles from './CustomFeatureA.styles'; 

const FeatureCard = ({ name, location, price, rating, backgroundImage }) => (
  <View style={CustomFeatureAstyles.cardContainer}>
    <ImageBackground source={backgroundImage} style={CustomFeatureAstyles.image}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.7)']}
        style={CustomFeatureAstyles.gradient}
      />
      <View style={CustomFeatureAstyles.ratingContainer}>
        <Text style={CustomFeatureAstyles.star}>★</Text>
        <Text style={CustomFeatureAstyles.rating}>{rating}</Text>
      </View>
      <View style={CustomFeatureAstyles.infoContainer}>
        <Text style={CustomFeatureAstyles.name}>{name}</Text>
        <Text style={CustomFeatureAstyles.location}>{location}</Text>
        <View style={CustomFeatureAstyles.priceContainer}>
          <Text style={CustomFeatureAstyles.price}>{price}</Text>
          <Image source={require('../../../../assets/Features/heart.png')} style={CustomFeatureAstyles.heartIcon} />
        </View>
      </View>
    </ImageBackground>
  </View>
);

const CustomFeatureA = ({ properties }) => (
  <View style={CustomFeatureAstyles.featuredContainer}>
    <FlatList
      data={properties}
      renderItem={({ item }) => (
        <FeatureCard
          name={item.name}
          location={item.location}
          price={item.price}
          rating={item.rating}
          backgroundImage={item.backgroundImage}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={CustomFeatureAstyles.listContainer}
    />
  </View>
);

export default CustomFeatureA;
