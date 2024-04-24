import React, { useEffect } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import logo from '../assets/Logo.png'
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('Login');
    }, 4000); // 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
    <View style={styles.main}>
      <Image source={logo} alt="logo" />
      <Text style={styles.text}>Minds United</Text>
    </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002D62',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main:{
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
    padding:20,
  },
});

export default SplashScreen;
