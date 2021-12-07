import React, { useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as booksActions from '../store/action/books';
import PrimaryButton from '../components/button-primary';
import CartItem from '../components/cartItem';

const CartPage = props => {

    const dispatch = useDispatch();

    const books = useSelector( state => state.books.books);

    const loadBooks = useCallback( async () => {
        try {
            await dispatch(booksActions.fetchBooks());
        } catch(err) {
            console.log(err.message);
        }
    }, [dispatch]);

    useEffect(()=>{
        loadBooks();
    }, [loadBooks]);

    const renderCartItem = itemData => {
        return (
            <CartItem
                title={itemData.item.title}
                author={itemData.item.author}
                image={itemData.item.coverImage}
                price={itemData.item.price.toFixed(2)}
            />
        );
    }
    
    return (
        <View style={styles.screen}>
            <FlatList 
                numColumns={Dimensions.get('window').width < 400 ? 1 : 2}
                showsVerticalScrollIndicator={false}
                style={{flex: 1}} 
                renderItem={renderCartItem}   
                data= {books} 
            />
            <View style={styles.orderNowContainer}>
                <View style={styles.amountTotalContainer}>
                    <Text style={{fontWeight: '500'}}>Subtotal Cart</Text>
                    <Text>€19.00</Text>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <PrimaryButton>Order Now</PrimaryButton>
                    <Text style={{color: 'grey', marginTop: 4}}>Long-press on an Item to remove.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    orderNowContainer: {
        width: '100%',
        height: 120,
        padding: 16,
        backgroundColor: 'white',
        borderColor: '#eee',
        borderTopWidth: 1
    },
    amountTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    }
});

export default CartPage;