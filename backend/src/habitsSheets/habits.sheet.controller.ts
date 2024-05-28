import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitsSheetService } from './habits.sheet.service';
import { CreateHabitsSheetDto } from './dto/create-habits-sheet.dto';
import { UpdateHabitsSheetDto } from './dto/update-habits-sheet.dto';

@Controller('api/v1/habitssheet')
export class HabitsSheetController {
  constructor(private readonly habitsService: HabitsSheetService) {}

  @Post()
  create(@Body() createHabitsSheetDto: CreateHabitsSheetDto) {
    return this.habitsService.create(createHabitsSheetDto);
  }

  @Get()
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
