import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import CamCardAstyles from './CamCardA.styles';

const CamCardA = () => {
    return (
        <View style={CamCardAstyles.container}>
            <View style={CamCardAstyles.card}>
                <Image
                    source={require('../../../../../../assets/Form/Cam.jpg')}
                    style={CamCardAstyles.image}
                />
                <View style={CamCardAstyles.infoContainer}>
                    <View style={CamCardAstyles.textContainer}>
                        <Text style={CamCardAstyles.title}>Nest Cam</Text>
                        <Text style={CamCardAstyles.price}>$179</Text>
                    </View>
                    <TouchableOpacity style={CamCardAstyles.button}>
                        <Text style={CamCardAstyles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export default CamCardA;
