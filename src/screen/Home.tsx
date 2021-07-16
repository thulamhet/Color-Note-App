import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Dimensions, FlatList, Button, DrawerLayoutAndroid  } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, Image, Alert } from "react-native";
import { changeReminder } from "../redux/action/reminderAction";
import { connect } from "react-redux";
import {useNavigation} from '@react-navigation/native';
import { changeColor } from "../redux/action/colorAction";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home : React.FC<{reminders: any, changeReminder: (data: any) => void, colors: any, changeColor: (data: any) => void}> = ({reminders, changeReminder, colors, changeColor}) => {
    const navigation = useNavigation()
    const [modalMenuVisible, setModalMenuVisible] = useState(false);
    const [modalInforVisible, setModalInforVisible] = useState(false);
    
    const renderItem = ({item}) => (
        <TouchableOpacity style={{width: windowWidth, height: 150, backgroundColor: `${colors?.color[item?.key]?.newColor}`,marginVertical: 5, flexDirection: 'row'}}
            onPress={()=> {
                navigation.navigate('NoteDetail', {key: item.key})
            }}
            onLongPress={()=> {
                Alert.alert('asdasd')
            }}
        >
            <View style={{margin: 10, justifyContent: 'flex-start', flex: 1}}>
                <Text>{item?.title}</Text>
                <Text>{item?.note}</Text>
            </View>
            <TouchableOpacity 
                style={{alignSelf:'center', marginHorizontal: 15}}
            >
                <FontAwesome5 name='trash' size={25}/>   
            </TouchableOpacity>
        </TouchableOpacity>
    )


    return (
        
        <SafeAreaView style={{flex: 1}}>

            {/* INFORMATION MODAL */}
            <Modal
                visible={modalInforVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={()=> {setModalInforVisible(!modalInforVisible)}}
            >
                <View style={styles.modalInfoView}>
                    <Text style={{fontSize:20, margin: 10, fontWeight: 'bold'}}>Status Quotes</Text>
                </View>   
            </Modal>

            {/* MENU MODAL */}
            <Modal
                visible={modalMenuVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={()=> {setModalMenuVisible(!modalMenuVisible)}}
            >
                <View style={styles.modalMenuView}>
                    <Image
                        style={{width: windowWidth*4/5, height: windowHeight/6}}
                        source={{uri: 'https://play-lh.googleusercontent.com/gcJ1dGTnTJUWezGN__6_BZcS-hGjj4rUv1-SRJDWVlzB_-h0LVfRbUdXMBlspboG484=w512'}}
                    />
                    <View>
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}
                            onPress={()=> {setModalMenuVisible(!modalMenuVisible)}}
                        >
                            <FontAwesome5 name = 'sticky-note' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Note</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'calendar-alt' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Calendar</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'archive' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Archive</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'trash' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Trash Can</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'user-cog' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Settings</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'share' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Share</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'star-half-alt' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Rate</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}>
                            <FontAwesome5 name = 'comment-alt' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Feedback</Text>
                        </TouchableOpacity>              
                        <TouchableOpacity style={{flexDirection: 'row', margin: 17, marginLeft: 35}}
                            onPress={()=>{
                                setModalInforVisible(!modalInforVisible);
                                setModalMenuVisible(!modalMenuVisible);
                            }}
                        >
                            <FontAwesome5 name = 'question-circle' size={30}/>
                            <Text style={{alignSelf: 'center', marginLeft: 40, fontSize: 20}}>Information</Text>
                        </TouchableOpacity>              
                    </View>
                </View>
            </Modal>

            {/* TASK BAR */}
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

                {/* NOTELISTS */}
                <View>
                    <FlatList
                        data={reminders?.noteList}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </View>

                {/* TEXT AND LISTVIEW */}
                <View style={{marginLeft: 200, marginTop: 500, flexDirection: 'row', position: 'absolute'}}>
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
        borderTopWidth: 2,
        padding: 5
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
    modalMenuView: {
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
    modalInfoView: {
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 300,
        width: 300,
        marginTop: windowHeight/3,
        marginLeft: 50
    },
})

const mapStateToProps = (state: any) => {
    const {reminderReducer} = state;
    const {colorReducer} = state;
    return {reminders: reminderReducer, colors: colorReducer};
};

export default connect (mapStateToProps, {changeReminder: changeReminder, changeColor: changeColor})(Home);