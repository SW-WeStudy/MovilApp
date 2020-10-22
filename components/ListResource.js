import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ListResource (props) {
    return (
        <TouchableOpacity style={styles.listResource}>
            <View style={styles.imgView}>
                <Image source={{uri: 'https://source.unsplash.com/1600x900/?nature,water'}} style={styles.img}/>
                <View style={styles.listResourceView}>
                    <Text style={styles.listResourceText}>{props.content.split(" ")[0]}</Text>
                    <Icon name="remove" size={20} color="firebrick" onPress={() => props.deleteResource(props.id)}/>
                </View>
                <Text style={styles.listResourceText}> {props.content}</Text>
            </View>
        </TouchableOpacity>
    )
}
const firstWord = (content) => {
    var firstWord = content.split(" ");
    return firstWord[0];
}

const styles = StyleSheet.create({
    listResource: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listResourceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgView: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    listResourceText: {
        fontSize: 18,
        backgroundColor: '#eee'
    },
    img: {
        width: 300,
        height: 100,
        opacity: .88
    }
});

export default ListResource;