import React, { useState } from "react";
import { View, StyleSheet, Text, Image, useWindowDimensions } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shoes from "../components/Shoes"
import Shoebanner from "../images/Shoebanner.jpg";



export default function Homepage() {
  const bannerStyle = {...styles.banner, width: useWindowDimensions().width};

  const [ resultsNum, setResultsNum ] = useState(0);

  const [currentFilter, setCurrentFilter] = useState({ type: "category", value: "all" });
  return (
    <View style={styles.view}>
      <Header />
      <Image style={bannerStyle} source={Shoebanner} />
      <Text style={styles.h1}>Shop Our Collection!</Text>
      {currentFilter.type ? (
              <Shoes currentFilter={currentFilter} setResultsNum={setResultsNum}/>
          ) : null}
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
  banner: {
    height: 160,
  },
  h1: {
    fontSize: 30,
  },
});