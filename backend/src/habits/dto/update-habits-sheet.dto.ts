import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitsSheetDto } from './create-habits-sheet.dto';

export class UpdateHabitsSheetDto extends PartialType(CreateHabitsSheetDto) {
}
