import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

type __HabitsSheetEntity = {id: number, name: string};

@Entity()
export class HabitsSheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerName: string;

  /* 
  ** Don't mind it, its never called and merely serves
  ** to not have to use the post-fix expression
  */
  constructor({id, name}: __HabitsSheetEntity) {
    this.id = id;
    this.ownerName = name;
  }
}