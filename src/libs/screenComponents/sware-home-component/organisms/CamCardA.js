import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const CamCardA = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('../../../../../assets/Cam.jpg')}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Nest Cam</Text>
                        <Text style={styles.price}>$179</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
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
        marginVertical: 40,
    },
    card: {
        backgroundColor: '#f0f4f8',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '90%',
        height: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 70,
        bottom: 20,
        paddingHorizontal: 20,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    price: {
        fontSize: 22,
        color: '#333',
        textAlign: 'left',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 16,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default CamCardA;
