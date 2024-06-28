import React, { useState, useRef } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import CustomFilterButtonJ from '../CustomFilterBottonJ/CustomFilterBottonJ';
import PriceRangeJ from '../PriceRangeJ/PriceRangeJ';
import FilterDropdownJ from '../FilterDropdownJ/FilterDropdownJ';
import ButtonJ from '../ButtonJ/ButtonJ';
import CssJ from '../CommonCss/CssJ';


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
    { name: 'All', icon: require('../../../../assets/car-parking.png') },
    { name: 'Car Parking', icon: require('../../../../assets/swim.png') },
    { name: 'Gym', icon: require('../../../../assets/dumbbell.png') },
    { name: 'Resturant', icon: require('../../../../assets/cutlery.png') },
    
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

                         <ButtonJ/>



            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  openButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
},
buttonText: {
    color: 'white',
    fontSize: 16,
},
overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContainer: {
    height: height / 1.2,
    backgroundColor: 'white',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    
    padding: 20,

},
modalContent: {
    width: '100%',
},
Filter: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 135,
},
Category: {
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
},
closeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
},
});

export default CustomFilterJ;
