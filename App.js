import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/splashscreen';
import Login from './Components/login';
import Register from './Components/register';
import Loginreg from './Components/loginreg';
import Home from './Components/home';
import Music from './Components/music';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Commented out SplashScreen and Register screens */}
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/*
        <Stack.Screen name="Loginreg" component={Loginreg} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Music" component={Music} />
        */}
        <Stack.Screen name ="Login" component={Login}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
