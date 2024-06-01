import { DataSource } from 'typeorm';
import { User } from '../src/entities/user.entity';
import { Habit } from '../src/entities/habit.entity';
import { HabitsSheet } from '../src/entities/habits-sheet.entity';
import { InitialSchema1716896539621 } from './migrations/1716896539621-initial_schema';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ares',
  password: 'ArEsPaSsWoRd',
  database: 'habits',
  entities: [User, Habit, HabitsSheet],
  migrations: [InitialSchema1716896539621],
  synchronize: false,
  logging: false,
});