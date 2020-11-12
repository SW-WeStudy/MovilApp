import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableNativeFeedback, TextInput, StyleSheet, Button } from 'react-native';
import { firebase } from '../../firebase'
import { AsyncStorage } from 'react-native';
let _storeData = async (t) => {
  try {
    await AsyncStorage.setItem(
      'token',
      t
    );
  } catch (error) {
    // Error saving data
  }
};
const Login = ({ navigation,handle}) => {
  const [credentials, setCredentials] = useState({
    email: '', password: ''
  })
  const loginHandler = () => {
    // alert("login success")
    // handle(credentials);
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((response) => {
          const uid = response.user.uid
          _storeData(response.user.ya)
          alert("login success")
          handle(credentials);
      })
      .catch(error => {
          alert(error)
      })
  }

  const goToSignup = () => {
    navigation.navigate('Signup');
  }

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.centered}>
        <Image source={require('../../assets/logo.png')} style={styles.logoImage} />
        
        <View style={styles.inputSection}>
          <TextInput 
            style={styles.input} 
            placeholder={'Email address'}
            onChangeText={(value) => setCredentials({...credentials, email: value })} 
            value={credentials.email} />

          <TextInput 
            autoCompleteType={'password'}
            secureTextEntry={true}
            style={styles.input} 
            placeholder={'Password'}
            onChangeText={(value) => setCredentials({...credentials, password: value })} 
            value={credentials.password} />
        </View>

        <View style={styles.buttonSection}>
          <TouchableNativeFeedback onPress={loginHandler}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Login </Text>
            </View> 
          </TouchableNativeFeedback>
            
          <TouchableNativeFeedback onPress={goToSignup}>
            <Text style={styles.buttonSecondary}> Sign up </Text>
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
    height: '18%',
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

export default Login;