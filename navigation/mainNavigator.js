import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from '../screen/HomePage';
import BookDetailPage from '../screen/BookDetailPage';
import CartPage from '../screen/CartPage';
import OrdersPage from '../screen/OrdersPage';
import ProfilePage from '../screen/ProfilePage';
import StartUpPage from '../screen/StartUpPage';
import LoginPage from '../screen/LoginPage';

const HomePageStackNavigator = createNativeStackNavigator();

const HomePageNavigatorComponent = props => {
    return (
        <HomePageStackNavigator.Navigator>
            <HomePageStackNavigator.Screen 
                name='HomePage' 
                component={HomePage} 
                options={{title: 'Book Store'}}/>
            <HomePageStackNavigator.Screen 
                name='BookDetailPage' 
                component={BookDetailPage} 
                options={{
                    presentation: 'modal',
                    headerShown: false
                }}
            />
        </HomePageStackNavigator.Navigator>
    );
};

const CartPageStackNavigator = createNativeStackNavigator();

const CartPageNavigatorComponent = props => {
    return (
        <CartPageStackNavigator.Navigator>
            <CartPageStackNavigator.Screen 
                name='CartPage' 
                component={CartPage} 
                options={{title: 'Cart'}}/>
            <CartPageStackNavigator.Screen 
                name='BookDetailPage' 
                component={BookDetailPage} 
                options={{
                    presentation: 'modal',
                    headerShown: false
                }}
            />
        </CartPageStackNavigator.Navigator>
    );
};

const HomePageTabNavigator = createBottomTabNavigator();

const HomePageTabNavigatorComponent = props => {
    return (
        <HomePageTabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomePageStack') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'CartPageStack') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'OrdersPage') {
                        iconName = focused ? 'library' : 'library-outline';
                    } else if (route.name === 'ProfilePage') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
            })}
        >
            <HomePageTabNavigator.Screen 
                name='HomePageStack' 
                component={HomePageNavigatorComponent} 
                options={{
                    title: 'Books',
                    headerShown: false,
                    gestureEnabled: false
                }}    
            />
            <HomePageTabNavigator.Screen 
                name='CartPageStack' 
                component={CartPageNavigatorComponent} 
                options={{
                    title: 'Cart',
                    headerShown: false,
                    gestureEnabled: false
                }}    
            />
            <HomePageTabNavigator.Screen 
                name='OrdersPage' 
                component={OrdersPage} 
                options={{
                    title: 'Orders'
                }}    
            />
            <HomePageTabNavigator.Screen 
                name='ProfilePage' 
                component={ProfilePage}
                options={{
                    title: 'Profile'
                }} 
            />
        </HomePageTabNavigator.Navigator>
    );
};

const MainStackNavigator = createNativeStackNavigator();

const MainNavigationContainer = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator.Navigator>
                <MainStackNavigator.Group>
                    <MainStackNavigator.Screen name='StartUpPage' component={StartUpPage} />
                </MainStackNavigator.Group>

                <MainStackNavigator.Group>
                    <MainStackNavigator.Screen 
                        name='LoginPage' 
                        component={LoginPage} 
                        options={{
                            headerShown: false,
                            gestureEnabled: false
                        }}
                    />
                </MainStackNavigator.Group>

                <MainStackNavigator.Group>
                    <MainStackNavigator.Screen 
                        name='HomePageTab' 
                        component={HomePageTabNavigatorComponent} 
                        options={{
                            headerShown: false,
                            gestureEnabled: false
                        }} 
                    />
                </MainStackNavigator.Group>
            </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigationContainer;