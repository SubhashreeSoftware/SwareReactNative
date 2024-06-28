import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import FlatListAstyles from './FlatListA.styles';

const transactions = [
  {
    id: '1a',
    title: 'Youtube',
    description: 'Subscription Payment',
    amount: '$15,00',
    date: '16 May 2024',
    icon: require('../../../../../../assets/Flatlist/youtube.png'),
  },
  {
    id: '2b',
    title: 'Stripe',
    description: 'Monthly Salary',
    amount: '+ $3,000',
    date: '15 May 2024',
    icon: require('../../../../../../assets/Flatlist/stripe.png'),
  },
  {
    id: '3c',
    title: 'Google Play',
    description: 'E-book Purchase',
    amount: '$139,00',
    date: '14 May 2024',
    icon: require('../../../../../../assets/Flatlist/googleplay.png'),
  },
  {
    id: '4d',
    title: 'OVO',
    description: 'Top Up E-Money',
    amount: '$180,00',
    date: '18 May 2024',
    icon: require('../../../../../../assets/Flatlist/ovo.jpg'),
  },
];

const FlatListA = () => {
  const renderItem = ({ item }) => (
    <View style={FlatListAstyles.item}>
      <Image source={item.icon} style={FlatListAstyles.icon} />
      <View style={FlatListAstyles.textContainer}>
        <Text style={FlatListAstyles.title}>{item.title}</Text>
        <Text style={FlatListAstyles.description}>{item.description}</Text>
      </View>
      <View style={FlatListAstyles.rightContainer}>
        <Text style={FlatListAstyles.amount}>{item.amount}</Text>
        <Text style={FlatListAstyles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={FlatListAstyles.container}>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FlatListA;
