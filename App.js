import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button} from 'react-native';
// ejemplo de como crear navegacion y adicionar en el Navigation Container
// porfavor añadan de esta manera las pantallas (Screens) importandolas y luego colocandolas en el Stack
// toda la info la pueden ver en el react navigation 
// revizar https://reactnavigation.org/ para ver como adicionar mas pantallas
function HomeScreen({navigation,credentials}) {
  console.log(credentials)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Check Forum"
        onPress={() => navigation.navigate('Forums')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

// import forum from "./views/forum/forum";
import Login from './views/login';
import Signup from './views/signup';

export default function App() {
  const loginuser = (cred) =>{
    setLogin(true)
    setLogincredentials(cred)
  }
  let [login,setLogin] = useState(false)
  let [logincredentials, setLogincredentials] = useState({})
  const Drawer = createDrawerNavigator()
  const Stack = createStackNavigator()
  if(login){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Login" component={Login} title={"Login"} />
          <Drawer.Screen name="Signup" component={Signup} title={"Signup"} />
          <Drawer.Screen name="Home" component={() =>(<HomeScreen credentials={logincredentials}/>)} title={"Home"}/>
          {/* <Drawer.Screen name="Forums" component={forum} title={"Forums"} /> */}
          
          {/* ... put here other screens  */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={()=>(<Login handle={loginuser}/>)} title={"Login"} />
          <Stack.Screen name="Signup" component={Signup} title={"Signup"} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}