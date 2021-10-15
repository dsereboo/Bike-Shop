import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CheckoutButton from "../components/CheckoutButton";
import CheckoutCard from "../components/CheckoutCard";
import { AntDesign } from '@expo/vector-icons';
import BottomNav from "../components/BottomNav";

const CartList=()=>{

    const bike=[
        {id:"dsihdi78", name:"Pinarello Bike", price:"1,700.00" },
        {id:"dsh98", name:"Brompton Bike", price:"1,500.00"},
        {id:"2389cj", name:"Schwim Bike", price:"1,200.00"},
    ]

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={20} color="black" />
          <View style={styles.headerText} >
            <Text>Cart List</Text>
            <Text>(3 items)</Text>
          </View>
        </View>
        <View style={styles.bikes}>
        <FlatList
          data={bike}
          renderItem={({ item }) => {
            return <CheckoutCard name={item.name} price={item.price} />;
          }}
          keyExtractor={(item) => {
            item.id;
          }}
        />
        </View>
        <View style={styles.figures}>
          <View style={styles.figureRow}>
            <Text style={styles.figureTitle}>SubTotal</Text>
            <Text style={styles.boldText}>
              <Text style={styles.dollar}>$</Text>3,400.00
            </Text>
          </View>
          <View style={[styles.figureRow, styles.borderHead, styles.bottom]}>
            <Text style={styles.figureTitle}>Shipping Fee</Text>
            <Text style={styles.boldText}>
              <Text style={styles.dollar}>$</Text>100.00
            </Text>
          </View>
          <View style={[, styles.figureRow]}>
            <Text style={styles.figureHead2}>Total</Text>
            <Text style={styles.boldText}>
              <Text style={styles.dollar}>$</Text>3,500.00
            </Text>
          </View>
        </View>

        <View style={styles.button}>
          <CheckoutButton />
        </View>
        <View>
            <BottomNav/>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        marginHorizontal:20,
    },
    header:{
        flex:0.2,
        flexDirection:"row",
        alignItems:"center"
    },
    headerText:{
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        flex:1,
        justifyContent:"center",
        // alignItems:"center"
    },
    cards:{
        flex:0.6,
    },
    figures:{
        flex:0.6,
        backgroundColor:"#f5f5f5",
        padding:10,
        borderRadius:10,
    },
    figureRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5
    },
    dollar:{
        color:"#ff7518",
        fontSize:12,
    },
    boldText:{
        fontWeight:"bold",
        fontSize:16,
    },
    figureTitle:{
        color:"#BEBEBE"
    },
    figureHead2:{
        fontSize:18,
        fontWeight:"bold"
    },
    borderHead:{
        borderBottomWidth:2,
        borderBottomStyle:"dotted",
        borderBottomColor:"#BEBEBE",
       
    },
     bottom:{
         paddingBottom:7,
     },
     bikes:{
        flex:2,
         marginTop:20,
         marginBottom:20,
        
     }
})

export default CartList