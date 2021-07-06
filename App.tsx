import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screen/Menu"
import App1 from "./src/screen/App1"
import TextScreen from "./src/screen/TextScreen";

const Stack = createStackNavigator();

export default function App () {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='App1' component={App1}/>
                <Stack.Screen name='TextScreen' component={TextScreen}/>
                <Stack.Screen name='Home' component={Home}/>
                
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}
