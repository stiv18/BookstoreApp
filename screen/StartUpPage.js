import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const StartUpPage = props => {
    return (
        <View>
            <Text>
                Start Up Page
            </Text>
            <Button title='HomePage' onPress={()=>{props.navigation.navigate('HomePageTab')}} ></Button>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default StartUpPage;