import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CartList from './screens/CartList';
import HomeCart from './screens/HomeCart';
import Login from "./screens/Login"
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from './components/HeaderTitle';


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
        
          cardStyle: {
            backgroundColor: 'white'
          }
        }}>
        <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              headerShown: false,
             }
             }
          />
        <Stack.Screen 
        name="Home"
         component={HomeCart}
         options={{
          headerShown: false,
         
         }
         }
         
          />
        <Stack.Screen
         name="CartList" 
         component={CartList} 
         options={{
          headerTitleAlign: "center",
          headerTitle:()=><HeaderTitle/>,
          headerStyle:{
            borderBottomWidth:0,
          },
         }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


