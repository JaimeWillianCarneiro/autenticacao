import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';


import app from '../autenticacao/src/firebase/config.js'; 
import Login from '../autenticacao/src/components/Login.js';
import Home from '../autenticacao/src/components/Home.js';
import Cadastro from '../autenticacao/src/components/Cadastro.js';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;