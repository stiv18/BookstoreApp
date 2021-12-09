import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';

import OrderItem from '../components/orderItem';
import * as ordersActions from '../store/action/order';

const OrdersPage = props => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const orders = useSelector(state => state.orders.orders);

    const loadOrders = useCallback( async () => {
        setIsLoading(true);
        await dispatch(ordersActions.fetchOrders());
        setIsLoading(false);
    }, [dispatch, setIsLoading]);

    useEffect(() => {
        loadOrders();
    }, [loadOrders])

    const renderOrderItem = itemData => {
        return (
            <OrderItem 
                id={itemData.item.id}
                items={itemData.item.items}
                date={itemData.item.date}
                totalAmount={itemData.item.totalAmount}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{flex: 1}} 
                keyExtractor={item => item.id}
                renderItem={renderOrderItem}   
                data= {orders} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default OrdersPage;