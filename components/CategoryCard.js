import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CategoryCard=({name})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"#F5F5F5",
        marginHorizontal:5,
        borderRadius:7,
    },
    text:{
        fontSize:16,
        color:"#BEBEBE"
    }
})

export default CategoryCard