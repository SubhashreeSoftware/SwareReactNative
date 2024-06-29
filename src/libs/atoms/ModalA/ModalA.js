import React, { useState } from 'react';
import { View, Modal, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextAreaA from '../TextAreaA/TextAreaA';
import ModalAstyles from './ModalA.styles';

const StarRating = ({ rating, onRatingPress }) => {
  return (
    <View style={ModalAstyles.starContainer}>
      {Array(5).fill(0).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => onRatingPress(index + 1)}>
          <Icon
            name="star"
            size={32}
            color={index < rating ? '#1A6EF0' : '#ccc'}
            style={ModalAstyles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ModalA = ({ modalVisible, handleCloseModal }) => {
  const [rating, setRating] = useState(0);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={ModalAstyles.modalContainer}>
          <View style={ModalAstyles.modalContent}>
            <Text style={ModalAstyles.modalTitle}>Leave a Review</Text>
            <View style={ModalAstyles.modalTitleBorder} />
            <Text style={ModalAstyles.modalSubtitle}>How was your experience with Modernica Apartment?</Text>
            <StarRating rating={rating} onRatingPress={setRating} />
            <View style={ModalAstyles.starContainerBorder} />
            <Text style={ModalAstyles.text}>Write your review here..</Text>
            <TextAreaA />
            <View style={ModalAstyles.buttonContainer}>
              <TouchableOpacity style={[ModalAstyles.button, ModalAstyles.maybeLaterButton]} onPress={handleCloseModal}>
                <Text style={[ModalAstyles.buttonText, ModalAstyles.maybeLaterButtonText]}>Maybe Later</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ModalAstyles.button} onPress={() => {
                Alert.alert('Review submitted', `Rating: ${rating}`);
                handleCloseModal();
              }}>
                <Text style={ModalAstyles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalA;
