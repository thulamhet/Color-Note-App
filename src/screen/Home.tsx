import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Alert, Pressable, Button, Dimensions  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home : React.FC<{navigation: any}> = ({navigation}) => {
    const [modalMenuVisible, setModalMenuVisible] = useState(false);
    return (
        <SafeAreaView style={{flex: 1}}>

            {/* MENU SCREEN */}
            <Modal
                visible={modalMenuVisible}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.modalColorView}>
                    <Image
                        style={{width: windowWidth*4/5, height: windowHeight/6}}
                        source={{uri: 'https://play-lh.googleusercontent.com/gcJ1dGTnTJUWezGN__6_BZcS-hGjj4rUv1-SRJDWVlzB_-h0LVfRbUdXMBlspboG484=w512'}}
                    />
                    <TouchableOpacity
                        onPress={()=>{
                            setModalMenuVisible(!modalMenuVisible)
                        }}
                    >
                        <FontAwesome5 name='plus' size={30}/>
                    </TouchableOpacity>
                </View>
            </Modal>


            <View style={styles.taskbar}>
                <TouchableOpacity onPress={() => {
                    setModalMenuVisible(!modalMenuVisible);
                }}>
                    <FontAwesome5  name='align-justify' size={30} color='#010f0d' style={{margin: 14}} />
                </TouchableOpacity>     
                <Text style={styles.title}>App color note</Text>
                <TouchableOpacity onPress={() => {

                }}>
                    <FontAwesome5  name='search' size={22} color='#615f5f' style={{margin: 20, marginTop: 20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                }}>
                    <FontAwesome5  name='ellipsis-v' size={30} color='#464948' style={{margin: 14}} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>

                <View style={{marginLeft: 200, marginTop: 500, flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style={styles.iconAdd}
                        onPress={() => {

                    }}>
                        <FontAwesome5  name='list' size={40} color='#28312a' style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.iconAdd}
                        onPress={() => {
                            navigation.navigate('TextScreen')
                        }}>
                        <FontAwesome5  name='file-alt' size={38} color='#28312a' style={{}} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    taskbar: {
        flexDirection:'row',
        backgroundColor: 'yellow'
    },
    title: {
        marginLeft: 50,
        marginTop: 14,
        fontSize: 25
    },
    body:{
        flex: 1,
        borderTopColor: 'black',
        borderTopWidth: 2
    },
    iconAdd: {
        margin: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        height: 70,
        width: 70,
        borderRadius: 8
    },
    modalColorView: {
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: windowHeight,
        width: windowWidth*4/5,
    },
})