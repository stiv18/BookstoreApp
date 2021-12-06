import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const BookItem = props => {
    return(
        <View style={{
            flex: 0.5, 
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
            <View style={styles.imageContainer}>
                <Image resizeMode='cover' style={styles.image} source={{uri: props.image}} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.author}>{props.author}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{props.price}€</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        height: 320,
        width: '90%',
        maxWidth: 180,
        padding: 16
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
    priceContainer: {
        width: '40%',
        height: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    price: {
        fontSize: 12        
    }
});

export default BookItem;