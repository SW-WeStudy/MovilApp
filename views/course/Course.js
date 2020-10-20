import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Content, Accordion } from "native-base";
export default function Course({route,navigation}) {
    const dataArray = [
        { title: "First Element", content: <Text>asd</Text> },
        { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
      ];
    return (
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
          <Text>{route.params.course_id}</Text>
        </Content>
    )
}