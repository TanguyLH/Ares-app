import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native';
import FormInputText from "@/components/HabitTracker/FormTextInput";
import FormButtonSave from "@/components/HabitTracker/FormButtonSave";
import FormCheckboxWithDays from "@/components/HabitTracker/FormCheckboxWithDays";
import FormCloseButton from "@/components/HabitTracker/FormCloseButton";

export default function HabitForm({ isFormVisible, setIsFormVisible, habit, onSaveFunction }:any) {
  const [habitForm, setHabitForm] = useState(() => ({
    name: habit ? habit.name : '',
    description: habit ? habit.description : '',
    days: habit ? habit.days : []
  }));
  const handleChange = (field: string, value: any) => {
    setHabitForm({ ...habitForm, [field]: value });
  };
  const handleSave = (habitId: number | null, habitForm: any) => {
    if (habitId) {
        // Update the habit
        onSaveFunction(habitId, habitForm);
    } else {
        // Add a new habit
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
