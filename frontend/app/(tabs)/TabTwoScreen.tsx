import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HabitTable from "@/components/HabitTracker/HabitTable";

export default function TabTwoScreen() {
  // Initial state for habit data
  const [habitDataTable, setHabitDataTable] = useState([
    { id: 1, name: "Sleep 8h", description: "Have a better sleep" },
    { id: 2, name: "Cold Shower", description: "Have more energy" },
    { id: 3, name: "Gym", description: "Become muscular" },
    { id: 4, name: "Clean My Room", description: "Have a prettier room" },
  ]);

  // Function to update an existing habit
  const updateHabitDataTable = (oldHabitId: number, updatedHabit: any) => {
    setHabitDataTable(prevHabitData =>
      prevHabitData.map(habit =>
        habit.id === oldHabitId ? { ...habit, ...updatedHabit } : habit
      )
    );
  };

  // Function to delete a habit by ID
  const deleteHabit = (id: number) => {
    setHabitDataTable(prevHabitData =>
      prevHabitData.filter(habit => habit.id !== id)
    );
  };

  // Function to add a new habit
  const addHabit = (habit: any) => {
    const newId = habitDataTable.length ? habitDataTable[habitDataTable.length - 1].id + 1 : 1;
    const newHabit = { ...habit, id: newId };
    setHabitDataTable(prevHabitData => [...prevHabitData, newHabit]);
  };

  return (
    <View style={styles.container}>
      <HabitTable 
        habitDataTable={habitDataTable}
        updateHabit={updateHabitDataTable}
        deleteHabit={deleteHabit}
        addHabit={addHabit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
