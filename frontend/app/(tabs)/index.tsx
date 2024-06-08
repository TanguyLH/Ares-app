import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import HabitTable from "@/components/HabitTracker/HabitTable";
import { useState } from 'react';

const DATAS = [
  { "id": 1, "name": "sleep 8h", "objectiveRelated": "have a better sleep" },
  { "id": 2, "name": "cold shower", "objectiveRelated": "have more energy" },
  { "id": 3, "name": "gym", "objectiveRelated": "become muscular" },
  { "id": 4, "name": "clean my room", "objectiveRelated": "have a prettier room" },
];
export default function TabOneScreen() {
  const [habitDataTable, setHabitDataTable] = useState(fetch("http://localhost:8089/api/v1/habits"))

  const [data, setData] = useState<Habit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get('http://localhost:8089/api/v1/habits');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HabitTable data={DATAS} />
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
