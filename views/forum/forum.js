import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList} from 'react-native';

// mientras que se conecta con el gateway
const data = [
  {
    id: 1,
    user:  "Ozuna Jose",
    text: "Encontre este recurso",
    userId: "UACgnGBcoLULNVW37LzYQCWuroX2",
    userEmail: "user4@gmail.com"
  },
  {
    id: 2,
    user:  "Luis Otalora",
    text: "Link de la clase grabada",
    userId: "PURje4P6jpepiCzAYNP2YB8TMjD3",
    userEmail: "user6@gmail.com"
  },
  {
    id: 3,
    user:  "Dante Maleante",
    text: "Excelentes aportes!",
    userId: "wYQAytIcXnTSUKzxytfOtZgYS7g1",
    userEmail: "user8@gmail.com"
  }
]

const Item = ({text,user,userEmail}) => (
  <View style = {styles.item}>
    <Text style = {styles.text}>
    <h4>
      {text}
    </h4>
    <Text>{user}</Text>
    <Text>{userEmail}</Text>
    </Text>
  </View>
);
const renderItem = ({ item }) =>(
  <Item 
    text = { item.text } 
    user = { item.user }
    userEmail = { item.userEmail }
  />
);

function Forum() {
  return (
    <View style = {styles.container}>
      <Text>
        <h1>
          Forum Screen
        </h1>
      </Text>
      <SafeAreaView>
        <FlatList
          data = {data}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 14,
    textAlign: "left"
  },
});

export default Forum;