import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitsSheet } from '../entities/habits.sheet.entity'

@Module({
  imports: [TypeOrmModule.forFeature([HabitsSheet])],
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}
