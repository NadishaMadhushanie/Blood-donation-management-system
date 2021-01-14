import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';




const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    ); 
};

export default StackNavigator;