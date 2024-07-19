import { Module } from '@nestjs/common';
import { HabitRecurrencesService } from './habit-recurrences.service';
import { HabitRecurrencesController } from './habit-recurrences.controller';

@Module({
  controllers: [HabitRecurrencesController],
  providers: [HabitRecurrencesService],
})
export class HabitRecurrencesModule {}
