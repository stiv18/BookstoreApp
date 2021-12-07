import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as booksActions from '../store/action/books';
import BookItem from '../components/bookItem';

const HomePage = props => {

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

    const bookItemPressed = (id, title) => {
        props.navigation.navigate('BookDetailPage', {
            id: id,
            title: title
        })
    };

    const renderBookItem = itemData => {
        return(
            <BookItem 
                title={itemData.item.title}
                author={itemData.item.author}
                image={itemData.item.coverImage}
                price={itemData.item.price.toFixed(2)}
                onPress={() => {
                    bookItemPressed(itemData.item.id, itemData.item.title);
                }}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={renderBookItem}
                data={books}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default HomePage;