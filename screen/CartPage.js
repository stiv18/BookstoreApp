import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import PrimaryButton from '../components/button-primary';
import SecondaryButton from '../components/button-secondary';

const CartPage = props => {
    return (
        <View style={styles.screen}>
            <FlatList style={{flex: 1}} />
            <View style={styles.orderNowContainer}>
                <View style={styles.amountTotalContainer}>
                    <Text style={{fontWeight: '500'}}>Subtotal Cart</Text>
                    <Text>€19.00</Text>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <PrimaryButton>Order Now</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    orderNowContainer: {
        width: '100%',
        height: 100,
        padding: 16,
        backgroundColor: 'white',
        borderColor: '#eee',
        borderTopWidth: 1
    },
    amountTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    }
});

export default CartPage;