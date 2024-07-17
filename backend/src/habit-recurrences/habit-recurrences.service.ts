import { Injectable } from '@nestjs/common';
import { CreateHabitRecurrenceDto } from './dto/create-habit-recurrence.dto';
import { UpdateHabitRecurrenceDto } from './dto/update-habit-recurrence.dto';

@Injectable()
export class HabitRecurrencesService {
  create(createHabitRecurrenceDto: CreateHabitRecurrenceDto) {
    return 'This action adds a new habitRecurrence';
  }

  findAll() {
    return `This action returns all habitRecurrences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitRecurrence`;
  }

  update(id: number, updateHabitRecurrenceDto: UpdateHabitRecurrenceDto) {
    return `This action updates a #${id} habitRecurrence`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitRecurrence`;
  }
}
