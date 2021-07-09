import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type CircleType = {
    colorCode: string,
    onPress: () => void;
}

const CustomCircle: React.FC<CircleType> = ({colorCode, onPress}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{backgroundColor:`${colorCode}`, width: 40, height: 40, borderRadius: 40/2, borderColor: '#535252', borderWidth: 3, margin: 4}}
        >
        </TouchableOpacity>
    )
}
export default CustomCircle;

