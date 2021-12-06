import React from 'react';
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

const LoginPage = props => {
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior='padding' style={styles.screen}>
            <Image
                style={{width: 100, height: 100, marginTop: 128}} 
                source={{uri: 'https://i.pinimg.com/originals/ff/fb/48/fffb481f28a395fb8ad93e7ecd8f2ec7.png'}} 
            />
            <Text style={{marginBottom: 48, fontSize: 24, fontWeight: '100'}}>Books</Text>
            <View style={styles.loginContainer}>
                <TextInput style={styles.emailField} placeholder='Email' />
                <TextInput style={styles.passwordField} secureTextEntry={true} placeholder='Password' />
            </View>
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Login</PrimaryButton>
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