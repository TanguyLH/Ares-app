import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

@ApiTags('Habit')
@Controller('api/v1/habit')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new habit' })
  @ApiResponse({ status: 201, description: 'The habit has been successfully created.', type: Habit })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: CreateHabitDto })
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.create(createHabitDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all habits' })
  @ApiResponse({ status: 200, description: 'Return all habits.', type: [Habit] })
  findAll() {
    return this.habitsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a habit by ID' })
  @ApiResponse({ status: 200, description: 'Return the habit with the given ID.', type: Habit })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiParam({ name: 'id', description: 'ID of the habit', type: String })
  findOne(@Param('id') id: string) {
    return this.habitsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a habit by ID' })
  @ApiResponse({ status: 200, description: 'The habit has been successfully updated.', type: Habit })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiParam({ name: 'id', description: 'ID of the habit', type: String })
  @ApiBody({ type: UpdateHabitDto })
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a habit by ID' })
  @ApiResponse({ status: 200, description: 'The habit has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiParam({ name: 'id', description: 'ID of the habit', type: String })
  remove(@Param('id') id: string) {
    return this.habitsService.remove(+id);
  }
}