import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function FormButtonSave({isFormVisible, setIsFormVisible, habitId, habitForm, onSaveFunction }:any) {
    const toggleFormVisibilityAndSaveInDataTable = () => {
        setIsFormVisible(!isFormVisible);
        habitId? onSaveFunction(habitId, habitForm) : onSaveFunction(habitForm)
    }
    //TODO requete post
    return (
        <TouchableOpacity onPress={toggleFormVisibilityAndSaveInDataTable} style={styles.button}>
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
