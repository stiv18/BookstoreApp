import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import * as authActions from '../store/action/auth';

const ProfilePage = props => {

    const dispatch = useDispatch();

    const logoutButtonPressed = () => {
        dispatch(authActions.logout());
        props.navigation.popToTop();
    };

    return (
        <View style={{flex: 1, alignItems: 'center', paddingVertical: 16}}>
            <TouchableOpacity 
                style={{
                    width: '90%', 
                    height: 50, 
                    justifyContent: 'center', 
                    backgroundColor: '#fff',
                    padding: 16,
                    borderRadius: 8
                }}
                onPress={logoutButtonPressed}
            >
                <Text style={{color: 'red', fontSize: 16, fontWeight: '300'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ProfilePage;