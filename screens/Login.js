import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login(){
    <View style={styles.container}>
        <View>
            <Image source={require("../assets/sunset.jpeg")} style={styles.image}/>
        </View>
        <View>
            <Text>Welcome to</Text>
            <Text>Power Bike Shop</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Login with Gmail</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles=StyleSheet.create({
    container:{
        flex:10,
    },
    image:{
        width:100,
        height:100,
        borderRadius:15,
        transform: [{ rotate: '45deg' }]
    }

})

