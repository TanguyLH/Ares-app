import { useEffect, useState } from 'react';
import { Habit } from '@/Dtos/Habit';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from '@/components/Themed';
import HabitTable from "@/components/HabitTracker/HabitTable";

const API_URL = 'http://localhost:8089/api/v1/habit';

export default function TabOneScreen() {
  const [data, setData] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
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

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HabitTable data={data} />
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
