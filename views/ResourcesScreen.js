import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Dimensions, Alert} from 'react-native';

// Components
import Header from '../components/Header'
import Address from '../components/Address'
import CourseTitle from '../components/CourseTitle';
import ListResource from '../components/ListResource';
import AddResource from '../components/AddResource';
import { getResources, createResource, deleteResource } from '../components/helper';

const { height } = Dimensions.get( 'window' );


function ResourcesScreen (props ) {  //Route

    const [data, setData] = useState([]);
    const [resources, setResources] = useState([])

    const removeResource = (id) => {
      //  if(props.rol=='Admin'){   //route.rol
            Alert.alert('Warning', 'The resource will not be visible for the other users', {text: 'Got it'});
            deleteResource(id); //Remove resource drom list

            //GET the data again
            getDataResources();
      //  }
    }

    const addResource = (content) => {
        if(!content){
            Alert.alert('Error', 'Please enter a title for the resource', {text: 'OK'});
        } else {
                var text = '{' +
                '"idUser":'+route.uid+' , "idClase":'+route.id_course+', "content":"'+content+'"}';
                var newResource = JSON.parse(text);
                createResource(newResource); //ADD Resource

                //GET the data again
                getDataResources();
        }
    }
    let getDataResources = async (user_id) => {
        let dataQ = await getResources(user_id);
        setData(dataQ);
        const co = [];
        dataQ.forEach((c) => {
          co.push(c)
        });
        co.reverse();
        setResources(co);
      };

    useEffect(() => {
          getDataResources(route.uid);
    }, []);

    return (
        <ScrollView
            style={{ flex: 1}}
            contentContainerStyle = {styles.scrollview}
            >
            <View style={styles.header}>

                <Address title={props.name} />  //route.address_name
                <CourseTitle title={props.name}/>   //route.course_name
                <AddResource  addResource={addResource}/>
                <FlatList
                    data={resources}
                    renderItem={({ item }) => (
                    <ListResource
                        id = {item.id}
                        idClase = {item.idClase}
                        idUser = {item.idUser}
                        content = {item.content}
                        deleteResource = { removeResource }
                    />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    scrollview: {
        flexGrow: 1,
        backgroundColor: '#eee'
    }
})

export default ResourcesScreen;
