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
      <HabitTable data={DATAS}/>
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
