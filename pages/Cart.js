import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";


export default function Cart() {

  return (
    <View style={styles.view}>
      <Text>CART PAGE</Text>
    </View>
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