import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, Alert, Pressable, Button, TextInput, TouchableOpacity, Dimensions  } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomCircle from "../CustomCircle";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TextScreen : React.FC<{navigation: any}> = ({navigation}) => {
    const [backgroundColor, setbackgroundColor] = useState('green');
    const [text, setText] = useState('');
    const [modalColorVisible, setModalColorVisible] = useState(false);
    const submit = (color: string) => {
        setbackgroundColor(color);
        setModalColorVisible(false);
    }
    return (
        <SafeAreaView style={{backgroundColor: `${backgroundColor}`}}>
            <Modal
                visible={modalColorVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalView}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{margin: 4}}
                        >
    
                        </TouchableOpacity>
                        <CustomCircle colorCode='#c6d861' onPress={()=>submit('#c6d861')}/>
                        <CustomCircle colorCode='#686161' onPress={()=>submit('#686161')}/>
                        <CustomCircle colorCode='#46ca57' onPress={()=>submit('#46ca57')}/>
                        <CustomCircle colorCode='#b67398' onPress={()=>submit('#b67398')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{margin: 4}}
                        >
    
                        </TouchableOpacity>
                        <CustomCircle colorCode='#61b6d8' onPress={()=>submit('#61b6d8')}/>
                        <CustomCircle colorCode='#f50707' onPress={()=>submit('#f50707')}/>
                        <CustomCircle colorCode='#095313' onPress={()=>submit('#095313')}/>
                        <CustomCircle colorCode='#eea60a' onPress={()=>submit('#eea60a')}/>
                    </View>
                    
                </View>
            </Modal>
            
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('App1')
                    }}
                    style={{marginLeft: 4}}
                >
                    <FontAwesome5  name='arrow-left' size={30} color='#010f0d' />
                </TouchableOpacity>
                <Text style={styles.title}>ColorNote</Text>
                <TouchableOpacity
                    style={{margin: 10}}
                    onPress={() => {
                        setModalColorVisible(true);
                    }}
                >
                    <FontAwesome5  name='circle' size={40} color='#3c3d3d' />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        
                    }}
                >
                   <FontAwesome5  name='ellipsis-v' size={30} color='#010f0d' />
                </TouchableOpacity>
            </View>
            
            <View style={styles.body}>
                <View style={styles.reminder}>
                    <TouchableOpacity
                        style={{margin: 10, flexDirection: 'row'}}
                    >
                        <FontAwesome5 name='stopwatch' size={30} color ='#050505'/>
                        <Text style={{marginTop: 6, marginLeft: 5}}>Add Reminder</Text>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <TextInput
                        style={styles.addInputTitle}
                        placeholder='Title'
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines = {14}
                        placeholder='Note'
                        style={styles.textInput}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}
export default TextScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center'
    },
    body: {
        width: windowWidth - 3,
        height: windowHeight - 200,
        backgroundColor: '#ffffffc5'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 120,
        marginLeft: 20,
    },
    reminder: {
        marginLeft: 240,
    },
    addInputTitle: {
        fontSize: 25,
        margin: 5,
    },
    textInput: {
        textAlignVertical: 'top',
        fontSize: 25,
        margin: 5,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 100,
        width: 200,
        borderRadius: 8,
        marginTop: 75,
        marginLeft: 190,
  
    },
  
})
