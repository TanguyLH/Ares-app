import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
  @IsNotEmpty()
  @IsString()
  @Length(4, 20)
  username!: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'StrongPassword123', description: 'The password of the user' })
  @IsNotEmpty()
  @IsString()
  @Length(6, 100)
  password!: string;
}
