import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { HabitCompletion } from './habit-completion.entity';
import { HabitRecurrence } from './habit-recurrence.entity';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  isDaily!: boolean;

  @ManyToOne(() => User, user => user.habits)
  author!: User;

  @OneToMany(() => HabitRecurrence, habitRecurrence => habitRecurrence.habit)
  recurrences!: HabitRecurrence[];

  @OneToMany(() => HabitCompletion, habitCompletion => habitCompletion.habit)
  completions!: HabitCompletion[];
}