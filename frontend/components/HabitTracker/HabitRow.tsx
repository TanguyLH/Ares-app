import {Habit} from '@/Dtos/Habit';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import ButtonModifyHabit from '@/components/HabitTracker/ButtonModifyHabit'


export default function HabitRow({ habit, updateHabit, deleteHabit }: any) {

  const handleDelete = () => {
    deleteHabit(habit.id)
    console.log('Delete', habit);
  };
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{habit.name}</Text>
        <Text style={styles.cell}>{habit.description}</Text>
        <ButtonModifyHabit habit={habit} updateHabit={updateHabit}></ButtonModifyHabit>
        <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
          <Icon name="trash" size={20} color="#F44336" />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Centre le contenu verticalement
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
  iconContainer: {
    flexDirection: 'row', // Alignement horizontal des icônes
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10, // Espacement entre les icônes
  },
});
