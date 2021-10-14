import React from "react"
import {Stylesheet, TouchableOpacity, Text, StyleSheet}from "react-native"

const CheckoutButton=()=>{
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Proceed to Checkout</Text>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ff7518",
        padding:15,
        borderRadius:10,
        alignItems:"center"
    },
    text:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"
    

    }
})

export default CheckoutButton