import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { View, TextInput, Button } from 'react-native';


export default function SearchForm({ onSubmit }) {
    const [inputValue, setInputValue] = useState('')

    const handlerSubmit = () => {
        onSubmit(inputValue)
        setInputValue('')
    }

    return (
        <View style={styles.Container}>
            <TextInput style={styles.Input} value={inputValue} onChangeText={setInputValue}
                placeholder='input query...' placeholderTextColor='#C8A9D0' autoCorrect={false} autoCapitalize='none' />
            <Button title='Go...' color='#844394' onPress={handlerSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',

        height: 70,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    Input: {
        width: '70%',
        height: 40,
        backgroundColor: '#300C21',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#73365A',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 14,
        color: '#fff',

        paddingLeft: 5,
        marginRight: 10,
    },

})
