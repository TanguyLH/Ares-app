import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitRecurrenceDto {
  @ApiProperty({ example: 1, description: 'The ID of the habit' })
  habitId!: number;

  @ApiProperty({ example: '2024-06-01', description: 'The date for the recurrence (YYYY-MM-DD). Is of type Date' })
  date!: Date;
}