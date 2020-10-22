import React ,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { onChange } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';


function AddResource ({title, addResource}) {

    const [text,setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.header}>
            <TextInput placeholder="Add a resource..." style={styles.input}
            onChangeText={onChange} />
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