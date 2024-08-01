import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitCompletionDto {
  @ApiProperty({ example: 1, description: 'The ID of the habit you want to create' })
  habitId!: number;

  @ApiProperty({ example: '2024-06-01T12:00:00Z', description: 'The date and time of completion' })
  date!: Date;

  @ApiProperty({ example: true, description: 'Whether the habit was completed' })
  completed!: boolean;

  @ApiProperty({ example: 1, description: 'The ID of the user who completed the habit' })
  userId!: number;
}