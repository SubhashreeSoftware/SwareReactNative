import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardscreenJ = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxInput}>
                <Image
                    source={require('../../../../../assets/speaker.png')}
                    style={styles.localImage}
                />
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <Text style={styles.portable}>#Portable FM</Text>
                    <Text style={styles.divoom}>Divoom Radio</Text>
                    <View style={styles.row}>
                        <Image
                            source={require('../../../../../assets/dollar.png')}
                            style={styles.dollar}
                        />
                        <Text style={styles.text}>$52.00</Text>
                    </View>
                </View>


            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    boxInput: {
        width: "90%",
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 50,
        elevation: 5,
        paddingHorizontal: 20,
        marginTop: 30,
        backgroundColor: '#e5e4e2',

    },
    localImage: {
        width: 320,
        height: 320,
        transform: [{ rotate: '350deg' }],
        marginTop: 55,
    },
    portable: {
        color: '#a9a9a9',
        fontSize: 20,
        // marginRight: 70,
        marginTop: 30,
    },
    divoom: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginTop: 10,
    },
    dollar: {
        height: 27,
        width: 27,
        marginTop: 17,
        // marginRight: 15 ,

    },
    row: {
        flexDirection: 'row',
    },
    text: {

        marginTop: 13,
        // marginRight: 65,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
});
export default CardscreenJ;