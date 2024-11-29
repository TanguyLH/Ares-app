import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHabitCompletionDto } from './dto/create-habit-completion.dto';
import { UpdateHabitCompletionDto } from './dto/update-habit-completion.dto';
import { HabitCompletion } from '../entities/habit-completion.entity';

@Injectable()
export class HabitCompletionsService {
  constructor(
    @InjectRepository(HabitCompletion)
    private habitCompletionRepository: Repository<HabitCompletion>,
  ) {}

  async create(createHabitCompletionDto: CreateHabitCompletionDto): Promise<HabitCompletion> {
    const habitCompletion = this.habitCompletionRepository.create(createHabitCompletionDto);
    return await this.habitCompletionRepository.save(habitCompletion);
  }

  async update(id: number, updateHabitCompletionDto: UpdateHabitCompletionDto): Promise<HabitCompletion> {
    const habitCompletion = await this.habitCompletionRepository.findOneBy({id});
    if (!habitCompletion) {
      throw new NotFoundException(`HabitCompletion with ID ${id} not found`);
    }
    const updatedHabitCompletion = Object.assign(habitCompletion, updateHabitCompletionDto);
    return await this.habitCompletionRepository.save(updatedHabitCompletion);
  }

  async findAll(): Promise<HabitCompletion[]> {
    return await this.habitCompletionRepository.find();
  }

  async findByHabit(habitId: number): Promise<HabitCompletion[]> {
    return await this.habitCompletionRepository.find({ where: { habit: { id: habitId } } });
  }

  async findByUser(userId: number): Promise<HabitCompletion[]> {
    return await this.habitCompletionRepository.find({ where: { user: { id: userId } } });
  }

  async remove(id: number): Promise<void> {
    await this.habitCompletionRepository.delete(id);
  }
}