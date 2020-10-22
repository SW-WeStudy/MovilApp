import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Container, Header, Content, Accordion, Icon ,Button} from "native-base";
// components
import CourseNotes from "../../components/coursenotes/coursenotes";
import CurseForums from "../../components/courseforums/CourseForums";
import CourseStudy from "../../components/coursestudy/CourseStudy";

export default function Course({ route, navigation }) {
  function _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#5E90F2", fontSize: 20 }}>
          {" "}
          {item.title}
        </Text>
        {expanded ? (
          <Icon
            style={{ fontSize: 18, color: "#5E90F2" }}
            name="caretup"
            type="AntDesign"
          />
        ) : (
          <Icon
            style={{ fontSize: 18, color: "#5E90F2" }}
            name="caretdown"
            type="AntDesign"
          />
        )}
      </View>
    );
  }
  const dataArray = [
    { title: "Notes", content: <CourseNotes id={route.params.course_id} /> },
    { title: "Forums", content: <CurseForums id={route.params.course_id} /> },
    {
      title: "Study rooms",
      content: <CourseStudy id={route.params.course_id} />,
    },
  ];
  return (
    <View>
      <Accordion dataArray={dataArray} renderHeader={_renderHeader} />
      <Button full>
        <Text style={{ color: "white" }}>Show resources</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    backgroundColor: "white",
    color: "red",
  },
});
