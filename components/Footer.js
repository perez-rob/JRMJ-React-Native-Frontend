import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

export default function Footer() {
  const footerStyle = {...styles.footer, width: useWindowDimensions().width};

  return(
    <View style={footerStyle}>
      <Text style={styles.textName}>JRMJ</Text>
      <Text style={styles.textCopy}>Copyright © 2021</Text>
      <View style={styles.catchphraseContainer}>
        <Text style={styles.textCatch}>Quality Only You Deserve</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    
  },
  textName: {
    fontWeight: "700",
  },
  textCopy: {
    fontSize: 10,
  },
  textCatch: {
    textAlign: "center",
  },
  catchphraseContainer: {
    borderRadius: 1,
    borderStyle: 'dotted',
    borderColor: "black",
    borderWidth: 2,
    height:80,
    width: 100,
    justifyContent: "center",
  },
});