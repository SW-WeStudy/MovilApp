import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Item,
  Input,
  StyleProvider
} from "native-base";
// ejemplo de como crear navegacion y adicionar en el Navigation Container
// porfavor añadan de esta manera las pantallas (Screens) importandolas y luego colocandolas en el Stack
// toda la info la pueden ver en el react navigation
// revizar https://reactnavigation.org/ para ver como adicionar mas pantallas

// views
import Courses from "./views/courses/Courses";
import Course from './views/course/Course'
import vistaejemplo from './views/vistaejemplo'

function Root() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={Courses} />
      <Stack.Screen name="Course" component={Course} title={"Course"} initialParams={{ itemId: 42 }} />
    </Stack.Navigator>
  );
}
export default function App() {
  const Drawer = createDrawerNavigator();
  
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Root} title={"Home"} />
          <Drawer.Screen name="Example" component={vistaejemplo} title={"ejemplo"} />
          {/* <Drawer.Screen  /> */}
          {/* ... put here other screens  */}
        </Drawer.Navigator>
      </NavigationContainer>
    </Container>
  );
}
