import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import HabitTable from "@/components/HabitTracker/HabitTable";

const DATAS = [
  {"id": 1,"name": "sleep 8h", "objectiveRelated": "have a better sleep"},
  {"id": 2,"name": "cold shower", "objectiveRelated": "have more energy"},
  {"id": 3,"name": "gym", "objectiveRelated": "become muscular"},
  {"id": 4,"name": "clean my room", "objectiveRelated": "have a prettier room"},
];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HabitTable data={DATAS}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
