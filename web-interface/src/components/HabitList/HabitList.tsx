import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HabitDto } from '@/DTOs/HabitDto';

const HabitList: React.FC = () => {
  const [habits, setHabits] = useState<HabitDto[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get<HabitDto[]>('${process.env.REACT_APP_BACKEND}/api/v1/habits');
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div>
      <h2>Habits</h2>
      <ul>
        {habits.map(habit => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;