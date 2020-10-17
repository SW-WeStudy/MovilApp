import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ListResource ({resource}) {
    return (
        <TouchableOpacity style={styles.listResource}>
            <View style={styles.listResourceView}>
                <Text style={styles.listResourceText}>{resource.text}</Text>
                <Icon name="remove" size={20} color="firebrick"/>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listResourceText: {
        fontSize: 18
    }
});

export default ListResource;