import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    ScrollView,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import PrimaryButton from '../components/button-primary';
import SecondaryButton from '../components/button-secondary';
import * as authActions from '../store/action/auth';

const LoginPage = props => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const emailFieldHandler = enteredText => {
        setEmail(enteredText);
    }

    const passwordFieldHandler = enteredText => {
        setPassword(enteredText);
    }

    const loginButtonPressed = () => {
        try {
            dispatch(authActions.login(email, password));
            props.navigation.navigate('HomePageTab');
        } catch(err) {
            console.log(err.message);
        }
    }

    return (
        <ScrollView>
        <KeyboardAvoidingView behavior='padding' style={styles.screen}>
            <Image
                style={{width: 128, height: 128, marginTop: 128}} 
                source={{uri: 'https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png'}} 
            />
            <Text style={{marginBottom: 48, fontSize: 24, fontWeight: '100'}}>Books</Text>
            <View style={styles.loginContainer}>
                <TextInput style={styles.emailField} placeholder='Email' onChangeText={emailFieldHandler} value={email} />
                <TextInput style={styles.passwordField} secureTextEntry={true} placeholder='Password' on onChangeText={passwordFieldHandler} value={password} />
            </View>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={loginButtonPressed}>Login</PrimaryButton>
                <SecondaryButton>Sign Up</SecondaryButton>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailField: {
        width: '100%',
        height: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 16
    },
    passwordField: {
        width: '100%',
        height: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 24
    },
    buttonsContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default LoginPage;