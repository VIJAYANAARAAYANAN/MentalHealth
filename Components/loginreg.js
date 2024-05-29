import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView , Image} from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import google from '../assets/google.png'
import fb from '../assets/fb.png'
import apple from '../assets/apple.png'

const Loginreg = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.loginhead}>
          <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10%' }}>
            <AntDesign name="smileo" size={40} color="orange" />
            <Text style={{ color: 'white', textAlign: 'center', color:'orange',fontFamily: 'Montserrat-Medium', fontSize: 30, paddingHorizontal: 10 }}>MusicBox</Text>
          </View>
          <View style={{ display: 'flex', width: '90%', justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
            <Text style={{ color: 'white', fontSize: 25, fontFamily: 'Montserrat-Medium', textAlign: "center" }}>Login</Text>
            <View style={{ flexDirection: "row", alignContent:"center",justifyContent:'center',alignItems: 'center',paddingTop:'5%', }}>
            <Text style={{ color: 'white', fontSize: 15 ,  fontFamily: 'Montserrat-Medium',}}>New to MusicBox?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
                <Text style={{ color: 'orange', width:'100%',fontSize: 15, marginLeft: 5 , fontFamily: 'Montserrat-Medium',}}>Sign Up</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="grey"
              keyboardType="email-address"
            />
          </View>
        
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', fontSize: 16 }}onPress={()=>navigation.navigate('Home')}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraWayContainer}>
          <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', fontSize: 16,paddingBottom:10, }}>Continue with</Text>
          <View style={styles.socialIconsContainer}>
          <TouchableOpacity>
                <Image source={google} style={styles.socialIcon} />
          </TouchableOpacity>
            
          <TouchableOpacity>
                <Image source={fb} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
                <Image source={apple} style={styles.socialIcon} />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000133',
  },
  loginhead: {
    padding:20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '10%',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'20%',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'white',
    width:'87%',
    borderRadius:30,
    gap:-15,
    alignItems: 'center',
    marginBottom: '8%',
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 20,
    paddingLeft: 15,
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  icon: {
    padding: 10,
  },
  button: {
    width: '80%',
    height: 45,
    backgroundColor: '#007FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  extraWayContainer: {
    alignItems: 'center',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    gap:20,
    marginTop: 10,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default Loginreg;
