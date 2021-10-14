import React from "react";
import { StyleSheet, View, Image,Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function BikeCard(){
   return(
        <View style={styles.container}>
            <View style={styles.icon}>
              <AntDesign name="hearto" size={20} color="#ff751" />
            </View>
            <Image source={require("../assets/bike.png")} style={styles.image}/>
            <View style={styles.description}>
                <Text style={styles.title}>Pinarello Bike</Text>
                <Text style={styles.boldText}><Text style={styles.dollar}>$</Text>1,700.00</Text>
            </View>
        </View>
   )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#f5f5f5",
        flex:0.8,
        borderRadius:10,
        marginHorizontal:5,
        marginVertical:5,
        padding:12,
    },
    description:{
        alignItems:"center"
    },
    title:{
        fontSize:16,
        color:"#BEBEBE",
    },
    dollar:{
        color:"#ff7518"
    },
    image:{
        width:140,
        height:140,
        alignSelf:"center"
    },
    icon:{
        position:"absolute",
        backgroundColor:"#fff",
        padding:5,
        borderRadius:50,
        top:8,
        right:12,

    },
    boldText:{
        fontWeight:"bold",
        fontSize:16,
    }


})