// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import app from '../autenticacao/src/firebase/config.js'; 
import Login from '../autenticacao/src/components/Login.js';
// import Home from 'react-native-firebase/src/components/Home.js';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
