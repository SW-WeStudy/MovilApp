import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CourseTitle (props) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.date}>{props.date}</Text>
        </View>
    )
};

CourseTitle.defaultProps = {
    title: 'Software Architecture',
    date: '8-oct'
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    text: {
        color: '#5E90F2',
        fontSize: 32,
        textAlign: 'center',
        borderBottomColor: '#5E90F2',
        borderBottomWidth: 4,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20
    },
    date: {
        color: '#5E90F2',
        fontSize: 28,
        textAlign: 'left'
    }
});

export default CourseTitle;