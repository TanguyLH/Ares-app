import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Habit } from './habit.entity';
import { User } from './user.entity';

@Entity()
export class HabitCompletion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Habit, habit => habit.completions)
  habit!: Habit;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  date!: Date;

  @Column({ default: true })
  completed!: boolean;
}