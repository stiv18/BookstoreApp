import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';

export const login = (email, password) => {
    return async dispatch => {
        /*
        const response = await fetch(
            '',
            {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                    'returnSecureToken': true
                }),
            }
        );

        if (!response.ok) {
            throw new Error('Somthing went wrong!');
        }

        const resData = await response.json();

        */

        const fakeToken = '123456789';
        const fakeUserId = 'Dante1234';

        try {
            await AsyncStorage.setItem('userData', JSON.stringify({
                'token': fakeToken,
                'userId': fakeUserId
            }));
        } catch (e) {
            console.log(e);
      }

        dispatch({
            type: LOGIN, 
            token: fakeToken, 
            userId: fakeUserId}
        );
    } 
}

export const signup = (email, password) => {
    return async dispatch => {

        /*
        const response = await fetch(
            '',
            {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                    'returnSecureToken': true
                }),
            }
        );

        if (!response.ok) {
            throw new Error('Somthing went wrong!');
        }

        const resData = await response.json();
        */

        dispatch({
            type: SIGNUP, 
            token: '', 
            userId: ''}
        );
    } 
}

export const logout = () => {
    return async dispatch => {

        // Remove auth user date from the store

        await AsyncStorage.removeItem('userData');

        dispatch({
            type: LOGOUT
        });
    } 
}
