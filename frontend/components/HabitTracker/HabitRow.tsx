import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import ButtonModifyHabit from '@/components/HabitTracker/ButtonModifyHabit';
import axios from 'axios';

export default function HabitRow({ habit, updateHabit, deleteHabit }: any) {

  // Handler for deleting a habit
  const handleDelete = () => {
    removeHabit(habit.id);
    console.log('Deleted habit:', habit);
  };
  const removeHabit = async (habitId: number) => {
    try {
      const response = await axios.delete(`http://localhost:8089/api/v1/habit/${habitId}`);
      deleteHabit(habit.id);
    } catch (error) {
      console.error('Error updating habit', error);
    }
  };

  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{habit.name}</Text>
      <Text style={styles.cell}>{habit.description}</Text>
      <ButtonModifyHabit habit={habit} updateHabit={updateHabit} />
      <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
        <Icon name="trash" size={20} color="#F44336" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Vertically center items
    padding: 15,
    backgroundColor: "#F0F8FF",
    borderBottomWidth: 1,
    borderBottomColor: "#d1e7f1",
  },
  cell: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    paddingHorizontal: 5,
  },
  iconButton: {
    marginLeft: 10, // Space between icons
  },
});
