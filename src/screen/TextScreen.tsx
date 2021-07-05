import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Alert, Pressable, Button, TextInput, TouchableOpacity, Dimensions  } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TextScreen : React.FC<{navigation: any}> = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('App1')
                    }}
                >
                    <FontAwesome5  name='arrow-left' size={30} color='#010f0d' />
                </TouchableOpacity>
                <TextInput
                    style={{backgroundColor: '#fff', height: 40, width: 270, margin: 10}}
                />
                <TouchableOpacity
                    style={{margin: 10}}
                    onPress={() => {

                    }}
                >
                    <FontAwesome5  name='circle' size={30} color='#656867' />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {

                    }}
                >
                   <FontAwesome5  name='ellipsis-v' size={30} color='#010f0d' />
                </TouchableOpacity>
            </View>
            
            <View style={styles.body}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={styles.addInputTitle}
                        placeholder='input title'
                    />
                    <TouchableOpacity
                        style={{margin: 10}}
                    >
                        <FontAwesome5 name='stopwatch' size={50} color ='#79c01b'/>
                    </TouchableOpacity>
                </View>
                
            </View>
          
        </SafeAreaView>
    )
}
export default TextScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#79c01b',
        flex: 1,
        alignItems: 'center',
    },
    header: {

        flexDirection: 'row',
        height: 70,
        alignItems: 'center'
    },
    body: {
        width: windowWidth - 3,
        height: windowHeight - 200,
        backgroundColor: '#fffffffb'
    },
    addInputTitle: {
        borderWidth: 3,
        borderColor:'#79c01b',
        width:  200,
        margin: 10,
    }
})
