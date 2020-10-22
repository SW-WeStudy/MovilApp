import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { BaseRouter, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ItemPost from "../../components/ItemPost";
import { getPosts } from "../../components/helper";
import { Value } from "react-native-reanimated";
import ItemAnswer from "../../components/ItemAnswer";
const Answer = ({ route, navigation }) => {

  const [answerElement, setAnswerElement] = useState([]);

  console.log(route.params.answer);

  const EmptyListMessage = () => {
    return (
      <Text style={styles.emptyListStyle}>
        Here is nothing yet but you could share something...
      </Text>
    );
  };
  
  useEffect(() => {
    setAnswerElement(route.params.answer);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Answers</Text>
      <FlatList
        data={answerElement}
        keyExtractor={(item) => "answer" + item._id}
        renderItem={({ item }) => (
          <ItemAnswer content={item.content} userCreator={item.userCreator} navigation={navigation} />
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

export default Answer;
