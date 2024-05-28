import { ApiProperty } from "@nestjs/swagger";

export class CreateHabitsSheetDto {
	@ApiProperty({
		description: 'The name of the owner of the habits sheet',
		example: 'John Doe',
		type: String,
		required: true
	})
	ownerName!: string
}
