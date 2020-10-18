import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ListResource ({resource}) {
    return (
        <TouchableOpacity style={styles.listResource}>
            <View style={styles.listResourceView}>
                <Image source={{uri: 'https://source.unsplash.com/1600x900/?nature,water'}} style={styles.img}/>
                <Text style={styles.listResourceText}>{resource.text}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listResource: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listResourceView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
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