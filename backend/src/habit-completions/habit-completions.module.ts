import { Module } from '@nestjs/common';
import { HabitCompletionsService } from './habit-completions.service';
import { HabitCompletionsController } from './habit-completions.controller';

@Module({
  controllers: [HabitCompletionsController],
  providers: [HabitCompletionsService],
})
export class HabitCompletionsModule {}
