import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../../model/cartItem';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART = 'SET_CART';

const addToAsyncStorageCart = async (book) => {
  const cartState = await AsyncStorage.getItem('cartState');

  if (!cartState) {
    try {
      await AsyncStorage.setItem('cartState', JSON.stringify({
          'items': {[book.id]: new CartItem(book, 1, book.price)},
          'totalAmount': book.price
      }));
    } catch (e) {
      console.log(e);
    }
  } else {
    const cart = JSON.parse(cartState);
    console.log(cart)
    if (cart.items[book.id]) {
      try {
        await AsyncStorage.setItem('cartState', JSON.stringify({
            'items': {...cart.items, [book.id]: new CartItem(book, cart.items[book.id].quantity + 1, cart.items[book.id].sum + book.price)},
            'totalAmount': cart.totalAmount + book.price
        }));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await AsyncStorage.setItem('cartState', JSON.stringify({
            'items': {...cart.items, [book.id]: new CartItem(book, 1, book.price)},
            'totalAmount': cart.totalAmount + book.price
        }));
      } catch (e) {
        console.log(e);
      }
    }
    
  }
}

const removeFromAsyncStorageCart = async (bookId) => {
  const cartState = await AsyncStorage.getItem('cartState');
    const cart = JSON.parse(cartState);

    if (cart.items[bookId].quantity > 1) {
      console.log('Riduci la quantità')
      try {
        await AsyncStorage.setItem('cartState', JSON.stringify({
            'items': {...cart.items, [bookId]: new CartItem(cart.items[bookId].book, cart.items[bookId].quantity - 1, cart.items[bookId].sum - cart.items[bookId].book.price)},
            'totalAmount': cart.totalAmount - cart.items[bookId].book.price
        }));
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('Rimuovi')
      const updatedCartItems = { ... cart.items };
      const bookPrice = cart.items[bookId].book.price;
      delete updatedCartItems[bookId];
      try {
        await AsyncStorage.setItem('cartState', JSON.stringify({
            'items': updatedCartItems,
            'totalAmount': cart.totalAmount - bookPrice
        }));
      } catch (e) {
        console.log(e);
      }
    }
}

export const fetchCartItems = () => {
  return async dispatch => {

    const cartState = await AsyncStorage.getItem('cartState');
    const cart = JSON.parse(cartState);

    dispatch({ type: SET_CART, cart: cart })
  }
}

export const addToCart = book => {
  return async dispatch => {

    await addToAsyncStorageCart(book);

    dispatch({ type: ADD_TO_CART, book: book })
  }
};

export const removeFromCart = bookId => {
  return async dispatch => {
    
    await removeFromAsyncStorageCart(bookId);

    dispatch({ type: REMOVE_FROM_CART, bid: bookId });
  };
};