import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableNativeFeedback, TextInput, StyleSheet, Button } from 'react-native';
import {createUser} from '../../components/helper'
const Signup = ({ navigation }) => {
  const [newCredentials, setnewCredentials] = useState({
    name: '', email: '', password: ''
  })


  const signupHandler = async() => {
    let create = await createUser(newCredentials)
    if(create !== null){
      alert("Signup success");
      goToLogin()
    }else{
      alert("the user already success");
    }
    
  }

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.centered}>
        <Image source={require('../../assets/logo.png')} style={styles.logoImage} />
        
        <View style={styles.inputSection}>
        <TextInput 
            style={styles.input} 
            placeholder={'Name'}
            onChangeText={(value) => setnewCredentials({...newCredentials, name: value })} 
            value={newCredentials.name} />

          <TextInput 
            style={styles.input} 
            placeholder={'Email address'}
            onChangeText={(value) => setnewCredentials({...newCredentials, email: value })} 
            value={newCredentials.email} />

          <TextInput 
            autoCompleteType={'password'}
            secureTextEntry={true}
            style={styles.input} 
            placeholder={'Password'}
            onChangeText={(value) => setnewCredentials({...newCredentials, password: value })} 
            value={newCredentials.password} />
        </View>

        <View style={styles.buttonSection}>
          <TouchableNativeFeedback onPress={signupHandler}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Register</Text>
            </View> 
          </TouchableNativeFeedback>
            
          <TouchableNativeFeedback onPress={goToLogin}>
            <Text style={styles.buttonSecondary}> Login </Text>
          </TouchableNativeFeedback>
        </View>
        
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centered: {
    width: '100%',
    height: '70%',
    alignItems: 'center',

    justifyContent: 'space-between'
  },
  logoImage: {
    width: 248,
    height: 288
  },
  inputSection: {
    height: '42%',
    paddingVertical: 40,
    justifyContent: 'space-between'

  },
  input: {
    width: 280,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4
  },
  buttonSection: {
    height: '16%',
    justifyContent: 'space-around'
  },
  button: {
    width: 280,
    height: 52,
    backgroundColor: '#0275D8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  buttonText: {
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 25,
    color: 'white'
  },
  buttonSecondary: { 
    fontSize: 16,
    lineHeight: 21,
    color: '#0275D8',
    alignSelf: 'center'
  }
});

export default Signup;