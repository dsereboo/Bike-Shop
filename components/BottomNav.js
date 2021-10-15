import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"

const BottomNav=()=>{

    const navigation= useNavigation()

    const handleCheckout=()=>{
        navigation.navigate("CartList")
    }

    const handleHome=()=>{
        navigation.navigate("Home")
    }
    return(
        
        <View style={styles.container}>
            <AntDesign onPress={handleHome} name="home" size={24} color="black" />
            <View style={styles.micContainer}>
            <MaterialIcons style={styles.microphone} name="keyboard-voice" size={24} color="#fff" />
            </View>
            <Pressable onPress={handleCheckout}>     
            <SimpleLineIcons  name="handbag" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
        borderRadius:10,
        backgroundColor:"#f5f5f5"


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