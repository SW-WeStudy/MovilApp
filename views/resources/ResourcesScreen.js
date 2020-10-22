import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Dimensions, Alert} from 'react-native';

// Components
import Header from '../../components/Header'
import Address from '../../components/Address'
import CourseTitle from '../../components/CourseTitle';
import ListResource from '../../components/ListResource';
import AddResource from '../../components/AddResource';
import { getResources, createResource, deleteResource } from '../../components/helper';

const { height } = Dimensions.get( 'window' );


function ResourcesScreen (props) {  //Route

    const [data, setData] = useState([]);
    const [resources, setResources] = useState([])

    const removeResource = (id) => {
      //  if(props.rol=='Admin'){   //route.rol
            (async () =>{
                await deleteResource(id).then(()=>{
                    Alert.alert(
                        "Info",
                        "The resource have been delete",
                        [
                          { text: "OK", onPress: () => getDataResources(props.route.params.id_course) }
                        ],
                        { cancelable: true }
                      );
                }); //Remove resource drom list
            })();
            
            //GET the data again
            
      //  }
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
          getDataResources(props.route.params.id_course);
    }, []);

    return (
        <ScrollView
            style={{ flex: 1}}
            contentContainerStyle = {styles.scrollview}
            >
            <View style={styles.header}>
                <Address title={props.route.params.address_name} />
                <CourseTitle title={props.route.params.course_name}/>
                <AddResource  refresh={getDataResources} uid={props.route.params.uid} id_course={props.route.params.id_course}/>
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
