import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { BaseRouter, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ItemComment from "../../components/ItemComment";

import { Value } from "react-native-reanimated";
const Comment = ({ route, navigation }) => {

  const [commentElement, setCommentElement] = useState([]);

  const [data, setData] = useState([]);

  const EmptyListMessage = () => {
    return (
      <Text style={styles.emptyListStyle}>
        Here is nothing yet but you could share something...
      </Text>
    );
  };

  useEffect(() => {
    setCommentElement(route.params.comments);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        data={commentElement}
        keyExtractor={(item) => "comment" + item._id}
        renderItem={({ item }) => (
          <ItemComment content={item.content} userCreator={item.userCreator} answer={item.answer} navigation={navigation} />
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

export default Comment;
