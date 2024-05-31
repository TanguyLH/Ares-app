import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { HabitsSheet } from './habits-sheet.entity';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @ManyToOne(() => HabitsSheet, habitsSheet => habitsSheet.habits)
  habitsSheet!: HabitsSheet;

  @ManyToOne(() => User, user => user.habits)
  authorId!: User;
}