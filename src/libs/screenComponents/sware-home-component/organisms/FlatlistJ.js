import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

const FlatlistJ = () => {
  const data = [
    { id: '1', title: 'Brooklyn Simmons', subtitle :'Ok, See you next Monday!', image: require('../../../../../assets/brookly.png'), time: '10.00 am',},
    { id: '2', title: 'Karen castillo', subtitle :'you re welcome. Take care...', image: require('../../../../../assets/Karen.png'), time: '09.05 am', },
    { id: '3', title: 'floyd miles', subtitle :'Okay. Thanks! See you', image: require('../../../../../assets/miles.png'), time: 'yesterday', },
  ];

  const renderItem = ({ item }) => (
    
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.titleitem}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>

  );
  headerComponent = () => {
    return <Text style={styles.header}>All messages (23)</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
      ListHeaderComponent={headerComponent}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
   
  },
  item: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    

  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#ffebcd"
    
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
  },
  titleitem :{
    flexDirection: 'column',
  },
  subtitle:{
    color: '#696969',
    fontSize: 14,
    paddingLeft: 10,
  },
  time: {
    paddingBottom: 45,
  }
});

export default FlatlistJ;
