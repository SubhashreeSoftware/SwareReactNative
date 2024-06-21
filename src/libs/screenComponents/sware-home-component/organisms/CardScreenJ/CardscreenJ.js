import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardscreenJstyles from './CardscreenJ.styles';
import CssJ from '../../../../atoms/CommonCss/CssJ';

const CardscreenJ = () => {
    return (
        <View style={CssJ.container}>
            <View style={CardscreenJstyles.boxInput}>
                <Image
                    source={require('../../../../../../assets/speaker.png')}
                    style={CardscreenJstyles.localImage}
                />
                <View style= {{justifyContent: "flex-start", alignItems: "flex-start"}}>
                <Text style={CardscreenJstyles.portable}>#Portable FM</Text>
                <Text style={CardscreenJstyles.divoom}>Divoom Radio</Text>
                <View style={CardscreenJstyles.row}>
                    <Image
                        source={require('../../../../../../assets/dollar.png')}
                        style={CardscreenJstyles.dollar}
                    />
                    <Text style={CardscreenJstyles.text}>$52.00</Text>
                </View>
                </View>
            </View>
        </View>
    );
};

export default CardscreenJ;