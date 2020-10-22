import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CourseTitle (props) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

CourseTitle.defaultProps = {
    title: 'Software Architecture',
    date: '8-oct'
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    text: {
        color: '#5E90F2',
        fontSize: 32,
        textAlign: 'center',
        borderBottomColor: '#5E90F2',
        borderBottomWidth: 4,
       
    },
    date: {
        color: '#5E90F2',
        fontSize: 28,
        textAlign: 'left'
    }
});

export default CourseTitle;