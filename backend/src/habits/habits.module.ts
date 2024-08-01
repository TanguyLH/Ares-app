import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from '../entities/habit.entity';
import { UsersModule } from 'src/users/users.module';
import { HabitCompletionsModule } from 'src/habit-completions/habit-completions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Habit]), UsersModule, HabitCompletionsModule],
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}
