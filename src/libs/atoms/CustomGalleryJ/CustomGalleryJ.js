// App.js
import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import CustomGalleryJstyles from './CustomGalleryJ.styles';
import CssJ from '../CommonCss/CssJ';

const CustomGalleryJ = ({image1}) => {
    return (
        <View style={[CssJ.container,{justifyContent: "flex-start", alignSelf: "flex-start"}]}>
            <View style={CustomGalleryJstyles.scrollContainer}>
                <Image
                    source={require('../../../../assets/CustomGalleryJ/whiteBuilding.jpg')}
                    style={CustomGalleryJstyles.image}
                />
                <Image
                    source={require('../../../../assets/CustomGalleryJ/flat.jpg')}
                    style={CustomGalleryJstyles.image}
                />
                <ImageBackground
                    source={require('../../../../assets/CustomGalleryJ/chair.jpg')}
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
