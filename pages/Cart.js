import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {

  return (
    <View style={styles.view}>
      <Header />
      <Text>CART PAGE</Text>
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