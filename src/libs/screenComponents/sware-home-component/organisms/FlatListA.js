import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const transactions = [
  {
    id: '1',
    title: 'Youtube',
    description: 'Subscription Payment',
    amount: '$15,00',
    date: '16 May 2024',
    icon: require('../../../../../assets/youtube.png'),
  },
  {
    id: '2',
    title: 'Stripe',
    description: 'Monthly Salary',
    amount: '+ $3,000',
    date: '15 May 2024',
    icon: require('../../../../../assets/stripe.png'),
  },
  {
    id: '3',
    title: 'Google Play',
    description: 'E-book Purchase',
    amount: '$139,00',
    date: '14 May 2024',
    icon: require('../../../../../assets/googleplay.png'),
  },
  {
    id: '4',
    title: 'OVO',
    description: 'Top Up E-Money',
    amount: '$180,00',
    date: '18 May 2024',
    icon: require('../../../../../assets/ovo.jpg'),
  },
];

const FlatListA = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default FlatListA;
