import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from '../action/cart';
import CartItem from '../../model/cartItem';
import { ADD_ORDER } from '../action/order';

import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CART: 
          if (!action.cart) {
            return initialState;
          }
          return {
            ...state,
            items: action.cart.items,
            totalAmount: action.cart.totalAmount
          }
        case ADD_TO_CART:
          const addedProduct = action.book;
          const prodPrice = addedProduct.price;
    
          let updatedOrNewCartItem;
    
          if (state.items[addedProduct.id]) {
            // already have the item in the cart
            updatedOrNewCartItem = new CartItem(
                addedProduct,
                state.items[addedProduct.id].quantity + 1,
                state.items[addedProduct.id].sum + prodPrice
            );
          } else {
                updatedOrNewCartItem = new CartItem(addedProduct, 1, prodPrice);
          }
          return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
          };
        case REMOVE_FROM_CART:
          const selectedCartItem = state.items[action.bid];
          const currentQty = selectedCartItem.quantity;
          let updatedCartItems;
          if (currentQty > 1) {
            // need to reduce it, not erase it
            const updatedCartItem = new CartItem(
                selectedCartItem.book,
                selectedCartItem.quantity - 1,
                selectedCartItem.sum - selectedCartItem.book.price
                );
                updatedCartItems = { ...state.items, [action.bid]: updatedCartItem };
          } else {
            updatedCartItems = { ...state.items };
            delete updatedCartItems[action.bid];
          }
          return {
            ...state,
            items: updatedCartItems,
            totalAmount: state.totalAmount - selectedCartItem.book.price
          };
        case ADD_ORDER:
          AsyncStorage.removeItem('cartState');
          return initialState;
    }
   
    return state;
}