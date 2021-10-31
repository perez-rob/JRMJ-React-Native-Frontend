import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";


export default function UserProfile() {

  return (
    <View style={styles.view}>
      <Text>USER PROFILE PAGE</Text>
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