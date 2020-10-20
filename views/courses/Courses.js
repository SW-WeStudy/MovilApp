import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Item,
  Input,
} from "native-base";
import * as Font from "expo-font";
// components
import CourseCard from "../../components/coursecard/CourseCard";
import { getCourses } from "../../components/helper";
// import data from '../../data/data.json'

export default function Course() {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let getdata = async () => {
      let datas = await getCourses();
      setData(datas);
      // setData(datas)
      const co = [];
      datas.forEach((c, i) => {
        co.push(<CourseCard data={c} key={"course - " + i} />);
      });
      setCourses(co);
    };
    getdata();
  }, []);

  //   console.log(courses);
  return (
    
      <Content>{courses}</Content>
    
  );
}
