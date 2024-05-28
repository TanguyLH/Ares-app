import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitDto {
  @ApiProperty({ example: 'Exercise', description: 'The name of the habit' })
  name: string;

  @ApiProperty({ example: 'Daily morning exercise', description: 'The description of the habit' })
  description: string;

  @ApiProperty({ example: 1, description: 'The ID of the habit sheet' })
  habitSheetId: number;

  @ApiProperty({ example: 1, description: 'The ID of the user' })
  userId: number;
}