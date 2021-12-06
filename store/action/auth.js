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

        // Store data for manage the login
        */

        dispatch({
            type: LOGIN, 
            token: '', 
            userId: ''}
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

        dispatch({
            type: LOGOUT
        });
    } 
}
