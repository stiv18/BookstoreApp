import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Price from './price';

const OrderItem = props => {
    return (
        <View style={styles.item}>
            <View style={styles.infoContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>{props.id}</Text>
                <Text style={{fontWeight: '300'}}>Total: {props.items} items</Text>
                <Text style={{fontWeight: '300'}}>Date: {props.date}</Text>
            </View>
            <Price>{props.totalAmount}</Price>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    infoContainer: {
    }
});

export default OrderItem;