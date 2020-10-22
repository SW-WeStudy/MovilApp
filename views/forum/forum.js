import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { render } from "react-dom";
import { getForumsByCourse } from '../../components/helper'
import ItemForum from '../../components/ItemForum'
const Forum = (props) => {

  const [data, setData] = useState([]);
  const [forumElements, setForumElements] = useState([])
  useEffect(()=> {
    let getDataForumQ = async () => {
      let dataQ = await getForumsByCourse();
      setData(dataQ);
      const co = [];
      dataQ.forEach((c,i) => {
        co.push(c)
      });
      setForumElements(co);
    };
    getDataForumQ();
  }, [])
  
  const EmptyListMessage = () => {
    return (
      <Text style={styles.emptyListStyle}>
        Here is nothing yet but you could share something...
      </Text>
    );
  };

  console.log(forumElements);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Forum Screen</Text>
        <Text style={styles.subtitle}>Forum</Text>
        <FlatList
          data={forumElements} 
          renderItem={({ item }) => (
            <ItemForum
              _id={item._id}
              name={item.name}
              userCreator={item.userCreator}
              userEmail={item.userEmail}
              posts={item.posts}
              props={props}
            />
          )}
          keyExtractor={(item) => "forum" + item._id}
          ListEmptyComponent={EmptyListMessage}
        />
      </SafeAreaView>
    </View>
  );
};

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
  itemPost: {
    borderStyle: "solid",
    backgroundColor: "#BFBFBF",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  itemComment: {
    borderStyle: "solid",
    backgroundColor: "#A6A6A6",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  itemAnswer: {
    borderStyle: "solid",
    backgroundColor: "#8C8C8C",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "200",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#5e90f2",
    margin: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    color: "#5e90f2",
    marginHorizontal: 16,
  },
  userData: {
    fontSize: 16,
    textAlign: "right",
    color: "#000000",
    paddingLeft: 70,
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
  buttonContainer: {
    margin: 80,
    justifyContent: "center",
  }
});

export default Forum;
