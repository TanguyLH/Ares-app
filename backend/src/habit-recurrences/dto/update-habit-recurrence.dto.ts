import { PartialType } from '@nestjs/swagger';
import { CreateHabitRecurrenceDto } from './create-habit-recurrence.dto';

export class UpdateHabitRecurrenceDto extends PartialType(CreateHabitRecurrenceDto) {
}
