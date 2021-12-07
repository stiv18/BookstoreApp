import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PrimaryButton = props => {
    return (
        <TouchableOpacity style={[styles.primary, props.style]} onPress={props.onPress}>
            <Text style={{color: 'white'}}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    primary: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        textAlign: 'center',
        width: '80%',
        height: 40,
        borderRadius: 20
    },
});

export default PrimaryButton;