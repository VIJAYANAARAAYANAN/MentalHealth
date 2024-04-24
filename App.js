import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Survey from './Components/survey';
import SplashScreen from './Components/splashscreen';
import Login from './Components/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen  name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen  name="Login" component={Login}/>
        <Stack.Screen  name="Survey"  component={Survey}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
