import Order from '../../model/order';

export const SET_ORDERS = 'SET_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';

export const fetchOrders = () => {
    return async (dispatch, getState) => {

        const auth = getState().auth;
        console.log(auth);

        const orders = [
            new Order('#0002396', 3, 49.99, new Date().getDate()),
            new Order('#0003301', 2, 24.99, new Date().getDate()),
            new Order('#0001172', 5, 119.99, new Date().getDate()),
        ]

        dispatch({type: SET_ORDERS, orders: orders});
    }
};

export const addOrder = () => {
    return async (dispatch, getState) => {
        dispatch({type: ADD_ORDER});
    }
}