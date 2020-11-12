import { Icon, List, ListItem, Left, Body, Button ,Right} from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { getNotes,deleteNote} from "../helper";
import { useEffect, useState } from "react";

export default function CourseNotes(props) {
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    let getdata = async () => {
      let datas = await getNotes(props.id);
      const co = [];
      datas.forEach((c, i) => {
        console.log(c)
        co.push(
          <ListItem key={"note-" + i} icon>
            <Left>
              <Button style={{ backgroundColor: "#5E90F2" }}>
                <Icon name="sticky-note" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text>{c.content}</Text>
            </Body>
            {/* <Right>
              <Button onPress={() =>{
                (async () =>{
                  let d =await deleteNote(c.id_note)
                  console.log(d)
                })()
              }}>
                <Icon name="trash-o" type="FontAwesome" />
              </Button>
            </Right> */}
          </ListItem>
        );
      });
      setnotes(co);
    };
    getdata();
  }, []);
  return (
    <View>
      <List>
        {notes.length > 0 ? (
          notes
        ) : (
          <ListItem key={"note-default"} icon>
            <Text>No hay notas disponibles</Text>
          </ListItem>
        )}
      </List>
    </View>
  );
}
