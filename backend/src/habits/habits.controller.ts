import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpException, HttpStatus, UseGuards, Request, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from '@/entities/habit.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/dto/jwt-payload-format.dto';

@ApiTags('Habit')
@Controller('api/v1/habit')
export class HabitsController {

  private readonly logger = new Logger(HabitsController.name);
  
  decodeToken(token: string) {
    const decoded = this.jwtService.decode(token) as JwtPayload;
    this.logger.debug("Decoded token: " + JSON.stringify(decoded));
    return decoded
  }

  constructor(
    private readonly habitsService: HabitsService,
    private readonly jwtService: JwtService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new habit' })
  @ApiResponse({ status: 201, description: 'The habit has been successfully created.', type: Habit })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: CreateHabitDto })
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.create(createHabitDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/all")
  @ApiOperation({ summary: 'Get all habits' })
  @ApiResponse({ status: 200, description: 'Return all habits.', type: [Habit] })
  @ApiResponse({ status: 401, description: 'Cannot retrieve habits from every user unless you are an administrator' })
  findAll(@Request() req: any) {
    if (req.user.role !== 'admin') {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return this.habitsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all habits' })
  @ApiResponse({ status: 200, description: 'Return all habits.', type: [Habit] })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  findAllFromUserId(@Request() req: any) {
    return this.habitsService.findAllFromUserId(req.user.userId);
  }
  

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a habit by ID' })
  @ApiResponse({ status: 200, description: 'Return the habit with the given ID.', type: Habit })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiParam({ name: 'id', description: 'ID of the habit', type: String })
  findOne(@Param('id') id: string) {
    return this.habitsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a habit by ID' })
  @ApiResponse({ status: 200, description: 'The habit has been successfully updated.', type: Habit })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiParam({ name: 'id', description: 'ID of the habit', type: String })
  @ApiBody({ type: UpdateHabitDto })
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    try {
      return this.habitsService.update(+id, updateHabitDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Habit not found');
      } else {
        throw new HttpException('an unknown error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a habit by ID' })
  @ApiResponse({ status: 200, description: 'The habit has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Habit not found' })
  @ApiParam({ name: 'id', description: 'ID of the habit', type: String })
  remove(@Param('id') id: string) {
    return this.habitsService.remove(+id);
  }
}