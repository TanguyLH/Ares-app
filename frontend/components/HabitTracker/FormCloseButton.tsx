import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assurez-vous que la bibliothèque est installée

export default function FormCloseButton({ isFormVisible, setIsFormVisible }: any) {
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleFormVisibility} style={styles.button}>
                <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
    button: {
        backgroundColor: '#6AB7E2',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
});
