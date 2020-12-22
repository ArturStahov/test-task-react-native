import React from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native';


export default function ImageThumb({ item, onOpenModal }) {
    return (



        <TouchableNativeFeedback onPress={() => onOpenModal(item.urls.regular)}>
            <Image
                style={styles.ListItem}
                source={{
                    uri: item.urls.thumb,
                }}
            />
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({

    ListItem: {
        width: '100%',
        height: 100,
        marginBottom: 10
    },

});


