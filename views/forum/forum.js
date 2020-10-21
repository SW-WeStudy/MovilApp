import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
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
import { Card } from "react-bootstrap";
import { useCardAnimation } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
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
  /*
  const [forumElements, setForumElements] = useState([
    {
      idForum: "idforum0",
      userCreator: "Ozuna Jose",
      name: "Nuevo recurso / forum 0",
      userEmail: "user4@gmail.com",
      posts: [
        {
          idPost: "idpost00",
          title: "post 00",
          userCreator: "Ozuna Jose",
          comments: [
            {
              idComment: "idcomment000",
              content: "Comment 000",
              userCreator: "Ozuna Jose",
              answers: [
                {
                  userCreator: "Ozuna Jose",
                  content: "answer 0000",
                },
                {
                  userCreator: "Ozuna Jose 2",
                  content: "answer 0001",
                },
              ],
            },
            {
              idComment: "idcomment001",
              content: "Comment 001",
              userCreator: "Ozuna Jose",
              answers: [
                {
                  userCreator: "Ozuna Jose",
                  content: "answer 0010",
                },
              ],
            },
          ],
        },
        {
          idPost: "idpost01",
          title: "post 01",
          userCreator: "Luis Otalora",
          comments: [
            {
              idComment: "idcomment010",
              content: "Comment 010",
              userCreator: "Luis Otalora",
              answers: [
                {
                  userCreator: "Luis Otalora",
                  content: "answer 0100",
                },
                {
                  userCreator: "Ozuna Jose 2",
                  content: "answer 0101",
                },
              ],
            },
            {
              idComment: "idcomment011",
              content: "Comment 011",
              userCreator: "Luis Otalora",
              answers: [{}],
            },
          ],
        },
      ],
    },
    {
      idForum: "idforum1",
      userCreator: "Luis Otalora",
      name: "Link de la clase grabada / forum 0",
      userEmail: "user6@gmail.com",
      posts: [
        {
          idPost: "idpost10",
          title: "titulo 1",
          userCreator: "Dante Maleante",
          comments: [
            {
              idComment: "idcomment100",
              content: "Comment 100",
              userCreator: "Luis Otalora",
              answers: [
                {
                  userCreator: "Luis Otalora 2",
                  content: "answer 1000",
                },
                {
                  userCreator: "Luis Otalora 2",
                  content: "answer 1001",
                },
              ],
              idComment: "idcomment111",
              content: "Comment 111",
              userCreator: "Luis Otalora",
              answers: [{}],
            },
          ],
        },
      ],
    },
    {
      idForum: "idforum2",
      userCreator: "Dante Maleante",
      name: "Agradecimiento",
      userEmail: "user8@gmail.com",
    },
  ]);*/
  
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
          keyExtractor={(item) => item._id}
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
  },
});

export default Forum;
