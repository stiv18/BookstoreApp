import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Price from './price';

const BookItem = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return(
        <View style={{
            flex: 0.5, 
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <TouchableCmp 
            style={{
                width: '100%',
                alignItems: 'center',
            }} 
            onPress={props.onPress}
        >
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image resizeMode='cover' style={styles.image} source={{uri: props.image}} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.author}>{props.author}</Text>
                    <Price>{props.price}</Price>
                </View>
            </View>
        </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        height: 320,
        width: '90%',
        maxWidth: 180,
        padding: 16,
    },
    imageContainer: {
        flex: 1,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,

        backgroundColor: 'white',
        elevation: 4,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        width: '100%',
    },
    title: {
        fontWeight: '500'
    },
    author: {
        color: 'grey',
        marginBottom: 4
    },
});

export default BookItem;