import React, { useEffect } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import logo from '../assets/orangelogo.png'
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = ({ navigation }) => {
  <StatusBar style="white" />

  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });
  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('Login');
    }, 1500); // 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
    <View style={styles.main}>
    <Ionicons name="shapes-sharp" size={40} color="orange" />
    <Text style={styles.text}>MusicBox</Text>
    </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000133',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center",
  },

  main:{
    marginLeft:20,
    display:'flex',
    width:'100%',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },

  text: {
    fontSize: 25,
    fontFamily:'Montserrat-Medium',
    color:'white',
    textAlign:'center',
    padding:20,
    width:'100%',
  },
});

export default SplashScreen