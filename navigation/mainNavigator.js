import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
            <HomePageStackNavigator.Screen name='HomePage' component={HomePage} />
            <HomePageStackNavigator.Screen name='BookDetailPage' component={BookDetailPage} />
        </HomePageStackNavigator.Navigator>
    );
};

const HomePageTabNavigator = createBottomTabNavigator();

const HomePageTabNavigatorComponent = props => {
    return (
        <HomePageTabNavigator.Navigator>
            <HomePageTabNavigator.Screen 
                name='HomePageStack' 
                component={HomePageNavigatorComponent} 
                options={{
                    headerShown: false
                }}    
            />
            <HomePageTabNavigator.Screen name='CartPage' component={CartPage} />
            <HomePageTabNavigator.Screen name='OrdersPage' component={OrdersPage} />
            <HomePageTabNavigator.Screen name='ProfilePage' component={ProfilePage} />
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
                    <MainStackNavigator.Screen name='LoginPage' component={LoginPage} />
                </MainStackNavigator.Group>

                <MainStackNavigator.Group>
                    <MainStackNavigator.Screen 
                        name='HomePageTab' 
                        component={HomePageTabNavigatorComponent} 
                        options={{
                            headerShown: false
                        }} 
                    />
                </MainStackNavigator.Group>
            </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigationContainer;