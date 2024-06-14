import {Habit} from '@/Dtos/Habit';
import React from 'react';
import {StyleSheet} from 'react-native';


import {Text, View} from "react-native";
export default function HabitRow({habit} : any) {
  return (
      <View style={styles.row}>
        <Text style={styles.cell}>{habit.name}</Text>
        <Text style={styles.cell}>{habit.description}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }
});
