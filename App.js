import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
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
  StyleProvider,
} from "native-base";
// ejemplo de como crear navegacion y adicionar en el Navigation Container
// porfavor añadan de esta manera las pantallas (Screens) importandolas y luego colocandolas en el Stack
// toda la info la pueden ver en el react navigation
// revizar https://reactnavigation.org/ para ver como adicionar mas pantallas

// import forum from "./views/forum/forum";
// views
import Login from "./views/login";
import Signup from "./views/signup";
import Courses from "./views/courses/Courses";
import Course from "./views/course/Course";
import Note from './views/note/Note';
import Forum  from "./views/forum/forum";
import Comment  from "./views/comments/comments";
import Answer  from "./views/answers/answers";
import Post  from "./views/posts/posts";



export default function App() {
  let [login, setLogin] = useState(true);
  let [logincredentials, setLogincredentials] = useState({});
  const Stack = createStackNavigator();
  const loginuser = (cred) => {
    setLogin(true);
    setLogincredentials(cred);
  };
  function Root() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen
          name="Course"
          component={Course}
          title={"Course"}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen
          name="Note"
          component={Note}
          title={"Note"}
        />
        <Stack.Screen
          name="Forums"
          component={Forum}
          title={"Forums"}
        />
        <Stack.Screen
          name="Answers"
          component={Answer}
          title={"Answers"}
        />
        <Stack.Screen
          name="Posts"
          component={Post}
          title={"Posts"}
        />
         <Stack.Screen
          name="Comments"
          component={Comment}
          title={"Comments"}
        />

      </Stack.Navigator>
    );
  }
  const loginhandlercomponenet = (props) => (
    <Login handle={loginuser} {...props} />
  );
  const homecredentials = (props) => (
    <HomeScreen credentials={logincredentials} {...props} />
  );
  const Drawer = createDrawerNavigator();
  const navigationRef = React.useRef(null);

  if (login) {
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
          <Right>
            <Button style={{ color: "white" }}>
                <Icon name="sticky-note" type="FontAwesome" onPress={() => navigationRef.current?.navigate('Note')} />
              </Button>
          </Right>
        </Header>
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator initialRouteName="Courses">
            <Drawer.Screen name="Courses" component={Root} title={"Courses"} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Container>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={loginhandlercomponenet}
            title={"Login"}
          />
          <Stack.Screen name="Signup" component={Signup} title={"Signup"} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
