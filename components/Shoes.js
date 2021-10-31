import React, { useEffect } from 'react'
import api from "../api";
import ShoeCard from "./ShoeCard";
import { useQuery } from 'react-query';
import { View, StyleSheet, FlatList, Text, useWindowDimensions } from "react-native";



export default function Shoes({ currentFilter, setResultsNum }) {

   
    
    
    const { status, data, error } = useQuery(
        ['shoes', currentFilter.value],
        async () => await api.index(currentFilter)
    );
    
    useEffect(() => {
        if (data){
        setResultsNum(data.length)
        console.log(data)
        }
    },[data])
    
    return (
        <View style={styles.view}>
          <FlatList data={data} renderItem={ShoeCard} keyExtractor={item => item.shoeId} />
        </View>
    )
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














