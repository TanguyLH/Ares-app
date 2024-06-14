import {Habit} from '@/Dtos/Habit';
import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import HabitTable from "@/components/HabitTracker/HabitTable";
import { useState } from 'react';


const datas :  Habit[] = [
  { "id": 1, "name": "sleep 8h", "description": "have a better sleep" },
  { "id": 2, "name": "cold shower", "description": "have more energy" },
  { "id": 3, "name": "gym", "description": "become muscular" },
  { "id": 4, "name": "clean my room", "description": "have a prettier room" },
];
export default function TabOneScreen() {
  //const [habitDataTable, setHabitDataTable] = useState(fetch("http://localhost:8089/api/v1/habits"))

  const [data, setData] = useState<Habit[]>([]);

  return (
    <View style={styles.container}>
      <HabitTable data={datas} />
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
