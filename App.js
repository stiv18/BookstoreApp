import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MainNavigationContainer from './navigation/mainNavigator';
import authReducer from './store/reducer/auth';
import booksReducer from './store/reducer/books';
import cartReducer from './store/reducer/cart';
import ordersReducer from './store/reducer/order';

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  cart: cartReducer,
  orders: ordersReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigationContainer></MainNavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
