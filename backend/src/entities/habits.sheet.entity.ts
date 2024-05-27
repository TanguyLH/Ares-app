import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

type __HabitsSheetEntity = {id: number, name: string};

@Entity()
export class HabitsSheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerName: string;

  constructor({id, name}: __HabitsSheetEntity) {
    this.id = id;
    this.ownerName = name;
  }
}