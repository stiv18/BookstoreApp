import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailItem = props => {
    return (
        <View style={styles.secondary}>
            <Text style={{color: '#ccc', fontWeight: '500', marginBottom: 8}}>{props.title}</Text>
            <Text>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    secondary: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 100,
        height: 80,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        margin: 8
    }
});

export default DetailItem;