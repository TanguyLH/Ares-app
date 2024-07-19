import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Habit } from './habit.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Habit, habit => habit.authorId)
  habits!: Habit[];
}