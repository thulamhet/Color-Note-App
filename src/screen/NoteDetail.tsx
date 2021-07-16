import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, TouchableOpacity, Dimensions  } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomCircle from "../components/CustomCircle";
import { changeReminder } from "../redux/action/reminderAction";
import { connect } from "react-redux";
import { useNavigation} from "@react-navigation/native";
import { changeColor } from "../redux/action/colorAction";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NoteDetail : React.FC<{route: any,reminders: any, changeReminder: (data: any) => void, colors: any, changeColor: (data: any) => void}> = ({ route,colors, changeColor, reminders, changeReminder}) => {
    
    const navigation = useNavigation();
    const {key} = route.params;
    const bgColor = colors?.color[key]?.newColor;
    const [backgroundColor, setbackgroundColor] = useState(`${bgColor}`);
    const [modalColorVisible, setModalColorVisible] = useState(false);

    const submit = (color: string) => {
        setbackgroundColor(color);
        setModalColorVisible(false);
        updateNoteColor();
    }
    /**
     * ! BUG HERE NOT USE
     */

     const updateNoteColor = () => {
        let newColor = `${backgroundColor}`
        let {color} = colors;
        color = [...color, {newColor}]
        console.log(typeof (colors?.color));
        console.log(colors.color)
        let updateColor =  {...colors, color: color};
        changeColor(updateColor);
        
    }

    
    const {note} = reminders?.noteList[key];
    const {title} = reminders?.noteList[key];

    return (
        <SafeAreaView style={{backgroundColor: `${backgroundColor}`, flex: 1}}>

            {/* Change color */}
            <Modal
                visible={modalColorVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalColorView}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{margin: 4}}
                        >
                        </TouchableOpacity>
                        <CustomCircle colorCode='yellow' onPress={()=>submit('yellow')}/>
                        <CustomCircle colorCode='gray' onPress={()=>submit('gray')}/>
                        <CustomCircle colorCode='green' onPress={()=>submit('green')}/>
                        <CustomCircle colorCode='pink' onPress={()=>submit('pink')}/>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{margin: 4}}
                        >
    
                        </TouchableOpacity>
                        <CustomCircle colorCode='blue' onPress={()=>submit('blue')}/>
                        <CustomCircle colorCode='red' onPress={()=>submit('red')}/>
                        <CustomCircle colorCode='black' onPress={()=>submit('black')}/>
                        <CustomCircle colorCode='orange' onPress={()=>submit('orange')}/>
                    </View>
                </View>
            </Modal>

            {/* TASK BAR */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
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

            {/* CONTENT */}
            <View style={styles.body}>
                <View>
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>{title}</Text>
                    <Text style={styles.text}>{note}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center'
    },
    body: {
        flex: 1,
        width: windowWidth,
        height: windowHeight - 200,
        backgroundColor: '#ffffffc5',
        borderTopWidth: 1,
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 120,
        marginLeft: 20,
    },
    modalColorView: {
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
    text: {
        fontSize: 30,
        margin: 10,
    }
  
})

const mapStateToProps = (state: any) => {
    const {reminderReducer} = state;
    const {colorReducer} = state;
    return {reminders: reminderReducer, colors: colorReducer};
}

export default connect (mapStateToProps, {changeReminder: changeReminder, changeColor: changeColor})(NoteDetail)

