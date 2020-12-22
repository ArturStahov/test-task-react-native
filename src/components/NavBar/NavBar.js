import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function NavBar({ title }) {

    return (
        <View style={styles.NavBar}>
            <Text style={styles.Title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBar: {
        position: 'relative',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#73365A',
    },
    Title: {
        fontSize: 22,
        color: '#D6D1D4',
        fontWeight: 'bold',

    }
})



