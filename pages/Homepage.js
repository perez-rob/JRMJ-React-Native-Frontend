import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import Footer from "../components/Footer";


export default function Homepage() {

  return (
    <View style={styles.view}>
      <Text>HOME PAGE</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
});