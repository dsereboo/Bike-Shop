import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CartList from './screens/CartList';
import HomeCart from './screens/HomeCart';
import Login from "./screens/Login"
import { createStackNavigator } from '@react-navigation/stack';


const Stack= createStackNavigator()


// export default function App(){
//   return(
//     <CartList/>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
       screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen 
        name="Home"
         component={HomeCart}
         
          />
        <Stack.Screen name="CartList" component={CartList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


