import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Signup() {

  return (
    <View style={styles.view}>
      <Header />
      <Text>SIGNUP PAGE</Text>
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