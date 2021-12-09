import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";

const Price = props => {
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.price}>€{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    priceContainer: {
        width: '40%',
        maxWidth: 55,
        height: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Platform.OS === 'ios' ? 2 : 0
    },
    price: {
        fontSize: 12       
    }
});

export default Price;