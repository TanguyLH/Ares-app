import { DataSource } from 'typeorm';
import { habitSeedData } from './HabitSeedData';
import { Habit } from '../../src/entities/habit.entity';
import { User } from '../../src/entities/user.entity';
import { HabitRecurrence } from '../../src/entities/habit-recurrence.entity';
import { HabitCompletion } from '../../src/entities/habit-completion.entity';

async function seedDatabase() {
  const SeedDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ares',
    password: 'ArEsPaSsWoRd',
    database: 'habits',
    entities: [
      Habit,
      User,
      HabitRecurrence,
	  HabitCompletion,
    ],
    synchronize: true,
    entitySkipConstructor: true,
  });

  await SeedDataSource.initialize();
  
  console.log('Seeding database...');
  
  // Insert seed data
  for (const habitData of habitSeedData) {
    const user = await SeedDataSource.getRepository(User).findOneBy({ id: habitData.author });
    
    if (!user) {
      continue;
    }

    const habit = new Habit();
    habit.name = habitData.name;
    habit.description = habitData.description;
    habit.isDaily = habitData.isDaily;
    habit.author = user;
    await SeedDataSource.getRepository(Habit).save(habit);

    if (!habitData.isDaily && habitData.recurrences) {
      for (const recurrenceData of habitData.recurrences) {
        const recurrence = new HabitRecurrence();
        recurrence.date = recurrenceData.date;
        recurrence.habit = habit;
        await SeedDataSource.getRepository(HabitRecurrence).save(recurrence);
      }
    }
  }

  await SeedDataSource.destroy();
}

seedDatabase().catch(error => {
  console.error('Error connecting to database:', error);
});