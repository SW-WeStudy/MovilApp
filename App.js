import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button} from 'react-native';
// ejemplo de como crear navegacion y adicionar en el Navigation Container
// porfavor añadan de esta manera las pantallas (Screens) importandolas y luego colocandolas en el Stack
// toda la info la pueden ver en el react navigation 
// revizar https://reactnavigation.org/ para ver como adicionar mas pantallas
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Check Forum stable version"
        onPress={() => navigation.navigate('Forums')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Root() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="Forum" component={forum} />
    </Stack.Navigator>
  );
}


import forum from "./views/forum/forum";
import post from "./views/posts/posts";
import comment from './views/comments/comments';
import answer from './views/answers/answers';
import { createStackNavigator } from '@react-navigation/stack';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
export default function App() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} title={"Home"}/>
        <Drawer.Screen name="Details" component={DetailsScreen} title={"Details"} />
        <Drawer.Screen name="Forums" component={forum} title={"Forums"} />
        <Drawer.Screen name="Posts" component={post} title={"Posts"} />
        <Drawer.Screen name="Comments" component={comment} title={"Comments"} />
        <Drawer.Screen name="Answers" component={answer} title={"Answers"} />
        {/* ... put here other screens  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}