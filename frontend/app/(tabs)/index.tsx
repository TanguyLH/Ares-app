import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import HabitTable from '@/components/HabitTracker/HabitTable';

// Définir les types des données
interface Habit {
  id: number;
  name: string;
  description: string;
  isDaily: boolean;
  recurrences: number[];
}

export default function TabOneScreen() {
  // Initialiser habitDataTable comme un tableau vide d'objets Habit
  const [habitDataTable, setHabitDataTable] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour mettre à jour une habitude existante
  const updateHabitDataTable = (oldHabitId: number, updatedHabit: Habit) => {
    setHabitDataTable(prevHabitData =>
      prevHabitData.map(habit =>
        habit.id === oldHabitId ? { ...habit, ...updatedHabit } : habit
      )
    );
  };

  // Fonction pour supprimer une habitude par ID
  const deleteHabit = (id: number) => {
    setHabitDataTable(prevHabitData =>
      prevHabitData.filter(habit => habit.id !== id)
    );
  };

  // Fonction pour ajouter une nouvelle habitude
  const addHabit = (habit: Omit<Habit, 'id'>) => {
    const newId = habitDataTable.length ? habitDataTable[habitDataTable.length - 1].id + 1 : 1;
    const newHabit = { ...habit, id: newId };
    setHabitDataTable(prevHabitData => [...prevHabitData, newHabit]);
  };

  useEffect(() => {
    axios.get<Habit[]>('http://localhost:8089/api/v1/habit')
      .then(response => {
        setHabitDataTable(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message || 'An unexpected error occurred');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

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
