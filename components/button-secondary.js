import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SecondaryButton = props => {
    return (
        <TouchableOpacity style={[styles.secondary, props.style]}>
            <Text>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    secondary: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '80%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
    }
});

export default SecondaryButton;