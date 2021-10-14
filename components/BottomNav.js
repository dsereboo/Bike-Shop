import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"

const BottomNav=()=>{

    const navigation= useNavigation()
    return(
        
        <View style={styles.container}>
            <AntDesign name="home" size={24} color="black" />
            <View style={styles.micContainer}>
            <MaterialIcons style={styles.microphone} name="keyboard-voice" size={24} color="#fff" />
            </View>     
            <SimpleLineIcons name="handbag" size={24} color="black" />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
        borderRadius:10,


    },
    microphone:{
        position:"absolute",
        bottom:10,
        left:-25,
        backgroundColor:"black",
        borderRadius:50,
        padding:12,
        
    },

})

export default BottomNav