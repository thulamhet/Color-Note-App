import React, { useState } from "react"
import { Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native"
import SelectMultiple from 'react-native-select-multiple'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const fruits = ['Apples', 'Oranges', 'Pears']

const Menu : React.FC<{navigation: any}> = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Home')
                }}
            >
                <FontAwesome5 name='plus' size={30}/>
            </TouchableOpacity>
            <View>
                <Text>menu here</Text>
            </View>
        </SafeAreaView>
    )
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})