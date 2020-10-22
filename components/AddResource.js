import React ,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { onChange } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createResource } from "./helper";

function AddResource ({title,uid,id_course,refresh}) {

    const [text,setText] = useState('');

    const onChange = textValue => setText(textValue);

    const addResource = () => {
        if(text == ""){
            Alert.alert(
                "Error",
                "The resource must have content",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: true }
              );
        } else {
            let fun = async () => {
                let querycreate= `{idUser:"${uid}",idClase:${id_course},content:"${text}"}`
                await createResource(querycreate); //ADD Resource
                Alert.alert(
                    "Info",
                    "The resource have been saved",
                    [
                      { text: "OK", onPress: () => refresh(id_course) }
                    ],
                    { cancelable: true }
                  );
                //GET the data again
            }
            fun();

        }
    }
    return (
        <View style={styles.header}>
            <TextInput placeholder="Add a resource..." style={styles.input}
            onChangeText={onChange} value={text}/>
            <TouchableOpacity style = {styles.btn} onPress={() => addResource(text)}>
                <Text style={styles.btnText}> <Icon name="plus" size={20}/> Add Resource</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#5E90F2',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default AddResource;