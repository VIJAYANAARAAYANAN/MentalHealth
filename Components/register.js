import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView , Image} from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import google from '../assets/newgoogle.png'
import fb from '../assets/newfacebook.png'
import apple from '../assets/newapple.png'
const Register = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });

  return (
    <LinearGradient colors = {["#040305","#002D62"]} style={{flex:1}}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.loginhead}>
          <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 20 }}>
            <AntDesign name="smileo" size={40} color="orange" />
            <Text style={{ color: 'white', textAlign: 'center', color:'orange',fontFamily: 'Montserrat-Medium', fontSize: 30, paddingHorizontal: 10 }}>MusicBox</Text>
          </View>
          <View style={{ display: 'flex', width: '100%', justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
            <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'Montserrat-Medium', textAlign: "center" }}>Create an account to get started on your health and happiness journey</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="grey"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="lock" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
            <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', fontSize: 16 }}>Sign Up</Text>
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
        <View style={{ flexDirection: "row", alignContent:"center",justifyContent:'center',alignItems: 'center',paddingTop:18, }}>
            <Text style={{ color: 'white', fontSize: 15 ,  fontFamily: 'Montserrat-Medium',}}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Loginreg')}>
                <Text style={{ color: 'orange', fontSize: 15, marginLeft: 5, fontFamily: 'Montserrat-Medium', }}>Log In</Text>
            </TouchableOpacity>
            </View>

      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  loginhead: {
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom:'15%',
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
    marginBottom: '5%',
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

export default Register;
