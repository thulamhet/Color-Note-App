import React, { useEffect, useState } from "react";
import { View,Switch, Text, SafeAreaView, StyleSheet, Modal, Alert, Pressable, Button, TextInput, TouchableOpacity, Dimensions  } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomCircle from "../components/CustomCircle";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { changeReminder } from "../redux/action/reminderAction";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { changeColor } from "../redux/action/colorAction";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TextScreen : React.FC<{reminders: any, changeReminder: (data: any) => void, colors: any, changeColor: (data: any) => void}> = ({reminders, changeReminder, colors, changeColor}) => {
    const navigation = useNavigation();
    const toggleSwitch = () => setReminderEnabled(previousState => !previousState);
    const [title, onChangeTitle] = useState('');
    const [note, onChageNote] = useState('');
    const [reminderEnabled, setReminderEnabled] = useState(false);
    const [backgroundColor, setbackgroundColor] = useState('#cf740c');
    const [modalColorVisible, setModalColorVisible] = useState(false);
    const [modalReminderVisible, setModalReminderVisible] = useState(false);
    const [time, setTime] = useState('2:57 am');
    const [date, setDate] = useState('12/6/2021')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const submit = (color: string) => {
        setbackgroundColor(color);
        setModalColorVisible(false);
    }

    const updateNoteColor = () => {
        let newColor = `${backgroundColor}`
        let {color} = colors;
        color = [...color, {newColor}]
        let updateColor =  {...colors, color: color};
        changeColor(updateColor);
    }

    const handleSaveNote = () => {
        let key = reminders?.noteList?.length
        let {noteList} = reminders;
        setModalReminderVisible(false);
        noteList = [...noteList, {key, title, note}]
        let updateReminders = {...reminders, noteList: noteList};
        changeReminder(updateReminders);
        console.log(reminders?.noteList);
        
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
  
    const handleDateConfirm = (date:any) => {
        hideDatePicker();
        setDate(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
    };

    const handleTimeConfirm = (time:any) => {
        const a = time.getHours >= 12 ? 'am' : 'pm';
        hideTimePicker();
        setTime(time.getHours() + ':' + time.getMinutes() + ' ' + a );
    };

    const ChooseColor = () => {
        return (
            <View style={styles.modalColorView}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{margin: 4}}
                    ></TouchableOpacity>
    
                    <CustomCircle colorCode='#F96D41' onPress={()=>submit('#F96D41')}/>
                    <CustomCircle colorCode='#64676D' onPress={()=>submit('#64676D')}/>
                    <CustomCircle colorCode='#1e90ff' onPress={()=>submit('#1e90ff')}/>
                    <CustomCircle colorCode='#EFEFF0' onPress={()=>submit('#EFEFF0')}/>
                </View>
    
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{margin: 4}}
                    ></TouchableOpacity>
    
                    <CustomCircle colorCode='#424BAF' onPress={()=>submit('#424BAF')}/>
                    <CustomCircle colorCode='#C5505E' onPress={()=>submit('#C5505E')}/>
                    <CustomCircle colorCode='#31Ad66' onPress={()=>submit('#31Ad66')}/>
                    <CustomCircle colorCode='#213432' onPress={()=>submit('#213432')}/>
                </View>
            </View>
        )
    }

    const RenderTaskBar = () => {
        return (
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

                <TouchableOpacity>
                   <FontAwesome5  name='ellipsis-v' size={30} color='#010f0d' />
                </TouchableOpacity>
            </View>
        )
    }

    const RenderTitleAndInputText = () => {
        return (
        <View style={styles.body}>
                <View style={styles.reminder}>
                    <TouchableOpacity
                        style={{margin: 10, flexDirection: 'row'}}
                        onPress={()=> {
                            setModalReminderVisible(!modalReminderVisible)
                        }}
                    >
                        <FontAwesome5 name='stopwatch' size={30} color ='#050505'/>
                        <Text style={{marginTop: 6, marginLeft: 5}}>Add Reminder</Text>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <TextInput
                        style={styles.addInputTitle}
                        placeholder='Title'
                        onChangeText={onChangeTitle}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines = {16}
                        placeholder='Note'
                        style={styles.textInput}
                        onChangeText={onChageNote}
                    />
                </View>
            </View>
        )
    }

    const HandleNote = () => {
        return (
            <View style={styles.footer}>
            <TouchableOpacity
                onPress={()=> {
                }}
            >
                <FontAwesome5 name = 'undo' size={60} color='#130202'/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> {
                }}
                style={{marginRight: 90}}
            >
                <FontAwesome5 name = 'redo-alt' size={60} color='#130202'/>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> {
                    if(title !== "" && note !== "") {
                        handleSaveNote(), 
                        updateNoteColor()
                    }
                }
            }
            >
                <FontAwesome5 name = 'save' size={60} color='#f4f7fa'/>
            </TouchableOpacity>
        </View>
        )
    }

    const SetReminder = () => {
        return (
            <View style={styles.modalReminderView}>
                    <View style={{backgroundColor: '#e4e70e'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 60, margin: 10}}>Set Reminder</Text>
                    </View>

                    <View style={{flex: 1, marginLeft: 30, marginTop: 10}}>
                        {/* Enable Button */}
                        <View style={{flexDirection: 'row', margin: 10, marginLeft: 3}}>
                            <Switch
                                trackColor={{ false: "#3e3e3e", true: "#50f08d" }}
                                thumbColor={reminderEnabled ? "#4de710" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={reminderEnabled}
                            />

                            <Text style={{fontSize: 20, marginLeft: 15}}>Enable</Text>
                        </View>

                        {/* Handle date picker */}
                        <View style={{flexDirection: 'row', margin: 10}}>
                            <TouchableOpacity
                                onPress={()=> {
                                    showDatePicker();
                                }}
                            >
                                <FontAwesome5 name='calendar' size={25} color='#a59f9f'/>
                            </TouchableOpacity>

                            <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleDateConfirm}
                                    onCancel={hideDatePicker}
                                />

                            <Text style={{fontSize: 20, marginLeft: 28}}>{date}</Text>
                        </View>
                        
                        {/* Handle date picker */}
                        <View style={{flexDirection: 'row', margin: 10}}>
                            <TouchableOpacity
                                onPress={()=> {
                                    showTimePicker();
                                }}
                                
                            >
                                <FontAwesome5 name='clock' size={25} color='#a59f9f'/>
                                <DateTimePickerModal
                                    isVisible={isTimePickerVisible}
                                    mode="time"
                                    onConfirm={handleTimeConfirm}
                                    onCancel={hideTimePicker}
                                />
                            </TouchableOpacity>

                            <Text style={{marginLeft: 28, fontSize: 20}}>{time}</Text>
                        </View>
                    </View>

                    {/* Handle cancel and save */}
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={{margin: 20, borderWidth: 1, borderColor: '#363535', width: 90, height: 30, borderRadius: 3, alignItems: 'center'}}
                            onPress={()=> {
                                setModalReminderVisible(false);
                            }}
                        >
                            <Text style={{fontSize: 20}}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{margin: 20, borderWidth: 1, borderColor: '#363535', width: 90, height: 30, borderRadius: 3, alignItems: 'center'}}
                            onPress={()=> {
                                updateNoteColor()
                            }}
                        >
                            <Text style={{fontSize: 20}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }

    return (
        <SafeAreaView style={{backgroundColor: `${backgroundColor}`, flex: 1}}>

            {/* Choose note color */}
            <Modal
                visible={modalColorVisible}
                animationType='fade'
                transparent={true}
            >
                <ChooseColor/>
            </Modal>

            {/* Set Reminder */}
            <Modal
                visible={modalReminderVisible}
                animationType='fade'
                transparent={true}
            >
                <SetReminder/>
            </Modal>
            
            {/* Head */}
            <RenderTaskBar/>
            
            {/* Body */}
            <RenderTitleAndInputText/>

            {/* Handle text note */}
            <HandleNote/>

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
    },
    footer: {
        marginLeft: 100,
        marginTop: 20,
        flexDirection: 'row',
        
    },
    title: {
        fontSize: 30,
        marginRight: 120,
        marginLeft: 20,
        fontFamily: 'Roboto-Black',
        color: '#fbfbfb'
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
    modalReminderView: {
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
        height: windowHeight/3,
        width: 300,
        borderRadius: 8,
        alignSelf:'center',
        marginTop: windowHeight/3,
    },
  
})

const mapStateToProps = (state: any) => {
    const {reminderReducer} = state;
    const {colorReducer} = state;
    return {reminders: reminderReducer, colors: colorReducer};
}

export default connect (mapStateToProps, {changeReminder: changeReminder, changeColor: changeColor})(TextScreen)