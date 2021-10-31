import React from "react";
import { View, StyleSheet, Text, Image, useWindowDimensions } from "react-native";


export default function ShoeCard() {

  return(
    <View style={styles.card}>
      <Image style={styles.cardImage} source={} />
      <Text></Text>
      <Text></Text>
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
  textLink: {
    fontSize: 10,
    color: "white"
  },

  
});