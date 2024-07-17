import { DataSource } from 'typeorm';
import { habitSeedData } from './HabitSeedData';
import { Habit } from '../../src/entities/habit.entity';
import { User } from '../../src/entities/user.entity';
import { HabitsSheet } from '../../src/entities/habits-sheet.entity';

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
		],
		synchronize: true,
		entitySkipConstructor: true,
	});
	await SeedDataSource.initialize();
	
	console.log('Seeding database...');
	
	// Insert seed data
	for (const habitData of habitSeedData) {
		const user = await SeedDataSource.getRepository(User).findOneBy({ id: habitData.authorId });
		
		if (!user) {
			continue;
		}

		const habit = new Habit();
		habit.name = habitData.name;
		habit.description = habitData.description;
		habit.authorId = user;
		await SeedDataSource.getRepository(Habit).save(habit).catch(error => {
			console.error("Error inserting seed data:", error);
		});
		
	}

	await SeedDataSource.destroy();
}

seedDatabase().catch(error => {
	console.error('Error connecting to database:', error);
});