import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

// mientras que se conecta con el gateway
const dataNull = [];
// const [dataToDisplay, setDataToDisplay] = useState();
const data1 = [
  {
    id: 1,
    user: "Ozuna Jose",
    text: "Encontre este recurso",
    userId: "UACgnGBcoLULNVW37LzYQCWuroX2",
    userEmail: "user4@gmail.com",
  },
  {
    id: 2,
    user: "Luis Otalora",
    text: "Link de la clase grabada",
    userId: "PURje4P6jpepiCzAYNP2YB8TMjD3",
    userEmail: "user6@gmail.com",
  },
  {
    id: 3,
    user: "Dante Maleante",
    text: "Excelentes aportes!",
    userId: "wYQAytIcXnTSUKzxytfOtZgYS7g1",
    userEmail: "user8@gmail.com",
  },
  {
    id: 4,
    user: "Dante Maleante 2 ",
    text: "Excelentes aportes 2!",
    userId: "wYQAytIcXnTSUKzxytfOtZgYS7g1",
    userEmail: "user8-2@gmail.com",
  },
];

const data2 = [
  {
    id: 1,
    user: "Ozuna Jose",
    text: "Class note 1",
    userId: "UACgnGBcoLULNVW37LzYQCWuroX2",
    userEmail: "user4@gmail.com",
  },
  {
    id: 2,
    user: "Luis Otalora",
    text: "Class note 2",
    userId: "PURje4P6jpepiCzAYNP2YB8TMjD3",
    userEmail: "user6@gmail.com",
  },
  {
    id: 3,
    user: "Dante Maleante",
    text: "Last class note!",
    userId: "wYQAytIcXnTSUKzxytfOtZgYS7g1",
    userEmail: "user8@gmail.com",
  },
  {
    id: 4,
    user: "Dante Maleante 2",
    text: "Last class note! 2",
    userId: "wYQAytIcXnTSUKzxytfOtZgYS7g1",
    userEmail: "user8-2@gmail.com",
  },
];

const Item = ({ text, user, userEmail }) => (
  <View style={styles.item}>
    <Text style={styles.text}> {text} </Text>
    <Text style={styles.userData}> {user} </Text>
    <Text style={styles.userData}> {userEmail} </Text>
  </View>
);
const renderItem = ({ item }) => (
  <Item text={item.text} user={item.user} userEmail={item.userEmail} />
);

const EmptyListMessage = ({ item }) => {
  return (
    // Flat List Item
    <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
      Here is nothing yet but you could share something...
    </Text>
  );
};

const Separator = () => <View style={styles.separator} />;

function Forum() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Forum Screen</Text>
        <Text style={styles.subtitle}>Post</Text>
        {/* Es necesario revisar el equivalente de SafeAreaView */}
        <SafeAreaView>
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={EmptyListMessage}
          />
          {/* 
          
          Aqui toca revisar bien como es la forma correcta de hacer las inserciones de los datos a la lista

          <TextInput
            style={styles.input}
            placeholder="Share a post!"
            onChange={(dataToDisplay) => {
              this.setState({ dataToDisplay });
            }}
            value={this.state.dataToDisplay}
          />*/}
        </SafeAreaView>
        <Separator />
        <Text style={styles.subtitle}>Notes</Text>
        <SafeAreaView>
          <FlatList
            data={dataNull}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={EmptyListMessage}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderStyle: "solid",
    backgroundColor: "#D9D9D9",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#5e90f2",
    margin: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#5e90f2",
    marginHorizontal: 16,
  },
  userData: {
    fontSize: 12,
    textAlign: "right",
    color: "#000000",
    paddingLeft: 200,
    paddingRight: 1,
    marginHorizontal: 5,
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#5e90f2",
    margin: 20,
  },
  separator: {
    borderWidth: 3,
    borderRadius: 4,
    marginVertical: 8,
    borderStyle: "solid",
    borderColor: "#BFBFBF",
    marginHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bab7c3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#54e5a",
    fontWeight: "600"
  }
});

export default Forum;
