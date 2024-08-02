import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import FormInputText from "@/components/HabitTracker/FormTextInput";
import FormButtonSave from "@/components/HabitTracker/FormButtonSave";
import FormCheckboxWithDays from "@/components/HabitTracker/FormCheckboxWithDays";
import FormCloseButton from "@/components/HabitTracker/FormCloseButton";
import axios from 'axios';

export default function HabitForm({ isFormVisible, setIsFormVisible, habit, onSaveFunction }:any) {
  const [habitForm, setHabitForm] = useState(() => ({
    name: habit ? habit.name : '',
    description: habit ? habit.description : '',
    isDaily: habit ? habit.isDaily : true,
    weekDays: habit ? habit.recurrences : [],
    authorId: '1',
  }));

  const handleChange = (field: string, value: any) => {
    setHabitForm({ ...habitForm, [field]: value });
  };

  const updateHabit = async (habitId: number) => {
    try {
      const response = await axios.patch(`http://localhost:8089/api/v1/habit/${habitId}`, habitForm);
    } catch (error) {
      console.error('Error updating habit', error);
    }
  };

  // Fonction pour ajouter un habit
  const addHabit = async () => {
    try {
      const response = await axios.post('http://localhost:8089/api/v1/habit', habitForm);
    } catch (error) {
      console.error('Error adding habit', error);
    }
  };

  // Fonction pour gérer l'enregistrement
  const handleSave = () => {
    if (habit && habit.id) {
      updateHabit(habit.id); // Mettre à jour un habit existant
      onSaveFunction(habit.id, habitForm);
    } else {
      addHabit(); // Ajouter un nouvel habit
      onSaveFunction(habitForm);
    }
  };
  return (
      <View>
        { isFormVisible && (
          <View style={styles.form}>
            <FormCloseButton isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}></FormCloseButton>
            <View style={styles.innerForm}>
              <FormInputText property="name" habitField={habitForm.name} updateHabitField={(value: any) => handleChange('name', value)}></FormInputText>
              <FormInputText property="description" habitField={habitForm.description} updateHabitField={(value: any) => handleChange('description', value)}></FormInputText>
              <FormCheckboxWithDays />
              <FormButtonSave isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} habitId={habit ? habit.id : null} habitForm={habitForm} onSaveFunction={handleSave}></FormButtonSave>
            </View>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    position: 'relative',
    bottom: 100,
    right: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  innerForm: {
    paddingTop: 20,
  },
});
