import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header'
import Address from '../components/Address'
import CourseTitle from '../components/CourseTitle';
import ListResource from '../components/ListResource';

function CoursesScreen () {
    const [resources, setResources] = useState([
        {id: 123, text: 'Layered View'},
        {id: 345, text: 'Composition View'},
        {id: 567, text: 'Deploy View'},
        {id: 789, text: 'Components View'},
    ])

    return (
        <View style={styles.header}>
            <Header title="WeStudy"/>
            <Address />
            <CourseTitle />
            <FlatList data={resources} renderItem={({item}) => (
                <ListResource resource={item}/>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
})

export default CoursesScreen;
