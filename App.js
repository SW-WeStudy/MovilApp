import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button} from 'react-native';

import ResourcesScreen from './views/ResourcesScreen';
// ejemplo de como crear navegacion y adicionar en el Navigation Container
// porfavor añadan de esta manera las pantallas (Screens) importandolas y luego colocandolas en el Stack
// toda la info la pueden ver en el react navigation
// revizar https://reactnavigation.org/ para ver como adicionar mas pantallas
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
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
      <Drawer.Navigator initialRouteName="Resources">
        <Drawer.Screen name="Home" component={HomeScreen} title={"Home"}/>
        <Drawer.Screen name="Details" component={DetailsScreen} title={"Details"}/>
        <Drawer.Screen name="Resources" component={ResourcesScreen} title={"Resources"}/>
        {/* ... put here other screens  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}