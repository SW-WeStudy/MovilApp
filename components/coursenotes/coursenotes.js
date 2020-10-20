import { Icon, List, ListItem, Left, Body,Button} from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { getNotes } from "../helper";
import { useEffect, useState } from "react";

export default function CourseNotes(props) {
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    let getdata = async () => {
      let datas = await getNotes(props.id);
      const co = [];
      datas.forEach((c, i) => {
        co.push(
          <ListItem key={"note-" + i} icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon name="sticky-note" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text>{c.content}</Text>
            </Body>
          </ListItem>
        );
      });
      setnotes(co);
    };
    getdata();
  }, []);
  return (
    <View>
      <List>{notes}</List>
    </View>
  );
}
