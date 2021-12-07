import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import PrimaryButton from '../components/button-primary';
import DetailItem from '../components/detailItem';

const BookDetailPage = props => {

    const bookId = props.route.params.id;

    const book = useSelector( state => state.books.books.find(b => b.id === bookId));

    const details = {
        genre: book.genre,
        releaseData: book.releaseData,
        length: book.length,
        publisher: book.publisher
    }

    return (
        <ScrollView>
            <TouchableOpacity 
                style={{
                    width: '99%', 
                    alignItems: 'flex-end',
                    marginTop: 16
                }}
                onPress={() => {
                    props.navigation.goBack();
                }}
            >
                <AntDesign style={{marginRight: 8}} name="closecircle" size={21} color="#bbb" />
            </TouchableOpacity>
            <View style={styles.screen}>
                <View style={styles.imageContainer} >
                    <Image style={styles.image} source={{uri: book.coverImage}} />
                </View>
                <View style={styles.infoContainer} >
                    <Text style={{fontWeight: '600', fontSize: 18, marginBottom: 4, textAlign: 'center'}} >{book.title}</Text>
                    <Text style={{textAlign: 'center'}}>{book.author}</Text>
                </View>
                <View style={styles.buttonsContainer} >
                    <PrimaryButton style={{marginBottom: 16}}>Add to cart  |  {book.price.toFixed(2)}€</PrimaryButton>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <DetailItem title='GENRE'>{details.genre}</DetailItem>
                    <DetailItem title='LENGTH'>{details.length}</DetailItem>
                    <DetailItem title='PUBLISHER'>{details.publisher}</DetailItem>
                    <DetailItem title='DATE'>{details.releaseData}</DetailItem>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: 300,
        width: '70%',
        maxWidth: 200,
        minWidth: 80,
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,

        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        width: '90%',
        marginVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BookDetailPage;