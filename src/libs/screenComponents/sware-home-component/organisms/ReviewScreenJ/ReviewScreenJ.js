import React from 'react';
import { FlatList, Image, StyleSheet, View, Text, ImageBackground } from 'react-native';
import CssJ from '../../../../atoms/CommonCss/CssJ';
import { overlay } from 'react-native-paper';
import ReviewScreenJstyles from './ReviewScreenJ.styles';

import CustomFilterButtonJ from '../../../../atoms/CustomFilterBottonJ/CustomFilterBottonJ';
const images = [
    {
        id: '1',
        src: require('../../../../../../assets/ReviewScreenJ/darron.png'),
        name: "Charolette Hanlin",
        rating: 5,
        review: 'The apartment is very nice, clean and morden. I really like  the interior design Looks like I will fell at home 🥰🥰🥰',
        image: require('../../../../../../assets/ReviewScreenJ/lightblueheart.png'),
        number: 938,
        day: '6 days ago',
        backgroundColor: '#ff9999'
    },
    {
        id: '2',
        src: require('../../../../../../assets/ReviewScreenJ/dar.png'),
        name: "Darron Kulikowski",
        rating: 4,
        review: 'The apartment is great! My family likes it very much. I highly recommend it for people 👍👍👍',
        image: require('../../../../../../assets/CustomRecommendationImageJ/blueherart.png'),
        number: 629,
        day: '2 weeks ago',
        backgroundColor: '#ccff99'
    },
    {
        id: '3',
        src: require('../../../../../../assets/ReviewScreenJ/luralee.png'),
        name: "Lauralee Quintero",
        rating: 4,
        review: 'Amazing apartment! Especially I really like the design of the bathroom, it makes me feel more at home and do not want to go out 😂😂😂 ',
        image: require('../../../../../../assets/ReviewScreenJ/lightblueheart.png'),
        number: 553,
        day: '2 weeks ago',
        backgroundColor: '#99ccff'
    },
    {
        id: '4',
        src: require('../../../../../../assets/ReviewScreenJ/ful.png'),
        name: "Allileen Fullbright",
        rating: 5,
        review: 'This is one of the best apartments I"ve ever had. Affordable prices with quality services and complete facilities 😍😍 ',
        image: require('../../../../../../assets/CustomRecommendationImageJ/blueherart.png'),
        number: 938,
        day: '3 weeks ago',
        backgroundColor: '#ffe4b5'
    },
    {
        id: '1',
        src: require('../../../../../../assets/ReviewScreenJ/kuko.png'),
        name: "Rodolfo Kukowski",
        rating: 4,
        review: 'The apartment is very nice, clean and morden. I really like  the interior design Looks like I will fell at home 🥰🥰🥰',
        image: require('../../../../../../assets/ReviewScreenJ/lightblueheart.png'),
        number: 738,
        day: '3 weeks ago',
        backgroundColor: '#d9a8ff'
    },

];

const filterButtons = [
    { name: 'All', icon: require('../../../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '5', icon: require('../../../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '4', icon: require('../../../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '3', icon: require('../../../../../../assets/ReviewScreenJ/iconblue.png') },
    { name: '2', icon: require('../../../../../../assets/ReviewScreenJ/iconblue.png') },
    

];

const ImageItem = ({ item }) => (
    <View style={[ReviewScreenJstyles.imageContainer, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.src} style={ReviewScreenJstyles.image} />
    </View>
);
const ReviewScreenJ = () => {
    return (
        <View style={CssJ.container}>
            <CustomFilterButtonJ filterButtons={filterButtons}
            />

            <FlatList

                data={images}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (


                    <View style={ReviewScreenJstyles.item}>

                        <View style={ReviewScreenJstyles.itemContainer}>

                            <ImageItem item={item} />

                            <Text style={ReviewScreenJstyles.name}>{item.name}</Text>
                            <View style={ReviewScreenJstyles.overlay}>
                                <Image source={require('../../../../../../assets/ReviewScreenJ/iconblue.png')} style={ReviewScreenJstyles.icon} />
                                <Text style={ReviewScreenJstyles.ratingText}>  {item.rating}</Text>
                            </View>
                            <Image source={require('../../../../../../assets/ReviewScreenJ/more.png')} style={ReviewScreenJstyles.more} />
                        </View>

                        <Text style={ReviewScreenJstyles.review}>{item.review}</Text>

                        <View style={ReviewScreenJstyles.footer}>
                            <Image source={item.image} style={ReviewScreenJstyles.hearticon}></Image>

                            <Text style={ReviewScreenJstyles.number}>{item.number}</Text>
                            <Text style={ReviewScreenJstyles.day}>{item.day}</Text>


                        </View>
                    </View>
                )}

            />
        </View>

    );
};



export default ReviewScreenJ;
