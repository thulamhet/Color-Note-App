// import React from "react"
// import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
// import CustomCircle from "./CustomCircle";

// const modalColor : React.FC<{submit: ()=> void}> = ({submit}) => {
//     return (
//         <View>
//              <Modal
//                 visible={modalColorVisible}
//                 animationType='fade'
//                 transparent={true}
//             >
//                 <View style={styles.modalColorView}>
//                     <View style={{flexDirection: 'row'}}>
//                         <TouchableOpacity
//                             style={{margin: 4}}
//                         >
    
//                         </TouchableOpacity>
//                         <CustomCircle colorCode='#c6d861' onPress={()=>submit('#c6d861')}/>
//                         <CustomCircle colorCode='#686161' onPress={()=>submit('#686161')}/>
//                         <CustomCircle colorCode='#46ca57' onPress={()=>submit('#46ca57')}/>
//                         <CustomCircle colorCode='#b67398' onPress={()=>submit('#b67398')}/>
//                     </View>
//                     <View style={{flexDirection: 'row'}}>
//                         <TouchableOpacity
//                             style={{margin: 4}}
//                         >
    
//                         </TouchableOpacity>
//                         <CustomCircle colorCode='#61b6d8' onPress={()=>submit('#61b6d8')}/>
//                         <CustomCircle colorCode='#f50707' onPress={()=>submit('#f50707')}/>
//                         <CustomCircle colorCode='#095313' onPress={()=>submit('#095313')}/>
//                         <CustomCircle colorCode='#eea60a' onPress={()=>submit('#eea60a')}/>
//                     </View>
                    
//                 </View>
//             </Modal>
//         </View>
//     )
// }
// export default modalColor;

// const styles = StyleSheet.create({
//     modalColorView: {
//         margin: 20,
//         backgroundColor: "white",

//         shadowColor: "#000",
//         shadowOffset: {
//         width: 0,
//         height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//         height: 100,
//         width: 200,
//         borderRadius: 8,
//         marginTop: 75,
//         marginLeft: 190,
//     },
// })