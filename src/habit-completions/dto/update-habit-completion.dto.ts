import { PartialType } from '@nestjs/swagger';
import { CreateHabitCompletionDto } from './create-habit-completion.dto';

export class UpdateHabitCompletionDto extends PartialType(CreateHabitCompletionDto) {}
