import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";


export default function Signup() {

  return (
    <View style={styles.view}>
      <Text>SIGNUP PAGE</Text>
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