import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';


export default function App() {
  const qc = new QueryClient();

  return (
    <QueryClientProvider client={qc}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" animated={true}
          backgroundColor="#F217D0" />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

