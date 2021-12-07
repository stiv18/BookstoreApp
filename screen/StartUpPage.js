import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartUpPage = props => {
    return (
        <View>
            <Text>
                Start Up Page
            </Text>
            <Button title='Home Page' onPress={()=>{props.navigation.navigate('HomePageTab')}} ></Button>
            <Button title='Login Page' onPress={()=>{props.navigation.navigate('LoginPage')}} ></Button>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StartUpPage;