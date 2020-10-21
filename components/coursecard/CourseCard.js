import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
export default function CourseCard(props) {
  return (
    <Card>
      <CardItem header bordered>
        <Text style={styles.baseText}>{props.data.name}</Text>
      </CardItem>
      <CardItem body>
        <Text>{props.data.id_course}</Text>
      </CardItem>
      <CardItem footer bordered>
        <Button
          transparent
          large
          onPress={() =>
            props.navigation.navigate("Course", {
              course_id: props.data.id_course,
            })
          }
        >
          <Icon active name="users" type="FontAwesome" />
          <Text>{props.data.likes}</Text>
        </Button>
        <Body></Body>
        <Button transparent large>
          <Text>{props.data.likes}</Text>
          <Icon name="heart" type="FontAwesome" />
        </Button>
      </CardItem>
    </Card>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "red",
  },
});
