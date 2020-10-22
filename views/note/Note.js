import React, { Component,useState,useEffect } from "react";
import {Text,Alert} from 'react-native'
import { Container, Header, Content, Textarea, Form,Button,TextInput,Picker,Icon} from "native-base";
import {createNote,getCourses} from '../../components/helper'
export default Note = ({navigation}) =>{
    const [content, setcontent] = useState("")
    const [idcourse, setidcourse] = useState(0)
    const [coptions,setcoptions] = useState([]) 
    useEffect(() => {
      let getdata = async() =>{
        let courses = await getCourses();
        let c = [<Picker.Item label={"Choose course"} value={0} key={"option-default"}/>]
        courses.forEach((e) =>{
          c.push(<Picker.Item label={e.name} value={e.id_course} key={"option-"+e.id_course}/>)
        })
        setcoptions(c)
      }
      getdata()
    }, [])
    return (
      <Container>
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" onChangeText={(e) => setcontent(e)} value={content}/>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={idcourse}
                onValueChange={(v) =>setidcourse(v)}
              >
              {coptions}
              </Picker>
          </Form>
          <Button block onPress={() => {
            Alert.alert(
              "Do you want create the note?",
              "",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { 
                  text: "OK", 
                  onPress: async () => {
                    await createNote(content,idcourse)
                    navigation.navigate("Courses")
                  }
                }
              ],
              { cancelable: false }
            );
            } }>
            <Text style={{color:'white'}}>Save Note</Text>
          </Button>
        </Content>
      </Container>
    );
}