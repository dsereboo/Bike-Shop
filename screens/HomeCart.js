import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryCard from "../components/CategoryCard";
import BikeCard from "../components/BikeCard";
import BottomNav from "../components/BottomNav"

const HomeCart=()=>{
    const categories=[
        {id:"dj30", name:"All"},
        {id:"289hdx", name:"Roadbike"},
        {id:"389xh", name:"Mountain"},
        {id:"378dhx", name:"Urban"},
        {id:"sdhj89", name:"Terrain"}
    ]

    const bike=[
        {id:"dsihdi78", name:"Pinarello Bike", price:"1,700.00" },
        {id:"dsh98", name:"Brompton Bike", price:"1,500.00"},
        {id:"2389cj", name:"Schwim Bike", price:"1,200.00"},
        {id:"389cs", name:"Norto Bike", price:"9,800.00"}
    ]

  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
      <View style={styles.header}>
        <FontAwesome5 name="grip-lines" size={24} color="black" />
        <MaterialIcons name="pedal-bike" size={32} color="black" />
        <View style={styles.subHeader}>
          <Feather name="search" size={24} color="black" />
          <Ionicons
            style={styles.icon}
            name="notifications-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={[styles.pageDescription, styles.title]}>
        <Text style={styles.greyText}>
          The World's <Text style={styles.orangeText}>Best Bike</Text>
        </Text>
        <Text style={[styles.boldText, styles.categoriesHeader]}>
          Categories
        </Text>
        <View>
          <FlatList
            data={categories}
            renderItem={({ item }) => {
              return <CategoryCard name={item.name} />;
            }}
            keyExtractor={(item) => {
              item.id;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.bikes}>
        <FlatList
          data={bike}
          renderItem={({ item }) => {
            return <BikeCard name={item.name} />;
          }}
          keyExtractor={(item) => {
            item.id;
          }}
          horizontal={false}
          numColumns={2}
        />
      </View>
      </View>
      <View style={styles.bottomNav}>
          <BottomNav/>
      </View>
    </View>
  );
}


const styles=StyleSheet.create({
    container:{
        flex:10,
        marginTop:20,
        // marginHorizontal:20,
    },
    spacing:{
        marginHorizontal:20,
    },
    header:{
        flex:0.7,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    subHeader:{
        justifyContent:"space-between",
        flexDirection:"row"
    },
    icon:{
        marginLeft:10,
    },
    greyText:{
        fontSize:18,
        color:"#DCDCDC"
    },
    title:{
        marginTop:15,
        marginBottom:30,
    },
    orangeText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#ff7518"
    },
    pageDescription:{
        flex:1.5,
    },
    boldText:{
        fontWeight:"bold",
        fontSize:18,
    }, 
    categoriesHeader:{
        marginVertical:10,
    },
    bikes:{
        flex:7,
    },
    bottomNav:{
      flex:1,
      justifyContent:"flex-end"

        
    }


})

export default HomeCart

