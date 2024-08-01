import { Habit } from '../../src/entities/habit.entity';
import { User } from '../../src/entities/user.entity';
import { HabitRecurrence } from '../../src/entities/habit-recurrence.entity';

export const habitSeedData: Array<{
  name: string;
  description: string;
  author: number;
  isDaily: boolean;
  recurrences?: { date: Date }[];
}> = [
  {
    name: 'Exercise',
    description: 'Go for a run.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Read',
    description: 'Read a book for 30 minutes.',
    author: 2,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-01') },
      { date: new Date('2023-06-03') },
      { date: new Date('2023-06-05') },
    ],
  },
  {
    name: 'Drink Water',
    description: 'Drink 8 glasses of water.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Meditate',
    description: 'Meditate for 10 minutes.',
    author: 3,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-02') },
      { date: new Date('2023-06-04') },
      { date: new Date('2023-06-06') },
    ],
  },
  {
    name: 'Cook a Healthy Meal',
    description: 'Prepare a nutritious meal.',
    author: 2,
    isDaily: true,
  },
  {
    name: 'Write in Journal',
    description: 'Write down thoughts and feelings.',
    author: 3,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-01') },
      { date: new Date('2023-06-03') },
      { date: new Date('2023-06-05') },
    ],
  },
  {
    name: 'Practice Gratitude',
    description: 'Write down three things you\'re grateful for.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Learn Something New',
    description: 'Spend 30 minutes learning a new skill.',
    author: 2,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-02') },
      { date: new Date('2023-06-04') },
      { date: new Date('2023-06-06') },
    ],
  },
  {
    name: 'Yoga',
    description: 'Do a yoga session.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Listen to Podcast',
    description: 'Listen to an educational podcast.',
    author: 3,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-01') },
      { date: new Date('2023-06-03') },
      { date: new Date('2023-06-05') },
    ],
  },
  {
    name: 'Stretch',
    description: 'Stretch your muscles.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Practice Mindfulness',
    description: 'Practice being present in the moment.',
    author: 3,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-02') },
      { date: new Date('2023-06-04') },
      { date: new Date('2023-06-06') },
    ],
  },
  {
    name: 'Take a Walk',
    description: 'Take a walk outdoors.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Review Goals',
    description: 'Review your short-term and long-term goals.',
    author: 2,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-01') },
      { date: new Date('2023-06-03') },
      { date: new Date('2023-06-05') },
    ],
  },
  {
    name: 'Practice a Musical Instrument',
    description: 'Practice playing a musical instrument.',
    author: 3,
    isDaily: true,
  },
  {
    name: 'Call a Friend',
    description: 'Call a friend or family member.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Plan Tomorrow',
    description: 'Plan your tasks and schedule for tomorrow.',
    author: 2,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-02') },
      { date: new Date('2023-06-04') },
      { date: new Date('2023-06-06') },
    ],
  },
  {
    name: 'Declutter',
    description: 'Spend 15 minutes decluttering a space.',
    author: 3,
    isDaily: true,
  },
  {
    name: 'Do a Puzzle',
    description: 'Solve a puzzle.',
    author: 1,
    isDaily: true,
  },
  {
    name: 'Watch a Documentary',
    description: 'Watch an informative documentary.',
    author: 2,
    isDaily: false,
    recurrences: [
      { date: new Date('2023-06-01') },
      { date: new Date('2023-06-03') },
      { date: new Date('2023-06-05') },
    ],
  },
];