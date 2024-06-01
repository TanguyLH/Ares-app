import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Habit } from './habit.entity';

type __HabitsSheetEntity = {id: number, name: string};

@Entity()
export class HabitsSheet {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ownerName!: string;

  @OneToMany(() => Habit, habit => habit.habitsSheet)
  habits!: Habit[];
}