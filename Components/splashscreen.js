import React, { useEffect } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const SplashScreen = ({ navigation }) => {
  <StatusBar style="white" />

  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });
  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('Home');
    }, 1500); // 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors = {["#040305","#002D62"]} style={{flex:1}}>
    <View style={styles.container}>
    <View style={styles.main}>
    <Feather name="music" size={44} color="orange" />
    <Text style={styles.text}>MusicBox</Text>
    </View> 
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center",
  },

  main:{
    flex:1,
    display:'flex',
    width:'100%',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },

  text: {
    fontSize: 30,
    fontFamily:'Montserrat-Medium',
    color:'orange',
    textAlign:'center',
    padding:20,
    width:'100%',
  },
});

export default SplashScreen