import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import FlatlistJstyles from './FlatlistJ.styles';
import CssJ from '../../../../atoms/CommonCss/CssJ';

const FlatlistJ = () => {
  const data = [
    { id: '1', title: 'Brooklyn Simmons', subtitle :'Ok, See you next Monday!', image: require('../../../../../../assets/FlatlistJ/brookly.png'), time: '10.00 am',},
    { id: '2', title: 'Karen castillo', subtitle :'you re welcome. Take care...', image: require('../../../../../../assets/FlatlistJ/Karen.png'), time: '09.05 am', },
    { id: '3', title: 'floyd miles', subtitle :'Okay. Thanks! See you', image: require('../../../../../../assets/FlatlistJ/miles.png'), time: 'yesterday', },
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
    <View style={CssJ.container}>
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
