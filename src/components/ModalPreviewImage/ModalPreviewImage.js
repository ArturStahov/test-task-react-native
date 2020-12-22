import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';


export default function ModalPreviewImage({ imageUrl, onCloseModal }) {
    return (

        <View style={styles.ImageBox}>

            <Image
                style={styles.Image}
                source={{
                    uri: imageUrl,
                }}

            />
            <Button title='close' color='#844394' onPress={() => onCloseModal()} />
        </View>
    )
}

const styles = StyleSheet.create({
    ImageBox: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0

    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
    }
});


