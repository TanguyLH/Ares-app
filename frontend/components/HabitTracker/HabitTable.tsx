import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HabitRow from "@/components/HabitTracker/HabitRow";
import ButtonAddHabit from "@/components/HabitTracker/ButtonAddHabit";

export default function HabitTable({ habitDataTable, updateHabit, deleteHabit, addHabit }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Name</Text>
        <Text style={styles.headerTopBarText}>Description</Text>
      </View>
      <FlatList
        data={habitDataTable}
        renderItem={({ item }) => (
          <HabitRow 
            habit={item} 
            updateHabit={updateHabit} 
            deleteHabit={deleteHabit} 
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <ButtonAddHabit addHabit={addHabit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerTopBar: {
    backgroundColor: "#85C1E9",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  headerTopBarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: "center",
  },
});