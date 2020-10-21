import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { BaseRouter, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ItemPost from "../../components/ItemPost";

const Post = ({ route, navigation }) => {

  const [postElement, setPostElement] = useState([]);

  const EmptyListMessage = () => {
    return (
      <Text style={styles.emptyListStyle}>
        Here is nothing yet but you could share something...
      </Text>
    );
  };

  useEffect(() => {
    setPostElement(route.params.posts);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
        <FlatList
          data={postElement}
          keyExtractor={(item) => item.idPost}
          renderItem={({ item }) => (
            <ItemPost title={item.title} userCreator={item.userCreator}/>
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
