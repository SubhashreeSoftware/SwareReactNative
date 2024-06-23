// App.js
import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import CustomGalleryJstyles from './CustomGalleryJ.styles';
import CssJ from '../CommonCss/CssJ';

const CustomGalleryJ = () => {
    return (
        <View style={CssJ.container}>
            <View style={CustomGalleryJstyles.scrollContainer}>
                <Image
                    source={require('../../../../assets/whiteBuilding.jpg')}
                    style={CustomGalleryJstyles.image}
                />
                <Image
                    source={require('../../../../assets/flat.jpg')}
                    style={CustomGalleryJstyles.image}
                />
                <ImageBackground
                    source={require('../../../../assets/chair.jpg')}
                    style={CustomGalleryJstyles.imageBackground}
                   
                >
                    <View style={CustomGalleryJstyles.overlay}>
                        <Text style={CustomGalleryJstyles.text}>20+</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};


export default CustomGalleryJ;
