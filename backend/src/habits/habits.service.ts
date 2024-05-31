import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habit } from '@/entities/habit.entity';

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private readonly habitRepository: Repository<Habit>,
  ) {}

  async create(createHabitDto: CreateHabitDto): Promise<Habit> {
    const habit = this.habitRepository.create(createHabitDto);
    return this.habitRepository.save(habit);
  }

  async findAll(): Promise<Habit[]> {
    return this.habitRepository.find();
  }

  async findOne(id: number): Promise<Habit> {
    const habit = await this.habitRepository.findOneBy({id});
    if (!habit) {
      throw new NotFoundException('Habit with ID ${id} not found');
    }
    return habit;
  }

  async update(id: number, updateHabitDto: UpdateHabitDto): Promise<Habit> {
    let habit = await this.habitRepository.findOneBy({id});
    if (!habit) {
      throw new NotFoundException('Habit with ID ${id} not found');
    }
    const updatedHabit = this.habitRepository.save({...habit, ...updateHabitDto});
    return updatedHabit;
  }

  async remove(id: number): Promise<void> {
    const result =await this.habitRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Habit with ID ${id} not found');
    }
  }
}