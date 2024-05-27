import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HabitSheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}