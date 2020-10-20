import { Icon, List, ListItem, Left, Body, Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { getStudyRooms } from "../helper";
import { useEffect, useState } from "react";
export default function CourseStudy() {
  const [forums, setforums] = useState([]);
  useEffect(() => {
    let getdata = async () => {
      let datas = await getStudyRooms();
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
      setforums(co);
    };
    getdata();
  }, []);
  return (
    <View>
      <List>{forums}</List>
    </View>
  );
}
