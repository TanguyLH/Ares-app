import { Injectable } from '@nestjs/common';
import { CreateHabitsSheetDto } from './dto/create-habits-sheet.dto';
import { UpdateHabitsSheetDto } from './dto/update-habits-sheet.dto';
import { HabitsSheet } from 'src/entities/habits.sheet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabitsSheetService {
  constructor(
    @InjectRepository(HabitsSheet)
    private habitsSheetRepository: Repository<HabitsSheet>,
  ) {}

  async create(createHabitSheetDto: CreateHabitsSheetDto) : Promise<HabitsSheet | null> {
    return this.habitsSheetRepository.create({
        ownerName: createHabitSheetDto.ownerName
    });
  }

  async findAll() : Promise<HabitsSheet[]> {
    return await this.habitsSheetRepository.find();
  }

  async findOne(id: number) : Promise<HabitsSheet | null> {
    return await this.habitsSheetRepository.findOneBy({ id });
  }

  async update(id: number, updateHabitsSheetDto: UpdateHabitsSheetDto) : Promise<HabitsSheet | null> {
    return await this.habitsSheetRepository.save({id: id, name: updateHabitsSheetDto.ownerName});
  }

  async remove(id: number) : Promise<void> {
    await this.habitsSheetRepository.delete(id);
  }
}
