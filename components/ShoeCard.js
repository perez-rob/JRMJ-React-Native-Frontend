import React from "react";
import { View, StyleSheet, Text, Image, useWindowDimensions } from "react-native";


export default function ShoeCard({ item }) {

  console.log("meow", item)
  return(
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{uri: item.imageUrl}}/>
      <Text>{item.brand}</Text>
      <Text>{item.shoeName}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",

    
  },
  textName: {
    fontWeight: "700",
    color: "white"
  },
  cardImage: {
    height: 50,
    width: 50
  },

  
});