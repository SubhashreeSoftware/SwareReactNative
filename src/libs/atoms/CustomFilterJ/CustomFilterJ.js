import React, { useState, useRef } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import CustomFilterButtonJ from '../CustomFilterBottonJ/CustomFilterBottonJ';
import PriceRangeJ from '../PriceRangeJ/PriceRangeJ';
import FilterDropdownJ from '../FilterDropdownJ/FilterDropdownJ';
import ButtonJ from '../ButtonJ/ButtonJ';
import styles from './CustomFilterJ.styles';



const { height } = Dimensions.get('window');

const CustomFilterJ = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current; // Initial position off-screen (bottom)

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const filterButtons = [
    { name: 'All', icon: require('../../../../assets/CustomButtonJ/correct.png') },
    { name: 'House', icon: require('../../../../assets/CustomButtonJ/house.png') },
    { name: 'Villa', icon: require('../../../../assets/CustomButtonJ/villa.png') },
    { name: 'Apartment', icon: require('../../../../assets/CustomButtonJ/apartment.png') },

  ];


  const filterButtonsOne = [
    { name: 'All', icon: require('../../../../assets/Facilities/customer.png') },
    { name: 'Car Parking', icon: require('../../../../assets/Facilities/parked-car.png') },
    { name: 'Gym', icon: require('../../../../assets/Facilities/weightlifting.png') },
    { name: 'Resturant', icon: require('../../../../assets/Facilities/serving-dish.png') },

  ];
  const filterButtonsTwo = [
    { name: 'All', icon: require('../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '5', icon: require('../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '4', icon: require('../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '3', icon: require('../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '2', icon: require('../../../../assets/ReviewScreenJ/iconblue.png') },

  ];



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal} style={styles.openButton}>
        <Text style={styles.buttonText}>Open Filter</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={closeModal}>
          <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.modalContent}>
              <Text style={styles.Filter}>Filter</Text>
              <Text style={styles.Category}>Category</Text>
              <CustomFilterButtonJ filterButtons={filterButtons}
              />

              <Text style={styles.Category}>Price Range</Text>
              <PriceRangeJ />

              <Text style={styles.Category}>Facilites</Text>
              <CustomFilterButtonJ filterButtons={filterButtonsOne}
              />

              <Text style={styles.Category}>Location</Text>
              <FilterDropdownJ />

              <Text style={styles.Category}>Rating</Text>
              <CustomFilterButtonJ filterButtons={filterButtonsTwo}
              />

              <ButtonJ />



            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};



export default CustomFilterJ;
