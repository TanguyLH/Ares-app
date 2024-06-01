import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitsSheetService } from './habits.sheet.service';
import { CreateHabitsSheetDto } from './dto/create-habits-sheet.dto';
import { UpdateHabitsSheetDto } from './dto/update-habits-sheet.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HabitsSheet } from '@/entities/habits-sheet.entity';

@Controller('api/v1/habitssheet')
export class HabitsSheetController {
  constructor(private readonly habitsService: HabitsSheetService) {}

  /**
   * Creates a new HabitsSheet using the provided CreateHabitsSheetDto.
   *
   * @param {CreateHabitsSheetDto} createHabitsSheetDto - The data for creating the HabitsSheet.
   * @return {Promise<HabitsSheet | null>} A Promise that resolves to the created HabitsSheet, or null if creation failed.
   */
  @Post()
  @ApiOperation({ summary: 'Create a new habits sheet' })
  @ApiResponse({ status: 201, description: 'The habits sheet has been successfully created.', type: HabitsSheet })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createHabitsSheetDto: CreateHabitsSheetDto) {
    return this.habitsService.create(createHabitsSheetDto);
  }

  /**
   * Retrieves all habits sheets from the habits service.
   *
   * Retrieves all habits sheets from the habits service.
   *
   * @return {Promise<HabitsSheet[]>}
   * A promise that resolves to an array of HabitsSheet objects.
   * 
   * @example
   * GET /api/v1/habitssheet
   * 
   * [
   *   {
   *     "id": 1,
   *     "ownerName": "John Doe"
   *   },
   *   {
   *     "id": 2,
   *     "ownerName": "Jane Smith"
   *   }
   * ]
   */
  @Get()
  @ApiOperation({ summary: 'Get all habits sheets' })
  @ApiResponse({ status: 200, description: 'Return all habits sheets.', type: [HabitsSheet] })
  findAll() {
    return this.habitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitsSheetDto: UpdateHabitsSheetDto) {
    return this.habitsService.update(+id, updateHabitsSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitsService.remove(+id);
  }
}
