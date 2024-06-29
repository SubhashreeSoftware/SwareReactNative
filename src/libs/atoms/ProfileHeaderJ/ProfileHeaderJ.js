import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import ProfileHeaderJstyles from './ProfileHeaderJ.styles';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProfileHeaderJ({ icon, title, image, imageOne }) {

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={ProfileHeaderJstyles.container}>
      <View style={ProfileHeaderJstyles.header}>
        <View style={ProfileHeaderJstyles.headerAction}>
          <TouchableOpacity
            onPress={handleBack}>
            <Image
              source={image}
              style={ProfileHeaderJstyles.imageleft}
            />
          </TouchableOpacity>
        </View>

        <Text style={ProfileHeaderJstyles.headerTitle}>{title}</Text>

        <View style={[ProfileHeaderJstyles.headerAction, { alignItems: 'flex-end' }]}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <Image
              source={imageOne}
              style={ProfileHeaderJstyles.imageRight}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
