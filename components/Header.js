import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const headerStyle = {...styles.header, width: useWindowDimensions().width};
  const navigation = useNavigation();

  return(
    <View style={headerStyle}>
      <Text style={styles.textName} onPress={() => navigation.navigate('Home')}>JRMJ</Text>
      <Text style={styles.textLink} onPress={() => navigation.navigate('Home')}>Shop</Text>
      <Text style={styles.textLink} onPress={() => navigation.navigate('Explore')}>Explore</Text>
      <Text style={styles.textLink} onPress={() => navigation.navigate('Login')}>Login</Text>
      <Text style={styles.textLink} onPress={() => navigation.navigate('Signup')}>Signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    
    
  },
  textName: {
    fontWeight: "700",
    color: "white"
  },
  textLink: {
    fontSize: 10,
    color: "white"
  },

  
});