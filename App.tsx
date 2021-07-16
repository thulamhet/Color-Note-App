import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./src/screen/Menu"
import Home from "./src/screen/Home"
import TextScreen from "./src/screen/TextScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import NoteDetail from "./src/screen/NoteDetail";

const Stack = createStackNavigator();

export default function App () {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='TextScreen' component={TextScreen}/>
                    <Stack.Screen name='Menu' component={Menu}/>
                    <Stack.Screen name='NoteDetail' component={NoteDetail}/>
                    
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
       
        
    )
}
