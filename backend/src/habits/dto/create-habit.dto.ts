import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitDto {
  @ApiProperty({ example: 'Exercise', description: 'The name of the habit' })
  name!: string;

  @ApiProperty({ example: 'Daily morning exercise', description: 'The description of the habit', required: false })
  description!: string;

  @ApiProperty({ example: true, description: 'Whether the habit is daily' })
  isDaily!: boolean;

  @ApiProperty({ example: [1, 2, 3], description: 'The days of the week the habit should be completed, if not daily', required: false })
  weekDays?: number[];

  @ApiProperty({ example: 1, description: 'The ID of the habit sheet' })
  habitSheetId!: number;

  @ApiProperty({ example: 1, description: 'The ID of the author' })
  authorId!: number;
}
