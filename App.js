import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/splashscreen';
import Login from './Components/login';
import Register from './Components/register';
import Loginreg from './Components/loginreg';
import { StatusBar } from 'expo-status-bar';
import Music from './Components/music';
import Home from './Components/home';
const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
    <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen  name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen  name="Login" component={Login}/>
        <Stack.Screen  name="Register" component={Register}/>
        <Stack.Screen  name="Home" component={Home}/>
        <Stack.Screen  name="Loginreg"  component={Loginreg}  />
        <Stack.Screen  name="Music" component={Music}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
