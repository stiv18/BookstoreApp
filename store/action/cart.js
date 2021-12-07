export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = book => {
  console.log('action')
  return { type: ADD_TO_CART, book: book };
};

export const removeFromCart = bookId => {
  return { type: REMOVE_FROM_CART, bid: bookId };
};