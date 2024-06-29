import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardAStyle from './CardA.styles';


const CardA = () => {
  
  return (
    <ScrollView contentContainerStyle={CardAStyle.container}>
      <Image
        source={require('../../../../assets/EReceipt/barcode1.jpg')} // Replace with the actual barcode image URL
        style={CardAStyle.barcode}
      />
      <View style={CardAStyle.cardContainer}>
        <View style={CardAStyle.card}>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Date</Text>
            <Text style={CardAStyle.value}>Dec 23 - Dec 27, 2022</Text>
          </View>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Check in</Text>
            <Text style={CardAStyle.value}>December 23, 2022</Text>
          </View>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Amount</Text>
            <Text style={CardAStyle.value}>$145.00</Text>
          </View>
        </View>

        <View style={CardAStyle.card}>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Name</Text>
            <Text style={CardAStyle.value}>Andrew Ainsley</Text>
          </View>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Phone Number</Text>
            <Text style={CardAStyle.value}>+1 111 467 378 399</Text>
          </View>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Transaction ID</Text>
            <View style={CardAStyle.transactionIdContainer}>
              <Text style={CardAStyle.value}>5457839079</Text>
              <TouchableOpacity onPress={""}>
                <Icon name="content-copy" size={16} color= "#1A6EF0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={CardAStyle.card}>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Status</Text>
            <Text style={CardAStyle.value}>Paid</Text>
          </View>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Tax</Text>
            <Text style={CardAStyle.value}>$5.00</Text>
          </View>
          <View style={CardAStyle.details}>
            <Text style={CardAStyle.label}>Total</Text>
            <Text style={CardAStyle.value}>$150.00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CardA;
