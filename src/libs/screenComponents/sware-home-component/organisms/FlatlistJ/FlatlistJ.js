import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import FlatlistJstyles from './FlatlistJ.styles';

const FlatlistJ = () => {
  const data = [
    { id: '1', title: 'Brooklyn Simmons', subtitle :'Ok, See you next Monday!', image: require('../../../../../../assets/brookly.png'), time: '10.00 am',},
    { id: '2', title: 'Karen castillo', subtitle :'you re welcome. Take care...', image: require('../../../../../../assets/Karen.png'), time: '09.05 am', },
    { id: '3', title: 'floyd miles', subtitle :'Okay. Thanks! See you', image: require('../../../../../../assets/miles.png'), time: 'yesterday', },
  ];

  const renderItem = ({ item }) => (
    
      <View style={FlatlistJstyles.item}>
        <Image source={item.image} style={FlatlistJstyles.image} />
        <View style={FlatlistJstyles.titleitem}>
        <Text style={FlatlistJstyles.title}>{item.title}</Text>
        <Text style={FlatlistJstyles.subtitle}>{item.subtitle}</Text>
        </View>
        <Text style={FlatlistJstyles.time}>{item.time}</Text>
      </View>

  );
  headerComponent = () => {
    return <Text style={FlatlistJstyles.header}>All messages (23)</Text>
  }

  return (
    <View style={FlatlistJstyles.container}>
      <FlatList
      ListHeaderComponent={headerComponent}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};



export default FlatlistJ;
