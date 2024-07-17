import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitRecurrencesService } from './habit-recurrences.service';
import { CreateHabitRecurrenceDto } from './dto/create-habit-recurrence.dto';
import { UpdateHabitRecurrenceDto } from './dto/update-habit-recurrence.dto';

@Controller('habit-recurrences')
export class HabitRecurrencesController {
  constructor(private readonly habitRecurrencesService: HabitRecurrencesService) {}

  @Post()
  create(@Body() createHabitRecurrenceDto: CreateHabitRecurrenceDto) {
    return this.habitRecurrencesService.create(createHabitRecurrenceDto);
  }

  @Get()
  findAll() {
    return this.habitRecurrencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitRecurrencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitRecurrenceDto: UpdateHabitRecurrenceDto) {
    return this.habitRecurrencesService.update(+id, updateHabitRecurrenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitRecurrencesService.remove(+id);
  }
}
