import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import { Text, View } from './Themed';
export default function HabitRow({habit}) {
  return (
      <View style={styles.row}>
        <Text style={styles.cell}>{habit.name}</Text>
        <Text style={styles.cell}>{habit.objectiveRelated}</Text>
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
