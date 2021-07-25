import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Dimensions, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    const [modalDeleteVisible, setmodalDeleteVisible] = useState(false);

    const LineDivider = () => {
        return (
            <View style={{ width: 5, paddingVertical: 15 }}>
                <View style={{ flex: 1, borderLeftColor: 'black', borderLeftWidth: 1 }}>
                    <Text>dut cibnadas</Text>
                </View>
            </View>
        )
    }

    const DeleteNote = () => {
        return (
            <View style={styles.modalDeleteView}>
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>Are you sure?</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        {/* <TouchableOpacity style={{flex: 1, alignSelf: 'center'}}>
                            <Text>Yes</Text>
                        </TouchableOpacity>
                        <LineDivider/>
                        <TouchableOpacity style={{flex: 1, alignSelf:'center'}}>
                            <Text>No</Text>
                        </TouchableOpacity> */}
                        <LineDivider/>
                    </View>
                </View>
        )
    }

    const RenderInfo = () => {
        return (
            <View style={styles.modalInfoView}>
                <Text style={{fontSize:20, margin: 10, fontWeight: 'bold'}}>Status Quotes</Text>
            </View>  
        )
    }

    const RenderMenu = () => {
        return (
            <View style={styles.modalMenuView}>
                <Image
                    style={{width: windowWidth*4/5, height: windowHeight/6}}
                    source={{uri: 'https://play-lh.googleusercontent.com/gcJ1dGTnTJUWezGN__6_BZcS-hGjj4rUv1-SRJDWVlzB_-h0LVfRbUdXMBlspboG484=w512'}}
                />
                <View>
                    <TouchableOpacity style={styles.iconMore}
                        onPress={()=> {setModalMenuVisible(!modalMenuVisible)}}
                    >
                        <FontAwesome5 name = 'sticky-note' size={30}/>
                        <Text style={styles.textIconMore}>Note</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'calendar-alt' size={30}/>
                        <Text style={styles.textIconMore}>Calendar</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'archive' size={30}/>
                        <Text style={styles.textIconMore}>Archive</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'trash' size={30}/>
                        <Text style={styles.textIconMore}>Trash Can</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'user-cog' size={30}/>
                        <Text style={styles.textIconMore}>Settings</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'share' size={30}/>
                        <Text style={styles.textIconMore}>Share</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'star-half-alt' size={30}/>
                        <Text style={styles.textIconMore}>Rate</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}>
                        <FontAwesome5 name = 'comment-alt' size={30}/>
                        <Text style={styles.textIconMore}>Feedback</Text>
                    </TouchableOpacity>              
                    <TouchableOpacity style={styles.iconMore}
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
        )
    }

    const RenderTaskBar = () => {
        return (
            <View style={styles.taskbar}>
                <TouchableOpacity onPress={() => {
                    setModalMenuVisible(!modalMenuVisible);
                }}>
                    <FontAwesome5  name='align-justify' size={30} color='#F96D41' style={{margin: 14}} />
                </TouchableOpacity>     
                <Text style={styles.title}>App color note</Text>
                <TouchableOpacity onPress={() => {

                }}>
                    <FontAwesome5  name='search' size={22} color='#F96D41' style={{margin: 20, marginTop: 20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                }}>
                    <FontAwesome5  name='ellipsis-v' size={30} color='#F96D41' style={{margin: 14}} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = ({item}) => (

        <TouchableOpacity style={{borderRadius: 8, elevation: 3,width: windowWidth, height: 150, backgroundColor: `${colors?.color[item?.key]?.newColor}`,marginVertical: 5, flexDirection: 'row'}}
            onPress={()=> {
                navigation.navigate('NoteDetail', {key: item.key})
            }}
            delayLongPress={10}
            onLongPress={() => {
                Alert.alert('asdasd')
            }}
        >
            <View style={{margin: 10, justifyContent: 'flex-start', flex: 1}}>
                <Text>{item?.title}</Text>
                <Text>{item?.note}</Text>
            </View>
            
            <TouchableOpacity 
                style={{alignSelf:'center', marginHorizontal: 15}}
                onPress={() => {
                    setmodalDeleteVisible(!modalDeleteVisible);
                }}
            >
                <FontAwesome5 name='trash' size={25}/>   
            </TouchableOpacity>
        </TouchableOpacity>
    )

    const RenderNoteList = () => {
        return (
            <View>
                <FlatList
                    data={reminders?.noteList}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                />
            </View>
        )
    }

    const RenderAddnoteAndListViewButton = () => {
        return (
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
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Delete modal */}
            <Modal
                visible={modalDeleteVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={()=> {setmodalDeleteVisible(!modalDeleteVisible)}}
            >
                <DeleteNote/>
            </Modal>

            {/* Infor Modal */}
            <Modal
                visible={modalInforVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={()=> {setModalInforVisible(!modalInforVisible)}}
            >
                <RenderInfo/>
            </Modal>

            {/* Menu modal */}
            <Modal
                visible={modalMenuVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={()=> {setModalMenuVisible(!modalMenuVisible)}}
            >
                <RenderMenu/>
            </Modal>

            {/* Task Bar */}
            <RenderTaskBar/>
        
            <View style={styles.body}>
                {/* NOTELISTS */}
                <RenderNoteList/>

                {/* Add note and ListView Button */}
                <RenderAddnoteAndListViewButton/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1B26"
    },
    taskbar: {
        flexDirection:'row',
        backgroundColor: '#22273B'
    },
    title: {
        marginLeft: 50,
        marginTop: 14,
        fontSize: 25,
        fontFamily: 'Roboto-Black',
        color: "#F96D41"
    },
    body:{
        flex: 1,
        borderTopColor: 'black',
        borderTopWidth: 2,
        padding: 5
    },
    iconAdd: {
        margin: 10,
        backgroundColor: "#424BAF",
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
    iconMore: {
        flexDirection: 'row',
        margin: 17,
        marginLeft: 35
    },
    textIconMore: {
        alignSelf: 'center',
        marginLeft: 40,
        fontSize: 20
    },
    modalDeleteView: {
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 150,
        width: 150,
        marginTop: windowHeight/3,
        marginLeft: 120
    },
})

const mapStateToProps = (state: any) => {
    const {reminderReducer} = state;
    const {colorReducer} = state;
    return {reminders: reminderReducer, colors: colorReducer};
};

export default connect (mapStateToProps, {changeReminder: changeReminder, changeColor: changeColor})(Home);