import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habit } from '../entities/habit.entity';
import { User } from '@/entities/user.entity';
import { HabitCompletion } from '@/entities/habit-completion.entity';
import { HabitCompletionsService } from 'src/habit-completions/habit-completions.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private readonly habitRepository: Repository<Habit>,
    private userService: UsersService,
    private habitCompletionService: HabitCompletionsService,
  ) {}

  async create(createHabitDto: CreateHabitDto): Promise<Habit> {
    
    // Creating default Habit entity and setting the fields properly
    const habit = new Habit();
    if (!createHabitDto.name || !createHabitDto.description) {
      throw new BadRequestException('Name and description are required');
    }
    habit.name = createHabitDto.name;
    habit.description = createHabitDto.description;

    // Retrieving and applying the user id as the habit author
    const author = await this.userService.findOne(createHabitDto.authorId);
    if (!author) {
      throw new NotFoundException('Author with ID ${createHabitDto.authorId} not found');
    }
    habit.author = author; 

    // Setting the habit recurrences and stuff
    habit.isDaily = createHabitDto.isDaily;
    habit.recurrences = [];
    if (createHabitDto.weekDays) {
      habit.recurrences = createHabitDto.weekDays;
    } else if (!createHabitDto.isDaily) {
      throw new BadRequestException('weekDays are required for non-daily habits');
    }
    
    // Creating an habit completion for this habit for the current date
    const completion = this.habitCompletionService.create(
      {
        habitId: habit.id,
        date: new Date(),
        completed : false,
        userId: author.id,
      }
    );
    if (!completion) {
      throw new BadRequestException('Failed to create habitCompletion');
    }

    // Saving the habit to the database
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
    if (updateHabitDto.name) {
      habit.name = updateHabitDto.name;
    }
    if (updateHabitDto.description) {
      habit.description = updateHabitDto.description;
    }
    const updatedHabit = this.habitRepository.save(habit);
    return updatedHabit;
  }

  async remove(id: number): Promise<void> {
    const result =await this.habitRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Habit with ID ${id} not found');
    }
  }
}