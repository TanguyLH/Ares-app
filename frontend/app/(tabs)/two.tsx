import {Habit} from '@/Dtos/Habit';
import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import HabitTable from "@/components/HabitTracker/HabitTable";
import { useState } from 'react';

export default function TabTwoScreen() {
   //const [habitDataTable, setHabitDataTable] = useState(fetch("http://localhost:8089/api/v1/habits"))

   const [habitDataTable, setHabitDataTable] = useState([
    { "id": 1, "name": "sleep 8h", "description": "have a better sleep" },
    { "id": 2, "name": "cold shower", "description": "have more energy" },
    { "id": 3, "name": "gym", "description": "become muscular" },
    { "id": 4, "name": "clean my room", "description": "have a prettier room" },
  ]);

  const updateHabitDataTable = (oldHabitId: number, updatedHabit: any) => {
    setHabitDataTable(prevHabitData =>
      prevHabitData.map(habit =>
        habit.id === oldHabitId ? { ...habit, ...updatedHabit } : habit
      )
    );
  };
  const deleteHabit = (id: number) => {
    setHabitDataTable(prevHabitData =>
      prevHabitData.filter(habit => habit.id !== id)
    );
  };

  const addHabit = (habit: any) => {
    const newId = habitDataTable.length ? habitDataTable[habitDataTable.length - 1].id + 1 : 1;
    const newHabit = { ...habit, id: newId };
    setHabitDataTable(prevHabitData => [...prevHabitData, newHabit]);
  };

   return (
     <View style={styles.container}>
       <HabitTable habitDataTable={habitDataTable} updateHabit={updateHabitDataTable} 
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
   }
 });
 