import { Icon, List, ListItem, Left, Body, Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { getStudyRooms } from "../helper";
import { useEffect, useState } from "react";
export default function CourseStudy(props) {
  const [study, setstudy] = useState([]);
  useEffect(() => {
    let getdata = async () => {
      let datas = await getStudyRooms(props.id);
      const co = [];
      datas.forEach((c, i) => {
        co.push(
          <ListItem key={"note-" + i} icon>
            <Left>
              <Button style={{ backgroundColor: "#5E90F2" }}>
                <Icon name="video-camera" type="FontAwesome" />
              </Button>
            </Left>
            <Body style={{height:null}}>
                <Text style={{marginRight: 50}}>{c.name}</Text>
            </Body>
          </ListItem>
        );
      });
      setstudy(co);
    };
    getdata();
  }, []);
  return (
    <View>
      <List>{study.length>0?study:<Text>No study rooms created</Text>}</List>
    </View>
  );
}
