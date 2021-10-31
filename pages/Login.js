import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";


export default function Login() {

  return (
    <View style={styles.view}>
      <Text>LOGIN PAGE</Text>
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