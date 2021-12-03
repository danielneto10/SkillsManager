import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainNav from './src/navigation/MainNav';

const theme = {
  ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#104CA1",
        accent: "#104CA1",
        // background: "#15263D"
    },
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
