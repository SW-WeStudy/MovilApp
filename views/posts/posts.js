import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { BaseRouter, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ItemPost from "../../components/ItemPost";
import { getPosts } from "../../components/helper";
import { Value } from "react-native-reanimated";
const Post = ({ route, navigation }) => {

  const [forumElement, setForumElement] = useState([]);

  const [postElement, setPostElement] = useState([]);

  const [data, setData] = useState([]);

  console.log(route.params._id);
  useEffect(() => {
    let getForumsByID = async () => {
      const data1 = JSON.parse(JSON.stringify(route.params._id));
      const _id = data1.toString();
      console.log(_id);
      let dataQ = await getPosts(_id);
      setData(dataQ.data);
      const co = [];
      dataQ.data.forEach((e,i) => {
        co.push(e);
      });
      setForumElement(co);
      setPostElement(co[0].posts);
    };
    getForumsByID();
  }, []);

  const EmptyListMessage = () => {
    return (
      <Text style={styles.emptyListStyle}>
        Here is nothing yet but you could share something...
      </Text>
    );
  };
  
  console.log(forumElement);
  console.log(postElement);
  /*
  useEffect(() => {
    setPostElement(route.params.posts);
  }, [])*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={postElement}
        keyExtractor={(item) => "post" + item._id}
        renderItem={({ item }) => (
          <ItemPost title={item.title} userCreator={item.userCreator} comments={item.comments} navigation={navigation} />
        )}
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#5e90f2",
    margin: 20,
  },
});

export default Post;
