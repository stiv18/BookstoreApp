import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PrimaryButton from '../components/button-primary';
import CartItem from '../components/cartItem';
import * as cartActions from '../store/action/cart';
import * as ordersActions from '../store/action/order';

const CartPage = props => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const totalAmount = useSelector( state => state.cart.totalAmount);
    const books = useSelector( state => {
        const transformedCartItems = [];
        for(let key in state.cart.items) {
            transformedCartItems.push({
                book: state.cart.items[key].book, 
                qta: state.cart.items[key].quantity
            });
        }
        return transformedCartItems;
    });

    const loadCart = useCallback( async () => {
        dispatch(cartActions.fetchCartItems());
    }, [dispatch])

    useEffect(()=>{
        loadCart();
    }, [loadCart])

    const orderNowButtonPressed = async () => {
        setIsLoading(true);
        await dispatch(ordersActions.addOrder());
        setIsLoading(false)
    }

    const removeCartItem = (id) => {
        dispatch(cartActions.removeFromCart(id))
    }

    const cartItemPressed = (id, title) => {
        props.navigation.navigate('BookDetailPage', {
            id: id,
            title: title
        })
    };

    const renderCartItem = itemData => {
        return (
            <CartItem
                title={itemData.item.book.title}
                author={itemData.item.book.author}
                image={itemData.item.book.coverImage}
                price={itemData.item.book.price.toFixed(2)}
                quantity={itemData.item.qta}
                onPress={() => {cartItemPressed(itemData.item.book.id, itemData.item.book.title)}}
                onLongPress={() => {removeCartItem(itemData.item.book.id)}}
            />
        );
    }
    
    return (
        <View style={styles.screen}>
            <FlatList 
                numColumns={Dimensions.get('window').width < 400 ? 1 : 2}
                showsVerticalScrollIndicator={false}
                style={{flex: 1}} 
                keyExtractor={item => item.book.id}
                renderItem={renderCartItem}   
                data= {books} 
            />
            <View style={styles.orderNowContainer}>
                <View style={styles.amountTotalContainer}>
                    <Text style={{fontWeight: '500'}}>Subtotal Cart</Text>
                    <Text>€{totalAmount.toFixed(2)}</Text>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                    {(!isLoading) ? (
                        <PrimaryButton style={{maxWidth: 500}} onPress={orderNowButtonPressed} >Order Now</PrimaryButton>
                    ) : (
                        <ActivityIndicator size="small" color='#000' />
                    )}
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