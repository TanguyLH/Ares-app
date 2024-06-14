import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function FormButtonSave({isFormVisible, setIsFormVisible }:any) {
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }
    return (
        <TouchableOpacity onPress={toggleFormVisibility} style={styles.button}>
            <Text style={styles.buttonText}>Add Habit</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6AB7E2',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
