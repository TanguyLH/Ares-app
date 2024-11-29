import { Module } from '@nestjs/common';
import { HabitCompletionsService } from './habit-completions.service';
import { HabitCompletionsController } from './habit-completions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitCompletion } from '@/entities/habit-completion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HabitCompletion])],
  controllers: [HabitCompletionsController],
  providers: [HabitCompletionsService],
  exports: [HabitCompletionsService]
})
export class HabitCompletionsModule {}
