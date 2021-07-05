import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Alert, Pressable, Button  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native";

const App1 : React.FC<{navigation: any}> = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{flex: 1}}>
  
           <Modal 
           transparent={true}
           animationType='slide'
           visible={modalVisible}>
                <View style={styles.centraView}>
                    <View style={styles.modalView}>
                        <View style={{borderBottomWidth: 2, width: 200, alignItems: 'center'}}>
                            <Text>ADD NOTE</Text>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('TextScreen')
                                }}>
                                    <FontAwesome5  name='square' size={30} color='#010f0d' />
                                </TouchableOpacity>
                                <Text style={{fontSize: 15}}>Text</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <TouchableOpacity>
                                    <FontAwesome5  name='square' size={30} color='#010f0d' />
                                </TouchableOpacity>
                                <Text style={{fontSize: 15}}>Checklist</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
           </Modal>


            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Home');
                }}>
                    <FontAwesome5  name='align-justify' size={30} color='#010f0d' style={{margin: 14}} />
                </TouchableOpacity>     
                <Text style={{marginLeft: 50, marginTop: 14, fontSize: 25}}>App color note</Text>
                <TouchableOpacity onPress={() => {

                }}>
                    <FontAwesome5  name='search' size={22} color='#615f5f' style={{margin: 20, marginTop: 20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                }}>
                    <FontAwesome5  name='ellipsis-v' size={30} color='#464948' style={{margin: 14}} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, borderTopColor: 'black', borderWidth: 2}}>
                <Text style={{fontSize: 23}}>Please add a new note by clicking the</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 23, marginLeft: 100, marginTop: 5}}>Icon</Text>
                    <FontAwesome5  name='plus-circle' size={30} color='#1eaf36' style={{margin: 8}} />
                    <Text style={{fontSize: 23, marginTop: 5}}>below</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible(true)
                }}>
                    <FontAwesome5  name='plus-circle' size={50} color='#1eaf36' style={{marginLeft: 300, marginTop: 450}} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default App1;

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 100,
        width: 200
        
    },
    centraView: {
        flex: 1,
        marginTop: 500,
        marginLeft: 75,
    }
})