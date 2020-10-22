import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

export default function ItemPost ({navigation, content, userCreator, answer}) {
  console.log(answer);
  return (
  <View style={styles.item}>
    <SafeAreaView>
      <Text style={styles.text}> {content} </Text>
      <Text style={styles.userData}> {userCreator} </Text>
      <Button
          title="Show me answers"
          onPress={() => navigation.navigate("Answers", {answer} )}
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
  } /*
  separator: {
    borderWidth: 3,
    borderRadius: 4,
    marginVertical: 8,
    borderStyle: "solid",
    borderColor: "#BFBFBF",
    marginHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },*/,
  buttonContainer: {
    margin: 80,
    justifyContent: "center",
  },
});