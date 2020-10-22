import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Address ({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

Address.defaultProps = {
    title: 'My Resources/ Software Architecture/ 8-oc',
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#eee',
    },
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
    },
});

export default Address;