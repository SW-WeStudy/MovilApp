import { Icon, List, ListItem, Left, Body, Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { getForums } from "../helper";
import { useEffect, useState } from "react";

export default function CourseForums(props) {
  const [forums, setforums] = useState([]);
  useEffect(() => {
    let getdata = async () => {
      let datas = await getForums(props.id);
      const co = [];
      datas.forEach((c, i) => {
        co.push(
          <ListItem key={"note-" + i} icon>
            <Left>
              <Button style={{ backgroundColor: "#5E90F2" }}>
                <Icon name="comment" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text style={{flexWrap:'wrap'}}>{c.name}</Text>
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
        <List>
        {forums.length > 0 ? (
          forums
        ) : (
          <ListItem key={"note-default"} icon>
            <Text>No hay foros disponibles</Text>
          </ListItem>
        )}
      </List>
    </View>
  );
}
