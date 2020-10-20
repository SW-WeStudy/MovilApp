import React from "react";
import { View, Text, SafeAreaView,StyleSheet } from "react-native";
import { Container, Header, Content, Accordion,Icon} from "native-base";
// components
import CourseNotes from '../../components/coursenotes/coursenotes';



export default function Course({ route, navigation }) {
  function _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "white",
        }}>
      <Text style={{ fontWeight: "bold",color:'#5E90F2',fontSize:20}}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18,color:'#5E90F2' }} name="caretup" type="AntDesign" />
          : <Icon style={{ fontSize: 18,color:'#5E90F2'}} name="caretdown" type='AntDesign' />}
      </View>
    );
  }
  const dataArray = [
    { title: "Notes", content: <CourseNotes id={route.params.course_id}/> },
    { title: "Forums", content: "Lorem ipsum dolor sit amet" },
    { title: "Study rooms", content: "Lorem ipsum dolor sit amet" },
    { title: "Notes", content: "Lorem ipsum dolor sit amet" },
  ];
  return (
          <Accordion 
            dataArray={dataArray} 
            expanded={0} 
            renderHeader={_renderHeader}
          />
  );
}
const styles = StyleSheet.create({
  baseText: {
    backgroundColor: "white", 
    color: 'red'
  }
});
