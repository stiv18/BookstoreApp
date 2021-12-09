import Order from "../../model/order";
import { SET_ORDERS, ADD_ORDER } from "../action/order";

const initialState = {
    orders: []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        case ADD_ORDER:
            /*
            const newOrder = new Order(
                action.id,
                action.items,
                action.totalAmount,
                action.date
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
            */
           return {...state}
    }

    return state;
}