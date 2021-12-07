import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Price = props => {
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{props.children}€</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    priceContainer: {
        width: '40%',
        maxWidth: 50,
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

export default Price;