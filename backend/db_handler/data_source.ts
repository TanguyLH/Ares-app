import { DataSource } from 'typeorm';
import { User } from '../src/entities/user.entity';
import { Habit } from '../src/entities/habit.entity';
import { InitialSchema1716896539621 } from './migrations/1716896539621-initial_schema';
import { HabitCompletion } from '../src/entities/habit-completion.entity';
import { HabitRecurrence } from '../src/entities/habit-recurrence.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ares',
  password: 'ArEsPaSsWoRd',
  database: 'habits',
  entities: [User, Habit, HabitCompletion, HabitRecurrence],
  migrations: [InitialSchema1716896539621],
  synchronize: false,
  logging: false,
});