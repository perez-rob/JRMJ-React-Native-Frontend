import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from "../pages/Cart";
import Explore from "../pages/Explore";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: (props) => <Header {...props} /> }}>
        <Stack.Screen name="Home" component={Homepage}/>
        <Stack.Screen name="Explore" component={Explore}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="Cart" component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
 
  },
});