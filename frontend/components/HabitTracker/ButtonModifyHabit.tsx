import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HabitForm from '@/components/HabitTracker/HabitForm';

interface ButtonModifyHabitProps {
  habit: any; // Replace with specific type if available
  updateHabit: (id: number, updatedHabit: any) => void;
}

export default function ButtonModifyHabit({ habit, updateHabit }: ButtonModifyHabitProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle the visibility of the form
  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      {/* Render the HabitForm if isFormVisible is true */}
      {isFormVisible && (
        <HabitForm
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
          habit={habit}
          onSaveFunction={updateHabit}
        />
      )}
      {/* Render the edit icon button when form is not visible */}
      {!isFormVisible && (
        <TouchableOpacity onPress={toggleFormVisibility} style={styles.iconButton}>
          <Icon name="edit" size={20} color="#4CAF50" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10, // Spacing between icons
  },
});
