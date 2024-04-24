import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Minds United</Text>
    </View> 

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(9, 72, 95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    fontStyle:'italic',
    padding:20,
  },
});

export default Login;
