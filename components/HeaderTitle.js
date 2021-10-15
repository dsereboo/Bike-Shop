import React from "react";
import {StyleSheet, Text, View} from "react-native"


const HeaderTitle=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Cart Items</Text>
            <Text>(3 items)</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
        fontSize:18,
        fontWeight:"bold",
        color:"black"
    },
    sub:{

    }
})

export default HeaderTitle