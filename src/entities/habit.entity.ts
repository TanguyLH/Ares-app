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

  @Column("int", { array: true, default : []})
  recurrences!: number[];

  @OneToMany(() => HabitCompletion, habitCompletion => habitCompletion.habit)
  completions!: HabitCompletion[];
}