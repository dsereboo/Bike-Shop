import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const CheckoutCard=()=>{
    return(
        <View style={styles.container}>
            <View>
                <Image source={require("../assets/bike.png")} style={styles.image}/>
            </View>
            <View>
            <View style={styles.row}>
                <Text style={styles.title}>Pinarello Bike</Text>
                <AntDesign name="delete" size={15} color="#ff7518" style={styles.deleteIcon} />
            </View>
            <View style={styles.row}>
                <Text style={styles.greyText}>Mountain Bike</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.boldText}><Text style={styles.dollar}>$</Text>1,200.00</Text>
               
                <View style={styles.quantity}>
                    <AntDesign style={styles.icon1} name="minuscircle" size={24} color="black" />
                    <Text>1</Text>
                    <AntDesign  style={styles.icon2} name="pluscircle" size={24} color="#ff7518" />
                </View>
            </View> 
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1.2,
        flexDirection:"row",
        marginVertical:5,
        width:200,
    },
    deleteIcon:{
        // padding:3,
        backgroundColor:"#fff",
        
       
    },
    boldText:{
        fontWeight:"bold",
        fontSize:16,
    },
    icon1:{
        marginRight:5,
    },
    icon2:{
        marginLeft:5,
    },
    dollar:{
        color:"#ff7518"
    },
    title:{
        fontSize:18
    },
    quantity:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    greyText:{
        color:"#BEBEBE"
    },
    image:{
        height:80,
        width:80,
        borderRadius:10,
        backgroundColor:"#f5f5f5",
        marginRight:15,
    },
    row:{
        flexDirection:"row",
        // // justifyContent:"space-between",
        alignItems:"center",

        // marginBottom:5
       
    }
})

export default CheckoutCard