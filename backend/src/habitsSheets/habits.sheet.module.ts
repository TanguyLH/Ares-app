import { Module } from '@nestjs/common';
import { HabitsSheetService } from './habits.sheet.service';
import { HabitsSheetController } from './habits.sheet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitsSheet } from '../entities/habits.sheet.entity'

@Module({
  imports: [TypeOrmModule.forFeature([HabitsSheet])],
  controllers: [HabitsSheetController],
  providers: [HabitsSheetService],
})
export class HabitsSheetModule {}
