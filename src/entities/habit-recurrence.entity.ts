import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Habit } from './habit.entity';


@Entity()
export class HabitRecurrence {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Habit, habit => habit.recurrences)
  habit!: Habit;

  @Column()
  date!: Date;
}