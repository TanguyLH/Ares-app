import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitCompletionsService } from './habit-completions.service';
import { CreateHabitCompletionDto } from './dto/create-habit-completion.dto';
import { UpdateHabitCompletionDto } from './dto/update-habit-completion.dto';

@Controller('habit-completions')
export class HabitCompletionsController {
  constructor(private readonly habitCompletionsService: HabitCompletionsService) {}

  @Post()
  create(@Body() createHabitCompletionDto: CreateHabitCompletionDto) {
    return this.habitCompletionsService.create(createHabitCompletionDto);
  }

  @Get()
  findAll() {
    return this.habitCompletionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
    // return this.habitCompletionsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitCompletionDto: UpdateHabitCompletionDto) {
    return this.habitCompletionsService.update(+id, updateHabitCompletionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitCompletionsService.remove(+id);
  }
}
