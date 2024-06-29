import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ListAStyles from './ListA.styles';

const ListA = ({ navigation }) => {
  const contactOptions = [
    { id: 'Cs', name: 'Customer Service', image: require('../../../../assets/Facilities/headphones.png'), screen: 'ChatScreenA' },
    { id: 'Wa', name: 'WhatsApp', image: require('../../../../assets/Facilities/whatsapp.png') },
    { id: 'Ws', name: 'Website', image: require('../../../../assets/Facilities/world-wide-web.png') },
    { id: 'Fb', name: 'Facebook', image: require('../../../../assets/Facilities/facebook.png') },
    { id: 'Tw', name: 'Twitter', image: require('../../../../assets/Facilities/twitter.png') },
    { id: 'Ig', name: 'Instagram', image: require('../../../../assets/Facilities/instagram.png') },
  ];

  const renderContactItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={ListAStyles.contactItem}
        onPress={() => item.screen && navigation.navigate(item.screen)}
      >
        <Image source={item.image} style={ListAStyles.contactImage} />
        <Text style={ListAStyles.contactText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={ListAStyles.container}>
      <FlatList
        data={contactOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        ItemSeparatorComponent={() => <View style={ListAStyles.separator} />}
      />
    </View>
  );
};


export default ListA;
