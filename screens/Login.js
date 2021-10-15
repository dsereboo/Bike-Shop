import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";


export default function Login(){

    const navigation=useNavigation()

    const handleHomeCart=()=>{
        navigation.navigate("Home")
    }
    return(
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/sunset.jpeg")} style={styles.image}/>
        </View>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Welcome to</Text>
            <Text style={styles.boldHeader}>Power Bike Shop</Text>
        </View>
        <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={handleHomeCart} style={styles.googleButton}>
                <Image source={require("../assets/google.png")} style={styles.googleImage}/>
                <Text style={styles.boldText}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHomeCart} style={styles.appleButton}>
                <AntDesign name="apple1" size={20} color="white" />
                <Text style={styles.whiteText}>Login with Apple</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.greyText}>Not a member? <Text style={styles.coloredText}>Sign Up</Text></Text>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        marginTop:50,
        marginHorizontal:20,
    },
    imageContainer:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:220,
        height:220,
        borderRadius:15,
        transform: [{ rotate: '-45deg' }],
      
    },
    headerContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
        fontSize:26
    },
    buttonContainer:{
        flex:1,
       justifyContent:"flex-start",
      
    },
    googleImage:{
        height:30,
        width:30,
        backgroundColor:"#f5f5f5"
    },
    
    boldHeader:{
        fontSize:26,
        fontWeight:"bold"
    },
    appleButton:{
        flexDirection:"row",
        backgroundColor:"black",
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        
    },
    googleButton:{
        flexDirection:"row",
        backgroundColor:"#f5f5f5",
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
        borderRadius:10,
    },
    coloredText:{
        color:"#ff7518",
        fontWeight:"bold"
    },
    greyText:{
        
      color:"#B5B5B5"
    },
    whiteText:{
        color:"#fff",
        fontWeight:"bold",
        marginLeft:10,
    },
    boldText:{
        fontWeight:"bold",
        marginLeft:10,
    },
    textContainer:{
        flex:0.5,
        justifyContent:"flex-start",
        alignItems:"center"
    }

})

